import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import HeaderOptions from './HeaderOptions';
import HomeIcon from '@mui/icons-material/Home';
import ChatIcon from '@mui/icons-material/Chat';
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import WorkIcon from '@mui/icons-material/Work';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

function Header() {
  return (
    <div className='header'>
       

        <div className='header_left'>
        <LinkedInIcon style={{color:"blue",fontSize: '330%'}}/>
            <img src='' alt=''/>
            
            <div className='header_search'>
                <SearchIcon/>
                <input type="text" placeholder='Search'/> 

            </div>

        </div>
        <div className='header_right' >
            <HeaderOptions title='Home' Icon={HomeIcon}/>
            <HeaderOptions title='Messages' Icon={ChatIcon} />
            <HeaderOptions title='My Network' Icon={PeopleAltIcon} />
            <HeaderOptions title='Notifications' Icon={NotificationsActiveIcon} />
            <HeaderOptions title='Jobs' Icon={WorkIcon} />
            <HeaderOptions title='Me' Icon={AccountBoxIcon} />

        </div>

    </div>
  )
}

export default Header