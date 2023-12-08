// Required Packeges
import { sequelize } from '../config/db.js'
import { Sequelize, DataTypes } from 'sequelize'
import UserModel from './User.model.js'

export const VehicleModel = sequelize.define('Vehicle', {
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  company: { type: DataTypes.STRING },
  model: { type: DataTypes.STRING },
  year: { type: DataTypes.STRING },
  color: { type: DataTypes.STRING },
})

VehicleModel.belongsTo(UserModel, { foreignKey: 'roleId' })

sequelize
  .sync()
  .then()
  .catch((err) => {
    console.error('Error syncing User table:', err)
  })

// Export User Model
export default VehicleModel
