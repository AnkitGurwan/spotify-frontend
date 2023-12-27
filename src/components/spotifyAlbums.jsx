import React, { useEffect, useRef, useState } from 'react';

export const SpotifyAlbums = (album) => {
    const [songs,setSongs] = useState([]);
    const [loading,setLoading] = useState(true);
    const [pause,setPause] = useState(true);
    const [currentSong,setCurrentSong] = useState("");

    const getItem = async () => { 
        const accessToken = localStorage.getItem("accessToken");
        const options = {
            method : "GET",
            headers : {
                "Content-Type" : " application/json"
            }
        }
        const response = await fetch(`https://spotify-2qc7.onrender.com/tracks/${accessToken}/${album.name}`,options);

        const json = await response.json();
        setSongs(json);
        setLoading(false);
        const options2 = {
            method : "GET",
            headers : {
                "Content-Type" : " application/json"
            }
        }
    }

    useEffect(()=>{
        getItem();
    },[])

    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const audioUrl = 'https://example.com/your-song-preview.mp3'; // Replace with your actual song preview URL

    const handlePlay = () => {
        audioRef.current.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current.pause();
        setIsPlaying(false);
    };

    const handleStop = () => {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        setIsPlaying(false);
    };

  return (
        <div>
            <div className='text-black rounded-xl my-4' >
                <div className='rounded-t-xl' style={{"background-image":"url(https://i.pinimg.com/originals/ea/3d/1b/ea3d1b7f86b841a6b2a4bc85e01e4125.jpg)","objectFit":"cover"}}>
                    <div className='backdrop-blur-sm flex flex-col md:flex-row rounded-t-xl'>
                        <div className='w-full md:w-[30%] rounded-t-xl rounded-r-none '>
                            <div className='p-5'>
                                <img className='rounded-xl' src='https://linkstorage.linkfire.com/medialinks/images/e423594e-d975-4a5d-a428-1a15c8821c5a/artwork-440x440.jpg' alt='Singer'/>
                            </div>
                        </div>
                        <div className='w-full md:w-[45%] py-5 pr-3 text-white'>
                            <div className='bg-gray-950 bg-opacity-50 h-full rounded-xl p-5'>
                                <div className='flex mb-4'>
                                    <img className='h-24 w-24 rounded-xl object-cover' src='https://consequence.net/wp-content/uploads/2023/08/Karan-Aujla-photo-by-Navier-Grimes.jpg'/>
                                    <div className='flex flex-col m-2'>
                                        <div className='text-xs my-1'>Playlist</div>
                                        <div className='text-lg my-1 font-semibold'>{album.name}</div>
                                        <div className='flex text-xs my-1'>
                                            <div className=''>12 songs,</div>
                                            <div className='px-1'>1 hr 08 min</div>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className='h-[7.5rem] overflow-y-scroll'>
                                {
                                loading
                                ?
                                <div className='mt-4 bg-gray-900 bg-opacity-50 rounded-xl p-4 text-gray-300 text-center'>Loading...</div>
                                :
                                songs.length && songs.map((song) =>{
                                    return (<div onClick={()=>{setCurrentSong(song);setPause(false)}}  className="px-1 rounded-sm hover:bg-gray-900 hover:bg-opacity-40 cursor-pointer flex justify-between items-center my-3">
                                                <div className='flex flex-col'>
                                                    <div className='text-[0.75rem] w-40 font-semibold'>{song.name}</div>
                                                    <div className='flex items-center text-[0.6rem] '>
                                                        <i class="fa-brands fa-spotify text-sm mr-1"></i>
                                                        <div>{song.artists}</div>
                                                    </div>
                                                </div>
                                                <div className='text-[0.7rem] '>1:08</div>
                                                <div className='text-[0.75rem] '>
                                                    <i class="fa-solid fa-ellipsis"></i>
                                                </div>
                                            </div>)
                                    })
                                }
                                </div>
                                
                            </div>
                        </div>
                        <div className='w-full md:w-[25%] py-5 pl-2 pr-5 text-white'>
                            <div className='bg-gray-950 bg-opacity-50 h-full rounded-xl p-5' >
                                <div className='mb-4 font-bold'>Lyrics</div>
                                <div className='text-xs tracking-wider'>
                                    Gal sun lallaria ve<br/>           
                                    Ah lok mere te hasde<br/> 
                                    Paise jyada dedugi<br/> 
                                    Matching krdega ta dsde<br/> 
                                    Sunla ve dito same chahidi<br/> 
                                    Ah le photo ve Ferrari laal di<br/> 
                                    Chunni meri rangde lallaria<br/>
                                    Ve chunni meri rangde lallaria<br/> 
                                    Mere yaar di gaddi de naal di<br/> 
                                    Chunni meri rangde lallaria<br/> 
                                    Mere yaar di gaddi de naal di<br/> 
                                    Oda pange lagde a<br/> 
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center bg-black rounded-b-xl p-3 bg-opacity-40 text-gray-200'>
                    <div className='flex items-center justify-center font-semibold text-2xl mx-3'>
                        <div><i class="fa-brands fa-spotify text-2xl mx-3"></i></div>
                        <div>Spotify</div>
                    </div>
                    <div className='flex'>
                        <div>
                            <i class="fa-solid fa-angles-left text-2xl mx-3 hover:text-white hover:scale-105 cursor-pointer"></i>
                        </div>
                        <div>
                        {!pause?
                            <i onClick={()=>{setPause(!pause);handlePlay()}} class="w-4 fa-solid fa-play text-2xl mx-3 hover:text-white cursor-pointer"></i>
                            :
                            <i onClick={()=>{setPause(!pause);handlePause();}} class="w-4 fa-solid fa-pause text-2xl mx-3 hover:text-white cursor-pointer"></i>}
                        </div>
                        <div>
                            <i class="fa-solid fa-angles-right text-2xl mx-3 hover:text-white hover:scale-105 cursor-pointer"></i>
                        </div>
                    </div>
                </div>
            </div>

            {currentSong && <div className='fixed bottom-0 left-0 bg-gray-950 bg-opacity-50 w-full text-gray-300'>
                <div className='flex justify-between mx-4 md:mx-8 p-3'>
                    <div className='flex items-center'>
                        <audio  ref={audioRef} src={currentSong.previewUrl}/>
                        <div className='flex items-center'>
                            {!pause?
                            <i onClick={()=>{setPause(!pause);handlePlay()}} class="w-4 fa-solid fa-play text-2xl mx-4 md:mx-3 hover:text-white cursor-pointer"></i>
                            :
                            <i onClick={()=>{setPause(!pause);handlePause();}} class="w-4 fa-solid fa-pause text-2xl mx-4 md:mx-3 hover:text-white cursor-pointer"></i>}
                            <div>{currentSong.name}</div>
                        </div>
                    </div>
                    
                </div>
                <div></div>
            </div>}
        </div>
  )
}

export default SpotifyAlbums;
