"use client";

import ProgramCard from "./ProgramCard";
import { ChannelRowsProps } from "../types";
import Image from "next/image";

export default function ChannelRow({
  channel,
  timelineStart,
  onHover,
}: ChannelRowsProps) {
  const pxPerMinute = 2;

  return (
    <div className="relative flex border-b border-white/10 min-h-20">
      <div className="w-32 flex items-center justify-center bg-black/80 border-r border-white/10">
        <span className="text-lg font-semibold flex items-center justify-between">
          {channel.number ?? channel.id}
          <Image alt={channel.name} src={channel.image} width={100} height={50} />
        </span>
      </div>
      <div className="relative flex-1">
        {channel.events.map((event) => {
          const left = ((event.unix_begin - timelineStart) / 60) * pxPerMinute;
          const width = ((event.unix_end - event.unix_begin) / 60) * pxPerMinute;

          return (
            <ProgramCard
              key={`${event.unix_begin}:${event.unix_end}`}
              event={event}
              left={left}
              width={width}
              onHover={onHover}
            />
          );
        })}
      </div>
    </div>
  );
}
