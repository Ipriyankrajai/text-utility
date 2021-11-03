import React from 'react'

export default function Alert(props) {
    // console.log(props.alert.type)
    return (
        <div style={{ height: '60px' }}>
        {props.alert && <div>
             <div className={`alert  alert-${props.alert.type}`} role="alert">
            <strong>{props.alert.msg}</strong>
            </div>
        </div>}
        </div>
    )
}
