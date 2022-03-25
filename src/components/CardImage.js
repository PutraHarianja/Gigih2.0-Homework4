import React from "react";

const CardImages = ({imagesUrl}) => {
    return (
        <div className="card-pict">
        <img
            src={imagesUrl}
            alt="cover-pict"
        />
    </div>
    )
}

export {
    CardImages
}