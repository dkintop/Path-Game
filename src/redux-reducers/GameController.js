export default function GameController(
  state = {
    position_x: null,
    position_y: null,
    startPos: null,
    mode: "set start position",
  },
  action
) {
  switch (action.type) {
    case "setStart":
      return {
        ...state,
        startPos: action.payload,
      };
    case "toggle game mode":
      return {
        ...state,
        mode: action.payload,
      };
    default:
      return state;
  }
}
