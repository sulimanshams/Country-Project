import React, { useEffect, useState } from "react"
import QuizCard from "./QuizCard"
import axios from "axios"

const QuizAPI=()=>{
    
    const [questionData , setQuestionData]= useState(null);
    const [loading , setLoading] = useState(true);
    const [error , setError]= useState(null);


    useEffect(() => {
  axios.get("https://restcountries.com/v3.1")
    .then(response => {
      const countries = response.data;
      const totalQuestions = 10;

      function getRandomItems(arr, n) {
        const result = [];
        const taken = new Set();
        while (result.length < n) {
          const randomIndex = Math.floor(Math.random() * arr.length);
          if (!taken.has(randomIndex)) {
            taken.add(randomIndex);
            result.push(arr[randomIndex]);
          }
        }
        return result;
      }

      const selectedCountries = getRandomItems(countries, totalQuestions);

      const questions = selectedCountries.map((country, index) => {
        const optionsSet = new Set();
        optionsSet.add(country.name.common);

        while (optionsSet.size < 4) {
          const randomWrongIndex = Math.floor(Math.random() * countries.length);
          optionsSet.add(countries[randomWrongIndex].name.common);
        }

        const options = Array.from(optionsSet);
        options.sort(() => Math.random() - 0.5);

        return {
          currentQuestion: index + 1,
          totalQuestions,
          flag: country.flags?.png || "🏳️",
          options,
          correctAnswer: country.name.common,
        };
      });

      setQuestionData(questions);
      setLoading(false);
    })
    .catch(err => {
      setError("I am Sorry");
      setLoading(false);
    });
}, []);



const [currentIndex, setCurrentIndex] = useState(0);

if (loading) return <div>Loading...</div>;
if (error) return <div>{error}</div>;
if (!questionData) return null;

const currentQuestion = questionData[currentIndex];

return (
  <div>
    <QuizCard questionData={currentQuestion} />
    <button
      onClick={() => setCurrentIndex((prev) => Math.min(prev + 1, questionData.length - 1))}
      disabled={currentIndex === questionData.length - 1}
    >
      Next
    </button>
  </div>
);


    
}


export default QuizAPI;