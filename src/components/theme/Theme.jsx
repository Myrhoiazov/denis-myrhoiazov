import { useEffect } from 'react';
import { useState } from 'react';
import './Theme.scss';

const Theme = () => {
  const [isShrinkView] = useState(false);
  const [theme, setTheme] = useState(()=> localStorage.getItem('theme') ?? 'light');

  const handleThemeChange = () => {
    setTheme(prevState => (prevState === 'dark' ? 'light' : 'dark'));
  };

  useEffect(() => {
    const localTheme = localStorage.getItem('theme');

    if (!localTheme) {
      localStorage.setItem('theme', 'light');
      return;
    }

    localStorage.setItem('theme', theme);

    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [theme]);

  const isDarkMode = theme === 'dark';

  return (
    <div className={`sidebar-container${isShrinkView ? ' shrink' : ''}`}>
      <div className="sidebar-wrapper">
        <div className="sidebar-themeContainer">
          <label
            htmlFor="theme-toggle"
            className={`sidebar-themeLabel${isDarkMode ? ' switched' : ''}`}
          >
            <input
              className="sidebar-themeInput"
              type="checkbox"
              id="theme-toggle"
              onChange={handleThemeChange}
            />
            <div className="sidebar-themeType light">
              {!isDarkMode && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sidebar-listIcon"
                >
                  <circle cx="12" cy="12" r="5" />
                  <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
                </svg>
              )}
              <span className="sidebar-themeInputText"></span>
            </div>
            {isDarkMode && (
              <div className="sidebar-themeType dark">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="sidebar-listIcon"
                >
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                </svg>
                <span className="sidebar-themeInputText"></span>
              </div>
            )}
          </label>
        </div>
      </div>
    </div>
  );
};

export default Theme;
