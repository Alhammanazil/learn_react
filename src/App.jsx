import { useState } from "react";
import Header from "./components/Header";
import "./App.css";

function App() {
  const students = ["Alex", "John", "Gerry"];
  const [likes, setLikes] = useState(0);
  const [showHeart, setShowHeart] = useState(false);

  function handleClick() {
    setLikes(likes + 1);
    setShowHeart(true);
    setTimeout(() => {
      setShowHeart(false);
    }, 800); // Hide the heart after 0.8 seconds (matches the animation duration)
  }

  return (
    <div>
      {showHeart && <span className="heart">❤️</span>}
      <Header />
      <ul>
        {students.map((student, index) => (
          <li key={index}>{student}</li>
        ))}
      </ul>
      <button onClick={handleClick}>Like ({likes})</button>
    </div>
  );
}

export default App;
