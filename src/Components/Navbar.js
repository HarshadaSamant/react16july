import {useState , useEffect} from "react"
import { Link, withRouter } from "react-router-dom";
import { connect } from "react-redux"


export function Navbar(props){
    console.log("props in nav are : ", JSON.stringify(props));
    var [title, setTitle] = useState("Cake Gallery")
    var cartCount = props.cartCount;
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
      props.history.push("/")
      localStorage.clear()
      window.location.reload()
      
    }

    let showCart = (event) => {
      event.preventDefault();
      if(!props.isUserLoggedIn) {
          alert("Please login or register to view details")
          props.history.push("/login")
      } else {
          props.history.push("/cart")
          console.log("props.token : " , props.token)
      }
  }
  
   return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
<a className="navbar-brand action-link" href="#">Welcome to {title}</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
          <Link className="nav-link action-button" to="/">Home <span className="sr-only">(current)</span></Link>
        </li>
      </ul>
      <form className="form-inline my-2 my-lg-0">
        <input id="searchinput" className="form-control mr-sm-2" type="search" placeholder="Search cake" aria-label="Search" onChange={getSearchText}/>
       
        <button onClick={search} className="btn action-button search my-2 my-sm-0" type="submit">Search</button>

      </form>

      {!props.isUserLoggedIn && <form className="d-flex"><span className="nav-item">
          <Link className="nav-link action-button" to="/login">Login</Link>
        </span>
        <span className="nav-item">
          <Link className="nav-link action-button" to="/signup">Signup</Link>
        </span> </form>}

        {props.isUserLoggedIn && <form className="d-flex"><span className="nav-item" style={{position: "relative", marginRight:"30px"}}>
          <a className="nav-link action-button" onClick={showCart}>Cart</a>
          <span className="cartValue">{props.cartCount}</span>
        </span>
        <span className="nav-item">
          <Link className="nav-link action-button" onClick={logout}>Logout</Link>
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
    token:state["AuthReducer"]["user"] && state["AuthReducer"]["user"]["token"],
    cartCount: state["CartCount"]["count"]
  }
})(Navbar)