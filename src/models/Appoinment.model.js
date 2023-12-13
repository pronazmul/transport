// Required Packeges
import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'
import UserModel from './User.model.js'
import VehicleModel from './Vehicle.model.js'

export const AppoinmentModel = sequelize.define('Appoinment', {
  userId: { type: DataTypes.INTEGER },
  vehicleId: { type: DataTypes.INTEGER },
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
  rentAmount: { type: DataTypes.FLOAT },
  paid: { type: DataTypes.BOOLEAN, defaultValue: false },
  startTime: { type: DataTypes.DATE },
  endTime: { type: DataTypes.DATE },
})

AppoinmentModel.belongsTo(UserModel, { foreignKey: 'userId' })
AppoinmentModel.belongsTo(VehicleModel, { foreignKey: 'vehicleId' })

sequelize
  .sync()
  .then()
  .catch((err) => {
    console.error('Error syncing User table:', err)
  })

// Export User Model
export default AppoinmentModel
