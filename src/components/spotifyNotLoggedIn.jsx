import React from 'react';
import Navbar from './navbar';
import querystring from 'query-string';

const spotifyNotLoggedIn = () => {
 
    const loginHandler = () => {
        var scope = 'user-read-private user-read-email';
        const url = `https://accounts.spotify.com/authorize?${
                    querystring.stringify({
                    response_type: 'code',
                    client_id: "3e12eaa298f54ea0bbcb4abb09dd2af2",
                    scope: scope,
                    redirect_uri: "http://localhost:3000/"
                    })}`
        window.location.href = url;
    }

    return (
        <div>
            <Navbar/>
            <div className='my-4 bg-green-500 bg-opacity-70 rounded-lg p-8 flex justify-center items-center cursor-pointer'>
                <div onClick={loginHandler} className='flex text-green-400 font-semibold text-lg p-2 rounded-md bg-black hover:text-green-500'>
                    <i class="fa-brands fa-spotify text-2xl mx-2 hover:text-gray-300 cursor-pointer hover:scale-105"></i>
                    <div>Connect with Spotify</div>
                </div>
            </div>
        </div>
    )
}

export default spotifyNotLoggedIn