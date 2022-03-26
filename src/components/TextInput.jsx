import React, { useState } from 'react';

const Sentiment = require('sentiment');

export default function TextInput() {
  const [text, setText] = useState('');
  const [mood, setMood] = useState(0);

  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const calculateMood = (e) => {
    e.preventDefault();
    const sentiment = new Sentiment();
    const result = sentiment.analyze(text);
    setMood(result.comparative);
  };

  return (
    <form onSubmit={calculateMood}>
      <text>{mood}</text>
      <input type="text" value={text} onChange={handleTextChange} />
    </form>
  );
}
