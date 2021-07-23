import {Link} from 'react-router-dom';

function Card(props) {
    let showDetails = (event) => {
        if(!localStorage.token) {
            alert("Please login or register to view details")
            event.preventDefault();
        }
    }

    return(
        <div class="card" style={{width: 300}}>
            <img src="https://www.getatoz.com/images/birthday-chocolate-truffle-cake-name.png" class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">Dark Chocolate Cake</h5>
                <p class="card-text">Dark Chocolate Cake Short description</p>
                <Link onClick={showDetails} to="/Cakedetails" class="btn btn-primary">Show details</Link>
            </div>
         </div>
    )
}

export default Card;