// quais ações meu carrinho pode fazer

async function addItem(UserCart, item) {
    UserCart.push(item)
}

async function calculeTotal(UserCart) {
    const result = UserCart.reduce((total, item)=> total + item.subtotal(), 0)
    console.log(`\n🛍️  Total: ${result}`)
}

async function removeItem(UserCart, item) {
    const indexFound = UserCart.findIndex((p) => p.name === item.name)
    console.log(`index encontrado: `)
    console.log(indexFound)

    if(indexFound == -1) {
        console.log(`item não encontrado`)
        return
    }

    if(UserCart[indexFound].quantity > 1) {
        UserCart[indexFound].quantity -= 1
        return
    }

    if(UserCart[indexFound].quantity == 1) {
        UserCart.splice(indexFound, 1)
        return
    }
}

async function deleteItem(UserCart, name) {
    const index = UserCart.findIndex((item) => item.name === name)

    if(index !== -1) {
        UserCart.splice(index, 1)
    }
}

async function displayCart(UserCart) {
    console.log(`Shopee cart list: `)
    UserCart.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name} - R$ ${item.price} | ${item.quantity}x | subtotal ${item.subtotal()} `)
    });
}

export {
    addItem,
    deleteItem,
    calculeTotal,
    removeItem,
    displayCart
}