import CreateItem from "./services/itens.js";
import * as cartService from "./services/cart.js"

const myCart = []
const myWhishList = []

console.log('Welcome to the your shopee cart!')

const item1 = await CreateItem("hotwheels ferrari", 20.99, 1)
const item2 = await CreateItem("hotwheels lamborguine", 39.99, 3)

cartService.addItem(myCart, item1)
cartService.addItem(myCart, item2)

cartService.removeItem(myCart, item2)

cartService.displayCart(myCart)

console.log("Shopee cart TOTAL is")
await cartService.calculeTotal(myCart)