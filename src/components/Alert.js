import React from 'react'

export default function Alert(props) {
  
  function wcCapsAlertType(str)
  {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  if(typeof props.alert === 'object' && props.alert !== null && props.alert !== 'undefined')
  {
    return (
      <>
        <div className="alert alert-warning alert-dismissible fade show" role="alert" style={{minHeight: '58px'}}>
          <strong>{wcCapsAlertType(props.alert.type)}</strong>:{props.alert.message}
        </div>
      </>
    )
  }
  else
  {
    return (
      <>
        <div className="alert alert-dismissible fade show" role="alert" style={{minHeight: '58px'}}>
        </div>
      </>
    )

  }
}