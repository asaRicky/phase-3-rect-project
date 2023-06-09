import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";

function Login() {

    const navigate = useNavigate()
    const [user_email, SetUser_email] = useState("")
    const [user_password, SetUser_password] = useState("")

    function handleSubmit(e) {
        e.preventDefault()

    fetch("http://127.0.0.1:9292/auth/login", {
        method: 'POST',
        body: JSON.stringify({
        email: user_email,
        password: user_password
      })
    })
    .then((response) => response.json())
    .then((data) => {
          if (data.message === "Login success!") {
          alert(data.message)
          navigate("/dashboard")
        } else if (data.message === "Invalid email or password"){
            alert(data.message)
            redirect('/login')
        }})
      }

    return(
        <form onSubmit={e => handleSubmit(e)}>
            <label><b>Email</b></label>
            <input type="text" placeholder="Insert your email" value={user_email} onChange={e => SetUser_email(e.target.value)} required></input>
            <label><b>Password</b></label>
          
            <input type="number" placeholder="Insert your password." value={user_password} onChange={e => SetUser_password(e.target.value)} required></input>
            <input type="submit" ></input>
        </form>
    )
}

export default Login;