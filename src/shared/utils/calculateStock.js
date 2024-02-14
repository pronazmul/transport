/**
 * @description - Calculate Product in stock, limited and out Of Stock
 * @param {Number}  Quantity
 * @returns {Object}  {title:"In Stock", color:"success"}
 */
export const getStockStatus = (quantity) => {
  if (quantity <= 0) {
    return { color: 'error', title: 'Out Of Stock' }
  }

  if (quantity <= 10) {
    return { color: 'warning', title: 'Limited' }
  }

  if (quantity > 10) {
    return { color: 'success', title: 'In Stock' }
  }
}
