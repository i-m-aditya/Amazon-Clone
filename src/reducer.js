import { act } from "react-dom/test-utils";

export const initialState = {
    basket: [{
        id: "123456",
        title: "Apple iPad Pro (11-inch, Wi-Fi, 64GB) - Space Grey (1st)",
        image: "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-cell-spacegray-202003_FMT_WHH?wid=940&hei=1112&fmt=png-alpha&qlt=80&.v=1583553672276",
        price: 50,
        rating: 3,
        quantity: 1
    }],
    user: null ,
}

function reducer(state, action){

    console.log("Action >>> ", action);
    

    switch(action.type){
        case 'ADD_TO_BASKET':
            //LOGIC FOR ADDING ITEM TO BASKET
            console.log("adding to basket")
            const basketItem = state.basket.find(item => (item.id === action.item.id))
            if(basketItem){
                // console.log("oldBasketItem >>> ", basketItem);
                const newBasketList = state.basket.filter(item => (item.id !== action.item.id))
                basketItem.quantity = basketItem.quantity + 1
                return {
                    ...state,
                    basket: [
                        ...newBasketList,
                        basketItem
                    ]
                }

            }
            else {
                const newBasket = {
                    ...action.item,
                    quantity: 1
                }
                console.log("New Basket >>> ", newBasket);
                return {
                    ...state,
                    basket: [...state.basket, newBasket]
                };

            }
        case 'REMOVE_FROM_BASKET':
            const newBasket = state.basket.filter((item) => (
                item.title !== action.item.title
            ))
            return {
                ...state,
                basket: newBasket
            }
        
        case 'UPDATE_USER':
            console.log("bhidu user update kar rhe hain");
            return {
                ...state,
                user: action.item.user
            }
        
        default:
            return {state};
    }
}

export default reducer;