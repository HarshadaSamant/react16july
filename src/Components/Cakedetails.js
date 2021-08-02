import axios from "axios";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router";
import Spinner from '../Components/Spinner/Spinner';
import Ratings from "./Ratings";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cakedetails(props) {

    const notify = () => toast.error('Please login or register to view details', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const notifySucess = () => toast.success('Cake added to cart successfully', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });
    const notifyError = () => toast.error('Error while adding cake to cart', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    var [cakeDetails, setCakeDetails] = useState({});
    var [ingredients, setIngredients] = useState([]);
    var [loader, setLoader] = useState(false);

    // console.log("props in cakedetails page : " + props)

    useEffect(() => {
        let apiurl = process.env.REACT_APP_BASE_API + "/cake/" + props.match.params.cakeid
        setLoader(true)
        axios(
            {
                method: 'get',
                url: apiurl
            }
        ).then((response) => {
            
            console.log("response from cake details api : " + JSON.stringify(response.data.data))
            setCakeDetails(response.data.data)
            setIngredients(response.data.data.ingredients)
            console.log("cakeDetails are : " + JSON.stringify(cakeDetails))
            setLoader(false)
        }, (error) => {
            setLoader(true)
            console.log("error from cake details api : " + error)
            setLoader(false)
        })
    }, []);

    let addToCart = (event) => {
        let apiurl = process.env.REACT_APP_BASE_API + "/addcaketocart"
        // let payload = { name: `${cakeDetails.name}`,cakeid : `${cakeDetails.cakeid}`,price : `${cakeDetails.price}`,weight : `${cakeDetails.weight}`,image : `${cakeDetails.image}`};
        // let payload = { name: `Molten chocolate cake`,cakeid : 1623224855198 ,price : 315 ,weight : 0.5 ,image : `https://res.cloudinary.com/ashudev/image/upload/v1623732886/x2jlf6ix8vqo5q0wnxjr.jpg`};
        setLoader(true)
        console.log("cakeDetails : " , cakeDetails)
        // if(props.isUserLoggedIn) {
            axios(
                {
                    url: apiurl,
                    headers: {
                        authtoken: props.token,
                    },
                    method: "post",
                    data: { name: `${cakeDetails.name}`,cakeid : `${cakeDetails.cakeid}` ,price : `${cakeDetails.price}` ,weight : `${cakeDetails.weight}` ,image : `${cakeDetails.image}`},
                }
            ).then((response) => {
                // alert("added to cart")
                notifySucess();
                console.log("request sent from cake details api : " + JSON.stringify(response.data.data))
                props.history.push("/cart")
            }, (error) => {
                // alert("error while adding to cart")
                notifyError();
                console.log("error from cake details api : " + error)
                setLoader(false)
            })
        // } 
        // else {
        //     // alert("Please login or register to add cake to cart")
            // notify();
            // setLoader(false)
        // }
    };

    return(
        <div className="cake-details" style={{height:"calc(100% - 56px)"}}>
             <ToastContainer />
            {loader ? <Spinner /> : '' }
        <div style={{ display:"flex", justifyContent:"center", alignItems:"center", padding: "40px 0"}}>
            <div className="details-wrapper" style={{width: "50%"}}>
                <div className="image-wrapper" style={{width: "70%", margin: "20px auto"}}>
                    <img style={{width: "100%", height: "auto"}} src={cakeDetails.image} />
                </div>
                <div className="ingredients-wrapper" style={{margin: "40px"}}>
                    <ul style={{backgroundColor:"#FDF6F0", display: "flex", flexWrap: "wrap", margin: "0 !important", listStylePosition: "inside", minHeight: "150px", padding:"30px"}}>
                        {ingredients.map((each, index) => {
                            return <li key={index} data={each} style={{width: "40%", margin: "10px", fontSize: "18px"}}>{ingredients[index]}</li>
                        })}
                    </ul>
                    
                </div>
            </div>
            <div className="details-wrapper" style={{width: "50%", textAlign: "center"}}>
            <h1 className="fancy_border">{cakeDetails.name}</h1>
            <Ratings value={cakeDetails.ratings}/>
            <span>{cakeDetails.ratings}</span>
            <div><span>{cakeDetails.reviews}</span> reviews</div>
            <div className="description">
                <p>{cakeDetails.description}</p>
            </div>
            <div>
                <span>Current Price: </span><span>{cakeDetails.price}</span>
            </div>
            <div>
                <span>Weight: </span><span>{cakeDetails.weight} kg</span>
            </div>
            <div>
                <span>Flavour: </span><span>{cakeDetails.flavour}</span>
            </div>
            <div>
                <span>Occasion: </span><span>{cakeDetails.type}</span>
            </div>

            <div className="cart-button" style={{margin: "40px auto"}}>
                <button type="submit" className="btn btn-primary" onClick={addToCart}>Add to cart</button>
            </div>
        </div>
        </div>
    </div>

    )
}

Cakedetails = withRouter(Cakedetails);
export default connect(function (state, props) {
  return {
    isUserLoggedIn :state["AuthReducer"]["isUserLoggedIn"],
    token: state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"],
  };
})(Cakedetails);