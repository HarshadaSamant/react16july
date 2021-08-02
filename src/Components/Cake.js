import {Link} from 'react-router-dom';
import { withRouter } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cake(props) {
    const notify = () => toast.warn('Please login or register to view details', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });

    let showDetails = (event) => {
        event.preventDefault();
        props.history.push("/cake/"+ props.data.cakeid)
        
    }

    return(
        
        <div className="col cakeList">
            <ToastContainer position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover/>

            <div className="card" style={{width: 300, margin: "20px auto"}}>
                <div style={{width: "100%", height: "300px"}}>
                    <img style={{minWidth: "100%", height: "300px"}} src={props.data.image} className="card-img-top" alt="Cake image"/>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{props.data.name}</h5>
                    <p className="card-text">{props.data.price}</p>
                    <button onClick={showDetails} className="btn cake-button"><span>Show details</span></button>
                    {/* <button onClick={showDetails} className="btn btn-primary">Add to cart</button> */}
                </div>
            </div>
         </div>
    )
}

export default withRouter(Cake);