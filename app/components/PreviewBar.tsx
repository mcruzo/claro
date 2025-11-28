"use client";

import { PreviewBarProps } from "../types";

export default function PreviewBar({ hovered }: PreviewBarProps) {
    return (
        <div className="w-full h-40 bg-black/70 text-white p-4 border-b border-white/20 sticky top-0 z-20">
            {hovered ? (
                <>
                    <h2 className="text-2xl font-semibold">{hovered.name}</h2>
                    <p className="text-sm opacity-80 mt-1">
                        {hovered.date_begin ? `${hovered.date_begin} a ${hovered.date_end}` : ''}
                    </p>
                    <p className="text-sm opacity-80 mt-1">
                        {hovered.duration}
                    </p>
                    <p className="text-sm opacity-80 mt-1">
                        {hovered.description ?? "Not Available"}
                    </p>
                </>
            ) : null}
        </div>
    );
}
