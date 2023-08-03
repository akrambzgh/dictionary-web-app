import { useEffect, useRef } from "react";
import "./App.scss";
import {
  useDefinitions,
  useSearch,
  useIsLoading,
  useIsDarkTheme,
  useIsShown,
  useWord,
  useFont,
  useError,
} from "./state";
import Header from "./components/Header";
import Search from "./components/Search";
import Meanings from "./components/Meanings";
import MainInfo from "./components/MainInfo";
import Source from "./components/Source";
import WordNotFound from "./components/WordNotFound";

function App() {
  const [definitions, setDefinitions] = useDefinitions();
  const [search, setSearch] = useSearch();
  const [isLoading, setIsLoading] = useIsLoading();
  const [isDarkTheme, setIsDarkTheme] = useIsDarkTheme();
  const [isShown, setIsShown] = useIsShown();
  const [word, setWord] = useWord();
  const [font, setFont] = useFont();
  const [error, setError] = useError();

  const audioRef = useRef(null);

  const searchInDictionary = () => {
    setWord(search);
  };
  useEffect(() => {
    fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => response.json())
      .then((data) => {
        setDefinitions(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setError("Error fetching data.");
        setIsLoading(false);
      });
    localStorage.setItem("font", JSON.stringify(font));
    localStorage.setItem("search", JSON.stringify(search));
    localStorage.setItem("theme", JSON.stringify(isDarkTheme));
  }, [font, word, isDarkTheme]);

  let style = {
    fontFamily: font,
  };

  if (isLoading) {
    return (
      <div className="loading" style={style}>
        Please Wait...
      </div>
    );
  }
  if (error) {
    return <div>Error: {error}</div>;
  }

  const getWord = (e) => {
    setSearch(e.target.value);
  };

  const handleTheme = () => {
    setIsDarkTheme((prevIsDarkTheme) => !prevIsDarkTheme);
  };

  const handlePlay = () => {
    const audioElement = audioRef.current;
    if (audioElement.paused || audioElement.ended) {
      audioElement.play();
    } else {
      audioElement.currentTime = 0;
    }
  };

  let fonts = {
    serif: "serif",
    sansSerif: "sans-serif",
    monospace: "monospace",
  };

  const showList = () => {
    setIsShown((prevIsShown) => !prevIsShown);
  };

  const getFont = (event) => {
    const selectedFont = event.target.dataset.fontName;
    setFont(selectedFont);
    setIsShown(false);
  };

  return (
    <div className={isDarkTheme ? "App dark" : "App"} style={style}>
      <div className="container">
        <Header
          showList={showList}
          isShown={isShown}
          font={font}
          getFont={getFont}
          fonts={fonts}
          isDarkTheme={isDarkTheme}
          handleTheme={handleTheme}
        />
        <Search
          search={search}
          getWord={getWord}
          searchInDictionary={searchInDictionary}
        />
        <main className="main">
          <MainInfo
            definitions={definitions}
            audioRef={audioRef}
            handlePlay={handlePlay}
          />
          <Meanings definitionsArr={definitions} />
          <Source definitions={definitions} />
          <WordNotFound definitions={definitions} />
        </main>
      </div>
    </div>
  );
}

export default App;
