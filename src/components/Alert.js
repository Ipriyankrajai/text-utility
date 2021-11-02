import React from 'react'

export default function Alert(props) {
    // console.log(props.alert.type)
    return (
        props.alert && <div>
             <div class={`alert  alert-${props.alert.type}`} role="alert">
            <strong>{props.alert.msg}</strong>
            </div>
        </div>
    )
}
