import axios from "axios";
import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.scss";
import {Home, Quiz, Result}from './pages' 
function App() {
  const [questions, setQuestions] = useState();
  const [score, setScore] = useState(0);
  const [amount,setAmount]=useState(null)

  const fetchQuestions = async (category = "") => {
    const { data } = await axios.get(
      `https://opentdb.com/api.php?amount=${amount}${
        category && `&category=${category}`
      }&type=multiple`
    );

    setQuestions(data.results);
  };

  return (
      <div className="app">
        <Routes>
          <Route path="/" element={  <Home fetchQuestions={fetchQuestions} amount={amount} setAmount={setAmount}/>}/>
          <Route path="/quiz" element={ <Quiz questions={questions} score={score} amount={amount} setScore={setScore} setQuestions={setQuestions}/>} />
          <Route path="/result" element={ <Result score={score} />}/>
        </Routes>
      </div>
  );
}

export default App;
