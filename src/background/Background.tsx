import React, { useRef, useEffect, useState } from "react";

const Background: React.FC = () => {
  const [audioSrc, setAudioSrc] = useState('');
  const ref = useRef<HTMLAudioElement>(null);

  const startAudio = (): Promise<void> => ref.current?.play()
    .then(function (result) {
      console.log('成功')
      console.log(result)
    })
    .catch(function (exception) {
      console.error('エラーが発生しました')
      console.error(exception)
    });
  const loadAudio = (): void => ref.current?.load();
  const pauseAudio = (): void => ref.current?.pause();

  useEffect(() => {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.audioSrc) {
        console.log('message received');
        setAudioSrc(message.audioSrc);
      };
      if (message.state == 'start') {
        loadAudio();
        startAudio();
      }
      if (message.state == 'pause') {
        pauseAudio();
      }
    });
  }, []);

  return <div>
    {
      audioSrc &&
      <audio controls autoPlay ref={ref} src={audioSrc}></audio>
    }
  </div>;
}

export default Background