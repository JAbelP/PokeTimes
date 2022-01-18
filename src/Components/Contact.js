import React from 'react'
import { useNavigate } from 'react-router-dom'



const Contact = () =>{
    let navigate = useNavigate()
    setTimeout(() => {
        navigate('/about')
    },2000)
    return(
        <div className="container">
            <h4 className="center">Contact</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe, error voluptatibus facilis commodi dolorem odio quidem incidunt iure? Fugiat eaque vero accusantium reiciendis iste vel veniam, optio et veritatis quae.</p>
        </div>
    )
}

export default Contact;