import React from 'react'
import { FaPlus } from 'react-icons/fa'
import { BsMusicNoteList } from 'react-icons/bs'
import { BsTrash } from 'react-icons/bs'
import { playList } from './playList'



function MenuPlayList() {
  return (
    <div className='playListContainer'>
         <div className='nameContainer'>
             <p>PlayList</p>
             <i><FaPlus/></i>
         </div>
         <div className='playListScroll'>
            {
                playList && playList.map((list)=>(
                    <div className='playList' key={list.id}>
                        <i className='list'><BsMusicNoteList /></i>
                        <p>{list.name}</p>
                        <i className='trash'><BsTrash /></i>
                    </div>
                ))
            }
            
         </div>
    </div>
  )
}

export  {MenuPlayList} 