import React, { Component } from "react"
import classes from "./login.module.css"
import { NavLink } from "react-router-dom"

class Login extends Component {
    login = () => {
        console.log("Login~~~")
    }

    render() {
        return (
        <div className={classes.Login}>
            <h2 className={classes.header}>
                Log in to continue
            </h2>
            <div>
                <input type="text" placeholder="Email" className={classes.textbox}/>
                <input type="password" placeholder="Password" className={classes.textbox}/>
                <a href="" className={classes.forgot}>Forgot Password?</a>
            </div>
            <button className={classes.loginButton} onClick={this.login} disabled={false}>Log In</button>
            <div className={classes.signup}>
                <span>
                    Don't have an account? {" "}
                </span>
                <a href="" className={classes.signupButton}>Sign up</a>
            </div>
        </div>
        )
    }
}

export default Login