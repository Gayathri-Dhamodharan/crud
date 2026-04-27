import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import QuoteForm from "../components/QuoteForm";
import { getQuoteById, updateQuote } from "../api/quotesApi";
import React from "react";

const EditQuote = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  // 🔥 Fetch existing quote
  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const res = await getQuoteById(id);
        setQuote(res.data.text);
        setAuthor(res.data.author);
      } catch (error) {
        console.error(error);
      }
    };

    fetchQuote();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateQuote(id, { text: quote, author });
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <QuoteForm
      title="Edit Quote"
      quote={quote}
      setQuote={setQuote}
      author={author}
      setAuthor={setAuthor}
      onSubmit={handleSubmit}
    />
  );
};

export default EditQuote;
