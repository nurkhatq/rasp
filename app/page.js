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
} from 'lucide-react';

export default function Page() {
  const [darkMode, setDarkMode] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const [currentExamIndex, setCurrentExamIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [selectedGroup, setSelectedGroup] = useState('BDA-2207');
  const [selectedCourses, setSelectedCourses] = useState({
    'course1': 'ITRM',
    'course2': 'BDLE2'
  });

  const electivePairs = {
    'course1': ['ITRM', 'ISF'],
    'course2': ['BDLE2', 'BIOINF']
  };

  const allExams = {
    'BDA-2201': [
  {
    id: 1,
    date: '17.02.2025',
    time: '09:00-10:00',
    subject: 'ITRM',
    location: 'C1.3.331P',
    professor: 'Tulemisova Madina',
    color: darkMode ? 'bg-blue-900' : 'bg-blue-200',
    textColor: darkMode ? 'text-blue-100' : 'text-blue-900',
    alternative: {
      subject: 'ISF',
      time: '10:00-11:00',
      location: 'C1.2.231K',
      professor: 'Balziya Aldosh'
    }
  },
  {
    id: 2,
    date: '19.02.2025',
    time: '17:00-18:00',
    subject: 'BDLE2',
    location: 'C1.3.361',
    professor: 'Nurlan Adaliev',
    color: darkMode ? 'bg-green-900' : 'bg-green-200',
    textColor: darkMode ? 'text-green-100' : 'text-green-900',
    alternative: {
      subject: 'BIOINF',
      time: '15:00-16:00',
      professor: 'Kairov Ulykbek'
    }
  },
  {
    id: 3,
    date: '21.02.2025',
    time: '09:00-10:00',
    subject: 'DRL',
    location: 'IEC-303',
    professor: 'Zholtayev Darkhan',
    color: darkMode ? 'bg-purple-900' : 'bg-purple-200',
    textColor: darkMode ? 'text-purple-100' : 'text-purple-900',
  },
  {
    id: 4,
    date: '22.02.2025',
    time: '14:00-15:00',
    subject: 'BDDA',
    location: 'C1.3.370',
    professor: 'Alimzhanov Yermek',
    color: darkMode ? 'bg-pink-900' : 'bg-pink-200',
    textColor: darkMode ? 'text-pink-100' : 'text-pink-900',
  },
  {
    id: 5,
    date: '24.02.2025',
    time: '09:00-10:00',
    subject: 'RMT',
    location: 'C1.1.255P',
    professor: 'Aigerim Mansurova',
    color: darkMode ? 'bg-yellow-900' : 'bg-yellow-200',
    textColor: darkMode ? 'text-yellow-100' : 'text-yellow-900',
  },
  {
    id: 6,
    date: '25.02.2025',
    time: '09:00-10:00',
    subject: 'NLP',
    location: 'C1.1.365P',
    professor: 'Aiymbay Sunggat',
    color: darkMode ? 'bg-orange-900' : 'bg-orange-200',
    textColor: darkMode ? 'text-orange-100' : 'text-orange-900',
  }
],
'BDA-2202': [
  {
    id: 1,
    date: '17.02.2025',
    time: '09:00-10:00',
    subject: 'ITRM',
    location: 'C1.3.331P',
    professor: 'Tulemisova Madina',
    color: darkMode ? 'bg-blue-900' : 'bg-blue-200',
    textColor: darkMode ? 'text-blue-100' : 'text-blue-900',
    alternative: {
      subject: 'ISF',
      time: '11:00-12:00',
      location: 'C1.2.231K',
      professor: 'Balziya Aldosh'
    }
  },
  {
    id: 2,
    date: '19.02.2025',
    time: '17:00-18:00',
    subject: 'BDLE2',
    location: 'C1.3.361',
    professor: 'Nurlan Adaliev',
    color: darkMode ? 'bg-green-900' : 'bg-green-200',
    textColor: darkMode ? 'text-green-100' : 'text-green-900',
    alternative: {
      subject: 'BIOINF',
      time: '15:00-16:00',
      professor: 'Kairov Ulykbek'
    }
  },
  {
    id: 3,
    date: '21.02.2025',
    time: '10:00-11:00',
    subject: 'DRL',
    location: 'IEC-303',
    professor: 'Zholtayev Darkhan',
    color: darkMode ? 'bg-purple-900' : 'bg-purple-200',
    textColor: darkMode ? 'text-purple-100' : 'text-purple-900',
  },
  {
    id: 4,
    date: '22.02.2025',
    time: '14:00-15:00',
    subject: 'BDDA',
    location: 'C1.3.370',
    professor: 'Alimzhanov Yermek',
    color: darkMode ? 'bg-pink-900' : 'bg-pink-200',
    textColor: darkMode ? 'text-pink-100' : 'text-pink-900',
  },
  {
    id: 5,
    date: '24.02.2025',
    time: '11:00-12:00',
    subject: 'RMT',
    location: 'C1.1.255P',
    professor: 'Aigerim Mansurova',
    color: darkMode ? 'bg-yellow-900' : 'bg-yellow-200',
    textColor: darkMode ? 'text-yellow-100' : 'text-yellow-900',
  },
  {
    id: 6,
    date: '25.02.2025',
    time: '10:00-11:00',
    subject: 'NLP',
    location: 'C1.1.365P',
    professor: 'Aiymbay Sunggat',
    color: darkMode ? 'bg-orange-900' : 'bg-orange-200',
    textColor: darkMode ? 'text-orange-100' : 'text-orange-900',
  }
],
'BDA-2203': [
  {
    id: 1,
    date: '17.02.2025',
    time: '10:00-11:00',
    subject: 'ITRM',
    location: 'C1.3.331P',
    professor: 'Tulemisova Madina',
    color: darkMode ? 'bg-blue-900' : 'bg-blue-200',
    textColor: darkMode ? 'text-blue-100' : 'text-blue-900',
    alternative: {
      subject: 'ISF',
      time: '12:00-13:00',
      location: 'C1.2.231K',
      professor: 'Balziya Aldosh'
    }
  },
  {
    id: 2,
    date: '19.02.2025',
    time: '17:00-18:00',
    subject: 'BDLE2',
    location: 'C1.3.361',
    professor: 'Nurlan Adaliev',
    color: darkMode ? 'bg-green-900' : 'bg-green-200',
    textColor: darkMode ? 'text-green-100' : 'text-green-900',
    alternative: {
      subject: 'BIOINF',
      time: '15:00-16:00',
      professor: 'Kairov Ulykbek'
    }
  },
  {
    id: 3,
    date: '21.02.2025',
    time: '11:00-12:00',
    subject: 'DRL',
    location: 'IEC-303',
    professor: 'Zholtayev Darkhan',
    color: darkMode ? 'bg-purple-900' : 'bg-purple-200',
    textColor: darkMode ? 'text-purple-100' : 'text-purple-900',
  },
  {
    id: 4,
    date: '22.02.2025',
    time: '14:00-15:00',
    subject: 'BDDA',
    location: 'C1.3.370',
    professor: 'Alimzhanov Yermek',
    color: darkMode ? 'bg-pink-900' : 'bg-pink-200',
    textColor: darkMode ? 'text-pink-100' : 'text-pink-900',
  },
  {
    id: 5,
    date: '24.02.2025',
    time: '14:00-15:00',
    subject: 'RMT',
    location: 'C1.1.255P',
    professor: 'Aigerim Mansurova',
    color: darkMode ? 'bg-yellow-900' : 'bg-yellow-200',
    textColor: darkMode ? 'text-yellow-100' : 'text-yellow-900',
  },
  {
    id: 6,
    date: '25.02.2025',
    time: '11:00-12:00',
    subject: 'NLP',
    location: 'C1.1.365P',
    professor: 'Aiymbay Sunggat',
    color: darkMode ? 'bg-orange-900' : 'bg-orange-200',
    textColor: darkMode ? 'text-orange-100' : 'text-orange-900',
  }
],
'BDA-2204': [
  {
    id: 1,
    date: '17.02.2025',
    time: '09:00-10:00',
    subject: 'ITRM',
    location: 'C1.3.331P',
    professor: 'Tulemisova Madina',
    color: darkMode ? 'bg-blue-900' : 'bg-blue-200',
    textColor: darkMode ? 'text-blue-100' : 'text-blue-900',
    alternative: {
      subject: 'ISF',
      time: '10:00-11:00',
      location: 'C1.2.239K',
      professor: 'Tolegen Dana'
    }
  },
  {
    id: 2,
    date: '19.02.2025',
    time: '17:00-18:00',
    subject: 'BDLE2',
    location: 'C1.3.361',
    professor: 'Nurlan Adaliev',
    color: darkMode ? 'bg-green-900' : 'bg-green-200',
    textColor: darkMode ? 'text-green-100' : 'text-green-900',
    alternative: {
      subject: 'BIOINF',
      time: '15:00-16:00',
      professor: 'Kairov Ulykbek'
    }
  },
  {
    id: 3,
    date: '21.02.2025',
    time: '12:00-13:00',
    subject: 'DRL',
    location: 'IEC-303',
    professor: 'Zholtayev Darkhan',
    color: darkMode ? 'bg-purple-900' : 'bg-purple-200',
    textColor: darkMode ? 'text-purple-100' : 'text-purple-900',
  },
  {
    id: 4,
    date: '22.02.2025',
    time: '14:00-15:00',
    subject: 'BDDA',
    location: 'C1.3.370',
    professor: 'Alimzhanov Yermek',
    color: darkMode ? 'bg-pink-900' : 'bg-pink-200',
    textColor: darkMode ? 'text-pink-100' : 'text-pink-900',
  },
  {
    id: 5,
    date: '24.02.2025',
    time: '16:00-17:00',
    subject: 'RMT',
    location: 'C1.1.255P',
    professor: 'Aigerim Mansurova',
    color: darkMode ? 'bg-yellow-900' : 'bg-yellow-200',
    textColor: darkMode ? 'text-yellow-100' : 'text-yellow-900',
  },
  {
    id: 6,
    date: '25.02.2025',
    time: '12:00-13:00',
    subject: 'NLP',
    location: 'C1.1.365P',
    professor: 'Aiymbay Sunggat',
    color: darkMode ? 'bg-orange-900' : 'bg-orange-200',
    textColor: darkMode ? 'text-orange-100' : 'text-orange-900',
  }
],
    'BDA-2205': [
      {
        id: 1,
        date: '17.02.2025',
        time: '09:00-10:00',
        subject: 'ITRM',
        location: 'C1.3.331P',
        professor: 'Tulemisova Madina',
        color: darkMode ? 'bg-blue-900' : 'bg-blue-200',
        textColor: darkMode ? 'text-blue-100' : 'text-blue-900',
        alternative: {
          subject: 'ISF',
          time: '11:00-12:00',
          location: 'C1.2.239K',
          professor: 'Tolegen Dana'
        }
      },
      {
        id: 2,
        date: '19.02.2025',
        time: '15:00-16:00',
        subject: 'BDLE2',
        location: 'C1.3.361',
        professor: 'Kairo Ulykbek',
        color: darkMode ? 'bg-green-900' : 'bg-green-200',
        textColor: darkMode ? 'text-green-100' : 'text-green-900',
        alternative: {
          subject: 'BIOINF',
          professor: 'Kairo Ulykbek, Nurgaliyev Berikkhan'
        }
      },
      {
        id: 3,
        date: '21.02.2025',
        time: '14:00-15:00',
        subject: 'DRL',
        location: 'IEC-303',
        professor: 'Zholtayev Darkhan',
        color: darkMode ? 'bg-purple-900' : 'bg-purple-200',
        textColor: darkMode ? 'text-purple-100' : 'text-purple-900',
      },
      {
        id: 4,
        date: '22.02.2025',
        time: '16:00-17:00',
        subject: 'BDDA',
        location: 'C1.3.370',
        professor: 'Alimzhanov Yermek',
        color: darkMode ? 'bg-pink-900' : 'bg-pink-200',
        textColor: darkMode ? 'text-pink-100' : 'text-pink-900',
      },
      {
        id: 5,
        date: '24.02.2025',
        time: '09:00-10:00',
        subject: 'RMT',
        location: 'C1.1.344P',
        professor: 'Alzhanov Almas',
        color: darkMode ? 'bg-yellow-900' : 'bg-yellow-200',
        textColor: darkMode ? 'text-yellow-100' : 'text-yellow-900',
      },
      {
        id: 6,
        date: '25.02.2025',
        time: '14:00-15:00',
        subject: 'NLP',
        location: 'C1.1.365P',
        professor: 'Aiymbay Sunggat',
        color: darkMode ? 'bg-orange-900' : 'bg-orange-200',
        textColor: darkMode ? 'text-orange-100' : 'text-orange-900',
      }
    ],
    'BDA-2206': [
      {
        id: 1,
        date: '17.02.2025',
        time: '09:00-10:00',
        subject: 'ITRM',
        location: 'C1.3.331P',
        professor: 'Tulemisova Madina',
        color: darkMode ? 'bg-blue-900' : 'bg-blue-200',
        textColor: darkMode ? 'text-blue-100' : 'text-blue-900',
        alternative: {
          subject: 'ISF',
          time: '12:00-13:00',
          location: 'C1.2.299K',
          professor: 'Tolegen Dana'
        }
      },
      {
        id: 2,
        date: '19.02.2025',
        time: '15:00-16:00',
        subject: 'BDLE2',
        location: 'C1.3.361',
        professor: 'Kairo Ulykbek',
        color: darkMode ? 'bg-green-900' : 'bg-green-200',
        textColor: darkMode ? 'text-green-100' : 'text-green-900',
        alternative: {
          subject: 'BIOINF',
          professor: 'Kairo Ulykbek, Nurgaliyev Berikkhan'
        }
      },
      {
        id: 3,
        date: '21.02.2025',
        time: '15:00-16:00',
        subject: 'DRL',
        location: 'IEC-303',
        professor: 'Zholtayev Darkhan',
        color: darkMode ? 'bg-purple-900' : 'bg-purple-200',
        textColor: darkMode ? 'text-purple-100' : 'text-purple-900',
      },
      {
        id: 4,
        date: '22.02.2025',
        time: '16:00-17:00',
        subject: 'BDDA',
        location: 'C1.3.370',
        professor: 'Alimzhanov Yermek',
        color: darkMode ? 'bg-pink-900' : 'bg-pink-200',
        textColor: darkMode ? 'text-pink-100' : 'text-pink-900',
      },
      {
        id: 5,
        date: '24.02.2025',
        time: '12:00-13:00',
        subject: 'RMT',
        location: 'C1.1.344P',
        professor: 'Alzhanov Almas',
        color: darkMode ? 'bg-yellow-900' : 'bg-yellow-200',
        textColor: darkMode ? 'text-yellow-100' : 'text-yellow-900',
      },
      {
        id: 6,
        date: '25.02.2025',
        time: '15:00-16:00',
        subject: 'NLP',
        location: 'C1.1.365P',
        professor: 'Aiymbay Sunggat',
        color: darkMode ? 'bg-orange-900' : 'bg-orange-200',
        textColor: darkMode ? 'text-orange-100' : 'text-orange-900',
      }
    ],
    'BDA-2207': [
      {
        id: 1,
        date: '17.02.2025',
        time: '10:00-11:00',
        subject: 'ITRM',
        location: 'C1.3.331P',
        professor: 'Tulemisova Madina',
        color: darkMode ? 'bg-blue-900' : 'bg-blue-200',
        textColor: darkMode ? 'text-blue-100' : 'text-blue-900',
        alternative: {
          subject: 'ISF',
          time: '12:00-13:30',
          location: 'C1.2.231K',
          professor: 'Batiyaz Aldosh'
        }
      },
      {
        id: 2,
        date: '19.02.2025',
        time: '17:00-18:00',
        subject: 'BDLE2',
        location: 'C1.3.361',
        professor: 'Nurlan Adaliev',
        color: darkMode ? 'bg-green-900' : 'bg-green-200',
        textColor: darkMode ? 'text-green-100' : 'text-green-900',
        alternative: {
          subject: 'BIOINF',
          professor: 'Kairo Ulykbek'
        }
      },
      {
        id: 3,
        date: '21.02.2025',
        time: '16:00-17:00',
        subject: 'DRL',
        location: 'IEC-303',
        professor: 'Zholtayev Darkhan',
        color: darkMode ? 'bg-purple-900' : 'bg-purple-200',
        textColor: darkMode ? 'text-purple-100' : 'text-purple-900',
      },
      {
        id: 4,
        date: '22.02.2025',
        time: '16:00-17:00',
        subject: 'BDDA',
        location: 'C1.3.370',
        professor: 'Alimzhanov Yermek',
        color: darkMode ? 'bg-pink-900' : 'bg-pink-200',
        textColor: darkMode ? 'text-pink-100' : 'text-pink-900',
      },
      {
        id: 5,
        date: '24.02.2025',
        time: '15:00-16:00',
        subject: 'RMT',
        location: 'C1.1.344P',
        professor: 'Alzhanov Almas',
        color: darkMode ? 'bg-yellow-900' : 'bg-yellow-200',
        textColor: darkMode ? 'text-yellow-100' : 'text-yellow-900',
      },
      {
        id: 6,
        date: '25.02.2025',
        time: '16:00-17:00',
        subject: 'NLP',
        location: 'C1.1.365P',
        professor: 'Aiymbay Sunggat',
        color: darkMode ? 'bg-orange-900' : 'bg-orange-200',
        textColor: darkMode ? 'text-orange-100' : 'text-orange-900',
      }
    ]
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

  const calculateTimeLeft = () => {
    const now = new Date();
    allExams[selectedGroup].forEach((exam) => {
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

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900' : 'bg-gray-100'} py-8`}>
      <div className="w-full max-w-3xl mx-auto px-2 sm:px-4">
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className={`text-3xl font-bold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
            Расписание экзаменов
          </h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
          >
            {darkMode ? <Sun className="text-white" /> : <Moon className="text-gray-900" />}
          </button>
        </div>

        {/* Group Tabs */}
<div className="flex flex-wrap gap-2 mb-6">
  {Object.keys(allExams).map((group) => (
    <button
      key={group}
      onClick={() => setSelectedGroup(group)}
      className={`px-3 py-1.5 text-sm sm:px-4 sm:py-2 sm:text-base rounded-lg font-semibold transition-colors
        ${selectedGroup === group 
          ? (darkMode ? 'bg-blue-600 text-white' : 'bg-blue-500 text-white')
          : (darkMode ? 'bg-gray-700 text-gray-300' : 'bg-gray-200 text-gray-700')
        }
        hover:opacity-90 whitespace-nowrap`}
    >
      {group}
    </button>
  ))}
</div>

{/* Course Selection - also update this to be more mobile friendly */}
<div className={`mb-6 p-3 sm:p-4 rounded-lg ${darkMode ? 'bg-gray-800' : 'bg-white'} shadow-lg`}>
  <h2 className={`text-base sm:text-lg font-semibold mb-3 ${darkMode ? 'text-white' : 'text-gray-900'}`}>
    Выберите ваши курсы:
  </h2>
  <div className="space-y-3">
    {Object.entries(electivePairs).map(([pairKey, courses]) => (
      <div key={pairKey} className="flex flex-wrap items-center gap-2">
        {courses.map(course => (
          <button
            key={course}
            onClick={() => setSelectedCourses(prev => ({
              ...prev,
              [pairKey]: course
            }))}
            className={`px-3 py-1.5 text-sm rounded-lg transition-colors ${
              selectedCourses[pairKey] === course
                ? 'bg-blue-500 text-white'
                : darkMode 
                  ? 'bg-gray-700 text-gray-300'
                  : 'bg-gray-200 text-gray-700'
            }`}
          >
            {course}
          </button>
        ))}
      </div>
    ))}
  </div>
</div>

        {/* Exam Cards */}
        <div className="space-y-4">
          {allExams[selectedGroup].map((exam, index) => {
            const timeLeftData = timeLeft[exam.id] || { days: 0, hours: 0, minutes: 0 };
            const isPast = timeLeftData.days < 0;
            const isNext = !isPast && index === currentExamIndex;

            // Check if this exam has an alternative and which version to show
            const isElective = exam.alternative !== undefined;
            const showAlternative = isElective && (
              (exam.subject === 'ITRM' && selectedCourses.course1 === 'ISF') ||
              (exam.subject === 'BDLE2' && selectedCourses.course2 === 'BIOINF')
            );

            const displayExam = showAlternative ? {
              ...exam,
              subject: exam.alternative.subject,
              time: exam.alternative.time || exam.time,
              location: exam.alternative.location || exam.location,
              professor: exam.alternative.professor
            } : exam;

            return (
              <div
                key={exam.id}
                className={`
                  ${displayExam.color} 
                  border 
                  ${darkMode ? 'border-gray-700' : 'border-gray-200'}
                  rounded-lg p-4 shadow-lg 
                  transform transition-all duration-300
                  ${isNext ? 'ring-2 ring-blue-500' : ''}
                  hover:scale-101
                  ${isElective ? 'border-l-4 border-l-blue-500' : ''}
                `}
              >
                <div className="grid grid-cols-3 gap-4 mb-2">
                  <div className="flex items-center gap-2">
                    <CalendarDays className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                    <span className={`font-semibold ${displayExam.textColor}`}>{displayExam.date}</span>
                  </div>
                  <div className="flex items-center gap-2 justify-center">
                    <Clock className={`w-5 h-5 ${darkMode ? 'text-gray-300' : 'text-gray-700'}`} />
                    <span className={`font-semibold ${displayExam.textColor}`}>{displayExam.time}</span>
                  </div>
                  <div className="text-right">
                    <span className={`text-lg font-bold ${displayExam.textColor}`}>
                      {displayExam.subject}
                    </span>
                    {isElective && (
                      <span className="text-xs text-blue-500 block">
                        Элективный курс
                      </span>
                    )}
                  </div>
                </div>

                <div className={`grid grid-cols-2 gap-4 mt-3 pt-3 border-t ${darkMode ? 'border-gray-700' : 'border-gray-300'}`}>
                  <div>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      📍 {displayExam.location}
                    </p>
                    <p className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                      👨‍🏫 {displayExam.professor}
                    </p>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Timer className={`w-4 h-4 ${darkMode ? 'text-gray-300' : 'text-gray-600'}`} />
                      <span className={`text-sm ${darkMode ? 'text-gray-300' : 'text-gray-600'}`}>
                        {timeLeftData.days}д {timeLeftData.hours}ч {timeLeftData.minutes}м
                      </span>
                    </div>
                  </div>
                </div>

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