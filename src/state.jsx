import { useState } from "react";

export const useDefinitions = () => useState([]);
export const useSearch = () => useState("keyboard");
export const useIsLoading = () => useState(true);
export const useIsDarkTheme = () => useState(false);
export const useIsShown = () => useState(false);
export const useWord = () => useState("keyboard");
export const useFont = () => useState(JSON.parse(localStorage.getItem("font")));
export const useError = () => useState(null);
