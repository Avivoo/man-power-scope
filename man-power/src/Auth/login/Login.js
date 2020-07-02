import React,{useState} from 'react'
import Form from "../../components/form/Form"
function Login() {
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const loginfunc = (e) => {
      e.preventDefault();
    }  
    return (
       <Form />
    )
}

export default Login
