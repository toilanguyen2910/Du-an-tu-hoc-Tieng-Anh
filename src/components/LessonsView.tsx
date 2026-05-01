import { Stat, SectionTitle } from './common';
import type { Copy, Lesson } from '../content';

export function LessonsView({
  text,
  lessons,
  selectedLesson,
  onSelectLesson,
  onGoToReview,
  onBackToDashboard,
}: {
  text: Copy;
  lessons: Lesson[];
  selectedLesson: Lesson;
  onSelectLesson: (lesson: Lesson) => void;
  onGoToReview: () => void;
  onBackToDashboard: () => void;
}) {
  return (
    <main className="two-column-layout">
      <section className="panel">
        <SectionTitle title={text.lessonList} subtitle={text.lessonListSub} />
        <div className="lesson-stack">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              className={selectedLesson.id === lesson.id ? 'lesson-card active' : 'lesson-card'}
              onClick={() => onSelectLesson(lesson)}
            >
              <div>
                <h4>{lesson.title}</h4>
                <p className="muted">{lesson.topic}</p>
              </div>
              <span>{lesson.progress}%</span>
            </button>
          ))}
        </div>
      </section>

      <section className="panel lesson-detail">
        <SectionTitle title={text.lessonDetailTitle} subtitle={text.lessonDetailSub} />

        <div className="lesson-cover">
          <div>
            <p className="section-label">{text.level}</p>
            <strong>{selectedLesson.level}</strong>
          </div>
          <div>
            <p className="section-label">{text.minutes}</p>
            <strong>{selectedLesson.minutes}</strong>
          </div>
          <div>
            <p className="section-label">{text.progress}</p>
            <strong>{selectedLesson.progress}%</strong>
          </div>
        </div>

        <p className="lesson-description">{selectedLesson.description}</p>

        <section className="lesson-section">
          <h4>{text.objectives}</h4>
          <ul className="bullet-list">
            {selectedLesson.objectives.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>

        <section className="lesson-section">
          <h4>{text.vocabulary}</h4>
          <div className="vocab-list">
            {selectedLesson.vocabulary.map((item) => (
              <article className="vocab-row" key={item.word}>
                <div>
                  <strong>{item.word}</strong>
                  <p className="muted">{item.meaning}</p>
                </div>
                <p>{item.example}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="lesson-section">
          <h4>{text.quiz}</h4>
          <div className="quiz-mini-grid">
            {selectedLesson.quiz.map((q) => (
              <div className="quiz-mini-card" key={q.prompt}>
                <p className="quiz-prompt">{q.prompt}</p>
                <p className="muted">{q.choices[q.answer]}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="detail-actions">
          <button className="primary-btn" onClick={onGoToReview}>{text.goToReview}</button>
          <button className="secondary-btn" onClick={onBackToDashboard}>{text.backToDashboard}</button>
        </div>
      </section>
    </main>
  );
}
