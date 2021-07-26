import {Link} from 'react-router-dom';

function Cart() {
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

export default Cart;