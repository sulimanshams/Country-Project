import React, { useEffect, useState } from "react"
import QuizCard from "./QuizCard"
import axios from "axios"

const QuizAPI=()=>{
    
    const [questionData , setQuestionData]= useState(null);
    const [loading , setLoading] = useState(true);
    const [error , setError]= useState(null);


    useEffect(() => {
        axios.get("https://restcountries.com/v3.1/all?limit=10")
        .then(response=>{
            setQuestionData(response.data);
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