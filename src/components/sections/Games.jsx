import { useCallback, useEffect, useMemo, useState } from "react";
import { MEMORY_CARDS, QUIZ } from "../../data/placeholderContent.js";
import { useToast } from "../../context/ToastContext.jsx";

function shuffle(values) {
  const copy = [...values];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function buildDeck() {
  return shuffle([...MEMORY_CARDS, ...MEMORY_CARDS]).map((symbol, index) => ({
    id: index,
    symbol,
  }));
}

function MemoryGame() {
  const { notify } = useToast();
  const [deck, setDeck] = useState(buildDeck);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);

  const reset = useCallback(() => {
    setDeck(buildDeck());
    setFlipped([]);
    setMatched([]);
    setMoves(0);
  }, []);

  useEffect(() => {
    if (flipped.length !== 2) return undefined;
    const [first, second] = flipped;
    const isMatch = deck[first].symbol === deck[second].symbol;
    const timer = setTimeout(() => {
      if (isMatch) setMatched((current) => [...current, deck[first].symbol]);
      setFlipped([]);
    }, 620);
    return () => clearTimeout(timer);
  }, [flipped, deck]);

  useEffect(() => {
    if (matched.length === MEMORY_CARDS.length) {
      notify(`Bravo ! Terminé en ${moves} coups`, "success");
    }
  }, [matched, moves, notify]);

  function flip(index) {
    if (flipped.length === 2 || flipped.includes(index)) return;
    if (matched.includes(deck[index].symbol)) return;
    setFlipped((current) => [...current, index]);
    if (flipped.length === 1) setMoves((m) => m + 1);
  }

  const won = matched.length === MEMORY_CARDS.length;

  return (
    <div className="game-panel card">
      <div className="game-panel-head">
        <h3>Memory</h3>
        <div className="game-meta">
          <span>{moves} coups</span>
          <button className="btn btn-ghost btn-sm" onClick={reset}>
            Rejouer
          </button>
        </div>
      </div>

      <div className="memory-grid">
        {deck.map((card, index) => {
          const isUp = flipped.includes(index) || matched.includes(card.symbol);
          return (
            <button
              key={card.id}
              className={`memory-card ${isUp ? "is-up" : ""}`}
              style={{ animationDelay: `${index * 35}ms` }}
              onClick={() => flip(index)}
              aria-label={isUp ? card.symbol : "Carte cachée"}
            >
              <span className="memory-face">{isUp ? card.symbol : "?"}</span>
            </button>
          );
        })}
      </div>

      {won && <p className="game-win">Toutes les paires trouvées 🎉</p>}
    </div>
  );
}

function QuizGame() {
  const { notify } = useToast();
  const [step, setStep] = useState(0);
  const [score, setScore] = useState(0);
  const [picked, setPicked] = useState(null);

  const question = QUIZ[step];
  const finished = step >= QUIZ.length;

  const progress = useMemo(() => Math.round((step / QUIZ.length) * 100), [step]);

  function answer(index) {
    if (picked !== null) return;
    setPicked(index);
    const correct = index === question.answer;
    if (correct) setScore((s) => s + 1);
    setTimeout(() => {
      setPicked(null);
      setStep((s) => s + 1);
      if (step + 1 === QUIZ.length) {
        notify(`Score final : ${score + (correct ? 1 : 0)}/${QUIZ.length}`, "success");
      }
    }, 700);
  }

  function restart() {
    setStep(0);
    setScore(0);
    setPicked(null);
  }

  return (
    <div className="game-panel card">
      <div className="game-panel-head">
        <h3>Quiz express</h3>
        <div className="game-meta">
          <span>
            {Math.min(step + 1, QUIZ.length)}/{QUIZ.length}
          </span>
          <button className="btn btn-ghost btn-sm" onClick={restart}>
            Recommencer
          </button>
        </div>
      </div>

      <div className="quiz-progress" aria-hidden="true">
        <span style={{ width: `${finished ? 100 : progress}%` }} />
      </div>

      {finished ? (
        <div className="quiz-result">
          <p className="quiz-score">
            {score}/{QUIZ.length}
          </p>
          <p>Merci d'avoir joué — on en discute dans la section contact ?</p>
        </div>
      ) : (
        <>
          <p className="quiz-question">{question.question}</p>
          <div className="quiz-options">
            {question.options.map((option, index) => {
              let state = "";
              if (picked !== null) {
                if (index === question.answer) state = "is-correct";
                else if (index === picked) state = "is-wrong";
              }
              return (
                <button
                  key={option}
                  className={`quiz-option ${state}`}
                  onClick={() => answer(index)}
                >
                  {option}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}

export default function Games() {
  return (
    <section className="section" id="games">
      <div className="container">
        <div className="section-head reveal">
          <span className="section-kicker">Jeux</span>
          <h2>Une pause avant le contact</h2>
          <p className="section-sub">
            Le développement de jeux fait partie de mes loisirs — voici deux mini-jeux pour tester
            votre mémoire et voir si vous m'avez bien lu.
          </p>
        </div>

        <div className="games-grid">
          <MemoryGame />
          <QuizGame />
        </div>
      </div>
    </section>
  );
}
