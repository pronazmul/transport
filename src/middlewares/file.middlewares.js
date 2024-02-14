// Required Modules:
import createError from 'http-errors'
import FilesUtils from '../utils/files.utils.js'
import config from '../config/index.js'

// File Utilities Methods
const { allowedMimetypes, removeOne } = FilesUtils

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
      await uploadObject.array(fieldName, maxCount)(req, res, (error) => {
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
 * @desc Middleware function that uploads multipart-form data if input data is valid calls the next middleware or throws an error.
 * @param {Array<'image' | 'video' | 'pdf' | 'gif' | 'xlsx' | 'doc'>} filetype - Allowed file types to be uploaded
 * @param {string} dirName - Name of folder to be uploaded.
 * @param {Array<[ { name: 'avatar', maxCount: 1 }]>} fieldName - Input Field Names
 * @param {number} maxCount - Max number of files to be uploaded.
 * @param {number} filesize - size of file to be uploaded, Default 100 mb
 * @param {Function} next - The next middleware function in the chain.
 * @throws {Error} Throws an error if the request is not successful.
 */

FileMiddleware.localUploadMultipleFields =
  (filetypes, dirName, fields, filesize = config.default_upload_size) =>
  async (req, res, next) => {
    try {
      let uploadObject = FilesUtils.multerConfig(
        allowedMimetypes(filetypes),
        dirName,
        filesize
      )
      await uploadObject.fields(fields)(req, res, (error) => {
        if (error) {
          console.log({ errorx: error, body: req.body })
          next(createError(500, error.message))
        } else {
          next()
        }
      })
    } catch (error) {
      next(createError(500, error.message))
    }
  }

export default FileMiddleware
