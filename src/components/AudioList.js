import React, { useState } from 'react'
import { FaHeadphones, FaHeart, FaRegClock, FaRegHeart } from 'react-icons/fa'
import {Songs} from "./Songs"

function AudioList() {

    const [song,setSong] = useState(Songs[0].song);

    const [img,setImage] = useState(Songs[0].imgSrc);

    const changeFavourite=(id)=>{
        Songs.forEach((song)=>{
            if(song.id == id){
                song.favourite = !song.favourite;
            }
        });
    };
  return (
    <div className="audioList">
        <h2 className='title'>
            The List
             <span>{`${Songs.length} songs`}</span>
        </h2>

        <div className='songsContainer'>
         
            {
                Songs && Songs.map((song,index) => (
                
            <div className='songs' key={song?.id}>
                <div className='connt'>{`#${index+1}`}</div>
                <div className='song'>

                    <div className='imgBox'>
                        <img src={song?.imgSrc} alt=''></img>
                     </div>

                    <div className='section'>
                        <p className='songName'>
                            {song?.songName}
                            <span className='spanArtist'>
                                {song?.artist}
                            </span>
                        </p>

                        <div className='hits'>

                            <p className='hit'>
                                <i><FaHeadphones/></i> 
                                95,490,102
                            </p>
                            <p className='duration'>
                                <i><FaRegClock/></i> 
                                03.04
                            </p>

                            <div className='favourite'
                                onClick={()=> changeFavourite(song?.id)}
                            >
                                {
                                    song?.favourite ?(
                                        <i><FaHeart/></i>
                                    ):(
                                        <i><FaRegHeart/></i>
                                    )
                                }
                            </div>

                        </div>
                    </div>
                </div>
            </div>
                ))
            }
          
            
        </div>
    </div>
  )
}

export  {AudioList}