import { Stat, SectionTitle } from './common';
import type { Copy } from '../content';

export function ProgressView({ text }: { text: Copy }) {
  return (
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
  );
}
