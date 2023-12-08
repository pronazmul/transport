// Required Packeges
import { sequelize } from '../config/db.js'
import { DataTypes } from 'sequelize'
import AppoinmentModel from './Appoinment.model.js'

export const PaymentModel = sequelize.define('Payment', {
  appoinmentId: { type: DataTypes.INTEGER },
  amount: { type: DataTypes.FLOAT },
  paymentMethod: { type: DataTypes.STRING },
})

PaymentModel.belongsTo(AppoinmentModel, { foreignKey: 'appoinmentId' })

sequelize
  .sync()
  .then()
  .catch((err) => {
    console.error('Error syncing User table:', err)
  })

// Export User Model
export default PaymentModel
