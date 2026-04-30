import { useMemo, useState } from 'react';

type Lesson = {
  id: number;
  title: string;
  topic: string;
  words: number;
  progress: number;
  description: string;
};

type ReviewWord = {
  word: string;
  meaning: string;
  example: string;
};

type QuizQuestion = {
  prompt: string;
  choices: string[];
  answer: number;
};

const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Greetings',
    topic: 'Daily basics',
    words: 8,
    progress: 80,
    description: 'Hello, goodbye, nice to meet you, and simple daily greetings.',
  },
  {
    id: 2,
    title: 'Daily Routine',
    topic: 'Habits',
    words: 10,
    progress: 45,
    description: 'Wake up, brush teeth, go to work, and other routine actions.',
  },
  {
    id: 3,
    title: 'Food & Drinks',
    topic: 'Ordering',
    words: 12,
    progress: 20,
    description: 'Common food words, drinks, and simple restaurant phrases.',
  },
];

const reviewWords: ReviewWord[] = [
  { word: 'introduce', meaning: 'giới thiệu', example: 'Let me introduce myself.' },
  { word: 'routine', meaning: 'thói quen', example: 'My routine starts at 7 AM.' },
  { word: 'morning', meaning: 'buổi sáng', example: 'I study in the morning.' },
  { word: 'order', meaning: 'đặt món', example: 'I want to order a coffee.' },
];

const quiz: QuizQuestion[] = [
  {
    prompt: '“Hello” means:',
    choices: ['Xin chào', 'Tạm biệt', 'Cảm ơn', 'Xin lỗi'],
    answer: 0,
  },
  {
    prompt: 'Choose the correct word: “My ____ starts at 6 AM.”',
    choices: ['routine', 'coffee', 'school', 'order'],
    answer: 0,
  },
  {
    prompt: '“Order” is closest to:',
    choices: ['đặt món', 'ngủ', 'đọc sách', 'học bài'],
    answer: 0,
  },
];

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="stat">
      <span>{label}</span>
      <strong>{value}</strong>
    </div>
  );
}

function SectionTitle({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <div className="panel-head">
      <div>
        <h3>{title}</h3>
        <p className="muted">{subtitle}</p>
      </div>
    </div>
  );
}

function App() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'lessons' | 'review' | 'progress'>('dashboard');
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);
  const [answers, setAnswers] = useState<(number | null)[]>(Array(quiz.length).fill(null));
  const score = useMemo(() => answers.reduce((total, answer, index) => total + (answer === quiz[index].answer ? 1 : 0), 0), [answers]);

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">Personal English Study</p>
          <h1>Learn English in a simple daily flow.</h1>
        </div>
        <button className="primary-btn">Continue learning</button>
      </header>

      <nav className="nav-tabs" aria-label="Primary">
        {[
          ['dashboard', 'Dashboard'],
          ['lessons', 'Lessons'],
          ['review', 'Review'],
          ['progress', 'Progress'],
        ].map(([key, label]) => (
          <button
            key={key}
            className={activeTab === key ? 'tab active' : 'tab'}
            onClick={() => setActiveTab(key as typeof activeTab)}
          >
            {label}
          </button>
        ))}
      </nav>

      {activeTab === 'dashboard' && (
        <main className="grid-layout">
          <section className="hero-panel">
            <div className="hero-copy">
              <p className="section-label">Today&apos;s focus</p>
              <h2>15 minutes, one lesson, one review set.</h2>
              <p className="muted">
                Your dashboard prioritizes what you need to study next, what you missed before, and what keeps the streak alive.
              </p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => setActiveTab('lessons')}>Start lesson</button>
                <button className="secondary-btn" onClick={() => setActiveTab('review')}>Open review</button>
              </div>
            </div>

            <div className="hero-metrics">
              <Stat label="Lessons done" value="12" />
              <Stat label="Words learned" value="148" />
              <Stat label="Current streak" value="6 days" />
            </div>
          </section>

          <section className="panel">
            <SectionTitle title="Next lessons" subtitle="Based on your current level" />
            <div className="lesson-list">
              {lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  className="lesson-row lesson-button"
                  onClick={() => {
                    setSelectedLesson(lesson);
                    setActiveTab('lessons');
                  }}
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
            <SectionTitle title="Review words" subtitle="Words you should revisit" />
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
            <SectionTitle title="Progress overview" subtitle="Small steps, every day" />
            <div className="progress-card">
              <div>
                <p className="section-label">Weekly target</p>
                <strong>5 lessons</strong>
              </div>
              <div>
                <p className="section-label">Quiz accuracy</p>
                <strong>84%</strong>
              </div>
              <div>
                <p className="section-label">Focus area</p>
                <strong>Speaking basics</strong>
              </div>
            </div>
          </section>
        </main>
      )}

      {activeTab === 'lessons' && (
        <main className="two-column-layout">
          <section className="panel">
            <SectionTitle title="Lesson list" subtitle="Pick one lesson to study now" />
            <div className="lesson-stack">
              {lessons.map((lesson) => (
                <button
                  key={lesson.id}
                  className={selectedLesson.id === lesson.id ? 'lesson-card active' : 'lesson-card'}
                  onClick={() => setSelectedLesson(lesson)}
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
              <Stat label="Topic" value={selectedLesson.topic} />
              <Stat label="Core words" value={`${selectedLesson.words}`} />
              <Stat label="Progress" value={`${selectedLesson.progress}%`} />
            </div>
            <div className="detail-actions">
              <button className="primary-btn" onClick={() => setActiveTab('review')}>Go to review</button>
              <button className="secondary-btn" onClick={() => setActiveTab('dashboard')}>Back to dashboard</button>
            </div>
          </section>
        </main>
      )}

      {activeTab === 'review' && (
        <main className="two-column-layout">
          <section className="panel">
            <SectionTitle title="Review words" subtitle="Focus on the words you keep missing" />
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
            <SectionTitle title="Quiz preview" subtitle={`Score: ${score}/${quiz.length}`} />
            <div className="quiz-list">
              {quiz.map((item, index) => (
                <article className="quiz-row" key={item.prompt}>
                  <p className="quiz-prompt">{item.prompt}</p>
                  <div className="quiz-options">
                    {item.choices.map((choice, choiceIndex) => (
                      <button
                        key={choice}
                        className={answers[index] === choiceIndex ? 'option active' : 'option'}
                        onClick={() => {
                          const next = [...answers];
                          next[index] = choiceIndex;
                          setAnswers(next);
                        }}
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
      )}

      {activeTab === 'progress' && (
        <main className="two-column-layout">
          <section className="panel">
            <SectionTitle title="Progress overview" subtitle="Track the learning rhythm" />
            <div className="progress-stack">
              <Stat label="Lessons completed" value="12" />
              <Stat label="Quiz accuracy" value="84%" />
              <Stat label="Streak" value="6 days" />
              <Stat label="Words learned" value="148" />
            </div>
          </section>

          <section className="panel">
            <SectionTitle title="Study rhythm" subtitle="Your personal weekly target" />
            <div className="progress-card weekly-card">
              <div>
                <p className="section-label">This week</p>
                <strong>3 / 5 lessons</strong>
              </div>
              <div>
                <p className="section-label">Next goal</p>
                <strong>Finish review set</strong>
              </div>
              <div>
                <p className="section-label">Focus now</p>
                <strong>Speaking basics</strong>
              </div>
            </div>
          </section>
        </main>
      )}
    </div>
  );
}

export default App;
