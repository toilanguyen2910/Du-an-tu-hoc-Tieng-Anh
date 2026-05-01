import { SectionTitle } from './common';
import type { Copy, Lesson } from '../content';

export function ReviewView({
  text,
  lessons,
  answers,
  score,
  onAnswer,
}: {
  text: Copy;
  lessons: Lesson[];
  answers: (number | null)[];
  score: number;
  onAnswer: (questionIndex: number, choiceIndex: number) => void;
}) {
  const quiz = lessons.flatMap((lesson) => lesson.quiz);

  return (
    <main className="review-layout">
      <section className="panel">
        <SectionTitle title={text.reviewTitle} subtitle={text.reviewSub} />
        <div className="review-summary">
          <div className="summary-card">
            <span>{text.reviewDue}</span>
            <strong>{quiz.length} questions</strong>
          </div>
          <div className="summary-card">
            <span>{text.quizAccuracy}</span>
            <strong>{Math.round((score / quiz.length) * 100) || 0}%</strong>
          </div>
        </div>
        <div className="review-list enhanced">
          {lessons.map((lesson) => (
            <article className="review-row" key={lesson.id}>
              <div>
                <h4>{lesson.title}</h4>
                <p className="muted">{lesson.topic} · {lesson.quiz.length} questions</p>
              </div>
              <p className="muted">{lesson.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <SectionTitle title={text.quizPreview} subtitle={`Score: ${score}/${quiz.length}`} />
        <div className="quiz-list">
          {quiz.map((item, index) => (
            <article className="quiz-row quiz-card" key={item.prompt}>
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
