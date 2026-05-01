export type Language = 'en' | 'vi';

export type Lesson = {
  id: number;
  title: string;
  topic: string;
  level: 'Beginner' | 'Elementary';
  minutes: number;
  words: number;
  progress: number;
  description: string;
  objectives: string[];
  vocabulary: { word: string; meaning: string; example: string }[];
  quiz: { prompt: string; choices: string[]; answer: number }[];
};

export type ReviewWord = {
  word: string;
  meaning: string;
  example: string;
  nextReview: string;
  strength: 'weak' | 'medium' | 'strong';
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
  dashboardBody: string;
  studyPlanTitle: string;
  studyPlanSub: string;
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
  lessonDetailTitle: string;
  lessonDetailSub: string;
  objectives: string;
  vocabulary: string;
  quiz: string;
  topic: string;
  coreWords: string;
  progress: string;
  minutes: string;
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
  planToday: string;
  reviewDue: string;
  lessonComplete: string;
  setGoal: string;
  dueBadge: string;
  level: string;
};

export const lessons: Lesson[] = [
  {
    id: 1,
    title: 'Greetings',
    topic: 'Daily basics',
    level: 'Beginner',
    minutes: 10,
    words: 10,
    progress: 80,
    description: 'Learn how to greet people and respond naturally in daily situations.',
    objectives: ['Say hello and goodbye naturally', 'Introduce yourself briefly', 'Use polite response phrases'],
    vocabulary: [
      { word: 'hello', meaning: 'xin chào', example: 'Hello, nice to meet you.' },
      { word: 'goodbye', meaning: 'tạm biệt', example: 'Goodbye, see you tomorrow.' },
      { word: 'introduce', meaning: 'giới thiệu', example: 'Let me introduce myself.' },
    ],
    quiz: [
      { prompt: '“Hello” means:', choices: ['Xin chào', 'Tạm biệt', 'Cảm ơn', 'Xin lỗi'], answer: 0 },
      { prompt: '“Goodbye” means:', choices: ['Xin chào', 'Tạm biệt', 'Ăn trưa', 'Đi làm'], answer: 1 },
      { prompt: 'Choose the best reply: “Nice to meet you.”', choices: ['See you later', 'Nice to meet you too', 'I am fine', 'Good morning'], answer: 1 },
    ],
  },
  {
    id: 2,
    title: 'Daily Routine',
    topic: 'Habits',
    level: 'Beginner',
    minutes: 12,
    words: 12,
    progress: 55,
    description: 'Talk about your daily habits using common verbs and simple time expressions.',
    objectives: ['Describe morning activities', 'Use time expressions', 'Talk about repeated habits'],
    vocabulary: [
      { word: 'wake up', meaning: 'thức dậy', example: 'I wake up at 6 AM.' },
      { word: 'brush', meaning: 'đánh răng', example: 'I brush my teeth after breakfast.' },
      { word: 'routine', meaning: 'thói quen', example: 'My routine starts early.' },
    ],
    quiz: [
      { prompt: '“wake up” means:', choices: ['thức dậy', 'ngủ', 'ăn sáng', 'đi bộ'], answer: 0 },
      { prompt: '“routine” is closest to:', choices: ['thói quen', 'cái bàn', 'cửa sổ', 'cặp sách'], answer: 0 },
      { prompt: 'Choose the correct sentence:', choices: ['I brush my teeth', 'I brush my book', 'I brush my coffee', 'I brush my bag'], answer: 0 },
    ],
  },
  {
    id: 3,
    title: 'Food & Drinks',
    topic: 'Ordering',
    level: 'Beginner',
    minutes: 12,
    words: 12,
    progress: 30,
    description: 'Practice words for meals, drinks, and ordering something at a café or restaurant.',
    objectives: ['Name common food and drinks', 'Order politely', 'Ask for what you want'],
    vocabulary: [
      { word: 'coffee', meaning: 'cà phê', example: 'I would like a coffee, please.' },
      { word: 'menu', meaning: 'thực đơn', example: 'Can I see the menu?' },
      { word: 'order', meaning: 'đặt món', example: 'I want to order some noodles.' },
    ],
    quiz: [
      { prompt: '“order” means:', choices: ['đặt món', 'ngủ', 'học bài', 'đi xe'], answer: 0 },
      { prompt: '“menu” means:', choices: ['thực đơn', 'bàn học', 'máy tính', 'đèn'], answer: 0 },
      { prompt: 'Choose the polite request:', choices: ['Give me coffee', 'I would like a coffee, please', 'Coffee now', 'No coffee'], answer: 1 },
    ],
  },
  {
    id: 4,
    title: 'School Basics',
    topic: 'Study life',
    level: 'Elementary',
    minutes: 14,
    words: 14,
    progress: 15,
    description: 'Talk about classroom objects, teachers, and simple study activities.',
    objectives: ['Name classroom items', 'Talk about what you need', 'Use simple study phrases'],
    vocabulary: [
      { word: 'notebook', meaning: 'vở', example: 'I write in my notebook.' },
      { word: 'teacher', meaning: 'giáo viên', example: 'My teacher is very helpful.' },
      { word: 'lesson', meaning: 'bài học', example: 'This lesson is easy.' },
    ],
    quiz: [
      { prompt: '“teacher” means:', choices: ['giáo viên', 'học sinh', 'bài tập', 'bút chì'], answer: 0 },
      { prompt: '“notebook” means:', choices: ['quyển vở', 'cái cốc', 'bàn ghế', 'bông hoa'], answer: 0 },
      { prompt: 'Choose the correct phrase:', choices: ['I attend a lesson', 'I eat a lesson', 'I sleep a lesson', 'I buy a lesson'], answer: 0 },
    ],
  },
  {
    id: 5,
    title: 'Travel Basics',
    topic: 'Movement',
    level: 'Elementary',
    minutes: 14,
    words: 14,
    progress: 5,
    description: 'Learn phrases for asking directions, transport, and travel planning.',
    objectives: ['Ask where places are', 'Use transport words', 'Understand travel questions'],
    vocabulary: [
      { word: 'station', meaning: 'ga', example: 'The station is near here.' },
      { word: 'ticket', meaning: 'vé', example: 'I need a ticket to Hanoi.' },
      { word: 'direction', meaning: 'phương hướng', example: 'Can you give me directions?' },
    ],
    quiz: [
      { prompt: '“ticket” means:', choices: ['vé', 'đường', 'nhà', 'bản đồ'], answer: 0 },
      { prompt: '“station” means:', choices: ['ga', 'quán ăn', 'trường học', 'phòng ngủ'], answer: 0 },
      { prompt: 'Choose the asking phrase:', choices: ['Where is the station?', 'The station is blue', 'Station is eat', 'I station now'], answer: 0 },
    ],
  },
];

export const reviewWords: ReviewWord[] = [
  { word: 'introduce', meaning: 'giới thiệu', example: 'Let me introduce myself.', nextReview: 'Today', strength: 'weak' },
  { word: 'routine', meaning: 'thói quen', example: 'My routine starts at 7 AM.', nextReview: 'Tomorrow', strength: 'weak' },
  { word: 'morning', meaning: 'buổi sáng', example: 'I study in the morning.', nextReview: 'Tomorrow', strength: 'medium' },
  { word: 'order', meaning: 'đặt món', example: 'I want to order a coffee.', nextReview: 'In 3 days', strength: 'medium' },
  { word: 'teacher', meaning: 'giáo viên', example: 'My teacher explains clearly.', nextReview: 'In 7 days', strength: 'strong' },
  { word: 'ticket', meaning: 'vé', example: 'I bought a ticket to the city.', nextReview: 'In 7 days', strength: 'strong' },
];

export const quiz: QuizQuestion[] = lessons.flatMap((lesson) => lesson.quiz);

export const copy: Record<Language, Copy> = {
  en: {
    eyebrow: 'Personal English Study',
    title: 'Learn English with a focused daily system.',
    topline: 'Short lessons, targeted review, and progress that actually feels alive.',
    continueLabel: 'Continue learning',
    tabs: { dashboard: 'Dashboard', lessons: 'Lessons', review: 'Review', progress: 'Progress' },
    todayFocus: "Today's study plan",
    dashboardLead: 'A clear session for today, not just a list of features.',
    dashboardBody: 'Pick up where you left off, study the next lesson, and review weak words before moving on.',
    studyPlanTitle: 'Today’s session',
    studyPlanSub: 'A small, realistic flow you can finish in one sitting',
    startLesson: 'Start lesson',
    openReview: 'Open review',
    lessonsDone: 'Lessons done',
    wordsLearned: 'Words learned',
    currentStreak: 'Current streak',
    nextLessons: 'Next lessons',
    nextLessonsSub: 'Lessons ordered by progress and readiness',
    reviewWords: 'Review words',
    reviewWordsSub: 'Words scheduled for revision',
    progressOverview: 'Progress overview',
    progressOverviewSub: 'A simple picture of your study habit',
    weeklyTarget: 'Weekly target',
    quizAccuracy: 'Quiz accuracy',
    focusArea: 'Focus area',
    lessonList: 'Lesson list',
    lessonListSub: 'Pick one lesson to study now',
    lessonDetailTitle: 'Lesson detail',
    lessonDetailSub: 'The material, goals, and quiz for this lesson',
    objectives: 'Objectives',
    vocabulary: 'Vocabulary',
    quiz: 'Quiz',
    topic: 'Topic',
    coreWords: 'Core words',
    progress: 'Progress',
    minutes: 'Minutes',
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
    readyToday: 'Ready for today’s lesson',
    sessionTag: '10 min session',
    dueTag: 'Review due today',
    weeklyCompletion: 'Weekly completion',
    planToday: 'Today',
    reviewDue: 'Review due',
    lessonComplete: 'Lesson complete',
    setGoal: 'Set goal',
    dueBadge: 'Due',
    level: 'Level',
  },
  vi: {
    eyebrow: 'Học Tiếng Anh Cá Nhân',
    title: 'Học tiếng Anh bằng một hệ thống tập trung mỗi ngày.',
    topline: 'Bài học ngắn, ôn đúng trọng tâm, và tiến độ nhìn thấy rõ ràng.',
    continueLabel: 'Tiếp tục học',
    tabs: { dashboard: 'Bảng chính', lessons: 'Bài học', review: 'Ôn tập', progress: 'Tiến độ' },
    todayFocus: 'Kế hoạch học hôm nay',
    dashboardLead: 'Một phiên học rõ ràng cho hôm nay, không chỉ là danh sách chức năng.',
    dashboardBody: 'Tiếp tục từ chỗ bạn đang dừng, học bài tiếp theo và ôn từ yếu trước khi đi tiếp.',
    studyPlanTitle: 'Phiên học hôm nay',
    studyPlanSub: 'Luồng học nhỏ, thực tế và hoàn thành được trong một lần ngồi học',
    startLesson: 'Bắt đầu bài học',
    openReview: 'Mở ôn tập',
    lessonsDone: 'Số bài đã học',
    wordsLearned: 'Số từ đã học',
    currentStreak: 'Chuỗi ngày học',
    nextLessons: 'Bài học tiếp theo',
    nextLessonsSub: 'Bài được sắp theo tiến độ và mức sẵn sàng',
    reviewWords: 'Từ cần ôn',
    reviewWordsSub: 'Những từ đã đến lịch ôn lại',
    progressOverview: 'Tổng quan tiến độ',
    progressOverviewSub: 'Hình dung đơn giản về thói quen học của bạn',
    weeklyTarget: 'Mục tiêu tuần',
    quizAccuracy: 'Độ chính xác quiz',
    focusArea: 'Phần cần tập trung',
    lessonList: 'Danh sách bài học',
    lessonListSub: 'Chọn một bài để học ngay',
    lessonDetailTitle: 'Chi tiết bài học',
    lessonDetailSub: 'Nội dung, mục tiêu và quiz của bài này',
    objectives: 'Mục tiêu',
    vocabulary: 'Từ vựng',
    quiz: 'Quiz',
    topic: 'Chủ đề',
    coreWords: 'Từ cốt lõi',
    progress: 'Tiến độ',
    minutes: 'Phút',
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
    planToday: 'Hôm nay',
    reviewDue: 'Đến lịch ôn',
    lessonComplete: 'Hoàn thành bài',
    setGoal: 'Đặt mục tiêu',
    dueBadge: 'Đến hạn',
    level: 'Cấp độ',
  },
};
