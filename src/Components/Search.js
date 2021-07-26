
import axios from "axios"
import queryString from "query-string"
import { useState } from "react"

function Search(props){
  console.log(">>>>>>>>>>>>>>>>>props" , props)
  var [cakeresults , setCakeresults] = useState([])
  var query = queryString.parse(props.location.search).q
  console.log("query object" , query)


  useEffect(()=>{
    let apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q="+ query

    axios({
        method: 'get',
        api: apiurl
    }).then((response) => {
        console.log("response from search cakes api : ", response.data)
    })

  },[query])
    return (
        <div>
<h1>Search Cakes for  {query} </h1>
        </div>
    )
}

export default Search