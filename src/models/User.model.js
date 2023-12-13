import { sequelize } from '../config/db.js'
import { Sequelize, DataTypes } from 'sequelize'
import { RoleModel } from './Role.model.js'

// Define the User model using Sequelize
export const UserModel = sequelize.define('User', {
  roleId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  photo: {
    type: DataTypes.STRING,
  },
  brith: {
    type: DataTypes.DATE,
  },
})

UserModel.belongsTo(RoleModel, { foreignKey: 'roleId' })

sequelize
  .sync()
  .then()
  .catch((err) => {
    console.error('Error syncing User table:', err)
  })

export default UserModel
