import { useEffect, useMemo, useState } from 'react';
import { Dashboard } from './components/Dashboard';
import { LessonsView } from './components/LessonsView';
import { ProgressView } from './components/ProgressView';
import { ReviewView } from './components/ReviewView';
import { copy, lessons, quiz, reviewWords, type Language, type Lesson } from './content';

type Tab = 'dashboard' | 'lessons' | 'review' | 'progress';

function App() {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('study-language');
    return saved === 'en' || saved === 'vi' ? saved : 'vi';
  });
  const text = copy[language];

  useEffect(() => {
    localStorage.setItem('study-language', language);
  }, [language]);

  const [activeTab, setActiveTab] = useState<Tab>('dashboard');
  const [selectedLesson, setSelectedLesson] = useState<Lesson>(lessons[0]);
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
            onClick={() => setActiveTab(key as Tab)}
          >
            {label}
          </button>
        ))}
      </nav>

      {activeTab === 'dashboard' && (
        <Dashboard
          text={text}
          lessons={lessons}
          reviewWords={reviewWords}
          onStartLesson={() => setActiveTab('lessons')}
          onOpenReview={() => setActiveTab('review')}
          onSelectLesson={(lesson) => {
            setSelectedLesson(lesson);
            setActiveTab('lessons');
          }}
        />
      )}

      {activeTab === 'lessons' && (
        <LessonsView
          text={text}
          lessons={lessons}
          selectedLesson={selectedLesson}
          onSelectLesson={setSelectedLesson}
          onGoToReview={() => setActiveTab('review')}
          onBackToDashboard={() => setActiveTab('dashboard')}
        />
      )}

      {activeTab === 'review' && (
        <ReviewView
          text={text}
          reviewWords={reviewWords}
          quiz={quiz}
          answers={answers}
          score={score}
          onAnswer={(questionIndex, choiceIndex) => {
            const next = [...answers];
            next[questionIndex] = choiceIndex;
            setAnswers(next);
          }}
        />
      )}

      {activeTab === 'progress' && <ProgressView text={text} />}
    </div>
  );
}

export default App;
