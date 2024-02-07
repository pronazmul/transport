import { readdirSync, unlinkSync, unlink } from 'fs'
import path from 'path'
import multer from 'multer'
import createError from 'http-errors'
import config from './../config/index.js'
import GlobalConst from '../consts/global.const.js'

// Initialize Module
const FilesUtils = {}

/**
 * Remove All Files
 * @param {String} dirName - Located Directory
 * @returns {null}
 */
FilesUtils.removeAll = (dirName) => {
  let directory = path.join(config.static_folder_path, dirName)
  let files = readdirSync(directory)

  if (!files.length) return 0
  files.forEach((file) => unlinkSync(`${directory}/${file}`))
  return files.length
}

/**
 * Remove Single File
 * @param {String} dirName - Located Directory
 * @param {String} fileName- FileName
 * @returns {null}
 */
FilesUtils.removeOne = async (dirName, fileName) => {
  try {
    // Check if the file name contains Server url (select only image name)
    fileName = /(http|https)/i.test(fileName)
      ? fileName.split('/').pop()
      : fileName

    let removedPath = path.join(config.static_folder_path, dirName, fileName)
    unlink(removedPath, (error) => {
      if (error) {
      }
    })
    return true
  } catch (error) {
    return false
  }
}

/**
 * Remove All Request Fles
 * @param {Array[]} Req.Files - The directory for storing uploaded files.
 * @returns {null}
 */
FilesUtils.removeReqFiles = (reqFiles) => {
  reqFiles.forEach((file) => {
    unlink(file.path, (err) => {
      if (err) {
        console.error(`Error deleting file ${file.path}: ${err}`)
      }
    })
  })
}

/**
 * Creates a multer upload object with the specified settings.
 * @param {string} dirName - The directory for storing uploaded files.
 * @param {string[]} allowedFileFormat - An array of allowed file formats (mimetypes).
 * @param {number} maxFileSize - The maximum file size (in bytes) for uploaded files.
 * @param {string} errorMessage - The error message to use when an unsupported file format is uploaded.
 * @returns {Object} A multer upload object with the specified settings.
 */

FilesUtils.multerConfig = (
  allowedMimetypes,
  dirName,
  filesize,
  errorMessage = 'Unsupported File Format'
) => {
  let uplaodPath = path.join(config.static_folder_path, dirName)
  const storage = multer.diskStorage({
    destination: (req, file, cb) => cb(null, uplaodPath),
    filename: (req, file, cb) => {
      let ext = path.extname(file.originalname)
      let fileName =
        file.originalname.replace(ext, '').split(' ').join('_') +
        '_' +
        Date.now() +
        ext
      cb(null, fileName)
    },
  })

  const upload = multer({
    storage: storage,
    limits: { fileSize: filesize },
    fileFilter: (req, file, cb) => {
      if (allowedMimetypes.includes(file.mimetype)) {
        cb(null, true)
      } else {
        cb(createError(500, errorMessage))
      }
    },
  })
  return upload
}

/**
 * Returns an array of file mimetypes based on the specified array of filetypes.
 *
 * @param {Array<'image' | 'video' | 'pdf' | 'gif' | 'xlsx' | 'doc'>} filetype - Allowed file types to be uploaded
 * @returns {string[]} An array of file mimetypes based on the specified filetypes.
 * @throws {Error} If an invalid filetype is specified.
 */
FilesUtils.allowedMimetypes = (fileTypes) => {
  const { supportedMimetypes } = GlobalConst

  let mimetypes = []
  fileTypes.forEach((type) => {
    if (type in supportedMimetypes) {
      mimetypes = [...mimetypes, ...supportedMimetypes[type]]
    }
  })

  return mimetypes
}

/**
 * Get File MimeType
 * @param {String} fileName - FileName Wth Etension
 * @returns {String} Mimetype
 */
FilesUtils.getMimeType = (fileName) => {
  const fileExtension = path.extname(fileName).toLowerCase()
  switch (fileExtension) {
    case '.pdf':
      return 'application/pdf'
    case '.jpg':
      return 'image/jpeg'
    case '.jpeg':
      return 'image/jpeg'
    case '.png':
      return 'image/png'
    case '.doc':
      return 'application/msword'
    default:
      return 'application/octet-stream'
  }
}

export default FilesUtils
