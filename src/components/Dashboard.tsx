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
  const todayLesson = lessons[0];

  return (
    <main className="dashboard-layout">
      <section className="hero-panel hero-panel-deep">
        <div className="hero-copy">
          <p className="section-label">{text.todayFocus}</p>
          <h2>{text.dashboardLead}</h2>
          <p className="muted hero-body">{text.dashboardBody}</p>
          <div className="hero-badges">
            <span className="status-pill">{text.sessionTag}</span>
            <span className="status-pill soft">{text.dueTag}</span>
          </div>
          <div className="hero-actions">
            <button className="primary-btn" onClick={onStartLesson}>{text.startLesson}</button>
            <button className="secondary-btn" onClick={onOpenReview}>{text.openReview}</button>
          </div>
        </div>

        <div className="study-plan-card">
          <SectionTitle title={text.studyPlanTitle} subtitle={text.studyPlanSub} />
          <div className="plan-row">
            <span>{text.planToday}</span>
            <strong>{todayLesson.title}</strong>
          </div>
          <div className="plan-row">
            <span>{text.reviewDue}</span>
            <strong>{reviewWords[0].word}</strong>
          </div>
          <div className="plan-row">
            <span>{text.lessonComplete}</span>
            <strong>1 / 3</strong>
          </div>
          <div className="plan-row">
            <span>{text.setGoal}</span>
            <strong>15 min</strong>
          </div>
        </div>
      </section>

      <aside className="dashboard-side">
        <section className="panel stats-panel">
          <SectionTitle title={text.progressOverview} subtitle={text.progressOverviewSub} />
          <div className="hero-metrics compact">
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
                  <p className="muted">
                    {lesson.level} · {lesson.words} words · {lesson.minutes} min
                  </p>
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
          <div className="review-stack">
            {reviewWords.map((item) => (
              <div className={`review-chip ${item.strength}`} key={item.word}>
                <div>
                  <strong>{item.word}</strong>
                  <p className="muted">{item.meaning}</p>
                </div>
                <span>{item.nextReview}</span>
              </div>
            ))}
          </div>
        </section>
      </aside>
    </main>
  );
}
