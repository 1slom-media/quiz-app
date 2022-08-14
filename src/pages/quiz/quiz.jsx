import './quiz.scss';
import { CircularProgress } from '@mui/material';
import { useState,useEffect } from 'react';
import{useNavigate} from 'react-router-dom';
import { Header, Question } from '../../components';


export const Quiz =({ questions, score, setScore, setQuestions,amount })=>{
  const [options, setOptions] = useState();
  const [currQues, setCurrQues] = useState(0);

  const navigate=useNavigate();

  useEffect(() => {
    setOptions(
      questions &&
        handleShuffle([
          questions[currQues]?.correct_answer ?? [],
          ...questions[currQues]?.incorrect_answers ?? [],
        ])
    );
  }, [currQues, questions]);

  const handleShuffle = (options) => {
    return options.sort(() => Math.random() - 0.5);
  };




  return(
    <>
    <Header/>
    <div className="quiz">
      <span className="quiz__subtitle">Welcome</span>

      {questions ?(
        <>
            <div className="quiz__info">
              <span>{questions[currQues] > amount ? questions[currQues].category : navigate('/result')}</span>
              <span>
                Score : {score}
              </span>
            </div>
            <Question
              amount={amount}
              currQues={currQues}
              setCurrQues={setCurrQues}
              questions={questions}
              options={options}
              correct={questions[currQues]?.correct_answer}
              score={score}
              setScore={setScore}
              setQuestions={setQuestions}
            />
        </>

      ):(
        <CircularProgress
          style={{ margin: 100 }}
          color="inherit"
          size={150}
          thickness={1}
        />
      )}
    </div>
    </>
  )

}