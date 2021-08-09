import {Component, PureComponent} from "react";
import Loader from "react-loader-spinner";
import axios from "axios";


class Signup extends PureComponent {
    constructor(){
        super()
        // initialising the state
        this.state = {
            name:"Harshada",
            loading:0
        }
    }
    user = {}



    handleEmail = (event)=>{
        this.user.email = event.target.value
      }
    handlePassword = (event)=>{
         this.user.password = event.target.value
       }
       handleName = (event)=>{
        this.user.name= event.target.value
      }
    signup = (event)=>{
       // updating the state
    //     this.setState({
    //         loading:98
    //     })
    //    console.log("......................" , this.user) 

    let apiurl = "https://apifromashu.herokuapp.com/api/register"
    axios({
        method:"post",
        url: apiurl,
        data: this.user
    }).then((response) => {
        console.log("response from signup api", response)
    }, (error) => {
        console.log("error from signup api", error)
    })
       event.preventDefault()
    }

    render(){
       
        return (
            <div style={{width:"100%", height:"calc(100% - 56px)", margin:"auto", background: "url(./././cake_bg.jpeg) no-repeat", backgroundSize:"100% 100%"}}>
                <form className="signupform" onSubmit={this.signup}>
                    <h1>Signup Here</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Name</label>
                        <input onChange={this.handleName} type="text" className="form-control" aria-describedby="nameHelp" placeholder="Enter Name" required/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={this.handleEmail} type="email" className="form-control"  aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" className="form-text">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={this.handlePassword} type="password" className="form-control"  placeholder="Password" required/>
                    </div>
                    {/* <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" />
                        <label class="form-check-label" for="flexRadioDefault1">
                            Default radio
                        </label>
                    </div>
                    <div class="form-check">
                        <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked />
                        <label class="form-check-label" for="flexRadioDefault2">
                            Default checked radio
                        </label>
                    </div> */}
                    <div>
                        <label className="errormessage">{this.state.errorMessage}</label>
                        <button style={{float:"right"}}  type="submit" className="btn action-button">Signup</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Signup;