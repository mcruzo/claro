"use client";

import { ProgramCardProps } from "../types";

export default function ProgramCard({
    event,
    left,
    width,
    onHover,
}: ProgramCardProps) {
    return (
        <div
            onMouseEnter={() => onHover(event)}
            onMouseLeave={() => onHover(null)}
            className="absolute top-2 h-16 bg-white/10 hover:bg-white/20 rounded-sm px-2 py-2 text-xs overflow-hidden"
            style={{ left, width }}
        >
            <p className="truncate">{event.name}</p>
            <span className="text-[.60rem] text-white/60">
                {new Date(event.unix_begin * 1000).toLocaleTimeString("es-MX", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
                {" - "}
                {new Date(event.unix_end * 1000).toLocaleTimeString("es-MX", {
                    hour: "2-digit",
                    minute: "2-digit",
                })}
            </span>
        </div>
    );
}
