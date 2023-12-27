import React, { useEffect, useState } from 'react';
import Netflix from '../components/netflix';
import Prime from '../components/prime';
import YouTube from '../components/youtube';
import SpotifyHome from '../components/spotifyHome';
import Navbar from '../components/navbar';
import querystring from 'query-string';
import Loader from '../components/loader';

const Home = () => {
    const [auth,setAuth] = useState(false);
    const [showAlbum,setShowAlbum] = useState(false);
    const [loading,setLoading] = useState(false);
    // const [code,setCode] = useState("");
    
    

    const getItem = async () => { 
        const code = new URLSearchParams(window.location.search).get('code');
        const options = {
            method : "POST",
            headers : {
                "Content-Type" : " application/json"
            },
            body : JSON.stringify({code})
        }
        const response = await fetch("https://spotify-2qc7.onrender.com/login",options);

        if(response.status != 400)
        {
            // alert("bye")
            window.history.pushState({}, null, "/");
            setAuth(true);
            setLoading(false);
        }
        else 
        {
            // alert("hii")
            setAuth(false)
            setLoading(false);
        }

        const json = await response.json();
        console.log(json);
        localStorage.setItem('accessToken',json.accessToken);

        
    }

    useEffect(()=>{
        getItem();
    },[])

    const loginHandler = (e) => {
        e.preventDefault();
        setLoading(true);
        var scope = 'user-read-private user-read-email';
        const url = `https://accounts.spotify.com/authorize?${
                    querystring.stringify({
                    response_type: 'code',
                    client_id: "3e12eaa298f54ea0bbcb4abb09dd2af2",
                    scope: scope,
                    redirect_uri: "https://spotify-frontend-liard.vercel.app/"
                    })}`
        window.location.href = url;
    }

    return (
        <div className='py-3 md:py-6 px-4 md:px-16 h-screen' style={{"background-image":"url(https://images.unsplash.com/photo-1515542706656-8e6ef17a1521?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aG9tZSUyMGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D)"}}>
            <div className='overflow-y-scroll h-[29rem] w-full bg-opacity-30 rounded-xl bg-gray-950 round py-3 md:py-6 px-2 md:px-12' style={{"fontFamily":"Manrope"}}>
                
                <Navbar/>
                {
                loading
                ?
                <Loader/>
                :
                !auth
                ?
                <div>
                    <div className='my-2 md:my-4 bg-green-500 bg-opacity-70 rounded-lg p-2 md:p-8 flex justify-center items-center cursor-pointer'>
                        <div onClick={loginHandler} className='flex items-center text-green-400 font-semibold text-lg p-1 md:p-2 rounded-md bg-black hover:text-green-500'>
                            <i class="fa-brands fa-spotify text-2xl mx-1 md:mx-2 hover:text-gray-300 cursor-pointer hover:scale-105"></i>
                            <div className=' text-sm md:text-lg'>Connect with Spotify</div>
                        </div>
                    </div>
                </div>
                :
                <SpotifyHome/>}

                <div className='w-full my-4 grid grid-cols-1 md:grid-cols-3 text-white gap-2'>
                    <Netflix/>
                    <Prime/>
                    <YouTube/>
                </div>
                
            
            </div>
        </div>
  )
}

export default Home;