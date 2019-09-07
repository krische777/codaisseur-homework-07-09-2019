class ShoppingCart {
    constructor(name) {
        this.name = name
        this.items = []
    }
    getItems() {
        return this.items
    }
    addItem(itemName, quantity, price) {
        let item = {};
        item.name = itemName;
        item.quantity = quantity;
        item.pricePerUnit = price;
        this.items.push(item)

    }
    clear() {
        this.items = []
    }
    total() {
        return this.items.reduce((sum, value) => {
            return sum + value.pricePerUnit * value.quantity
        }, 0)
    }
}



module.exports = ShoppingCart