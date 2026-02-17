// Shopping Cart and Product Functionality

class Product {
    constructor(id, name, price) {
        this.id = id;
        this.name = name;
        this.price = price;
    }
}

class ShoppingCart {
    constructor() {
        this.items = [];
    }

    addItem(product) {
        this.items.push(product);
    }

    removeItem(productId) {
        this.items = this.items.filter(item => item.id !== productId);
    }

    calculateTotal() {
        return this.items.reduce((total, item) => total + item.price, 0);
    }
}

// Example usage:
const cart = new ShoppingCart();
const product1 = new Product(1, 'Product 1', 29.99);
const product2 = new Product(2, 'Product 2', 49.99);

cart.addItem(product1);
cart.addItem(product2);
console.log(`Total: $${cart.calculateTotal()}`); // Total: $79.98