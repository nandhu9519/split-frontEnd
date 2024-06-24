import React from 'react'
import './Error.css'

const Error = (props) => {

  const {message,closeError}=props;

  return (
    <div class="alert">
    <span class="closebtn" onClick={()=>closeError()}>&times;</span>
    {message} 
    </div>
  )
}

export default Error