import React from 'react';

const GalleryDetail = ({match}) => {
    return (
        <div>
            <img src={`https://picsum.photos/id/${match.params.id}/500/500`} alt=""/>
            <p>{match.params.autor}</p>
        </div>
    );
};

export default GalleryDetail;