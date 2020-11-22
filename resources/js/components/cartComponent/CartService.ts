class CartService {
    getMyCart() {
        const cart = localStorage.myCart;

        if (!cart) {
            return null;
        }

        return JSON.parse(cart);
    }

    addToCart(product) {
        let myCart = this.getMyCart();

        if (myCart) {
            myCart.push(product);
            localStorage.setItem("myCart", JSON.stringify(myCart));
        } else {
            let newCart = [];
            newCart.push(product);
            localStorage.setItem("myCart", JSON.stringify(newCart));
        }
    }

    removeProductFromCart(product) {
        let myCart = this.getMyCart();
        myCart.splice(myCart.indexOf(product), 1);
        localStorage.setItem("myCart", JSON.stringify(myCart));
    }

    removeCart() {
        localStorage.removeItem("myCart");
    }
}

export default new CartService();
