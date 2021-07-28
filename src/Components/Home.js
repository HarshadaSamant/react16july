import Carousel from "./Carousel";
import Cake from "./Cake";
import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from '../Components/Spinner/Spinner';
import { connect } from "react-redux";
import { withRouter } from "react-router";

function Home(props) {
    

    console.log("Props in home are: " + JSON.stringify(props));

    var [cakes, setCakes] = useState([])
    var [loader, setLoader] = useState(false);

    
    
    useEffect(() => {
        setLoader(true)
        let apiurl = process.env.REACT_APP_BASE_API + "/allcakes";

            axios({
                method: 'get',
                url: apiurl
            }).then((response) => {
                console.log("response from all cakes api : " , response.data)
                props.dispatch({
                    type: "ApiLoaded"
                })
                // {props.cakesLoaded &&
                // alert("cake loaded")
                setCakes(response.data.data)
                // }
                setLoader(false)
            }, (error) => {
                console.log("error from all cakes api : ", error)
                setLoader(false)
            })
        
        }, [])
    

    return(
        <div>
            
            {loader ? <Spinner /> : '' }
            <Carousel />
            <h1 style={{fontSize:"24px", margin:"20px 0"}}>
                Cakes for all occasions
            </h1>

            <div className="row">
                {cakes.map((each, index) => {
                    return <Cake key={index} data={each} />
                })}
            </div>
            
        </div>
    )
}

Home = withRouter(Home)
export default connect(function(state, props) {
    return{
        cakesLoaded: state["ApiLoad"]["isApiLoaded"]
    }
})(Home);