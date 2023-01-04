
import {ADD_TO_CART, REMOVE_TO_CART} from './constant';

export const cartData = (data=[],action) =>{
// console.warn(action);
// if(action.type==="ADD_TO_CART"){
// console.log("reducer called",action);
// return action.data;
// }
// else{
//     return "no action match found";
// }
// return "abc";

switch(action.type){
    case ADD_TO_CART:
        //add to cart logic
        console.log("Add to cart", action);
        return 1;
       
    case REMOVE_TO_CART:
        //remove cart logic
        console.log("remove to cart", action);
        return -1;
        default:
            //no case matched for remove
            return " no action called";
}
}