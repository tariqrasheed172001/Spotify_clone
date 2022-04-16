import React from 'react'
import { BsMusicNoteList, BsVolumeUpFill } from 'react-icons/bs'
import { FaDesktop } from 'react-icons/fa'
import Track from "../img/track.png"

function TrackList() {
  return (
    <div className='trackList'>
      <div className='top'>
          <img src={Track} alt='' />
          <p className='trackName'>
            Sample name 
            <span className='trackSpan'>Artist</span>
          </p>
      </div>
      <div className='bottom'>
          <i><BsVolumeUpFill /></i>
          <input type="range" />
          <i><BsMusicNoteList /></i>
          <i><FaDesktop /></i>
      </div>
    </div>
  )
}

export  {TrackList}