import { useState } from "react";
import { books } from "../data.js";
import { Link } from "react-router-dom";

const categories = ["All", ...new Set(books.map((book) => book.category))];

const BookList = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Filter books by category
  const filteredBooks =
    selectedCategory === "All"
      ? books
      : books.filter((book) => book.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <div
        className="h-[400px]  bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://ic.softlinkint.com/wp-content/uploads/2023/11/digital-physical-library.jpg')",
        }}
      >
        <div className="text-center text-white">
          <h1 className="text-5xl font-bold mb-4">
            Welcome to Corvit E-Library
          </h1>
          <p className="text-lg">
            Your gateway to endless knowledge and learning
          </p>
        </div>
      </div>

      {/* Categories */}
      <div className="text-center my-8">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`mx-2 px-4 py-2 rounded-full transition-all ${
              selectedCategory === category
                ? "bg-red-500 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Book Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8">
        {filteredBooks.map((book) => (
          <div
            key={book.id}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow"
          >
            <img
              src={book.image}
              alt={book.title}
              className="w-full h-72 object-fil"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold">{book.title}</h2>
              <p className="text-gray-600 mt-2">By {book.author}</p>
              <div className="mt-4">
                <Link to={`/book/${book.id}`}>
                  <button className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600">
                    Read Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="text-center py-4 mt-8 bg-gray-800 text-white">
        <p>&copy; 2024 Corvit E-Library. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default BookList;
