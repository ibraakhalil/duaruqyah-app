'use client'
import './audioPlayer.css'
import Player from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css';
import PlayerAnimation from './PlayerAnimation';
import { useState } from 'react';
import cn from '@/utils/cn';

const AudioPlayer = () => {
    const [play, setPlay] = useState(false)

    return (
        <div id='ruqyah' className={cn('flex p-6 px-8 bg-[url("/images/ruqyahPlayer.jpg")] bg-no-repeat bg-cover bg-center rounded-[36px] gap-8 max-md:bg-[url("/images/ruqyahMobile.png")] max-sm:pb-2 max-sm:px-6')}>
            <div className='flex-grow'>
                <div>
                    <p className='text-white mb-4'>Brief Ruqyah</p>
                    <PlayerAnimation play={play} />
                </div>
                <Player
                    defaultCurrentTime="00:00"
                    defaultDuration="00:00"
                    className='ruqyah_player'
                    src="https://api.duaruqyah.com/ruqyaaudio/total_breif_ruqyah.mp3"
                    onPlay={() => setPlay(true)}
                    onPause={() => setPlay(false)}
                />
            </div>
            <div className='flex-grow text-white pl-4 max-md:hidden'>
                <h3 className=' py-2 mb-3 pl-10'>Playlist</h3>
                <div className='flex flex-col gap-2 pl-10'>
                    <p>Brief Ruqyah</p>
                    <p>Medium Ruqyah</p>
                    <p>Long Ruqyah</p>
                </div>
            </div>
        </div>
    );
}

export default AudioPlayer;


<AudioPlayer />