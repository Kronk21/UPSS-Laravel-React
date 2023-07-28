import { createContext, useState } from "react";

export const CartContext = createContext({
    items: [],
    productInCart: () => {},
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    updateItemQuantity: () => {},
    getItemTotalPrice: () => {},
    getTotalPrice: () => {},
    getNumberOfItemsInCart: () => {},
});

const CartContextProvider = function ({ children }) {
    const [cartProducts, setCartProducts] = useState([]);

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
            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const removeItemFromCart = function (id) {
        const updatedItems = cartProducts.filter((item) => item.id !== id);
        setCartProducts(updatedItems);
    };

    const getNumberOfItemsInCart = function () {
        return cartProducts.length;
    };

    const contextValue = {
        items: cartProducts,
        productInCart: productInCart,
        addItemToCart: addItemToCart,
        removeItemFromCart: removeItemFromCart,
        updateItemQuantity: () => {},
        getItemTotalPrice: () => {},
        getTotalPrice: () => {},
        getNumberOfItemsInCart: getNumberOfItemsInCart,
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
