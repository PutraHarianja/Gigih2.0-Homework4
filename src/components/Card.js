import React from "react";
import { CardAlbum } from "./CardAlbum";
import { CardArtist } from "./CardArtist";
import { CardImages } from "./CardImage";
import { CardTitle } from "./CardTitle";

const Card = ({url, title, artist, album}) => {
    return (
        <div className="card">
            <CardImages imagesUrl={url} />
            <CardTitle title={title} />
            <CardArtist artisName={artist} />
            <CardAlbum albumName={album} />
            <button>Details</button>
        </div>
    )
}

export {
    Card
}