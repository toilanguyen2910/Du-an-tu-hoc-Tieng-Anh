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
        <SectionTitle title={selectedLesson.title} subtitle={selectedLesson.description} />
        <div className="detail-stats">
          <Stat label={text.topic} value={selectedLesson.topic} />
          <Stat label={text.coreWords} value={`${selectedLesson.words}`} />
          <Stat label={text.progress} value={`${selectedLesson.progress}%`} />
        </div>
        <div className="detail-actions">
          <button className="primary-btn" onClick={onGoToReview}>{text.goToReview}</button>
          <button className="secondary-btn" onClick={onBackToDashboard}>{text.backToDashboard}</button>
        </div>
      </section>
    </main>
  );
}
