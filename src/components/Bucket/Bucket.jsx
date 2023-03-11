import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Card from '../Card/Card';
import '../Bucket/Bucket.css';

const Bucket = ({ name }) => {
  const [cards, setCards] = useState([]);
  const [newCardName, setNewCardName] = useState('');
  const [newCardUrl, setNewCardUrl] = useState('');

  const handleNewCard = () => {
    const newCard = {
      name: newCardName,
      url: newCardUrl,
    };
    setCards([...cards, newCard]);
    setNewCardName('');
    setNewCardUrl('');
  };

  const handleDeleteCard = (cardToDelete) => {
    const filteredCards = cards.filter((card) => card !== cardToDelete);
    setCards(filteredCards);
  };

  const handleEditCard = (cardToEdit, newName, newUrl) => {
    const updatedCards = cards.map((card) =>
      card === cardToEdit ? { ...card, name: newName, url: newUrl } : card
    );
    setCards(updatedCards);
  };

  return (
    <div className="bucket">
      <h2>{name}</h2>
      <div className="card-list">
        <input
          type="text"
          placeholder="Enter card name"
          value={newCardName}
          onChange={(e) => setNewCardName(e.target.value)}
        />
        <input
          type="url"
          placeholder="Enter card URL"
          value={newCardUrl}
          onChange={(e) => setNewCardUrl(e.target.value)}
        />
        <button onClick={handleNewCard}>Add Card</button>
        {cards.map((card, index) => (
          <Card
            key={index}
            card={card}
            handleDelete={handleDeleteCard}
            handleEdit={handleEditCard}
          />
        ))}
      </div>
    </div>
  );
};

Bucket.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Bucket;
