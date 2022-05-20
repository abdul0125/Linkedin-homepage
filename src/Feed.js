import React from 'react'
import './Feed.css'
import EditIcon from '@mui/icons-material/Edit';
import InputOptions from './InputOptions';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import Avatar from '@mui/material/Avatar';


import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import VideocamIcon from '@mui/icons-material/Videocam';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentIcon from '@mui/icons-material/Assignment';

import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import CommentIcon from '@mui/icons-material/Comment';
import SendIcon from '@mui/icons-material/Send';
import ShareIcon from '@mui/icons-material/Share';


function Feed() {
  return (
    <div className='feed'>
    <div className='feed_inputContainer'>
        <form>

        <EditIcon/>
        <input type={'text'} placeholder='Write a public post'/>
        <button type='submit'></button>
        </form>

        <div className='feed_inputOptions'>

        <InputOptions Icon={AddPhotoAlternateIcon} title='photo' colour="lightblue"/>
        <InputOptions Icon={VideocamIcon} title='video' colour="orange"/>
        <InputOptions Icon={CalendarMonthIcon} title='Event' colour="gray"/>
        <InputOptions Icon={AssignmentIcon} title='Write Article' colour="pink"/>
        
        </div>


    </div>
    <div className='feeds'>

        <div className='feed_feeds_top'>

        <Avatar
  alt="Remy Sharp"
  src="https://i.pinimg.com/550x/76/75/b4/7675b498dcbe8ed610b63cccc16c8744.jpg"
  sx={{ width: 62, height: 62 }}
/>
        <div className='name'>
        <h3>
            Store tiffin
        </h3>
        <h4>
            pizza high college
        </h4>

        </div>

        </div>

        <p>
            thisi si sthe content
        </p>

        <div className='feed_feeds_icons'>
        <InputOptions Icon={ThumbUpIcon} title='Like' colour="grey"/>
        <InputOptions Icon={CommentIcon} title='Comment' colour="grey"/>
        <InputOptions Icon={ShareIcon} title='Share' colour="grey"/>
        <InputOptions Icon={SendIcon} title='Send' colour="grey"/>


        </div>
    </div>
    <div className='feeds'>

        <div className='feed_feeds_top'>

        <Avatar
  alt="Remy Sharp"
  src="https://i.pinimg.com/550x/76/75/b4/7675b498dcbe8ed610b63cccc16c8744.jpg"
  sx={{ width: 62, height: 62 }}
/>
        <div className='name'>
        <h3>
            Store tiffin
        </h3>
        <h4>
            pizza high college
        </h4>

        </div>

        </div>

        <p>
            thisi si sthe content
        </p>

        <div className='feed_feeds_icons'>
        <InputOptions Icon={ThumbUpIcon} title='Like' colour="grey"/>
        <InputOptions Icon={CommentIcon} title='Comment' colour="grey"/>
        <InputOptions Icon={ShareIcon} title='Share' colour="grey"/>
        <InputOptions Icon={SendIcon} title='Send' colour="grey"/>


        </div>
    </div>
    <div className='feeds'>

        <div className='feed_feeds_top'>

        <Avatar
  alt="Remy Sharp"
  src="https://i.pinimg.com/550x/76/75/b4/7675b498dcbe8ed610b63cccc16c8744.jpg"
  sx={{ width: 62, height: 62 }}
/>
        <div className='name'>
        <h3>
            Store tiffin
        </h3>
        <h4>
            pizza high college
        </h4>

        </div>

        </div>

        <p>
            thisi si sthe content
        </p>

        <div className='feed_feeds_icons'>
        <InputOptions Icon={ThumbUpIcon} title='Like' colour="grey"/>
        <InputOptions Icon={CommentIcon} title='Comment' colour="grey"/>
        <InputOptions Icon={ShareIcon} title='Share' colour="grey"/>
        <InputOptions Icon={SendIcon} title='Send' colour="grey"/>


        </div>
    </div>
    <div className='feeds'>

        <div className='feed_feeds_top'>

        <Avatar
  alt="Remy Sharp"
  src="https://i.pinimg.com/550x/76/75/b4/7675b498dcbe8ed610b63cccc16c8744.jpg"
  sx={{ width: 62, height: 62 }}
/>
        <div className='name'>
        <h3>
            Store tiffin
        </h3>
        <h4>
            pizza high college
        </h4>

        </div>

        </div>

        <p>
            thisi si sthe content
        </p>

        <div className='feed_feeds_icons'>
        <InputOptions Icon={ThumbUpIcon} title='Like' colour="grey"/>
        <InputOptions Icon={CommentIcon} title='Comment' colour="grey"/>
        <InputOptions Icon={ShareIcon} title='Share' colour="grey"/>
        <InputOptions Icon={SendIcon} title='Send' colour="grey"/>


        </div>
    </div>
    <div className='feeds'>

        <div className='feed_feeds_top'>

        <Avatar
  alt="Remy Sharp"
  src="https://i.pinimg.com/550x/76/75/b4/7675b498dcbe8ed610b63cccc16c8744.jpg"
  sx={{ width: 62, height: 62 }}
/>
        <div className='name'>
        <h3>
            Store tiffin
        </h3>
        <h4>
            pizza high college
        </h4>

        </div>

        </div>

        <p>
            thisi si sthe content
        </p>

        <div className='feed_feeds_icons'>
        <InputOptions Icon={ThumbUpIcon} title='Like' colour="grey"/>
        <InputOptions Icon={CommentIcon} title='Comment' colour="grey"/>
        <InputOptions Icon={ShareIcon} title='Share' colour="grey"/>
        <InputOptions Icon={SendIcon} title='Send' colour="grey"/>


        </div>
    </div>

    </div>
  )
}

export default Feed