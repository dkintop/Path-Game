export default function GameController(
  state = {
    position_x: null,
    position_y: null,
    startPos: null,
    mode: "set start position",
    instructions: null,
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
    case "save instructions":
      return {
        ...state,
        instructions: action.payload,
      };
    default:
      return state;
  }
}
