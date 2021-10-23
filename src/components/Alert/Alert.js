import React from 'react'

const Alert = (props) => {
    const capitalizeFirstLetter = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1) 
    }
    return (
        props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{capitalizeFirstLetter(props.alert.type)}</strong>: {props.alert.msg}
        </div>
    )
}

export default Alert
