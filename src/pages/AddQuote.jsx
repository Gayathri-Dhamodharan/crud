import React from 'react'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import QuoteForm from "../components/QuoteForm";
import { addQuote } from '../api/quotesApi';


const AddQuote = () => {
   const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const navigate = useNavigate();

  const handleSubmit =async (e) => {
    e.preventDefault();
try {
    // add quote logic here
await addQuote({
  text: quote,
  author: author,
})
navigate("/");   
} catch (error) {
  console.error("Error adding quote:", error);
}   }
  return (
      <QuoteForm
      title="Add Quote"
      quote={quote}
      setQuote={setQuote}
      author={author}
      setAuthor={setAuthor}
      onSubmit={handleSubmit}
    />
  )
}

export default AddQuote;