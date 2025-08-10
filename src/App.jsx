import React from "react";
import Header from "./Header";
// import QuizCard from "./QuizCard";
import QuizAPI from "./QuizAPI";
function App() {
  return (
    <>
    <div
      style={{
        background: "#343964",
        minHeight:"100vw",
        width:"100vw"
      }}
    >
      <Header />
    </div>
    <QuizAPI />
    </>
  );
}

export default App;
