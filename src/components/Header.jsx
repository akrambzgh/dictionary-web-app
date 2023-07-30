/* eslint-disable react/prop-types */

function Header({ isDarkTheme, handleTheme }) {
  return (
    <header className="header">
      <img src="./dictionary-logo.png" alt="" />
      <div className="actions">
        <div className="fonts">
          <span className="selected-font">
            serif <img src="./arrow.png" alt="" />
          </span>
          <ul className="fonts-list">
            <li className="font">serif</li>
            <li className="font">comic sans</li>
            <li className="font">monospace</li>
          </ul>
        </div>
        <div
          className={isDarkTheme ? "theme-switcher on" : "theme-switcher"}
          onClick={handleTheme}
        ></div>
        <img
          src={isDarkTheme ? "./sun.png" : "./moon.png"}
          className="theme-img"
          alt=""
        />
      </div>
    </header>
  );
}
export default Header;
