import React from "react";
import Header from "./Header";
import QuizCard from "./QuizCard";
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
    <QuizCard />
    </>
  );
}

export default App;
