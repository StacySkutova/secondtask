import birdsData from "./BirdsData";

const pureBirdsData = birdsData.map(({ data }) => data);
const randomIndex = Math.floor(
  Math.random() * Math.floor(pureBirdsData.length)
);

const INITIAL_STATE = {
  level: 0,
  score: 0,
  levelScore: 5,
  correctAnswer: false,
  questionedBird: pureBirdsData[0][randomIndex],
  selectedBird: null,
  pureBirdsData: birdsData.map(({ data }) => data),
};

const songbirdReducer = (state = INITIAL_STATE, action) => {
  const { type, ...payload } = action;

  switch (type) {
    case "SET_LEVEL":
    case "SET_SCORE":
    case "SET_LEVEL_SCORE":
    case "SET_CORRECT_ANSWER":
    case "SET_QUESTIONED_BIRD":
    case "SET_SELECTED_BIRD":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default songbirdReducer;
