import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';
import Cake from './Cake';
import {
    FetchOrderthunk
  } from "../ReduxStore/thunks";

function Order(props) {

    useEffect(() => {
        if (localStorage.token) {
          props.dispatch(FetchOrderthunk());
        } 
        else {
          alert("Please login to Continue");
          props.history.push("/login");
        }
      }, []);

    // console.log("action : ", props.history.action);

    if(props.history.action === "POP") {
        props.history.push("/")
    }
    
    var total = 0;
    var cartCount;
   


    // console.log("props.orderData in order: ", props.orderData.cakeorders)

    return(
        <div className="cartWrapper">
            {props.loader ? <Spinner /> : '' }
                <table class="table cartTable">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Cake Ordered</th>
                        <th scope="col">Customer Name</th>
                        <th scope="col">Amount</th>
                        <th scope="col">Mode of Payment</th>
                        <th scope="col">Status</th>
                        </tr>
                    </thead>
                    {props.orderData.cakeorders != undefined ? (
                        <tbody>
                            {props.orderData.cakeorders.map((each, index) => {
                                return(
                                    <tr className="cartCard" key={index} data={each}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="cartImage">
                                            <ul>
                                                {each.cakes.map((each, index) => {
                                                    return <li>{each.name}</li>
                                                }) }
                                            </ul>
                                        </td>
                                        <td>
                                            <span className="cartDetails">
                                                <span className="cartCakeName">{each.name}</span>
                                            </span>
                                        </td>
                                        <td>{each.price}</td>
                                        <td>{each.mode}</td>
                                        <td>{each.pending ? "Pending" : "Delivered"}</td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    ) : <h1>You haven't ordered anything yet...</h1>} 
                </table>
         </div>
    )
}

Order = withRouter(Order)
export default connect(function(state,props) {
  return {
    isUserLoggedIn :state["AuthReducer"]["isUserLoggedIn"],
    token:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"],
    orderData: state["OrderReducer"]["orderitems"],
    loader: state["OrderReducer"]["isloading"],
  }
})(Order)