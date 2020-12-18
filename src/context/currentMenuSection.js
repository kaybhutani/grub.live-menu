import React, { createContext } from "react";

const currentSectionContext = createContext({
  currentSection: "",
  updateCurrentSection: (name) => {},
});

export default currentSectionContext;
