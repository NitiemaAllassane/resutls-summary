import clsx from "clsx";

interface ResultDisplayerProps {
  result: number;
  reaction: "Bad" | "Medium" | "Great";
}

interface StatItemProps {
  category: "memory" | "reaction" | "verbal" | "visual";
  score: number;
  icon: string;
}


// Action button
function CallToActionButton({ text }: { text: string }) {
  return (
    <button 
      type="button"
      className="bg-slate-800 text-white font-semibold p-3 rounded-4xl cursor-pointer"
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
        category === "memory" && "text-yellow-500 bg-yellow-50",
        category === "reaction" && "text-red-500 bg-red-50",
        category === "verbal" && "text-green-500 bg-green-50",
        category === "visual" && "text-blue-500 bg-blue-50",
      )
    }>
      <div className="flex items-center gap-2">
        <span>
          <img src={icon} alt={`${category} icon`} />
        </span>
        <span className="font-medium">
          {category.charAt(0).toUpperCase() + category.slice(1)}
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
  return (
    <article className="relative flex bg-(--white) rounded-4xl w-3xl">
      <div className="w-1/2 bg-linear-to-b from-(--light-slate-blue) to-(--light-royal-blue) p-12 rounded-4xl">
        <div className="">
          <h1 className="text-2xl text-(--light-lavender) text-center font-semibold mb-8">Your Result</h1>
            <ResultDisplayer 
              result={76}  
              reaction="Great"
            />
        </div>
      </div>

      <div className="p-6 flex-1">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-slate-800 text-2xl font-semibold mb-6">Summary</h2>
            
            <div className="flex flex-col gap-4">
              <StatItem  
                category="reaction"
                icon="/assets/images/icon-memory.svg"
                score={80}
              />

              <StatItem  
                category="memory"
                icon="/assets/images/icon-memory.svg"
                score={80}
              />

              <StatItem  
                category="verbal"
                icon="/assets/images/icon-memory.svg"
                score={80}
              />

              <StatItem  
                category="visual"
                icon="/assets/images/icon-memory.svg"
                score={80}
              />
            </div>
          </div>

          <CallToActionButton text="Continue"  />
        </div>
      </div>
    </article>
  )
}



function App() {
  return (
    <>
      <main className="flex items-center justify-center min-h-dvh bg-(--pale-blue)">
        <ResultCard  />
      </main>
    </>
  )
}

export default App;