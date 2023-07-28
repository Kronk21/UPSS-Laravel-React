import { createContext } from "react";

export const CartContext = createContext({
    items: [],
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    updateItemQuantity: () => {},
    getItemTotalPrice: () => {},
    getTotalPrice: () => {},
});

const CartContextProvider = function ({ children }) {
    const contextValue = {
        items: [],
        addItemToCart: () => {},
        removeItemFromCart: () => {},
        updateItemQuantity: () => {},
        getItemTotal: () => {},
        getTotal: () => {},
    };

    return (
        <CartContext.Provider value={contextValue}>
            {children}
        </CartContext.Provider>
    );
};

export default CartContextProvider;
