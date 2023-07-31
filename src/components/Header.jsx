/* eslint-disable react/prop-types */

function Header({
  showList,
  font,
  isShown,
  getFont,
  fonts,
  isDarkTheme,
  handleTheme,
}) {
  return (
    <header className="header">
      <img src="./dictionary-logo.png" alt="" />
      <div className="actions">
        <div className="fonts">
          <span className="selected-font" onClick={showList}>
            {font} <img src="./arrow.png" alt="" />
          </span>
          <ul className={isShown ? "fonts-list show" : "fonts-list"}>
            <li className="font" onClick={getFont} data-font-name={fonts.serif}>
              serif
            </li>
            <li
              className="font"
              onClick={getFont}
              data-font-name={fonts.sansSerif}
            >
              sans-serif
            </li>
            <li
              className="font"
              onClick={getFont}
              data-font-name={fonts.monospace}
            >
              monospace
            </li>
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
