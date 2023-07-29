import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    productInCart: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    updateItemQuantity: () => {},
    getTotalPrice: () => {},
    getNumberOfItemsInCart: () => {},
});

const CartContextProvider = function ({ children }) {
    const [cartProducts, setCartProducts] = useState(
        JSON.parse(localStorage.getItem("CART_ITEMS"))
            ? JSON.parse(localStorage.getItem("CART_ITEMS"))
            : []
    );

    const storeCartProducts = function (products) {
        localStorage.setItem("CART_ITEMS", JSON.stringify(products));
    };

    const productInCart = function (id) {
        for (let i = 0; i < cartProducts.length; i++) {
            if (cartProducts[i].id == id) {
                return true;
            }
        }

        return false;
    };

    const addItemToCart = function (product) {
        setCartProducts((prev) => {
            storeCartProducts([...prev, { ...product, quantity: 1 }]);
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeItemFromCart = function (id) {
        const updatedItems = cartProducts.filter((item) => item.id !== id);

        storeCartProducts(updatedItems);
        setCartProducts(updatedItems);
    };

    const updateItemQuantity = function (productId, quantity) {
        const products = cartProducts.map((product) =>
            product.id === productId
                ? { ...product, quantity: quantity }
                : product
        );

        setCartProducts(products);
    };

    const getTotalPrice = function () {
        let totalPrice = 0;

        cartProducts.forEach(
            (product) => (totalPrice += product.price * product.quantity)
        );

        return totalPrice;
    };

    const getNumberOfItemsInCart = function () {
        return cartProducts.length;
    };

    const contextValue = {
        items: cartProducts,
        productInCart: productInCart,
        addItemToCart: addItemToCart,
        removeItemFromCart: removeItemFromCart,
        updateItemQuantity: updateItemQuantity,
        getTotalPrice: getTotalPrice,
        getNumberOfItemsInCart: getNumberOfItemsInCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
