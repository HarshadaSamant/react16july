import {useState , useEffect} from "react"
import { Link, withRouter } from "react-router-dom";


export function Navbar(props){
    console.log("props in nav are : ", JSON.stringify(props));
    var [title, setTitle] = useState("Cake Gallery")
    var [user, setUser] = useState({name:"Harshada", id:12345 , role:"Developer" , experience:"3 years" , salary:"Chindi"})

    useEffect(()=>{
      console.log("useEffect here which will not be called due to empty array");
    },[])

    useEffect(()=>{
      console.log("useEffect here which will be called for every value update");
    })

    useEffect(()=>{
      console.log("useEffect here which will be called for title value update");
    }, [title])

    function demo(event){
      event.preventDefault()
      var value = document.getElementById('searchinput').value
      setTitle(value)
    }

    var logout = (event) => {
      // event.preventDefault();
      props.loggedOut();
      localStorage.clear();
    }
  
   return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark m-0">
<a className="navbar-brand" href="#">{title}</a>
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
        <input onChange={demo} value={user.experience} id="searchinput" className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
       
        <button  className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>

      </form>

      {!props.isUserLoggedIn && <form><span className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </span>
        <span className="nav-item">
          <Link className="nav-link" to="/signup">Signup</Link>
        </span> </form>}

        {props.isUserLoggedIn && <form><span className="nav-item">
          <Link className="nav-link" to="/cart">Cart</Link>
        </span>
        <span className="nav-item">
          <Link className="nav-link" onClick={logout} to="/">Logout</Link>
        </span> </form>}

    </div>
  </nav>
   )

}


export default withRouter(Navbar)