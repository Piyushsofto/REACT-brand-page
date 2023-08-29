import React from 'react'
import './myStyle.css'

const style = {
    color:'green'
}
function stylesheets(props) {
    let className = props.primacy ? 'primacy' : ''
  return (
    <div>
    <h1 className={`${className} font-xl`}>stylesheets</h1>
    <p style={style}>hello world</p>
    </div>

  )
}

export default stylesheets