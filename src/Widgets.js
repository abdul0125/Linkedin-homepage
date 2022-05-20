import { Twitter } from '@mui/icons-material'
import InfoIcon from '@mui/icons-material/Info';
import CircleIcon from '@mui/icons-material/Circle';
import React from 'react'
import './Widgets.css'

function Widgets() {
    const News_article = (heading,more)=>(
        <div className='News_article'>
            {/* <CircleIcon /> */}
            ~{heading}
        <p>

            {more}
        </p>
        </div>
    

    )
  return (
    <div className='Widgets'>
        <div className='Widgets_header' >

        <h4>
            Linkedin News
        </h4>

        <InfoIcon style={{color:'#575796'}}/>
        </div>
        <div className='News'>

        {News_article('Elon musk buys Twitter','got the deal')}
        {News_article('MSFT doubles salary budget','Nadela commented')}
        {News_article('Hybrid work model ','konw more about it')}
        {News_article('Tesla stations opens for all','read more')}
        {News_article('Linkedin clone completed',':)')}
        </div>
    
    </div>

  )
}

export default Widgets