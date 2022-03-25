import './App.css';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import data from './data/data';
import "./styles.css";
import { Card } from './components/Card';

console.log(data);


function App() {
    const [fetchData, setFetchData] = useState(null);

    useEffect(() => {
        axios.get('https://gist.githubusercontent.com/aryapradipta9/0b8d0a1a113e3594d34c68c72ec32daf/raw/cb5d20b494bd2cb259d31596b9e8eea02e0f6d1e/single-sample.js', {})
            .then((response) => {
                setFetchData(response.data)
            })
    }, [])

    console.log(fetchData === null ? 'loading' : fetchData)


    return (
        <div className="App">
            {/* {url, title, artist, album} */}
            <div className='cards'>
                <Card url={data.album.images[0].url} title={data.name} artist={data.artists.name} album={data.album.name} />
                <Card url={data.album.images[0].url} title={data.name} artist={data.artists.name} album={data.album.name} />
                <Card url={data.album.images[0].url} title={data.name} artist={data.artists.name} album={data.album.name} />
            </div>
        </div>
    );
}

export default App;
