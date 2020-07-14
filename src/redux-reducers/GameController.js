export default function GameController(
  state = { position_x: null, position_y: null },
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
    default:
      return state;
  }
}
