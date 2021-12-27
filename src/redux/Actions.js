export const setLevel = (level) => ({
  type: "SET_LEVEL",
  level,
});

export const setScore = (score) => ({
  type: "SET_SCORE",
  score,
});

export const setLevelScore = (levelScore) => ({
  type: "SET_LEVEL_SCORE",
  levelScore,
});

export const setQuestionedBird = (questionedBird) => ({
  type: "SET_QUESTIONED_BIRD",
  questionedBird,
});

export const setSelectedBird = (selectedBird) => ({
  type: "SET_SELECTED_BIRD",
  selectedBird,
});

export const setCorrectAnswer = (correctAnswer) => ({
  type: "SET_CORRECT_ANSWER",
  correctAnswer,
});

export const setResetColorIndicator = (resetColorIndicator) => ({
  type: "SET_RESET_COLOR_INDICATOR",
  resetColorIndicator,
});
