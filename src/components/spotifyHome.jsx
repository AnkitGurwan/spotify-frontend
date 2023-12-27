import React, { useEffect, useState } from 'react'
import Navbar from './navbar'
import SpecificAlbum from './spotifyAlbums';
import Loader from '../components/loader';

const SpotifyHome = () => {
    const [specific,setSpecific] = useState(false);
    const [loading,setLoading] = useState(true);
    const [albums,setAlbums] = useState("");

    const getItem = async () => { 
        const accessToken = localStorage.getItem("accessToken");
        const options = {
            method : "GET",
            headers : {
                "Content-Type" : " application/json"
            }
        }
        // console.log(accessToken)
        const response = await fetch(`https://spotify-2qc7.onrender.com/albums/${accessToken}`,options);
        const json = await response.json();
        
        setLoading(false);
        setAlbums(json);
    }

    useEffect(()=>{
        getItem();
    },[])

    const openAlbum = () => {
        setSpecific(true);
    } 
    return (
        <div>
            {loading
            ?
            <Loader/>
            :
            <div>
            {!specific?
                <div>
                    <div className='mt-4 bg-gray-900 bg-opacity-50 rounded-t-xl p-4 text-gray-300'>
                        <div onClick={openAlbum} className='my-1 bg-gray-900 bg-opacity-40 w-fit p-2 rounded-lg flex items-center cursor-pointer hover:scale-105'>
                            <img className='h-8 w-8 object-cover mr-2 rounded-md' src={albums.image}/>
                            <div>{albums.name}</div>
                        </div>
                        
                    </div>
                    <div className='flex justify-between items-center bg-black rounded-b-xl p-2 bg-opacity-40 text-gray-200'>
                            <div className='flex items-center justify-center font-semibold text-2xl mx-3'>
                                <div><i class="fa-brands fa-spotify text-2xl mx-3"></i></div>
                                <div>Spotify</div>
                            </div> 
                    </div>
                </div>
                :
                <SpecificAlbum name={albums.name} src={albums.image} artists={albums.artists}/>
            }
            </div>
            }
        </div>
  )
}

export default SpotifyHome