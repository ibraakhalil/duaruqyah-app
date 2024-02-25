'use client'
import './audioPlayer.css'
import Player from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import PlayerAnimation from './PlayerAnimation';
import { useState } from 'react';

const AudioPlayer = () => {
    const [play, setPlay] = useState(false)

    return (
        <div className='flex  p-6 px-8 bg-[url("/images/ruqyahPlayer.jpg")] bg-no-repeat bg-cover bg-center rounded-[36px] gap-8'>
            <div className='flex-grow'>
                <div>
                    <p className='text-white mb-4'>Brief Ruqyah</p>
                    <PlayerAnimation play={play} />
                </div>
                <Player
                    defaultCurrentTime="00:00"
                    defaultDuration="00:00"
                    className='ruqyah'
                    src="https://api.duaruqyah.com/ruqyaaudio/total_breif_ruqyah.mp3"
                    onPlay={() => setPlay(true)}
                    onPause={() => setPlay(false)}
                />
            </div>
            <div className='flex-grow text-white'>
                <h3 className=' py-2 mb-3'>Playlist</h3>
                <div className='flex flex-col gap-2'>
                    <p>Brief Ruqyah</p>
                    <p>Medium Ruqyah</p>
                    <p>Long Ruqyah</p>
                </div>
            </div>
        </div>
    );
}

export default AudioPlayer;