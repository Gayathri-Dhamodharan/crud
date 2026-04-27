import  React from 'react'
import {Link} from "react-router-dom"
import { useState, useEffect} from 'react'
import {getQuotes}  from '../api/quotesApi'

const Home = () => {
    const [quotes, setQuotes] = useState([]);
       useEffect(() => {
  const fetchQuotes = async () => {
    try {
      const res = await getQuotes();
      setQuotes(res.data.data);   // axios response → res.data
      console.log(res.data.data);
    } catch (error) {
      console.error("Error fetching quotes:", error);
    }
  };

  fetchQuotes();
}, []);

    const deleteQuote = (id) => {
    setQuotes(quotes.filter((q) => q.id !== id));
  };
  return (
     <div className="bg-gray-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">

        <div className="flex justify-between items-center mb-8">
          <h1 className="bg-gray-300 font-bold text-4xl px-8 py-4 rounded-lg">
            Quotes
          </h1>

          <Link
            to="/add"
            className="px-6 py-3 bg-gray-700 text-white rounded-lg"
          >
            + Add Quotes
          </Link>
        </div>

        <div className="bg-white rounded-xl shadow-lg">
          <table className="w-full border-collapse">
            <thead className="bg-gray-200">
              <tr>
                <th className="border px-6 py-4">Quote</th>
                <th className="border px-6 py-4">Author</th>
                <th className="border px-6 py-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {Array.isArray(quotes) && quotes.map((q) => (
  <tr key={q._id || q.id}>
    <td className="border px-6 py-4 text-black">{q.text}</td>
    <td className="border px-6 py-4  text-black">{q.author}</td>
    <td className="border px-6 py-4 text-center">
      <Link
        to={`/edit/${q._id || q.id}`}
        className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
      >
        Edit
      </Link>
      <button
        onClick={() => deleteQuote(q._id || q.id)}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Delete
      </button>
    </td>
  </tr>
))}

            </tbody>

          </table>
        </div>
      </div>
    </div>
  )
}

export default Home


