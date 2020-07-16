export const setStartPosition = (coords) => {
  return { type: "setStart", payload: coords };
};

export const toggleGameMode = (mode) => {
  return { type: "toggle game mode", payload: mode };
};
