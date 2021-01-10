export const initialState = {
    cart:[],
    save:[],
};
export const getTotal =(cart) =>
    cart?.reduce((price,item)=>item.price * item.quantity + price, 0);

export const getQuant = (cart) =>
    cart?.reduce((quantity,item)=>item.quantity+quantity,0);

function reducer(state,action){
    console.log(action)
    switch(action.type){

        case 'ADD_TO_CART':
            let newCart1 = state.cart;
            const index = state.cart.findIndex((cart)=> cart.id === action.item.id);
            if(index >= 0 ){
                newCart1.splice(index,1,{
                    id:action.item.id,
                    imageUrl:action.item.imageUrl,
                    name:action.item.name,
                    price:action.item.price,
                    quantity:state.cart[index].quantity+action.item.quantity
                })
            }
            else{
                return {
                    ...state,
                    cart:[...state.cart,action.item],
                } 
            }
            return {
                ...state,
            };
            
        case 'REMOVE_FROM_CART':
            let newCart = state.cart;
            const index1 = state.cart.findIndex((cart)=> cart.id === action.item.id);
            
            if(index1 >= 0){
                if(state.cart[index1].quantity < 2){
                    newCart.splice(index1,1);
                }
                else{
                    newCart.splice(index1,1,{
                        id:action.item.id,
                        imageUrl:action.item.imageUrl,
                        name:action.item.name,
                        price:action.item.price,
                        quantity:state.cart[index1].quantity-action.item.quantity
                    })
                }
                
            }else{
                console.warn(`cant remove:${action.id}`);
            }
            return {
                ...state
            };

        case "CLEAR_FROM_CART":
            let newCart2 = state.cart;
            const index2 = state.cart.findIndex((cart)=> cart.id === action.id); 
            if(index2>=0){
                newCart2.splice(index2,1);
            }
            else{
                console.log(`cant remove:${action.id}`);
            }
            return{
                ...state
            };
        
        case 'ADD_TO_SAVE':
            return{
                ...state,
                save:[...state.save,action.item]
            }
           
        default:
            return{
                ...state
            }   
    }
}
export default reducer;









