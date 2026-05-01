import { SectionTitle } from './common';
import type { Copy, QuizQuestion, ReviewWord } from '../content';

export function ReviewView({
  text,
  reviewWords,
  quiz,
  answers,
  score,
  onAnswer,
}: {
  text: Copy;
  reviewWords: ReviewWord[];
  quiz: QuizQuestion[];
  answers: (number | null)[];
  score: number;
  onAnswer: (questionIndex: number, choiceIndex: number) => void;
}) {
  return (
    <main className="two-column-layout">
      <section className="panel">
        <SectionTitle title={text.reviewTitle} subtitle={text.reviewSub} />
        <div className="review-list">
          {reviewWords.map((item) => (
            <article className="review-row" key={item.word}>
              <div>
                <h4>{item.word}</h4>
                <p className="muted">{item.meaning}</p>
              </div>
              <p>{item.example}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <SectionTitle title={text.quizPreview} subtitle={`Score: ${score}/${quiz.length}`} />
        <div className="quiz-list">
          {quiz.map((item, index) => (
            <article className="quiz-row" key={item.prompt}>
              <p className="quiz-prompt">{item.prompt}</p>
              <div className="quiz-options">
                {item.choices.map((choice, choiceIndex) => (
                  <button
                    key={choice}
                    className={answers[index] === choiceIndex ? 'option active' : 'option'}
                    onClick={() => onAnswer(index, choiceIndex)}
                  >
                    {choice}
                  </button>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
