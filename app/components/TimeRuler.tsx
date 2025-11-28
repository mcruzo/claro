"use client";

import { useEffect, useRef } from "react";
import { TimeRulerProps } from "../types";

export default function TimeRuler({
    timelineStart,
    timelineEnd,
    containerRef,
}: TimeRulerProps) {
    const rulerRef = useRef<HTMLDivElement>(null);
    const pxPerMinute = 2;

    const hours: number[] = [];

    for (let t = timelineStart; t <= timelineEnd; t += 3600) {
        hours.push(t);
    }

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const sync = () => {
            if (rulerRef.current)
                rulerRef.current.style.transform = `translateX(-${container.scrollLeft}px)`;
        };

        container.addEventListener("scroll", sync);

        return () => container.removeEventListener("scroll", sync);
    }, [containerRef]);

    return (
        <div className="sticky top-0 bg-black/70 h-12 border-b border-white/20 z-30 p-2">
            <div ref={rulerRef} className="relative h-full">
                <div
                    key={"hoy"}
                    className="absolute top-2 text-sm opacity-80"
                    style={{ left: 0 }}
                >
                    HOY
                </div>
                {hours.map((h) => {
                    const left = (((h - timelineStart) / 60) * pxPerMinute) + 128;
                    const label = new Date(h*1000).toLocaleTimeString("es-MX", {
                        hour: "2-digit",
                        minute: "2-digit",
                    });

                    return (
                        <span
                            key={h}
                            className="absolute text-sm opacity-80 whitespace-nowrap"
                            style={{ left }}
                        >
                            {label}
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
