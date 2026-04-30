import { useEffect, useMemo, useState } from 'react';

type Language = 'en' | 'vi';

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

type Copy = {
  eyebrow: string;
  title: string;
  topline: string;
  continueLabel: string;
  tabs: { dashboard: string; lessons: string; review: string; progress: string };
  todayFocus: string;
  dashboardLead: string;
  startLesson: string;
  openReview: string;
  lessonsDone: string;
  wordsLearned: string;
  currentStreak: string;
  nextLessons: string;
  nextLessonsSub: string;
  reviewWords: string;
  reviewWordsSub: string;
  progressOverview: string;
  progressOverviewSub: string;
  weeklyTarget: string;
  quizAccuracy: string;
  focusArea: string;
  lessonList: string;
  lessonListSub: string;
  topic: string;
  coreWords: string;
  progress: string;
  goToReview: string;
  backToDashboard: string;
  reviewTitle: string;
  reviewSub: string;
  quizPreview: string;
  progressTrack: string;
  studyRhythm: string;
  studyRhythmSub: string;
  thisWeek: string;
  nextGoal: string;
  focusNow: string;
  readyToday: string;
  sessionTag: string;
  dueTag: string;
  weeklyCompletion: string;
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

const copy: Record<Language, Copy> = {
  en: {
    eyebrow: 'Personal English Study',
    title: 'Learn English in a simple daily flow.',
    topline: 'Built for short sessions, quick review, and visible progress every day.',
    continueLabel: 'Continue learning',
    tabs: { dashboard: 'Dashboard', lessons: 'Lessons', review: 'Review', progress: 'Progress' },
    todayFocus: "Today's focus",
    dashboardLead: '15 minutes, one lesson, one review set.',
    startLesson: 'Start lesson',
    openReview: 'Open review',
    lessonsDone: 'Lessons done',
    wordsLearned: 'Words learned',
    currentStreak: 'Current streak',
    nextLessons: 'Next lessons',
    nextLessonsSub: 'Based on your current level',
    reviewWords: 'Review words',
    reviewWordsSub: 'Words you should revisit',
    progressOverview: 'Progress overview',
    progressOverviewSub: 'Small steps, every day',
    weeklyTarget: 'Weekly target',
    quizAccuracy: 'Quiz accuracy',
    focusArea: 'Focus area',
    lessonList: 'Lesson list',
    lessonListSub: 'Pick one lesson to study now',
    topic: 'Topic',
    coreWords: 'Core words',
    progress: 'Progress',
    goToReview: 'Go to review',
    backToDashboard: 'Back to dashboard',
    reviewTitle: 'Review words',
    reviewSub: 'Focus on the words you keep missing',
    quizPreview: 'Quiz preview',
    progressTrack: 'Track the learning rhythm',
    studyRhythm: 'Study rhythm',
    studyRhythmSub: 'Your personal weekly target',
    thisWeek: 'This week',
    nextGoal: 'Next goal',
    focusNow: 'Focus now',
    readyToday: "Ready for today's lesson",
    sessionTag: '10 min session',
    dueTag: 'Review due today',
    weeklyCompletion: 'Weekly completion',
  },
  vi: {
    eyebrow: 'Học Tiếng Anh Cá Nhân',
    title: 'Học tiếng Anh theo nhịp đơn giản mỗi ngày.',
    topline: 'Tối ưu cho các buổi học ngắn, ôn nhanh và thấy tiến độ rõ ràng mỗi ngày.',
    continueLabel: 'Tiếp tục học',
    tabs: { dashboard: 'Bảng chính', lessons: 'Bài học', review: 'Ôn tập', progress: 'Tiến độ' },
    todayFocus: 'Mục tiêu hôm nay',
    dashboardLead: '15 phút, một bài học, một bộ ôn tập.',
    startLesson: 'Bắt đầu học',
    openReview: 'Mở ôn tập',
    lessonsDone: 'Số bài đã học',
    wordsLearned: 'Số từ đã học',
    currentStreak: 'Chuỗi ngày học',
    nextLessons: 'Bài học tiếp theo',
    nextLessonsSub: 'Dựa trên mức hiện tại của bạn',
    reviewWords: 'Từ cần ôn',
    reviewWordsSub: 'Những từ bạn nên xem lại',
    progressOverview: 'Tổng quan tiến độ',
    progressOverviewSub: 'Mỗi ngày một chút',
    weeklyTarget: 'Mục tiêu tuần',
    quizAccuracy: 'Độ chính xác quiz',
    focusArea: 'Phần cần tập trung',
    lessonList: 'Danh sách bài học',
    lessonListSub: 'Chọn một bài để học ngay',
    topic: 'Chủ đề',
    coreWords: 'Từ cốt lõi',
    progress: 'Tiến độ',
    goToReview: 'Đi tới ôn tập',
    backToDashboard: 'Quay về bảng chính',
    reviewTitle: 'Ôn tập từ vựng',
    reviewSub: 'Tập trung vào những từ bạn hay quên',
    quizPreview: 'Quiz xem nhanh',
    progressTrack: 'Theo dõi nhịp học',
    studyRhythm: 'Nhịp học',
    studyRhythmSub: 'Mục tiêu tuần của riêng bạn',
    thisWeek: 'Tuần này',
    nextGoal: 'Mục tiêu tiếp theo',
    focusNow: 'Đang tập trung',
    readyToday: 'Sẵn sàng cho bài hôm nay',
    sessionTag: 'Phiên 10 phút',
    dueTag: 'Đến lịch ôn hôm nay',
    weeklyCompletion: 'Hoàn thành tuần',
  },
};

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
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('study-language');
    return saved === 'en' || saved === 'vi' ? saved : 'vi';
  });
  const text = copy[language];
  useEffect(() => {
    localStorage.setItem('study-language', language);
  }, [language]);

  const [activeTab, setActiveTab] = useState<'dashboard' | 'lessons' | 'review' | 'progress'>('dashboard');
  const [selectedLesson, setSelectedLesson] = useState(lessons[0]);
  const [answers, setAnswers] = useState<(number | null)[]>(() => {
    const saved = localStorage.getItem('study-answers');
    if (!saved) return Array(quiz.length).fill(null);
    try {
      const parsed = JSON.parse(saved) as (number | null)[];
      return Array.isArray(parsed) && parsed.length === quiz.length ? parsed : Array(quiz.length).fill(null);
    } catch {
      return Array(quiz.length).fill(null);
    }
  });
  useEffect(() => {
    localStorage.setItem('study-answers', JSON.stringify(answers));
  }, [answers]);

  const score = useMemo(
    () => answers.reduce((total: number, answer, index) => total + (answer === quiz[index].answer ? 1 : 0), 0),
    [answers],
  );

  return (
    <div className="app-shell">
      <header className="topbar">
        <div>
          <p className="eyebrow">{text.eyebrow}</p>
          <h1>{text.title}</h1>
          <p className="topline-note">{text.topline}</p>
        </div>
        <div className="topbar-actions">
          <div className="language-switcher" role="group" aria-label="Language switcher">
            <button type="button" className={language === 'vi' ? 'tab active' : 'tab'} onClick={() => setLanguage('vi')}>VI</button>
            <button type="button" className={language === 'en' ? 'tab active' : 'tab'} onClick={() => setLanguage('en')}>EN</button>
          </div>
          <span className="status-pill">{text.readyToday}</span>
          <button className="primary-btn">{text.continueLabel}</button>
        </div>
      </header>

      <nav className="nav-tabs" aria-label="Primary">
        {[
          ['dashboard', text.tabs.dashboard],
          ['lessons', text.tabs.lessons],
          ['review', text.tabs.review],
          ['progress', text.tabs.progress],
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
                <button className="primary-btn" onClick={() => setActiveTab('lessons')}>{text.startLesson}</button>
                <button className="secondary-btn" onClick={() => setActiveTab('review')}>{text.openReview}</button>
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
      )}

      {activeTab === 'lessons' && (
        <main className="two-column-layout">
          <section className="panel">
            <SectionTitle title={text.lessonList} subtitle={text.lessonListSub} />
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
              <Stat label={text.topic} value={selectedLesson.topic} />
              <Stat label={text.coreWords} value={`${selectedLesson.words}`} />
              <Stat label={text.progress} value={`${selectedLesson.progress}%`} />
            </div>
            <div className="detail-actions">
              <button className="primary-btn" onClick={() => setActiveTab('review')}>{text.goToReview}</button>
              <button className="secondary-btn" onClick={() => setActiveTab('dashboard')}>{text.backToDashboard}</button>
            </div>
          </section>
        </main>
      )}

      {activeTab === 'review' && (
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
            <SectionTitle title={text.progressOverview} subtitle={text.progressTrack} />
            <div className="progress-stack">
              <Stat label="Lessons completed" value="12" />
              <Stat label="Quiz accuracy" value="84%" />
              <Stat label="Streak" value="6 days" />
              <Stat label="Words learned" value="148" />
            </div>
          </section>

          <section className="panel">
            <SectionTitle title={text.studyRhythm} subtitle={text.studyRhythmSub} />
            <div className="progress-card weekly-card">
              <div>
                <p className="section-label">{text.thisWeek}</p>
                <strong>3 / 5 lessons</strong>
              </div>
              <div>
                <p className="section-label">{text.nextGoal}</p>
                <strong>Finish review set</strong>
              </div>
              <div>
                <p className="section-label">{text.focusNow}</p>
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
