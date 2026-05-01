import { Stat, SectionTitle } from './common';
import type { Copy, Lesson, ReviewWord } from '../content';

export function Dashboard({
  text,
  lessons,
  reviewWords,
  onStartLesson,
  onOpenReview,
  onSelectLesson,
}: {
  text: Copy;
  lessons: Lesson[];
  reviewWords: ReviewWord[];
  onStartLesson: () => void;
  onOpenReview: () => void;
  onSelectLesson: (lesson: Lesson) => void;
}) {
  return (
    <main className="grid-layout">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="section-label">{text.todayFocus}</p>
          <h2>{text.dashboardLead}</h2>
          <p className="muted">
            Your dashboard prioritizes what you need to study next, what you missed before, and what keeps the streak alive.
          </p>
          <div className="hero-badges">
            <span className="status-pill">{text.sessionTag}</span>
            <span className="status-pill soft">{text.dueTag}</span>
          </div>
          <div className="hero-actions">
            <button className="primary-btn" onClick={onStartLesson}>{text.startLesson}</button>
            <button className="secondary-btn" onClick={onOpenReview}>{text.openReview}</button>
          </div>
        </div>

        <div className="hero-metrics">
          <Stat label={text.lessonsDone} value="12" />
          <Stat label={text.wordsLearned} value="148" />
          <Stat label={text.currentStreak} value="6 days" />
        </div>
      </section>

      <section className="panel">
        <SectionTitle title={text.nextLessons} subtitle={text.nextLessonsSub} />
        <div className="lesson-list">
          {lessons.map((lesson) => (
            <button
              key={lesson.id}
              className="lesson-row lesson-button"
              onClick={() => onSelectLesson(lesson)}
            >
              <div>
                <h4>{lesson.title}</h4>
                <p className="muted">{lesson.words} core words, short examples, quick quiz</p>
              </div>
              <div className="lesson-meta">
                <div className="progress-track">
                  <div className="progress-fill" style={{ width: `${lesson.progress}%` }} />
                </div>
                <span>{lesson.progress}%</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      <section className="panel">
        <SectionTitle title={text.reviewWords} subtitle={text.reviewWordsSub} />
        <div className="word-grid">
          {reviewWords.map((item) => (
            <div className="word-chip" key={item.word}>
              <strong>{item.word}</strong>
              <span>{item.meaning}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="panel progress-panel">
        <SectionTitle title={text.progressOverview} subtitle={text.progressOverviewSub} />
        <div className="progress-stack">
          <Stat label={text.weeklyTarget} value="5 lessons" />
          <Stat label={text.quizAccuracy} value="84%" />
          <Stat label={text.focusArea} value="Speaking basics" />
        </div>
        <div className="progress-bar-wrap">
          <div className="progress-bar-header">
            <span className="muted">{text.weeklyCompletion}</span>
            <strong>62%</strong>
          </div>
          <div className="progress-track big">
            <div className="progress-fill" style={{ width: '62%' }} />
          </div>
        </div>
      </section>
    </main>
  );
}
