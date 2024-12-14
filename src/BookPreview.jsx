import { useParams } from "react-router-dom";
import { books } from "../data.js";

const BookPreview = () => {
  const { id } = useParams();
  const book = books.find((book) => book.id === parseInt(id));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-red-50 to-gray-100 p-8">
      {/* Card Container */}
      <div className="bg-white shadow-2xl rounded-lg overflow-hidden max-w-4xl w-full flex flex-col md:flex-row">
        {/* Book Image */}
        <div className="w-full md:w-1/3">
          <img
            src={`../images/image${book.id}.png`}
            alt={book.title}
            className="w-full h-full object-cover"
            onError={(e) => {
              console.error("Error loading image:", e.target.src);
              e.target.src = "https://via.placeholder.com/300x450"; // Fallback image
            }}
          />
        </div>

        {/* Book Details */}
        <div className="w-full md:w-2/3 p-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {book.title}
          </h1>

          {/* Author & Publish Date */}
          <p className="text-gray-600 text-lg mb-2">
            <span className="font-semibold">Author:</span> {book.author}
          </p>
          <p className="text-gray-600 text-lg mb-4">
            <span className="font-semibold">Published:</span> {book.publishDate}
          </p>

          {/* Description */}
          <p className="text-gray-700 leading-relaxed mb-6">
            {book.description}
          </p>

          {/* Download Button */}
          <a
            href={book.downloadLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-red-500 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-red-600 transition duration-300"
          >
            Download Book
          </a>
        </div>
      </div>
    </div>
  );
};

export default BookPreview;
