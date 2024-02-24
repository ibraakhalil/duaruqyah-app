"use client";

import { useState } from "react";
import AudioPlayer, { RHAP_UI } from "react-h5-audio-player";

export function PLayer({ src }: { src: string }) {
  const [play, setPlay] = useState(false)

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
      customControlsSection={[RHAP_UI.MAIN_CONTROLS, RHAP_UI.PROGRESS_BAR, RHAP_UI.CURRENT_LEFT_TIME]}
      layout="horizontal"
    />
  );
}
