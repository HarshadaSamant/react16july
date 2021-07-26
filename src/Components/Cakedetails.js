import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from '../Components/Spinner/Spinner';

function Cakedetails(props) {
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


    return(
        <div className="cake-details" style={{backgroundColor:"#FFEBC9", height:"100vh"}}>
            {loader ? <Spinner /> : '' }
        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height: "100%", padding: "40px 0"}}>
            <div className="details-wrapper" style={{width: "50%"}}>
                <div className="image-wrapper" style={{width: "70%", margin: "auto"}}>
                    <img style={{width: "100%", height: "auto"}} src={cakeDetails.image} />
                </div>
                <div className="ingredients-wrapper" style={{margin: "40px"}}>
                    <ul style={{backgroundColor:"#FDF6F0", display: "flex", flexWrap: "wrap"}}>
                        {ingredients.map((each, index) => {
                            return <li key={index} data={each} style={{width: "40%", margin: "10px", fontSize: "18px"}}>{ingredients[index]}</li>
                        })}
                    </ul>
                    
                </div>
            </div>
            <div className="details-wrapper" style={{width: "50%", textAlign: "center"}}>
            <h1>{cakeDetails.name}</h1>
            <form className="rating-widget">
<input type="checkbox" className="star-input" id="1"/>
<label className="star-input-label" htmlFor="1">1
<i className="fa fa-star"></i>
<i className="fa fa-star orange"></i>
</label>
<input type="checkbox" className="star-input" id="2"/>
<label className="star-input-label" htmlFor="2">2
<i className="fa fa-star"></i>
<i className="fa fa-star orange"></i>
</label>
<input type="checkbox" className="star-input" id="3"/>
<label className="star-input-label" htmlFor="3">3
<i className="fa fa-star"></i>
<i className="fa fa-star orange"></i>
</label>
<input type="checkbox" className="star-input" id="4"/>
<label className="star-input-label" htmlFor="4">4
<i className="fa fa-star"></i>
<i className="fa fa-star orange"></i>
</label>
<input type="checkbox" className="star-input" id="5"/>
<label className="star-input-label" htmlFor="5">5
<i className="fa fa-star"></i>
<i className="fa fa-star orange"></i>
</label>

</form>
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
                <button type="submit" className="btn btn-primary">Add to cart</button>
            </div>
        </div>
        </div>
    </div>

    )
}

export default Cakedetails;