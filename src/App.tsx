import { useState } from "react";
import clsx from "clsx";
import data from "../data.json";


type ReactionType = "Bad" | "Medium" | "Great";
type CategotyType = "Memory" | "Reaction" | "Verbal" | "Visual";

interface ResultDisplayerProps {
  result: number;
  reaction: ReactionType;
}

interface StatItemProps {
  category: CategotyType
  score: number;
  icon: string;
}


// Action button
function CallToActionButton({ text, onUpdateScore }: { text: string, onUpdateScore: () => void }) {
  return (
    <button 
      type="button"
      className="bg-slate-800 text-white font-semibold p-3 
      rounded-4xl cursor-pointer bg-linear-to-b 
      hover:from-(--light-slate-blue) hover:to-(--light-royal-blue)"
      onClick={onUpdateScore}
    >
      {text}
    </button>
  )
}


function StatItem({ category, score, icon }: StatItemProps) {
  return (
    <div className={
      clsx(
        "flex justify-between items-center p-3 rounded-lg",
        category === "Memory" && "text-yellow-500 bg-yellow-50",
        category === "Reaction" && "text-red-500 bg-red-50",
        category === "Verbal" && "text-green-500 bg-green-50",
        category === "Visual" && "text-blue-500 bg-blue-50",
      )
    }>
      <div className="flex items-center gap-2">
        <span>
          <img src={icon} alt={`${category} icon`} />
        </span>
        <span className="font-medium">
          {category}
        </span>
      </div>

      <div>
        <span className="text-slate-800">{score}</span>
        <span className="text-slate-400"> / 100</span>
      </div>
    </div>
  )
}


function ResultDisplayer({ result, reaction }: ResultDisplayerProps) {
  return (
    <>
      <div className="text-center flex flex-col items-center">
        <div 
          className="w-45 h-45 bg-linear-to-b from-(--violet-blue) to-(--persian-blue) 
          flex flex-col items-center justify-center rounded-full mb-6"
        >
          <h2 className="text-6xl text-white font-bold">{result}</h2>
          <p className="text-(--light-lavender)">of 100</p>
        </div>
        <h2 className="text-white font-bold text-3xl mb-4">{reaction}</h2>
        <p className="text-(--light-lavender)">
          ou scored higher than 65% of the people who have taken these tests.
        </p>
      </div>
    </>
  )
}



function ResultCard() {
  const [dataInfo, setDataInfo] = useState(data.slice());
  const scores = dataInfo.map( info => (info.score));
  const scoresSum = scores.reduce((previousScore, currentScore) => previousScore + currentScore, 0)

  const summaryResult = Math.floor(scoresSum / dataInfo.length);
  
  const reaction: ReactionType =
  summaryResult < 50
    ? "Bad"
    : summaryResult < 60
    ? "Medium"
    : "Great";

  function updateScoresRandomly() {
    const newData = dataInfo.slice().map(( info => {
      return {
        ...info, score: Math.floor(Math.random() * 100)
      }
    }));

    setDataInfo(newData);

  }

  return (
    <article className="relative flex bg-(--white) rounded-4xl w-3xl">
      <div className="w-1/2 bg-linear-to-b from-(--light-slate-blue) to-(--light-royal-blue) p-12 rounded-4xl">
        <div className="">
          <h1 className="text-2xl text-(--light-lavender) text-center font-semibold mb-8">Your Result</h1>
            <ResultDisplayer 
              result={summaryResult}  
              reaction={reaction}
            />
        </div>
      </div>

      <div className="p-6 flex-1">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-slate-800 text-2xl font-semibold mb-6">Summary</h2>
            
            <div className="flex flex-col gap-4">
              {dataInfo.map( stat => {
                return (
                  <StatItem  
                    category={stat.category as CategotyType}
                    icon={stat.icon}
                    score={stat.score}
                  />
                )
              })}
            </div>
          </div>

          <CallToActionButton text="Continue" onUpdateScore={updateScoresRandomly}  />
        </div>
      </div>
    </article>
  )
}



function App() {
  return (
    <>
      <main className="flex flex-col items-center justify-center min-h-dvh bg-(--pale-blue)">
        <div>
          <ResultCard  />
        </div>
      </main>
      <footer className="text-center bg-(--pale-blue) py-3">
        <p className="text-xs">
          Challenge by 
          <a href="https://www.frontendmentor.io/challenges" target="_blank" className="underline">Frontend Mentor</a>. 
          Coded by <a href="https://nitiema-allassane.vercel.app/" target="_blank" className="underline">Nitiema Allassane</a>.</p>
      </footer>
    </>
  )
}

export default App;