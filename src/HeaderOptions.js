import React from 'react'
import './HeaderOptions.css'

function HeaderOptions({Icon,title}) {
  return (
    <div className='HeaderOptions'>
        {Icon && <Icon className='HeaderOptions_icon'/>}
        <h3 className='HeaderOptions_title'>{title}</h3>

    </div>
  )
}

export default HeaderOptions