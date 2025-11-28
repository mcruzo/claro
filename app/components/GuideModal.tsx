"use client";

import { useState } from "react";
import PreviewBar from "./PreviewBar";
import Grid from "./Grid";
import { Data, EventItem } from "../types";

export default function GuideModal({ data }: { data: Data }) {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState<EventItem | null>(null);

    return (
        <>
            {!open && (
                <button
                    onClick={() => setOpen(true)}
                    className="px-6 py-3 bg-red-600 text-white rounded-lg text-lg cursor-pointer hover:bg-red-700"
                >
                    Mostrar EPG
                </button>
            )}
            {open && (
                <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex flex-col">
                    <button
                        onClick={() => setOpen(false)}
                        className="absolute top-4 right-4 text-white text-3xl hover:text-red-400 z-21"
                    >
                        ✕
                    </button>
                    <PreviewBar hovered={hovered} />
                    <Grid data={data} onHover={setHovered} />
                </div>
            )}
        </>
    );
}
