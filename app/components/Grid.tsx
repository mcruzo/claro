"use client";

import { useMemo, useRef } from "react";
import TimeRuler from "./TimeRuler";
import ChannelRow from "./ChannelRow";
import { GridProps } from "../types";

export default function Grid({
    data,
    onHover,
}: GridProps) {
    const containerRef = useRef<HTMLDivElement>(null);

    const timelineStart = useMemo(() => {
        const mins = Math.min(
            ...data.response.channels.flatMap((c) =>
                c.events.map((e) => e.unix_begin)
            )
        );
        return Math.floor(mins / 3600) * 3600;
    }, [data]);

    const timelineEnd = useMemo(() => {
        const max = Math.max(
            ...data.response.channels.flatMap((c) =>
                c.events.map((e) => e.unix_end)
            )
        );
        return Math.ceil(max / 3600) * 3600;
    }, [data]);

    return (
        <div ref={containerRef} className="relative flex-1 overflow-auto text-white">

            <TimeRuler
                timelineStart={timelineStart}
                timelineEnd={timelineEnd}
                containerRef={containerRef}
            />

            <div className="">
                {data.response.channels.map((channel) => (
                    <ChannelRow
                        key={channel.id}
                        channel={channel}
                        timelineStart={timelineStart}
                        onHover={onHover}
                    />
                ))}
            </div>

        </div>
    );
}
