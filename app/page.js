'use client';

import { useState, useEffect } from 'react';
import { 
  CalendarDays, 
  Clock, 
  Moon, 
  Sun, 
  AlertCircle, 
  CheckCircle2, 
  Timer,
  ArrowUpCircle,
  BarChart3
} from 'lucide-react';
import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer 
} from 'recharts';

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const [currentExamIndex, setCurrentExamIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  const exams = [
    {
      id: 1,
      date: '17.02.2025',
      time: '10:00-11:00',
      subject: 'ITRM',
      color: darkMode ? 'bg-blue-900' : 'bg-blue-200',
      textColor: darkMode ? 'text-blue-100' : 'text-blue-900',
      location: 'C1.3.331P',
      professor: 'Tulemisova Madina',
      difficulty: 4,
      preparationTime: 20,
    },
    {
      id: 2,
      date: '19.02.2025',
      time: '17:00-18:00',
      subject: 'BDLE2',
      color: darkMode ? 'bg-green-900' : 'bg-green-200',
      textColor: darkMode ? 'text-green-100' : 'text-green-900',
      location: 'C1.3.361',
      professor: 'Nurlan Adaliev',
      difficulty: 2,
      preparationTime: 25,
    },
    {
      id: 3,
      date: '21.02.2025',
      time: '16:00-17:00',
      subject: 'DRL',
      color: darkMode ? 'bg-purple-900' : 'bg-purple-200',
      textColor: darkMode ? 'text-purple-100' : 'text-purple-900',
      location: 'IEC-303',
      professor: 'Zholtayev Darkhan',
      difficulty: 4,
      preparationTime: 15,
    },
    {
      id: 4,
      date: '22.02.2025',
      time: '16:00-17:00',
      subject: 'BDDA',
      color: darkMode ? 'bg-pink-900' : 'bg-pink-200',
      textColor: darkMode ? 'text-pink-100' : 'text-pink-900',
      location: 'C1.3.370',
      professor: 'Alimzhanov Ermek',
      difficulty: 3,
      preparationTime: 18,
    },
    {
      id: 5,
      date: '24.02.2025',
      time: '15:00-16:00',
      subject: 'RMT',
      color: darkMode ? 'bg-yellow-900' : 'bg-yellow-200',
      textColor: darkMode ? 'text-yellow-100' : 'text-yellow-900',
      location: 'C.1.1.344P',
      professor: 'Alzhanov Almas',
      difficulty: 3,
      preparationTime: 12,
    },
    {
      id: 6,
      date: '25.02.2025',
      time: '16:00-17:00',
      subject: 'NLP',
      color: darkMode ? 'bg-orange-900' : 'bg-orange-200',
      textColor: darkMode ? 'text-orange-100' : 'text-orange-900',
      location: 'C.1.1.365P',
      professor: 'Aiymbay Sungat',
      difficulty: 5,
      preparationTime: 30,
    }
  ];

  const calculateTimeLeft = () => {
    const now = new Date();
    exams.forEach((exam) => {
      const examDate = new Date(exam.date.split('.').reverse().join('-') + 'T' + exam.time.split('-')[0]);
      const difference = examDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(prev => ({
        ...prev,
        [exam.id]: { days, hours, minutes }
      }));
    });
  };

  useEffect(() => {
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const getDifficultyColor = (difficulty) => {
    const colors = {
      1: 'bg-green-500',
      2: 'bg-green-400',
      3: 'bg-yellow-400',
      4: 'bg-orange-400',
      5: 'bg-red-500'
    };
    return colors[difficulty] || 'bg-gray-400';
  };

  const preparationData = exams.map(exam => ({
    name: exam.subject,
    hours: exam.preparationTime
  }));

  return (
    <main className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} py-8`}>
      <div className="w-full max-w-3xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Расписание экзаменов
          </h1>
          <div className="flex gap-4">
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              {darkMode ? <Sun className="text-white" /> : <Moon className="text-gray-900" />}
            </button>
            <button
              onClick={() => setShowStats(!showStats)}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <BarChart3 className={darkMode ? 'text-white' : 'text-gray-900'} />
            </button>
          </div>
        </div>

        {/* Statistics */}
        {showStats && (
          <div className={`mb-6 p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
            <h2 className={`text-xl font-bold mb-4 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              Статистика подготовки
            </h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={preparationData}>
                  <XAxis dataKey="name" stroke={darkMode ? '#fff' : '#000'} />
                  <YAxis stroke={darkMode ? '#fff' : '#000'} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: darkMode ? '#1f2937' : '#fff',
                      color: darkMode ? '#fff' : '#000'
                    }} 
                  />
                  <Line 
                    type="monotone" 
                    dataKey="hours" 
                    stroke="#8884d8" 
                    strokeWidth={2}
                    dot={{ r: 4 }}
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Exam Cards */}
        <div className="space-y-4">
          {exams.map((exam, index) => {
            const timeLeftData = timeLeft[exam.id] || { days: 0, hours: 0, minutes: 0 };
            const isPast = timeLeftData.days < 0;
            const isNext = !isPast && currentExamIndex === index;

            return (
              <div
                key={exam.id}
                className={`
                  ${exam.color} 
                  border 
                  ${darkMode ? 'border-gray-700' : 'border-gray-200'}
                  rounded-lg p-4 shadow-lg 
                  transform transition-all duration-300
                  ${isNext ? 'scale-102 ring-2 ring-blue-500' : ''}
                  hover:scale-101
                `}
              >
                {/* Main Info */}
                <div className="grid grid-cols-3 gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <CalendarDays className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                    <span className={`font-semibold ${exam.textColor}`}>{exam.date}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Clock className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                    <span className={`font-semibold ${exam.textColor}`}>{exam.time}</span>
                  </div>
                  <div className="text-right">
                    <span className={`text-lg font-bold ${exam.textColor}`}>
                      {exam.subject}
                    </span>
                  </div>
                </div>

                {/* Extended Info */}
                <div className={`grid grid-cols-2 gap-4 mt-3 pt-3 border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      📍 {exam.location}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      👨‍🏫 {exam.professor}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2 mb-1">
                      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        Сложность:
                      </span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 rounded-full ${
                              i < exam.difficulty ? getDifficultyColor(exam.difficulty) : 'bg-gray-300'
                            }`}
                          />
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center justify-end gap-2">
                      <Timer className={`w-4 h-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {timeLeftData.days}д {timeLeftData.hours}ч {timeLeftData.minutes}м
                      </span>
                    </div>
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2 mt-2">
                  {isPast ? (
                    <div className="flex items-center gap-1 text-green-500">
                      <CheckCircle2 className="w-4 h-4" />
                      <span className="text-sm">Экзамен завершен</span>
                    </div>
                  ) : isNext ? (
                    <div className="flex items-center gap-1 text-blue-500">
                      <AlertCircle className="w-4 h-4" />
                      <span className="text-sm">Следующий экзамен</span>
                    </div>
                  ) : null}
                </div>
              </div>
            );
          })}
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-3 rounded-full shadow-lg transition-all duration-300 ${
              darkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
            } hover:scale-110`}
          >
            <ArrowUpCircle className="w-6 h-6" />
          </button>
        )}
      </div>
    </main>
  );
}