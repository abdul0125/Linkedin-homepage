import React from 'react'
import './Sidebar.css'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Avatar from '@mui/material/Avatar';



function Sidebar() {

    const recentItems = (items) =>(
        <div className='sidebar_recentItem'>
            <span className='sidebar_hash'>#</span> <p>{items}</p>

        </div>
    ) 

  return (
    <div className='Sidebar'>

        <div className='Sidebar_upper'>
            <img src='https://images.unsplash.com/photo-1521449256184-170b4a4c437c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169' alt=''/>
            {/* <AccountCircleIcon className='Sidebar_avatar' /> */}
            <Avatar 
  alt="Remy Sharp"
  src="https://i.pinimg.com/550x/76/75/b4/7675b498dcbe8ed610b63cccc16c8744.jpg"
  sx={{ width: 80, height: 80,marginLeft:"36%"}}
/>

            <h2>Shaun shah</h2>
            <h4>Microsoft/Ex-Facebook</h4>
            <div className='Sidebar_stats'>
                <div className='Sidebar_stat'>
                    <p>who viewed you</p>
                    <p className='Sidebar_stat_number'>2015</p>

                </div>
                <div className='Sidebar_stat'>
                    <p>No of post Views</p>
                    <p className='Sidebar_stat_number'>2015</p>

                </div>
            </div>

        </div>
        <div className='Sidebar_lower'>
            <h2>
                Recent
            </h2>
            {recentItems("React")}
            {recentItems("Node")}
            {recentItems("MongoDb")}
            {recentItems("MERN")}
            {recentItems("Python")}

        </div>
    </div>
  )
}

export default Sidebar
