import { Heart } from "lucide-react";
import { Dispatch, SetStateAction, useState } from "react";
import { Puppy } from "../types";

export function LikeToggle({id, liked, setLiked}: {
    liked: Puppy['id'][],
    setLiked: Dispatch<SetStateAction<Puppy['id'][]>>,
    id: Puppy['id']
}) {

    return (
        <button className="group flex items-center gap-1" onClick={() => {
            if (liked.includes(id)) {
                setLiked(liked.filter(pupId => pupId !== id));
            } else {
                setLiked([...liked, id]);
            }
        }}>
            <Heart className={liked.includes(id) ? "fill-pink-500 stroke-none" : "stroke-slate-200 group-hover:stroke-slate-300"}/>
        </button>
    );
}