export type Language = 'en' | 'vi';

export type Lesson = {
  id: number;
  title: string;
  topic: string;
  words: number;
  progress: number;
  description: string;
};

export type ReviewWord = {
  word: string;
  meaning: string;
  example: string;
};

export type QuizQuestion = {
  prompt: string;
  choices: string[];
  answer: number;
};

export type Copy = {
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

export const lessons: Lesson[] = [
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

export const reviewWords: ReviewWord[] = [
  { word: 'introduce', meaning: 'giới thiệu', example: 'Let me introduce myself.' },
  { word: 'routine', meaning: 'thói quen', example: 'My routine starts at 7 AM.' },
  { word: 'morning', meaning: 'buổi sáng', example: 'I study in the morning.' },
  { word: 'order', meaning: 'đặt món', example: 'I want to order a coffee.' },
];

export const quiz: QuizQuestion[] = [
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

export const copy: Record<Language, Copy> = {
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
