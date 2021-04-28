import { createContext, ReactNode } from 'react';

type Episode = {
  title: string;
  members: string;
  thumbnail: string;
  duration: number;
  url: string;
};

type PlayerContextData = {
  episodesList: Episode[];
  currentEpisodeIndex: number;
  isPlaying: boolean;
  isLooping: boolean;
  isShuffling: boolean;
  hasPrevious: boolean;
  hasNext: boolean;
  play: (episode: Episode) => void;
  playList: (list: Episode[], index: number) => void;
  playNext: () => void;
  playPrevious: () => void;
  setPlayingState: (state: boolean) => void;
  togglePlay: () => void;
  toggleLoop: () => void;
  toggleShuffle: () => void;
  clearPlayerState: () => void;
};

interface PlayerContextProviderProps {
  children: ReactNode;
}

export const PlayerContext = createContext({} as PlayerContextData);
