import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    updateItemQuantity: () => {},
    getItemTotalPrice: () => {},
    getTotalPrice: () => {},
    getNumberOfItemsInCart: () => {},
});

const CartContextProvider = function ({ children }) {
    const contextValue = {
        items: [],
        addItemToCart: () => {},
        removeItemFromCart: () => {},
        updateItemQuantity: () => {},
        getItemTotalPrice: () => {},
        getTotalPrice: () => {},
        getNumberOfItemsInCart: () => {},
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
