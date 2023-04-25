import React, { useState } from 'react';
import axios from 'axios';
import "./CreateCard.css"

const AddFlashcardForm = () => {
  const [term, setTerm] = useState('');
  const [definition, setDefinition] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8081/flashcards', {
        term,
        definition,
      });
      console.log(response.data);
      setTerm('');
      setDefinition('');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} >
      <label htmlFor="term-input">Term:</label>
      <input
        id="term-input"
        type="text"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
      />
      <label htmlFor="definition-input">Definition:</label>
      <textarea
        id="definition-input"
        value={definition}
        onChange={(e) => setDefinition(e.target.value)}
      ></textarea>
      <button type="submit">Add Flashcard</button>
    </form>
  );
};

export default AddFlashcardForm;