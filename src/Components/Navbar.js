import {useState , useEffect} from "react"
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux"


export function Navbar(props){
    console.log("props in nav are : ", JSON.stringify(props));
    var [title, setTitle] = useState("Cake Gallery")
    // var [user, setUser] = useState({name:"Harshada", id:12345 , role:"Developer" , experience:"3 years" , salary:"Chindi"})

    useEffect(()=>{
      console.log("useEffect here which will not be called due to empty array");
    },[])

    useEffect(()=>{
      console.log("useEffect here which will be called for every value update");
    })

    useEffect(()=>{
      console.log("useEffect here which will be called for title value update");
    }, [title])

    // function Search(event){
    //   event.preventDefault()
    //   var value = document.getElementById('searchinput').value
    //   props.history.push(`/search/q=${value}`)
    // }

    var [searchText, setSearchText]=useState(undefined);
    function search(ev){
      ev.preventDefault();
      if(searchText){
        props.history.push(`/search?q=${searchText}`);
      }
    } 
    function getSearchText(ev){
      setSearchText(ev.target.value);
    }

    var logout = (event) => {
      localStorage.clear()
      window.location.reload()
      props.history.push("/")
    }

    let showCart = (event) => {
      event.preventDefault();
      if(!localStorage.token) {
          alert("Please login or register to view details")
          // notify();
          
      } else {
          props.history.push("/cart")
          console.log("props.token : " , props.token)
      }
  }
  
   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
<a className="navbar-brand" href="#">Welcome {props.name} {title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        {/* <input onChange={demo} value={title} id="searchinput" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <input onChange={demo} value={user.name} id="searchinput" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <input onChange={demo} value={user.id} id="searchinput" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <input onChange={demo} value={user.role} id="searchinput" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <input onChange={demo} value={user.salary} id="searchinput" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" /> */}
        <input id="searchinput" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={getSearchText}/>
       
        <button onClick={search} className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

      </form>

      {!props.isUserLoggedIn && <form className="d-flex"><span className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </span>
        <span className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </span> </form>}

        {props.isUserLoggedIn && <form className="d-flex"><span className="nav-item">
          <a className="nav-link" onClick={showCart}>Cart</a>
        </span>
        <span className="nav-item">
          <Link className="nav-link" onClick={logout}>Logout</Link>
        </span> </form>}

    </div>
  </nav>
   )

}

Navbar = withRouter(Navbar)
export default connect(function(state,props) {
  return {
    isUserLoggedIn :state["AuthReducer"]["isUserLoggedIn"],
    name:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["name"],
    token:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"]
  }
})(Navbar)