"use client";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";
import './duaPlayer.css'
type PlayerProps = { play: boolean, setPlay: any, src: string }

export function PLayer({ play, setPlay, src }: PlayerProps) {

  const handlePlay = (e: any) => {
    setPlay(true)
  }
  const handlePause = (e: any) => {
    setPlay(false)
  }

  return (
    <AudioPlayer
      src={src}
      customAdditionalControls={[]}
      customVolumeControls={[]}
      onPlay={handlePlay}
      onPause={handlePause}
      className={`dua-player max-sm:dua-player-sm ${play ? 'play' : null}`}
      customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.PROGRESS_BAR, RHAP_UI.CURRENT_LEFT_TIME, RHAP_UI.LOOP]}
      layout="horizontal"
    />
  );
}
