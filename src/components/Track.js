import { useState } from "react"

const Track = ({ track }) => {
  const { id, title, thumbnailUrl } = track

  const [showTitle, setShowTitle] = useState(true)

  const toggleTitle = () => setShowTitle(!showTitle)

  return (
    <div>
      <div className="track__id">{ `ID: ${id}` }</div>
      { showTitle && <h3 className="track__title">{ track.title }</h3> }
      <img
        src={ thumbnailUrl }
        alt={ title }
        onClick={ toggleTitle }
        className="track__image"
      />
    </div>

  )
};

export default Track;
