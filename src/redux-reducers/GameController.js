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
    case "left":
      return {
        position_x: state.position_x - 1,
        ...state,
      };
    case "right":
      return {
        ...state,
        position_x: state.position_x + 1,
      };
    case "setStart":
      return {
        ...state,
        startPos: action.payload,
      };
    default:
      return state;
  }
}
