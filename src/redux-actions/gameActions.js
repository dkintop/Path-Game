export const setStartPosition = (coords) => {
  return { type: "setStart", payload: coords };
};

export const toggleGameMode = (mode) => {
  return { type: "toggle game mode", payload: mode };
};

export const saveInstructions = (instructions) => {
  return { type: "save instructions", payload: instructions };
};
