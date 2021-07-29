
import axios from "axios"
import queryString from "query-string"
import { useEffect, useState } from "react"
import Cake from "./Cake";


function Search(props){
  console.log(">>>>>>>>>>>>>>>>>props" , props)
  let query=queryString.parse(props.location.search);
    let [cakeResults, setCakeResults]=useState([]);
    useEffect(()=>{
        let apiurl="https://apifromashu.herokuapp.com/api/searchcakes?q="+query.q;
        console.log(query);
        axios({
            method: "get",
            url: apiurl
        }).then((response)=>{
            console.log("response from all cakes api", response.data);
            setCakeResults(response.data.data);
            
        },(error)=>{
            console.log("error from all cakes api", error);
        })

    },[query.q])


    return (
      <div className="row ml-0 mr-0 mt-5 d-flex justify-content-around">

        {(cakeResults.length) == 0 &&
          <h1>Items you searched for are not found</h1>
        }
        
        {cakeResults.map((each, index)=>{
          return <Cake key={index} data={each}/>
        })}
      </div>
    )
}

export default Search