import { useRef, useState, useEffect } from 'react'
import { Slider } from '@/components/ui/slider'
import { Button } from '@/components/ui/button'
import {
  Play,
  Pause,
  RotateCcw,
  RotateCw,
  Volume2,
  VolumeX,
  Volume1,
} from 'lucide-react'
import { cn } from '@/lib/utils'

interface CustomAudioPlayerProps {
  src: string
  isActive: boolean
  onPlay: () => void
  trackTitle: string
}

export function CustomAudioPlayer({
  src,
  isActive,
  onPlay,
  trackTitle,
}: CustomAudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [volume, setVolume] = useState(1)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    if (isActive && audioRef.current) {
      audioRef.current.play().catch((e) => console.log('Autoplay blocked', e))
      setIsPlaying(true)
    } else if (!isActive && audioRef.current) {
      audioRef.current.pause()
      setIsPlaying(false)
    }
  }, [isActive])

  const togglePlay = () => {
    if (!audioRef.current) return

    if (isPlaying) {
      audioRef.current.pause()
      setIsPlaying(false)
    } else {
      onPlay() // Notify parent
      audioRef.current.play()
      setIsPlaying(true)
    }
  }

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime)
    }
  }

  const handleLoadedMetadata = () => {
    if (audioRef.current) {
      setDuration(audioRef.current.duration)
    }
  }

  const handleEnded = () => {
    setIsPlaying(false)
    setCurrentTime(0)
  }

  const handleSeek = (value: number[]) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value[0]
      setCurrentTime(value[0])
    }
  }

  const handleVolumeChange = (value: number[]) => {
    const newVolume = value[0]
    setVolume(newVolume)
    if (audioRef.current) {
      audioRef.current.volume = newVolume
    }
    setIsMuted(newVolume === 0)
  }

  const toggleMute = () => {
    if (!audioRef.current) return
    const newMuted = !isMuted
    setIsMuted(newMuted)
    audioRef.current.muted = newMuted
  }

  const skip = (seconds: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += seconds
    }
  }

  const formatTime = (time: number) => {
    if (isNaN(time)) return '0:00'
    const minutes = Math.floor(time / 60)
    const seconds = Math.floor(time % 60)
    return `${minutes}:${seconds.toString().padStart(2, '0')}`
  }

  return (
    <div className="bg-secondary/20 rounded-lg p-4 space-y-4 w-full">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />

      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between text-xs text-muted-foreground font-mono">
          <span>{formatTime(currentTime)}</span>
          <span>{formatTime(duration)}</span>
        </div>
        <Slider
          value={[currentTime]}
          max={duration || 100}
          step={0.1}
          onValueChange={handleSeek}
          className="w-full cursor-pointer"
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => skip(-10)}
            title="Rewind 10s"
            className="h-8 w-8 hover:bg-background/50"
          >
            <RotateCcw className="h-4 w-4" />
          </Button>

          <Button
            variant="default"
            size="icon"
            onClick={togglePlay}
            className={cn(
              'h-10 w-10 rounded-full shadow-md transition-all',
              isPlaying
                ? 'bg-primary text-primary-foreground'
                : 'bg-primary/90 hover:bg-primary',
            )}
          >
            {isPlaying ? (
              <Pause className="h-5 w-5 fill-current" />
            ) : (
              <Play className="h-5 w-5 fill-current ml-0.5" />
            )}
          </Button>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => skip(10)}
            title="Forward 10s"
            className="h-8 w-8 hover:bg-background/50"
          >
            <RotateCw className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex items-center gap-2 w-32 hidden sm:flex">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleMute}
            className="h-8 w-8 hover:bg-transparent"
          >
            {isMuted || volume === 0 ? (
              <VolumeX className="h-4 w-4" />
            ) : volume < 0.5 ? (
              <Volume1 className="h-4 w-4" />
            ) : (
              <Volume2 className="h-4 w-4" />
            )}
          </Button>
          <Slider
            value={[isMuted ? 0 : volume]}
            max={1}
            step={0.01}
            onValueChange={handleVolumeChange}
            className="w-20"
          />
        </div>
      </div>
    </div>
  )
}
