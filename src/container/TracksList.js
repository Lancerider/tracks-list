import { useState, useEffect } from "react";

import Track from '../components/Track'

const TracksList = () => {

  const [tracks, setTracks] = useState(null);
  const [errorLoading, setErrorLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const getData = async () => {
    setErrorLoading(false)
    setLoading(true)

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/albums/1/photos?id=1&id=2&id=3&id=4&id=5&id=6",
        {
          method: "GET",
          headers: { "Content-Type": "application/json" }
        }
      );
      
      const tracksData = await response.json();

      setTracks(tracksData);
    } catch (error) {
      setErrorLoading(true)
    }

    setLoading(false)
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div>
      <h2>My Tracks</h2>

      { errorLoading && <div className="tracks__error">Ups, something went wrong, maybe you should try again.</div>}

      { loading && <div className="tracks__loader">Loading...</div>}

      {
        !errorLoading && !loading &&
          <div className="tracks__container">
            { 
              tracks && tracks.length > 0
                ? tracks.map((track) => (<Track track={ track } key={ track.id }/>))
                : "No tracks found."
            }
          </div>
      }
    </div>

  )
};

export default TracksList;
