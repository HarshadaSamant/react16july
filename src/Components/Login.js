import {Component} from "react"
import { Link  , withRouter} from "react-router-dom"
import axios from "axios"
import { connect } from "react-redux"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Login extends Component{

    notifyError = () => toast.error('Invalid credentials', {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    constructor(){
        super()
        // initialising the state
        this.state = {
            name:"Harshada",
            findCredentials: false
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
                    payload: response.data,
                    token: response.data.token
                })
                // alert(response.data.token)
                localStorage.token = response.data.token;
                this.props.history.push("/");
            } else {
                // alert("Invalid credentials");
                this.notifyError();
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
            this.setState({findCredentials: true})
        }, (error) => {
            console.log("error from forget api", error)
        })
        console.log("User name: ", this.user)
       event.preventDefault()
    }

    render(){
        return (
            <div style={{width:"100%", height:"calc(100% - 56px)", margin:"auto", background: "url(./././cake_bg.jpeg) no-repeat", backgroundSize:"100% 100%"}}>
                <ToastContainer />
                <form className="loginform" onSubmit={this.login}>
                    <h1>Login Here</h1>
                    <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input onChange={this.handleEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
                        <small id="emailHelp" className="form-text ">We'll never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input onChange={this.handlePassword} type="password" className="form-control"  placeholder="Password" required />
                    </div>
                    <div>
                        <label className="errormessage">{this.state.errorMessage}</label>
                        <button style={{float:"right"}}  type="submit"  className="btn action-button">Submit</button>
                        <div style={{width: "100%", display: "flex", justifyContent: "flex-end", color: "blue", margin: "20px 0"}}>
                            <a style={{float:"right"}} onClick={this.forget} type="submit" className="btn btn-link">Forget password</a>
                        </div>
                        {this.state.findCredentials &&
                            <div>
                                <p>Your credentials has been mailed to you on registered email id. Please go to your email account to check the credentials</p>
                            </div>
                        }
                    </div>
                </form>
            </div>
        )
    }
}

Login = withRouter(Login)
export default connect() (Login)
