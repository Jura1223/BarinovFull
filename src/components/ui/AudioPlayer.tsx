import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2 } from "lucide-react";

interface AudioPlayerProps {
  audioSrc: string;
  label: string;
  className?: string;
}

export function AudioPlayer({ audioSrc, label, className = "" }: AudioPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [speed, setSpeed] = useState(1);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
    };
  }, []);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const cycleSpeed = () => {
    const next = speed === 1 ? 1.5 : speed === 1.5 ? 2 : 1;
    setSpeed(next);
    if (audioRef.current) audioRef.current.playbackRate = next;
  };

  const formatTime = (time: number) => {
    if (isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`group flex items-center gap-3 rounded-xl border border-white/10 bg-[#0E0E0E] hover:border-[var(--brand)]/40 transition-all px-4 py-2.5 ${className}`}>
      <audio ref={audioRef} src={audioSrc} />
      
      <button
        type="button"
        onClick={togglePlay}
        className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[var(--brand)] text-black transition-transform hover:scale-105"
      >
        {isPlaying ? (
          <Pause className="h-4 w-4" />
        ) : (
          <Play className="h-4 w-4 fill-current ml-0.5" />
        )}
      </button>

      <div className="flex-1 min-w-0">
        <div className="text-left text-xs text-white/88">{label}</div>
        <div className="mt-1 flex items-center gap-2">
          <Volume2 className="h-3 w-3 text-[var(--brand)]/60" />
          <div className="flex-1 h-1 bg-white/10 rounded-full overflow-hidden">
            <div 
              className="h-full bg-[var(--brand)] transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="text-xs text-white/86 min-w-[30px] text-right">
            {formatTime(currentTime)}
          </span>
        </div>
      </div>

      <button
        type="button"
        onClick={cycleSpeed}
        aria-label={`Скорость воспроизведения ${speed}×`}
        className="min-h-9 min-w-[3.25rem] rounded-full border border-[var(--brand)]/60 px-2.5 text-xs font-semibold text-[var(--brand)] transition-colors hover:bg-[var(--brand)] hover:text-black"
      >
        {String(speed).replace(".", ",")}×
      </button>
    </div>
  );
}
