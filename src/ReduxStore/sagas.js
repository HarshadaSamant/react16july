// import {all , takeEvery , put} from "redux-saga/effects"
// import axios from "axios"
// import {requestFunction} from "../index"
// function *CartGenerator(){
//   // first make and async task  and based on result dispatch necessary action
// var success = true
//   yield put({
//       type:"CART_FETCHING"
//   })

//   var response  = yield requestFunction({method:"post",
//    url:process.env.REACT_APP_BASE_API+"/cakecart",
//    data:{}
//   }
//   )
//   console.log("response from cart items " , response)
//   if(response.data.data){
//       yield put({
//           type:"CART_SUCCESS",
//           payload:response.data.data
//       })
//   }else{
//     yield put({
//         type:"CART_FAILURE"
//     })
//   }
// }


// function *CartSaga(){
//   yield takeEvery('Cart_Items' , CartGenerator)
// }

// export default function *RootSaga(){
//     // console.log("root sga ")
//  yield all([CartSaga()])
// }

