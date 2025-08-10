import React, { useEffect, useState } from "react"
import QuizCard from "./QuizCard"
import axios from "axios"

const QuizAPI=()=>{
    
    const [questionData , setQuestionData]= useState(null);
    const [loading , setLoading] = useState(true);
    const [error , setError]= useState(null);


    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all")
        .then(response=>{
            const countries= response.data;

            const totalQuestions=10;
            const currentQuestion=1;


            const randomIndex= Math.floor(Math.random() *countries.length);
            const country = countries[randomIndex];


            const optionsSet= new Set();
            optionsSet.add(country.name.common);


            while (optionsSet.size<4) {
                const randomWrongIndex=Math.floor(Math.random() * countries.length);
                optionsSet.add(country[randomWrongIndex].name.common);
            }

            const options= Array.from(optionsSet);
            options.sort(()=>Math.random()-0.5);


                const questionObj={
                    currentQuestion, totalQuestions, flag:country.flag || "🏳️", options
                }

            setQuestionData(questionObj);
            setLoading(false);
        })
        .catch(err=> {
            setError("I am Sorry");
            setLoading(false);
        })
    }, []);



    if(loading) return<div>Loading...</div>
    if(error) return<div>{error}</div>
    if(!questionData)return null;


    return <QuizCard questionData={questionData} />
        

    
}


export default QuizAPI;