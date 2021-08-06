// reducers are pure function who are responsible for updating store 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Spinner from '../Components/Spinner/Spinner';

export var AuthReducer = function(state = {isUserLoggedIn: localStorage.token ? true : false}, action) {
    switch(action.type){
        case "LOGIN_FETCH":{
            state= {...state}
            state["isloading"] = true
            return state
        }
        case "LOGIN_SUCESS" :{
            state = {...state}
            state["isUserLoggedIn"] = true
            state["user"] = action.payload
            state["token"] = action.token
            state["isloading"] = false
            // console.log(">>>>>>>>>>>>>>>>>>>>" , state)
            return state
        }
        case "LOGIN_FAILURE":{
         state= {...state}
         state["isloading"] = false
         state["error"]="INVALID LOGIN"
         return state
     }
        default : return state
    }
}

export var ApiLoad = function(state = {isApiLoaded: true}, action) {
    switch (action.type) {
        case "ApiLoaded":
            state = {...state}
            state["isApiLoaded"] = false
            return state;
        default:
            return state;
    }
}

export var CartReducer = function (
    state = {
      cartitems: [],
      carttotal:0
    },
    action
) {
// state means here state of store i.e that object whihc contains data
// action means what it has to do

switch (action.type) {
    case "CART_FETCHING": {
    state = { ...state }
    state["isloading"] = true
    return state
    }
    case "CART_SUCCESS": {
    state = { ...state }
    state["isloading"] = false
    state["cartitems"] = action.payload
    state["carttotal"] = action.payload.length
    console.log("action.payload : " + action.payload.length)
    return state
    }
    case "CART_FAILURE": {
    state = { ...state }
    state["isloading"] = false
    state["carterror"] = "Some Error Occurred"
    // state["itemremoved"] = false
    return state
    }
    case "ADD_TO_CART_SUCCESS": {
    state = {...state }
    state["isloading"] = false
    state["addcartresponse"] = action.payload
    state["itemadded"] = true
    alert("Item added to cart")
    return state
    }
    case "ADD_TO_CART_FAILURE": {
    state = { ...state }
    state["isloading"] = false
    state["itemadded"] = false
    alert("Error while adding item to cart")
    state["addcarterror"] = "Some Error Occurred Adding Item"
    return state
    }
    case "REMOVE_FROM_CART_SUCCESS": {
    state = {...state }
    state["isloading"] = false
    state["itemremoved"] = true
    state["removecartresponse"] = action.payload
    alert("Item removed from cart")
    return state
    }
    case "REMOVE_FROM_CART_FAILURE": {
    state = { ...state }
    state["isloading"] = false
    state["itemremoved"] = false
    alert("Error while removing item from cart")
    return state
    }

    default: return state
}
}

export var OrderReducer = function (
    state = {
      orderitems: []
    },
    action
) {
    switch (action.type) {
        case "ORDER_FETCHING": {
            state = { ...state }
            state["isloading"] = true
            return state
        }
        case "ADD_ORDER_SUCCESS": {
        state = {...state }
        state["isloading"] = false
        state["addorderresponse"] = action.payload
        alert("Order placed successfully")
        return state
        }
        case "ADD_ORDER_FAILURE": {
        state = { ...state }
        state["isloading"] = false
        state["addordererror"] = "Some Error Occurred Ordering Item"
        alert("Error while placing an Order")
        return state
        }
        case "ORDER_SUCCESS": {
            state = { ...state }
            state["isloading"] = false
            state["orderitems"] = action.payload 
            return state
        }
        case "ORDER_FAILURE": {
            state = { ...state }
            state["isloading"] = false
            state["ordererror"] = "Some Error Occurred"
            alert("order failed")
            return state
        }

        default: return state
    }
}

// export var CartCount = function(state = {CurrentCartCount: 0}, action) {
//     switch (action.type) {
//         case "addCartCount": {
//             state = {...state}
//             state["count"] = action.count
//             return state
//         }
//         default:
//             return state;
//     }
// }

export var React = function( state = {React_Traning_Material: 10}, action) {
    // // state means here state of store i.e that object whihc contains data
    // action means what it has to do 
    switch (action.type) {
        case "Books":{
            state = {...state}
            return state["React_Traning_Material"]-=2;
        }
        case "Project_Topics": {
            state = {...state}
            return state["React_Traning_Material"]-=1;
        }
    
        default:
            return state;
    }
}

export var Angular = function( state = {Angular_Traning_Material: 10}, action) {
    switch (action.type) {
        case "Books":{
            state = {...state}
            return state["Angular_Traning_Material"]-=3;
        }
        case "Project_Topics": {
            state = {...state}
            return state["Angular_Traning_Material"]-=1;
        }
    
        default:
            return state;
    }
}