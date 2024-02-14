import { Dropzone, FileItem } from '@dropzone-ui/react'
import React from 'react'
import { toast } from 'react-hot-toast'
import { drugAndDropConfig } from '../../utils/data'

const DrugAndDropUpload = ({ fileName, files, setFiles, maxFiles }) => {
  return (
    <Dropzone
      style={{ background: 'transparent' }}
      minHeight='200px'
      maxFiles={maxFiles}
      maxFileSize={drugAndDropConfig.maxFileSize}
      value={files}
      header={true}
      view='list'
      accept={drugAndDropConfig.accept}
      onDrop={(acceptedFiles) => {
        // Check Error
        if (acceptedFiles[0]?.errors.length) {
          toast.error(acceptedFiles[0].errors[0])
        }

        if (acceptedFiles.length === 0 && files.length === maxFiles) return

        const filteredFiles = acceptedFiles.filter((item) => item.valid)
        setFiles(fileName, [...files, ...filteredFiles])
      }}
    >
      {files.map((file, index) => (
        <span key={index}>
          <FileItem
            {...file}
            onDelete={(id) =>
              setFiles(
                fileName,
                files.filter((x) => x.id !== id)
              )
            }
            preview
            info
          />
        </span>
      ))}

      {!files.length && <span>{drugAndDropConfig.title}</span>}
    </Dropzone>
  )
}

export default DrugAndDropUpload

// export const drugAndDropConfig = {
//   title: 'Drop files here or Click to browse',
//   accept: 'image/png, image/jpg, image/jpeg',
//   maxFileSize: 2048000,
// }
