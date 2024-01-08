import React, { useState } from 'react';
import './index.css'; // Arquivo para os estilos CSS

const SubMenu = () => {
  const [showSubMenu, setShowSubMenu] = useState(false);

  const handleMouseEnter = () => {
    setShowSubMenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubMenu(false);
  };

  return (
    <div className="menu-item" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <span>Menu</span>
      {showSubMenu && (
        <ul className="submenu">
          <li>Opção 1</li>
          <li>Opção 2</li>
          <li>Opção 3</li>
        </ul>
      )}
    </div>
  );
};

export default SubMenu;