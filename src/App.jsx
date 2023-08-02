import { useEffect, useRef } from "react";
import "./App.css";
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
  console.log(search);
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
  }, [font, word]);

  console.log(definitions[0]);
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  console.log(definitions[0]);

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

  let style = {
    fontFamily: font,
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
    <div className="App" style={style}>
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
  );
}

export default App;
