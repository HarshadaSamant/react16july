import axios from 'axios';
import { useEffect } from 'react';
import { connect } from 'react-redux';
import {Link, withRouter} from 'react-router-dom';

function Cart(props) {
    useEffect(() => {
        let apiurl = process.env.REACT_APP_BASE_API + "/cakecart"
        // setLoader(true)
        axios(
            {
                method: 'post',
                url: apiurl,
                request:{},
                headers: props.token
            }
        ).then((request) => {
            console.log("response from cake cart api : " + JSON.stringify(request.data.data))
        }, (error) => {
            console.log("error from cake cart api : " + error)
        })
    }, []);

    return(
        <div className="card" style={{width: 300}}>
            <img src="https://www.getatoz.com/images/birthday-chocolate-truffle-cake-name.png" className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Dark Chocolate Cake</h5>
                <p className="card-text">Dark Chocolate Cake Short description</p>
                <Link to="/Cakedetails" className="btn btn-primary">Show details</Link>
            </div>
         </div>
    )
}

// export default Cart;
Cart = withRouter(Cart)
export default connect(function(state,props) {
  return {
    token:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"]
  }
})(Cart)