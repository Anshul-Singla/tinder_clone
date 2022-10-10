import React from 'react'
import './Header.css';
import PersonIcon from '@material-ui/icons/Person';
import IconButton from '@material-ui/core/IconButton';
import ForumIcon from '@material-ui/icons/Forum';


const Header = () => {
  return (
    <div className='header'>
        <IconButton>
            <PersonIcon fontSize='large' className='header__icon' />
        </IconButton>
        <img className='header__logo' src='https://w7.pngwing.com/pngs/698/493/png-transparent-tinder-hd-logo-thumbnail.png' alt='tinder Logo'  />
        <IconButton>
            <ForumIcon fontSize='large'className='header__icon' />
        </IconButton>
    </div>
  )
}

export default Header