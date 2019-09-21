import React, { useState , useEffect } from 'react';
import Card from '../../components/Card/Card';
import './Gallery.css';
const Gallery = () => {

    const [ photos, setPhotos ] = useState([]);

    useEffect(() => {
        fetch('https://picsum.photos/v2/list?limit=8')
        .then(response => response.json())
        .then(jsonThing => setPhotos(jsonThing))
    },[]);
    return (
        <div className="gallery">
            {
                photos.map((photo,i) => {
                    return (
                        <Card key={i} id={photo.id} src={photo.download_url} autor={photo.author}/>
                    )
                })
            }
        </div>
    );
};

export default Gallery;