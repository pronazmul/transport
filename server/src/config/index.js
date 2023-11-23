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

  //Generate in Runtime
  server_url: '',
}
