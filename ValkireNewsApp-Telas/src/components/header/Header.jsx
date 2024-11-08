import { useState } from 'react';
import '../../styles/components/Header/Header.scss';

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div>
      <header className='header'>
        <div
          className='menu-icon'
          onClick={toggleSidebar}>
          &#9776;
        </div>
        <h1>Meu Site</h1>
      </header>

      <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
        <a
          href='#'
          className='close-btn'
          onClick={toggleSidebar}>
          ×
        </a>
        <a href='#'>Link 1</a>
        <a href='#'>Link 2</a>
        <a href='#'>Link 3</a>
      </div>
    </div>
  );
};
