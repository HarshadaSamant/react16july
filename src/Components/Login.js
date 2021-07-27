import {Component} from "react"
import { Link  , withRouter} from "react-router-dom"
import axios from "axios"
import { connect } from "react-redux"

class Login extends Component{
    

    constructor(){
        super()
        // initialising the state
        this.state = {
            name:"Harshada"
        }
    }
    user = {}

    handleEmail = (event)=>{
        this.user.email = event.target.value
      }
    handlePassword = (event)=>{
         this.user.password = event.target.value
       }
    login = (event)=>{
        let apiurl =  "https://apifromashu.herokuapp.com/api/login"
        axios({
            method:"post",
            url: apiurl,
            data: this.user
        }).then((response) => {
            console.log("response from login api", response);
            if(response.data.token) {
                this.props.dispatch({
                    type: "Login",
                    payload: response.data
                })
                localStorage.token = response.data.token;
                this.props.history.push("/");
            } else {
                alert("Invalid credentials");
            }
        }, (error) => {
            console.log("error from login api", error)
        })
        console.log("User name: ", this.user)
       event.preventDefault()
    }

    forget = (event)=>{
        let apiurl = "https://apifromashu.herokuapp.com/api/recoverpassword"
        axios({
            method:"post",
            url: apiurl,
            data: this.user
        }).then((response) => {
            console.log("response from forget api", response)
        }, (error) => {
            console.log("error from forget api", error)
        })
        console.log("User name: ", this.user)
       event.preventDefault()
    }

    render(){
        return (
            <div style={{width:"50%" , margin:"auto"}}>
                <form>
                    <h1>Login Here</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={this.handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={this.handlePassword} type="password" className="form-control"  placeholder="Password" />
                    </div>
                    <div>
                        <label className="errormessage">{this.state.errorMessage}</label>
                        <button style={{float:"right"}} onClick={this.login} type="submit"  className="btn btn-primary">Submit</button>
                        <div style={{width: "100%", display: "flex", justifyContent: "flex-end", color: "blue", margin: "20px 0"}}>
                            <a style={{float:"right"}} onClick={this.forget} type="submit" className="btn btn-link">Forget password</a>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

Login = withRouter(Login)
export default connect() (Login)