export interface EventItem {
  id: string;
  name: string;
  description?: string | null;
  unix_begin?: number;
  unix_end?: number;
  duration?: string;
  date_begin?: string;
  date_end?: string;
  ext_season_id?: string;
  ext_episode_id?: string;
}

export interface Channel {
  id: string;
  name: string;
  number?: string;
  image: string;
  events: EventItem[];
}

export interface Data {
  response: {
    channels: Channel[];
    total: number;
  };
  status: string;
  msg: string;
}

export interface RootLayoutProps {
    children: React.ReactNode;
}

export interface GridProps {
  data: Data;
  onHover: (e: EventItem | null) => void;
}

export interface PreviewBarProps { 
    hovered: EventItem | null 
}

export interface TimeRulerProps {
  timelineStart: number;
  timelineEnd: number;
  containerRef: React.RefObject<HTMLDivElement>;
}

export interface ChannelRowsProps {
  channel: Channel;
  timelineStart: number;
  onHover: (p: EventItem | null) => void;
}

export interface ProgramCardProps {
    event: EventItem;
    left: number;
    width: number;
    onHover: (e: EventItem | null) => void;
}
