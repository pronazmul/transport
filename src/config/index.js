import { config } from 'dotenv'
import { join } from 'path'

config({ path: join(process.cwd(), '.env') })

export default {
  name: process.env.NAME,
  env: process.env.NODE_ENV,
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,

  jwt_expire_time: process.env.JWT_EXPIRE_TIME,
  jwt_secret: process.env.JWT_SECRET,

  __dirname: process.cwd(),
  static_folder_path: join(process.cwd(), process.env.STATIC_FOLDER_PATH),
  user_directory: process.env.USER_DIRECTORY,
  default_upload_size: process.env.DEFAULT_UPLOAD_SIZE,

  four_square_api_key: process.env.FOUR_SQUARE_API_KEY,
  four_square_api_secret: process.env.FOUR_SQUARE_API_SECRET,

  //Generate in Runtime
  server_url: '',
  auth: {},
}
