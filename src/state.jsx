import { useState } from "react";

export const useDefinitions = () => useState([]);
export const useSearch = () =>
  useState(JSON.parse(localStorage.getItem("search")));
export const useIsLoading = () => useState(true);
export const useIsDarkTheme = () =>
  useState(JSON.parse(localStorage.getItem("theme")));
export const useIsShown = () => useState(false);
export const useWord = () =>
  useState(JSON.parse(localStorage.getItem("search")));
export const useFont = () => useState(JSON.parse(localStorage.getItem("font")));
export const useError = () => useState(null);
