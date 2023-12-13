// Required Packeges
import { sequelize } from '../config/db.js'
import { Sequelize, DataTypes } from 'sequelize'

export const RoleModel = sequelize.define('Role', {
  name: { type: DataTypes.STRING },
  description: { type: DataTypes.STRING },
})

// Export User Model
export default RoleModel
