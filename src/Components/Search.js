
import axios from "axios"
import queryString from "query-string"
import { useEffect, useState } from "react"
import Cake from "./Cake";
import Spinner from '../Components/Spinner/Spinner';


function Search(props){
  var [loader, setLoader] = useState(false);

  console.log(">>>>>>>>>>>>>>>>>props" , props)
  let query=queryString.parse(props.location.search);
    let [cakeResults, setCakeResults]=useState([]);
    useEffect(()=>{
        setLoader(true)
        let apiurl="https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q;
        console.log(query);
        axios({
            method: "get",
            url: apiurl
        }).then((response)=>{
            console.log("response from all cakes api", response.data);
            setCakeResults(response.data.data);
            setLoader(false)
        },(error)=>{
            console.log("error from all cakes api", error);
            setLoader(false)
        })

    },[query.q])


    return (
      <div className="row ml-0 mr-0 mt-5 d-flex justify-content-around">
        {loader ? <Spinner /> : '' }
        {(cakeResults.length) == 0 &&
          <div style={{textAlign:"center"}}>
            <h1>Cake you searched for is not found!</h1>
            <img src="./././cake_not_found.jpeg"/>
          </div>
        }
        
        {cakeResults.map((each, index)=>{
          return <Cake key={index} data={each}/>
        })}
      </div>
    )
}

export default Search