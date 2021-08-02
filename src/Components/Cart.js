import axios from 'axios';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';
import Spinner from '../Components/Spinner/Spinner';
import Cake from './Cake';

function Cart(props) {
    var [cartItems, setCartItems] = useState([]); 
    var [loader, setLoader] = useState(false);

    console.log("cartItems : ", cartItems)
    console.log("total : ", total)
    var total = 0;
    var cartCount;
    useEffect(() => {
        let apiurl = process.env.REACT_APP_BASE_API + "/cakecart"
        setLoader(true)
        axios(
            {
                method: "post",
                url: apiurl,
                data: {},
                headers: {
                    authtoken: localStorage.token,
                },
            }
        ).then((response) => {
            console.log("response from cake cart api : " + JSON.stringify(response.data))
            setCartItems(response.data.data)
            setLoader(false)
            // cartCount = response.data.data.length
            props.dispatch({
                type: "addCartCount",
                count: response.data.data.length
            })
        }, (error) => {
            console.log("error from cake cart api : " + error)
            setLoader(false)
        })
    },[]);
    console.log("props.token in cart: ",props.token)

    return(
        <div className="cartWrapper">
            {loader ? <Spinner /> : '' }
                <table class="table cartTable">
                    <thead>
                        <tr>
                        <th scope="col">#</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name and Weight</th>
                        <th scope="col">quantity</th>
                        <th scope="col">price</th>
                        <th scope="col">total price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {cartItems.map((each, index) => {
                            return(
                                <tr className="cartCard" key={index} data={each}>
                                    <th scope="row">{index + 1}</th>
                                    <td className="cartImage"><img src={cartItems[index].image} /></td>
                                    <td>
                                        <span className="cartDetails">
                                            <span className="cartCakeName">{cartItems[index].name}</span>
                                            <span>weight: {cartItems[index].weight}</span>  
                                        </span>
                                    </td>
                                    <td>{cartItems[index].quantity}</td>
                                    <td>{cartItems[index].price}</td>
                                    <td>{cartItems[index].price * cartItems[index].quantity}</td>
                                    <span className="d-none"> {total += cartItems[index].price * cartItems[index].quantity}
                                    </span>
                                </tr>
                                
                            )
                        })}
                    </tbody>
                </table>
                <div className="checkout">
                    <div>
                        <span className="total-label">Total : </span><span className="total-amount">{total}</span>
                    </div>
                    <div>
                        <Link style={{float:"right"}}  type="submit"  className="btn action-button" to="/">Continue shopping</Link>
                        <button style={{float:"right"}}  type="submit"  className="btn action-button">Checkout</button>
                    </div>
                </div>
                
         </div>
    )
}

Cart = withRouter(Cart)
export default connect(function(state,props) {
  return {
    isUserLoggedIn :state["AuthReducer"]["isUserLoggedIn"],
    token:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"]
  }
})(Cart)