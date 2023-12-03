import { config } from 'dotenv'
import { join } from 'path'

config({ path: join(process.cwd(), '.env') })

export default {
  name: process.env.NAME,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  allowed_origin: process.env.ALLOWED_ORIGIN,
  database_url: process.env.DATABASE_URL,

  access_token: process.env.ACCESS_TOKEN,
  refresh_token: process.env.REFRESH_TOKEN,
  jwt_expire_time: process.env.JWT_EXPIRE_TIME,
  jwt_secret: process.env.JWT_SECRET,

  __dirname: process.cwd(),
  static_folder_path: join(process.cwd(), process.env.STATIC_FOLDER_PATH),
  user_directory: process.env.USER_DIRECTORY,
  default_upload_size: process.env.DEFAULT_UPLOAD_SIZE,

  aws_s3_file_path: process.env.AWS_S3_FILE_PATH,
  aws_s3_bucket: process.env.AWS_S3_BUCKET,
  aws_s3_key: process.env.AWS_S3_KEY,
  aws_s3_secret: process.env.AWS_S3_SECRET,
  aws_s3_region: process.env.AWS_S3_REGION,

  mail_host: process.env.MAIL_HOST,
  mail_port: process.env.MAIL_PORT,
  mail_user: process.env.MAIL_USER,
  mail_pass: process.env.MAIL_PASS,

  //Generate in Runtime
  server_url: '',
}
