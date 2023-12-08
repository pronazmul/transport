// Required Packeges
import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'
import { VehicleModel } from './Vehicle.model.js'
import { UserModel } from './User.model.js'

export const ReviewModel = sequelize.define('Review', {
  userId: { type: DataTypes.INTEGER },
  vehicleId: { type: DataTypes.INTEGER },
  rating: { type: DataTypes.FLOAT },
  message: { type: DataTypes.STRING },
})

ReviewModel.belongsTo(UserModel, { foreignKey: 'userId' })
ReviewModel.belongsTo(VehicleModel, { foreignKey: 'vehicleId' })

sequelize
  .sync()
  .then()
  .catch((err) => {
    console.error('Error syncing User table:', err)
  })

// Export User Model
export default ReviewModel
