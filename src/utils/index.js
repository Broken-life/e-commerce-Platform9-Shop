//esta funcion calcula el total de la orden
//@param {Array} products. cartProducts: array of objects
//@return {Number} total price

export const totalPrice = (products) => {
    return products.reduce((sum, product) => sum + product.price, 0)
} 