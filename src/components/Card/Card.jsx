import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import '../Card/Card.css';

const Card = ({ card, handleDelete, handleEdit }) => {
  const { name, url } = card;
  const [editMode, setEditMode] = useState(false);
  const [newName, setNewName] = useState(name);
  const [newUrl, setNewUrl] = useState(url);
  const videoRef = useRef(url);

  const handleSave = () => {
    handleEdit(card, newName, newUrl);
    setEditMode(false);
  };

  const handlePlayClick = () => {
  
   videoRef.current.src = newUrl;
   videoRef.current.play();

  //  play(newUrl);

  }

  return (
    <div className="card">
      {editMode ? (
        <>
          <input
            type="text"
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
          />
          <input
            type="url"
            value={newUrl}
            onChange={(e) => setNewUrl(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={() => setEditMode(false)}>Cancel</button>
        </>
      ) : (
        <>
          <input type="text" value={name} disabled />
          <input type="url" value={url} disabled />
         
          <video ref={videoRef} controls/>
          <br />
          <button  onClick={handlePlayClick}>Play</button>
          <button  onClick={() => handleDelete(card)}>Delete</button>
          <button  onClick={() => setEditMode(true)}>Edit</button>
        </>
      )}
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleEdit: PropTypes.func.isRequired,
};

export default Card;
