import React from 'react'

const QuoteForm = ({ quote, setQuote, author, setAuthor, onSubmit, title }) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-10">

        <h1 className="bg-red-300 font-bold text-4xl px-8 py-4 rounded-lg text-center mb-8">
          {title}
        </h1>

        <div className="rounded-xl shadow-lg">
          <form onSubmit={onSubmit}>
            <table className="w-full border-collapse">
              <tbody>

                <tr>
                  <td className="border px-6 py-4 font-semibold">Quote</td>
                  <td className="border px-6 py-4">
                    <input
                      className="w-full border rounded px-4 py-2"
                      value={quote}
                      onChange={(e) => setQuote(e.target.value)}
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border px-6 py-4 font-semibold">Author</td>
                  <td className="border px-6 py-4">
                    <input
                      className="w-full border rounded px-4 py-2"
                      value={author}
                      onChange={(e) => setAuthor(e.target.value)}
                      required
                    />
                  </td>
                </tr>

                <tr>
                  <td className="border px-6 py-4 font-semibold">Actions</td>
                  <td className="border px-6 py-4">
                    <button className="bg-gray-700 text-white px-6 py-2 rounded">
                      Save Quote
                    </button>
                  </td>
                </tr>

              </tbody>
            </table>
          </form>
        </div>
      </div>
    </div>
  )
}

export default QuoteForm
