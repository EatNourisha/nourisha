import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware"

const cartStore = create(persist((set) => ({
  cart: [],
  itemCount: 0,
  

  addToCart: (itemData) =>
    set((state) => {
      console.log("Adding to cart", itemData)
      console.log('brrr')
      const existingItem = state.cart.find(item => item.itemId === itemData.itemId )

      console.log(existingItem, 'existing Data')
      
      if(existingItem) {
        return {
            cart: state.cart.map(item => {
                if(item.itemId === itemData.itemId){
                    return {...item, quantity: item.quantity + 1}
                }
                return item
            })
        }
      }else {
        return {
            cart: [...state.cart, itemData],
            // itemCount: state.itemCount + 1
        }
      }
    }),

    removeFromCart: (itemData) => set((state) => {
      console.log("Removing from cart:", itemData); // Log item being removed
      return {
        cart: state.cart.filter((item) => item.itemId !== itemData.itemId),
      };
    }),

  increaseQuantity: (itemData) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.itemId === itemData.itemId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    })),

  decreaseQuantity: (itemData) =>
    set((state) => ({
      cart: state.cart.map((item) =>
        item.itemId === itemData.itemId
          ? { ...item, quantity: item.quantity < 1 ? item.quantity : item.quantity - 1 }
          : item
      )
    })),

    setTotalItemCount: (number) =>{
      set(() => ({
        itemCount: number
      }))
    }

}),

{
    name: 'cart-storage',
    storage: createJSONStorage(() => sessionStorage)
}

));

export default cartStore;
