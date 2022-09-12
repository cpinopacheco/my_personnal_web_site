import playButton from "../../assets/images/play.svg";
import stopButton from "../../assets/images/stop.svg";
import pauseButton from "../../assets/images/pause.svg";
import styles from "./AudioPlayer.module.css";
import bgAudio from "../../assets/audio/bg_audio.mp3";
import useApp from "../../hooks/useApp";
import { AnimatePresence, motion } from "framer-motion";
import WaveSound from "../waveSound/WaveSound";
import Typewriter from "typewriter-effect";

const audio = new Audio(bgAudio);

const AudioPlayer = () => {
  const { isPlaying, setIsPlaying } = useApp();

  const handlePlay = () => {
    if (!isPlaying) {
      audio.volume = 0.5;
      audio.play();
    }
    setIsPlaying(true);
  };

  const handleStop = () => {
    if (isPlaying) {
      audio.pause();
      audio.currentTime = 0;
    }
    setIsPlaying(false);
  };

  const handlePause = () => {
    if (isPlaying) {
      audio.pause();
    }
    setIsPlaying(false);
  };

  //evento que escucha cuando el audio finaliza
  audio.addEventListener("ended", () => {
    setIsPlaying(false);
  });

  return (
    <div className={styles.container}>
      <button className={styles.music_button} onClick={handlePlay}>
        <img src={playButton} alt="playButton" />
      </button>
      <button className={styles.music_button} onClick={handleStop}>
        <img src={stopButton} alt="stopButton" />
      </button>
      <button className={styles.music_button} onClick={handlePause}>
        <img src={pauseButton} alt="pauseButton" />
      </button>

      <AnimatePresence>{isPlaying && <WaveSound />}</AnimatePresence>

      <AnimatePresence>
        {!isPlaying && (
          <motion.div
            className={styles.container_textEffect}
            initial={{ opacity: 0 }}
            animate={{
              opacity: 1,
              ease: "easeOut",
              transition: { duration: 2, delay: 1 },
            }}
            exit={{
              opacity: 0,
              x: -100,
              transition: { duration: 1.5 },
            }}
          >
            <Typewriter
              className={`${styles.textEffect}`}
              options={{
                strings: ["Dale PLAY y lleva tú experiencia al límite!"],
                autoStart: true,
                loop: true,
              }}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AudioPlayer;
