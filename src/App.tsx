interface ResultDisplayerProps {
  result: number;
  reaction: "Bad" | "Medium" | "Great";
}

interface SummaryStat {
  kind: "memory" | "reaction" | "verbal" | "visual";
  stat: number;
  icon: string;
}


function CallToActionButton({ text }: { text: string }) {
  return (
    <button type="button">
      <span>
        {text}
      </span>
    </button>
  )
}

function SummaryStat({ kind, stat, icon }: SummaryStat) {
  return (
    <div>
      <div>
        <span>
          <img src={icon} alt={`${kind.toLocaleUpperCase} icon`} />
        </span>
        <span>{kind}</span>
      </div>

      <div>
        <span>{stat}</span>
        <span>/ 100</span>
      </div>
    </div>
  )
}


function ResultDisplayer({ result, reaction }: ResultDisplayerProps) {
  return (
    <>
      <div>
        <h2>{result}</h2>
        <span>of 100</span>
      </div>
      <h2>{reaction}</h2>
    </>
  )
}


function ResultCard() {
  return (
    <article>
      <div>
        <div>
          <h1>Your Result</h1>
          <ResultDisplayer 
            result={76}  
            reaction="Great"
          />
          <p>
            ou scored higher than 65% of the people who have taken these tests.
          </p>
        </div>
      </div>

      <div>
        <div>
          <h2>Summary</h2>
          <SummaryStat  
            kind="memory"
            icon="/assets/images/icon-memory.svg"
            stat={80}
          />
          <CallToActionButton text="Continue"  />
        </div>
      </div>
    </article>
  )
}



function App() {
  return (
    <>
      <main>
        <ResultCard  />
      </main>
    </>
  )
}

export default App;