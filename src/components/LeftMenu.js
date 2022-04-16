import React from 'react'
import '../styles/LeftMenu.css';
import { FaEllipsisH } from 'react-icons/fa';
import { FaSpotify } from 'react-icons/fa';
import { BiSearchAlt } from 'react-icons/bi';
import { MenuList } from './MenuList';
import { Menu } from './Menu';
import { MenuPlayList } from './MenuPlayList';
import { TrackList } from './TrackList';


function LeftMenu() {
  return (
    <div className='leftMenu'>
        <div className='logoContainer'>
            <i><FaSpotify /></i>
            <h2>Spotify</h2>
            <i><FaEllipsisH /></i>
        </div>
        <div className='searchBox'>
           
            <input type="text" placeholder="search..." />
            <i className='searchIcon'><BiSearchAlt/></i>
        </div>

       <Menu title="Menu" MenuObject={MenuList} />
       <MenuPlayList />
       <TrackList />
    </div>
  )
}

export {LeftMenu}