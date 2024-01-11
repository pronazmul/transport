// Required Modules:
import createError from 'http-errors'
import sharp from 'sharp'
import path from 'path'
import FilesUtils from '../utils/files.utils.js'
import GlobalConst from '../consts/global.const.js'
import config from '../config/index.js'

// File Utilities Methods
const { allowedMimetypes, removeOne } = FilesUtils
const { convertToWebpMimetype } = GlobalConst

// Initialize Modules
const FileMiddleware = {}

/**
 * @desc Middleware function that uploads multipart-form data if input data is valid calls the next middleware or throws an error.
 * @param {Array<'image' | 'video' | 'pdf' | 'gif' | 'xlsx' | 'doc'>} filetype - Allowed file types to be uploaded
 * @param {string} dirName - Name of folder to be uploaded.
 * @param {string} fieldName - Name of input field.
 * @param {number} maxCount - Max number of files to be uploaded.
 * @param {number} filesize - size of file to be uploaded, Default 100 mb
 * @param {Function} next - The next middleware function in the chain.
 * @throws {Error} Throws an error if the request is not successful.
 */

FileMiddleware.localUpload =
  (
    filetype,
    dirName,
    fieldName,
    maxCount = 1,
    filesize = config.default_upload_size
  ) =>
  async (req, res, next) => {
    try {
      let uploadObject = FilesUtils.multerConfig(
        allowedMimetypes(filetype),
        dirName,
        filesize
      )
      // await uploadObject.array(fieldName, maxCount)
      await uploadObject.any()(req, res, (error) => {
        if (error) {
          next(createError(500, error.message))
        } else {
          next()
        }
      })
    } catch (error) {
      next(createError(500, error.message))
    }
  }

/**
 * @desc Middleware function that uploads multipart-form to AWS s3
 * @param {Array<'image' | 'video' | 'pdf' | 'gif' | 'xlsx' | 'doc'>} filetype - Allowed file types to be uploaded
 * @param {string} dirName - Name of folder to be uploaded.
 * @param {string} fieldName - Name of input field.
 * @param {number} maxCount - Max number of files to be uploaded.
 * @param {number} filesize - size of file to be uploaded, Default 100 mb
 * @throws {Error} Throws an error if the request is not successful.
 */

// FileMiddleware.s3Upload = (
//   filetype,
//   dirName,
//   fieldName,
//   maxCount = 1,
//   filesize = config.default_upload_size
// ) => {
//   try {
//     const upload = FilesUtils.s3MulterConfig(
//       allowedMimetypes(filetype),
//       dirName,
//       filesize
//     )
//     return upload.array(fieldName, maxCount)
//   } catch (error) {
//     throw 'Failed to upload File'
//   }
// }

FileMiddleware.s3Upload =
  (
    filetype,
    dirName,
    fieldName,
    maxCount = 1,
    filesize = config.default_upload_size
  ) =>
  async (req, res, next) => {
    try {
      let uploadObject = FilesUtils.s3MulterConfig(
        allowedMimetypes(filetype),
        dirName,
        filesize
      )
      // await uploadObject.array(fieldName, maxCount)
      await uploadObject.any()(req, res, (error) => {
        if (error) {
          console.log({ error })
        } else {
          next()
        }
      })
    } catch (error) {
      console.log({ error })
      next(createError(500, error.message))
    }
  }

/**
 * @desc Middleware function that converts req.files image to webp
 * @param {string} dirName - Name of the located Folder
 * @throws {Error} Throws an error if the request is not successful.
 */

FileMiddleware.convertToWebp = (dirName) => (req, res, next) => {
  if (!req.files) {
    return next()
  }
  try {
    req?.files?.forEach((file) => {
      if (convertToWebpMimetype.includes(file?.mimetype)) {
        let { filename } = file

        let input = path.join(config.static_folder_path, dirName, filename)
        let output = path.join(
          config.static_folder_path,
          dirName,
          filename.replace(path.extname(filename), '.webp')
        )

        sharp(input).toFile(output, (err, info) => {
          if (err === null) {
            removeOne(dirName, filename)
          } else {
            removeOne(dirName, filename)
            return next(createError(500, 'Failed To convert to webp'))
          }
        })
      }
    })

    req.files = req?.files?.map((file) => {
      if (convertToWebpMimetype.includes(file?.mimetype)) {
        return {
          ...file,
          filename: file.filename.replace(path.extname(file.filename), '.webp'),
          path: file.path.replace(path.extname(file.path), '.webp'),
        }
      } else {
        return { ...file }
      }
    })
    return next()
  } catch (error) {
    return next(createError(500, error.message))
  }
}

export default FileMiddleware
