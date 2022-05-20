import React from 'react'
import './InputOptions.css'

function InputOptions({title,Icon,colour}) {
  return (
    <div className='inputOptions'>

        <Icon style={{color:colour}}/>
        <div className='inputOptions_title'>
        {title}

        </div>
    </div>
  )
}

export default InputOptions