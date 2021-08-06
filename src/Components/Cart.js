import axios from 'axios';
import React from 'react';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cake from './Cake';
import { useReducer } from 'react';
import {
    AddToCartthunk,
    FetchCartthunk,
    Removefromcartthunk,
    Removeonefromcartthunk,
    Orderthunk
  } from "../ReduxStore/thunks";

function Cart(props) {

    useEffect(() => {
        if (localStorage.token) {
          props.dispatch(FetchCartthunk());
        } 
        else {
          alert("Please login to Continue");
          props.history.push("/login");
        }
      }, []);

    if(props.history.action === "POP") {
        props.history.push("/")
    }

    var total = 0;

    const addOneCake = (id,cakeid) => {
        const newitemlist = props.cartData.filter((cake) => {
          return Object.values(cake).join(" ").includes(cakeid);
        });
    
        var datacake = {
          name: newitemlist[0].name,
          cakeid: newitemlist[0].cakeid,
          price: newitemlist[0].price,
          weight: newitemlist[0].weight,
          image: newitemlist[0].image,
        };

        // console.log("????", datacake);
        props.dispatch(AddToCartthunk(datacake));
        // props.history.push("/cart");
      }

    const removeOneCake = (id,cakeid) => {
        const newitemlist = props.cartData.filter((cake) => {
            return Object.values(cake).join(" ").includes(cakeid);
        });
        var datacake = {
            name: newitemlist[0].name,
            cakeid: newitemlist[0].cakeid,
            price: newitemlist[0].price,
            weight: newitemlist[0].weight,
            image: newitemlist[0].image,
        };

    // console.log("????", datacake);
        props.dispatch(Removeonefromcartthunk(datacake));
    };

    const removeCake = (id,cakeid) => {
        const newitemlist = props.cartData.filter((cake) => {
            return Object.values(cake).join(" ").includes(cakeid);
        });
        var datacake = {
            name: newitemlist[0].name,
            cakeid: newitemlist[0].cakeid,
            price: newitemlist[0].price,
            weight: newitemlist[0].weight,
            image: newitemlist[0].image,
        };

    // console.log("????", datacake);
        props.dispatch(Removefromcartthunk(datacake));
        props.history.push("/cart")
    };

    const placeOrder = () => {
        var datacake = {
            name: document.getElementById("InputName").value,
            address: document.getElementById("InputArea").value,
            area:document.getElementById("InputArea").value,
            city:document.getElementById("InputCity").value,
            pincode:document.getElementById("InputPincode").value,
            phone:document.getElementById("InputPhone").value,
            cakes:[...props.cartData],
            price: document.getElementById("disabledPriceInput").value
        };

        // console.log("datacake ???? ", datacake);
        props.dispatch(Orderthunk(datacake));

    };

    // {props.itemremoved || props.itemadded && notifySuccessTrigger() }

    console.log("props.cartData in cart: ", props.cartData)

    return(
        <div className="cartWrapper">
            <ToastContainer />
            {props.loader ? <Spinner /> : '' }
                <table className="table cartTable">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name and Weight</th>
                        <th scope="col">quantity</th>
                        <th scope="col">price</th>
                        <th scope="col">total price</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    {props.cartData != undefined ? (
                        <tbody>
                            {props.cartData.map((each, index) => {
                                return(
                                    <tr className="cartCard" key={index} data={each}>
                                        <th scope="row">{index + 1}</th>
                                        <td className="cartImage"><img src={each.image} /></td>
                                        <td>
                                            <span className="cartDetails">
                                                <span className="cartCakeName">{each.name}</span>
                                                <span>weight: {each.weight}</span>  
                                            </span>
                                        </td>
                                        <td>
                                            <button type="button" onClick={() => addOneCake(index, each.cakeid, each.quantity)}>+</button>
                                            <span style={{margin:"0 10px"}}>{each.quantity}</span>
                                            <button type="button" onClick={() => removeOneCake(index, each.cakeid, each.quantity)}>-</button>
                                        </td>
                                        <td>{each.price}</td>
                                        <td>{each.price * each.quantity}</td>
                                        <td><button type="button" onClick={() => removeCake(index, each.cakeid)}>Remove</button></td>
                                        <span className="d-none"> {total += each.price * each.quantity}
                                        </span>
                                    </tr>
                                    
                                )
                            })}
                        </tbody>
                    ) : <h1>Your cart is empty...</h1>}
                </table>
                {total > 0 ? 
                    <div>
                        <div className="checkout">
                            <div>
                                <span className="total-label">Total : </span><span className="total-amount">{total}</span>
                            </div>
                        </div>
                        <div id="order_form" style={{border: "1px solid #0000003d", padding: "30px"}}>
                            <h2 style={{marginBottom:"20px"}}>Place Order</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="InputName" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="InputName" aria-describedby="emailHelp" required/>
                                    {/* <div id="emailHelp" className="form-text">We'll never share your details with anyone else.</div> */}
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputAddress" className="form-label">Address</label>
                                    <input type="text" className="form-control" id="InputAddress" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputArea" className="form-label">Area</label>
                                    <input type="text" className="form-control" id="InputArea" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputCity" className="form-label">City</label>
                                    <input type="text" className="form-control" id="InputCity" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputPincode" className="form-label">Pincode</label>
                                    <input type="text" className="form-control" id="InputPincode" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="InputPhone" className="form-label">Phone</label>
                                    <input type="text" className="form-control" id="InputPhone" required/>
                                </div>
                                <div className="mb-3">
                                <label htmlFor="disabledPriceInput" className="form-label">Price</label>
                                <input type="text" id="disabledPriceInput" className="form-control" value={total} required/>
                                </div>
                                <div className="mb-3 form-check">
                                    <input type="checkbox" className="form-check-input" id="TermsAndCo" required/>
                                    <label className="form-check-label" htmlFor="TermsAndCo">I Agree to Privacy Policy</label>
                                </div>
                                <div>
                                    <button type="button" className="btn action-button-primary" onClick={placeOrder}>Place Order</button>
                                    <Link style={{float:"right"}}  type="button"  className="btn action-button" to="/">Continue shopping</Link>
                                    <Link style={{float:"right"}}  type="button"  className="btn action-button" to="/order">View Orders</Link>
                                </div>
                            </form>
                        </div>
                    </div> 
                : 
                    <div>
                        <h1 style={{marginBottom:"30px"}}>No Items in Cart</h1>
                        <Link style={{float:"left"}}  type="button"  className="btn action-button" to="/">Continue shopping</Link>
                        <Link style={{float:"left"}}  type="button"  className="btn action-button" to="/order">View Orders</Link>
                    </div>
                }
               
         </div>
    )
}

Cart = withRouter(Cart)
export default connect(function(state,props) {
  return {
    isUserLoggedIn :state["AuthReducer"]["isUserLoggedIn"],
    token:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"],
    cartData: state["CartReducer"]["cartitems"],
    loader: state["CartReducer"]["isloading"],
  }
})(Cart)