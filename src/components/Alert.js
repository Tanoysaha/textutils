import React from 'react'

function Alert(props) {
    const capFirst=(word)=>{
let lower=word.toUpperCase();
return lower.charAt(0)+lower.slice(1).toLowerCase();
    }
  return (
    props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
    {capFirst(props.alert.type)}:{props.alert.msg}
  </div>
  )
}

export default Alert