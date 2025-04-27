import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'en' | 'vi';

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

// Translation dictionary
const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.profile': 'Profile',
    'nav.resources': 'Resources',
    'nav.music': 'Music',
    
    // Home page
    'home.greeting': 'Hello, I\'m',
    'home.name': 'Long Vu',
    'home.title': 'Software Engineer & Competitive Programmer',
    'home.aboutMe': 'About Me',
    'home.aboutContent': 'I\'m a software engineer passionate about creating elegant solutions to complex problems. With experience in web development and competitive programming, I enjoy building applications that are both functional and user-friendly.',
    'home.skills': 'Skills',
    'home.connect': 'Connect with me',
    
    // Music page
    'music.title': 'My Music Playlists',
    'music.description': 'Here are some of my favorite playlists. Music is a big part of my coding sessions!',
    'music.backToProfile': 'Back to Profile',
    
    // Resources page
    'resources.title': 'Learning Resources',
    'resources.description': 'Here are some of my favorite resources for learning programming and improving skills. Feel free to explore and find what works best for you!',
    'resources.webDev': 'Web Development',
    'resources.javascript': 'JavaScript',
    'resources.python': 'Python',
    'resources.cPlusCSharp': 'C++ and C#',
    'resources.gameDev': 'Game Development',
    'resources.codingPractice': 'Coding Practice',
    'resources.backToProfile': 'Back to Profile',
  },
  vi: {
    // Navigation
    'nav.profile': 'Trang Cá Nhân',
    'nav.resources': 'Tài Liệu',
    'nav.music': 'Âm Nhạc',
    
    // Home page
    'home.greeting': 'Xin chào, tôi là',
    'home.name': 'Long Vũ',
    'home.title': 'Kỹ Sư Phần Mềm & Lập Trình Viên Thi Đấu',
    'home.aboutMe': 'Về Tôi',
    'home.aboutContent': 'Tôi là một kỹ sư phần mềm đam mê tạo ra các giải pháp tinh tế cho các vấn đề phức tạp. Với kinh nghiệm về phát triển web và lập trình thi đấu, tôi thích xây dựng các ứng dụng vừa chức năng vừa thân thiện với người dùng.',
    'home.skills': 'Kỹ Năng',
    'home.connect': 'Kết nối với tôi',
    
    // Music page
    'music.title': 'Danh Sách Nhạc Của Tôi',
    'music.description': 'Đây là một số danh sách phát yêu thích của tôi. Âm nhạc là một phần quan trọng trong các buổi lập trình của tôi!',
    'music.backToProfile': 'Quay Lại Trang Cá Nhân',
    
    // Resources page
    'resources.title': 'Tài Liệu Học Tập',
    'resources.description': 'Dưới đây là một số tài liệu yêu thích của tôi để học lập trình và nâng cao kỹ năng. Hãy khám phá và tìm ra những gì phù hợp nhất với bạn!',
    'resources.webDev': 'Phát Triển Web',
    'resources.javascript': 'JavaScript',
    'resources.python': 'Python',
    'resources.cPlusCSharp': 'C++ và C#',
    'resources.gameDev': 'Phát Triển Game',
    'resources.codingPractice': 'Luyện Tập Lập Trình',
    'resources.backToProfile': 'Quay Lại Trang Cá Nhân',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Get saved language from localStorage or default to English
    const savedLanguage = localStorage.getItem('language');
    return (savedLanguage === 'vi' ? 'vi' : 'en') as Language;
  });

  // Translation function
  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  // Set language and save to localStorage
  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};