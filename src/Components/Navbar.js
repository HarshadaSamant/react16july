import {useState , useEffect} from "react"



export function Navbar(){
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
  
   return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="#">{title}</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
  
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            Dropdown
          </a>
          <div class="dropdown-menu" aria-labelledby="navbarDropdown">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <div class="dropdown-divider"></div>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="form-inline my-2 my-lg-0">
        <input onChange={demo} value={title} id="searchinput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <input onChange={demo} value={user.name} id="searchinput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <input onChange={demo} value={user.id} id="searchinput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <input onChange={demo} value={user.role} id="searchinput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <input onChange={demo} value={user.salary} id="searchinput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
        <input onChange={demo} value={user.experience} id="searchinput" class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
       
        <button  class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
      </form>

    </div>
  </nav>
   )

}


