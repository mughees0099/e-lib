import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BookList from "./BookList";
import BookPreview from "./BookPreview";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList />} />
        <Route path="/book/:id" element={<BookPreview />} />
      </Routes>
    </Router>
  );
};

export default App;
