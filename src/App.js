import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, Clock, ChevronLeft } from 'lucide-react';

const TimeGame = () => {
  const items = {
    "WhatsApp": {
      asGuardian: "תקשורת מהירה ויעילה, תיאומים מיידיים, שיתוף מידע בזמן אמת",
      asThief: "הודעות לא חשובות, התראות תכופות, שיחות אינסופיות"
    },
    "רשתות חברתיות": {
      asGuardian: "נטוורקינג מקצועי, למידה והתעדכנות, שיווק ופרסום יעיל",
      asThief: "גלילה אינסופית, תוכן לא רלוונטי, הסחות דעת תכופות"
    },
    "ישיבות": {
      asGuardian: "קבלת החלטות מהירה, תיאום ציפיות, פתרון בעיות בזמן אמת",
      asThief: "דיונים ארוכים ללא מטרה, משתתפים לא רלוונטיים, היעדר אג'נדה"
    },
    "מיילים": {
      asGuardian: "תיעוד מסודר, תקשורת רשמית, מעקב אחר משימות",
      asThief: "שרשורים אינסופיים, CC מיותר, התראות תכופות"
    },
    "שיחות מסדרון": {
      asGuardian: "פתרון בעיות מהיר, תקשורת בלתי אמצעית, חיזוק קשרי צוות",
      asThief: "הפרעות לא מתוכננות, שיחות לא ממוקדות, קטיעת רצף עבודה"
    },
    "פרפקציוניזם": {
      asGuardian: "איכות גבוהה, ירידה לפרטים, מניעת טעויות",
      asThief: "עיכוב בהגשות, התמקדות בפרטים שוליים, חוסר יעילות"
    },
    "תכנון מקדים": {
      asGuardian: "מניעת טעויות, יעילות בביצוע, חיסכון במשאבים",
      asThief: "תכנון יתר, עיכוב בהתחלת ביצוע, חוסר גמישות"
    },
    "הפקת לקחים": {
      asGuardian: "שיפור מתמיד, מניעת טעויות חוזרות, התייעלות",
      asThief: "התעכבות על העבר, האשמות הדדיות, דיונים ארוכים"
    },
    "נטפליקס": {
      asGuardian: "הפוגה והתרעננות, איזון עבודה-פנאי, מקור השראה",
      asThief: "בינג'ים אינסופיים, דחיינות, בזבוז זמן פנוי"
    },
    "הגדרת מטרות": {
      asGuardian: "מיקוד ותעדוף, מדידת הצלחה, מוטיבציה",
      asThief: "הצבת יעדים לא ריאליים, תסכול מאי עמידה ביעדים, עודף תכנון"
    },
    "בינה מלאכותית": {
      asGuardian: "אוטומציה של משימות, ייעול תהליכים, תובנות מהירות",
      asThief: "זמן למידה ארוך, הסתמכות יתר, אובדן מיומנויות"
    },
    'תסמונת "לא נעים לי"': {
      asGuardian: "שמירה על יחסי עבודה טובים, עזרה הדדית, אמפתיה",
      asThief: "הסכמה למשימות מיותרות, קושי לסרב, עומס מיותר"
    },
    "האצלת סמכויות": {
      asGuardian: "פיתוח עובדים, התמקדות במשימות חשובות, הגברת יעילות",
      asThief: "זמן הדרכה ארוך, קושי לשחרר שליטה, צורך במעקב צמוד"
    },
    "סיעור מוחות": {
      asGuardian: "רעיונות חדשים, פתרון בעיות יצירתי, שיתוף פעולה",
      asThief: "דיונים לא ממוקדים, השתתפות לא רלוונטית, בזבוז זמן קבוצתי"
    }
  };

  const itemNames = Object.keys(items);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [votes, setVotes] = useState({ guardian: 0, thief: 0 });
  const [isFinished, setIsFinished] = useState(false);
  const [itemVotes, setItemVotes] = useState(
    Object.fromEntries(itemNames.map(item => [item, { guardian: 0, thief: 0 }]))
  );

  const handleVote = (type) => {
    setVotes(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
    setItemVotes(prev => ({
      ...prev,
      [itemNames[currentIndex]]: {
        ...prev[itemNames[currentIndex]],
        [type]: prev[itemNames[currentIndex]][type] + 1
      }
    }));
    setShowResult(true);
  };

  const nextItem = () => {
    if (currentIndex < itemNames.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowResult(false);
      setVotes({ guardian: 0, thief: 0 });
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 p-8">
        <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl p-8">
          <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            סיכום: שומרי וגנבי הזמן
          </h1>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gradient-to-r from-blue-50 to-purple-50">
                  <th className="p-4 text-right border-b-2 border-gray-200 font-bold">נושא</th>
                  <th className="p-4 text-right border-b-2 border-gray-200 font-bold text-green-600">כשומר זמן</th>
                  <th className="p-4 text-right border-b-2 border-gray-200 font-bold text-red-600">כגנב זמן</th>
                  <th className="p-4 text-center border-b-2 border-gray-200 font-bold">תוצאות הצבעה</th>
                </tr>
              </thead>
              <tbody>
                {itemNames.map((item) => (
                  <motion.tr 
                    key={item}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="hover:bg-blue-50 transition-colors"
                  >
                    <td className="p-4 border-b border-gray-200">
                      <div className="font-bold text-gray-800">
                        {item}
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <div className="text-green-700">
                        {items[item].asGuardian}
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <div className="text-red-700">
                        {items[item].asThief}
                      </div>
                    </td>
                    <td className="p-4 border-b border-gray-200">
                      <div className="flex justify-center gap-4">
                        <span className="bg-green-100 px-4 py-2 rounded-full">
                          <span className="font-bold text-green-600">{itemVotes[item].guardian}</span>
                          <span className="text-green-600"> שומרי זמן</span>
                        </span>
                        <span className="bg-red-100 px-4 py-2 rounded-full">
                          <span className="font-bold text-red-600">{itemVotes[item].thief}</span>
                          <span className="text-red-600"> גנבי זמן</span>
                        </span>
                      </div>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 text-center">
            <button 
              onClick={() => window.location.reload()}
              className="bg-blue-500 text-white px-6 py-3 rounded-lg font-bold text-lg hover:bg-blue-600 transition-colors"
            >
              התחל משחק חדש
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 flex items-center justify-center p-4">
      <div className="bg-white p-8 rounded-2xl shadow-2xl max-w-md w-full">
        <div className="text-center text-gray-500 mb-4">
          שאלה {currentIndex + 1} מתוך {itemNames.length}
        </div>

        <h1 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          {itemNames[currentIndex]}
        </h1>

        {!showResult && (
          <div className="flex gap-4 justify-center">
            <button
              className="bg-red-500 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-red-600 transition-colors flex items-center gap-2"
              onClick={() => handleVote('thief')}
            >
              <Clock className="w-6 h-6" />
              גנב הזמן
            </button>
            
            <button
              className="bg-green-500 text-white px-6 py-3 rounded-xl font-bold text-lg hover:bg-green-600 transition-colors flex items-center gap-2"
              onClick={() => handleVote('guardian')}
            >
              <Award className="w-6 h-6" />
              שומר הזמן
            </button>
          </div>
        )}

        {showResult && (
          <div className="text-center">
            <div className="flex gap-4 justify-center mb-6">
              <div className="bg-green-100 p-4 rounded-xl">
                <div className="font-bold text-green-600 text-xl">{votes.guardian}</div>
                <div className="text-green-600">שומרי זמן</div>
              </div>
              <div className="bg-red-100 p-4 rounded-xl">
                <div className="font-bold text-red-600 text-xl">{votes.thief}</div>
                <div className="text-red-600">גנבי זמן</div>
              </div>
            </div>
            
            <button
              className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600 transition-colors flex items-center gap-2 mx-auto"
              onClick={nextItem}
            >
              {currentIndex < itemNames.length - 1 ? (
                <>
                  הבא <ChevronLeft className="w-5 h-5" />
                </>
              ) : (
                'סיים משחק'
              )}
            </button>
          </div>
        )}

        <div className="mt-8 bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-full rounded-full transition-all duration-300"
            style={{ width: `${((currentIndex + 1) / itemNames.length) * 100}%` }}
          />
        </div>
      </div>
    </div>
  );
};

export default TimeGame;
