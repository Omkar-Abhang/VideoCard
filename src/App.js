import React, { useState } from 'react';
import Bucket from './components/Bucket/Bucket';
import Logo from './assests/add.png';
import './App.css';

const App = () => {
  const [buckets, setBuckets] = useState([
    { name: 'Entertainment Videos' },
    { name: 'Education Videos' },
  ]);
  const [newBucketName, setNewBucketName] = useState('');
  const [showInput, setShowInput] = useState(false);

  const handleNewBucket = () => {
    const newBucket = {
      name: newBucketName,
    };
    setBuckets([...buckets, newBucket]);
    setNewBucketName('');
    setShowInput(false);
  };

  return (
    <div className="app">
      {buckets.map((bucket, index) => (
        <Bucket key={index} name={bucket.name} />
      ))}
      <div className="add-bucket">
        {showInput ? (
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Enter bucket name"
              value={newBucketName}
              onChange={(e) => setNewBucketName(e.target.value)}
            />
            <button onClick={handleNewBucket}>Add Bucket</button>
          </div>
        ) : (
          <button onClick={() => setShowInput(true)}>
            <img src={Logo} alt="Add Bucket" />
          </button>
        )}
      </div>
    </div>
  );
};

export default App;
