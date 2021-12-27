import {/*createAction, createReducer,*/ createSlice} from "@reduxjs/toolkit";

import birdsData from "./BirdsData";

const pureBirdsData = birdsData.map(({ data }) => data);
const randomIndex = Math.floor(
  Math.random() * Math.floor(pureBirdsData.length)
);

/*const initialState = {
  pureBirdsData: birdsData.map(({ data }) => data),
  level: 0,
  score: 0,
  levelScore: 5,
  questionedBird: pureBirdsData[0][randomIndex],
  selectedBird: null,
  correctAnswer: false,
  resetColorIndicator: false,
};*/

/*export const setLevel = createAction("SET_LEVEL");
export const setScore = createAction("SET_SCORE");
export const setLevelScore = createAction("SET_LEVEL_SCORE");
export const setQuestionedBird = createAction("SET_QUESTIONED_BIRD");
export const setSelectedBird = createAction("SET_SELECTED_BIRD");
export const setCorrectAnswer = createAction("SET_CORRECT_ANSWER");
export const setResetColorIndicator = createAction("SET_RESET_COLOR_INDICATOR");

export default createReducer(initialState, {  // что-то неверно прописываю...
  [setLevel]: (state) => {state.level},
  [setScore]: (state) => {state.score},
  [setLevelScore]: (state) => {state.levelScore},
  [setQuestionedBird]: (state) => {state.questionedBird},
  [setSelectedBird]: (state) => {state.selectedBird},
  [setCorrectAnswer]: (state) => {state.correctAnswer},
  [setResetColorIndicator]: (state) => {state.resetColorIndicator},
});*/

const birdSlicer = createSlice({
  name: "songbird",
  initialState: {
    pureBirdsData: birdsData.map(({ data }) => data),
    level: 0,
    score: 0,
    levelScore: 5,
    questionedBird: pureBirdsData[0][randomIndex],
    selectedBird: null,
    correctAnswer: false,
    resetColorIndicator: false,
  },
  reducers: {
    setLevel: (state, action) => {
      state.level = action.payload
    },
    setScore: (state, action) => {
      state.score = action.payload
    },
    setQuestionedBird: (state, action) => {
      state.questionedBird = action.payload
    },
    setLevelScore: (state, action) => {
      state.levelScore = action.payload
    },
    setSelectedBird: (state, action) => {
      state.selectedBird = action.payload
    },
    setCorrectAnswer: (state, action) => {
      state.correctAnswer = action.payload
    },
    setResetColorIndicator: (state, action) => {
      state.resetColorIndicator = action.payload
    },
  }
})

export const {setLevel,
setScore,
setQuestionedBird,
setLevelScore,
setSelectedBird,
setCorrectAnswer,
setResetColorIndicator} = birdSlicer.actions;

export default birdSlicer.reducer;



/*
action.payload.data (.data:{}) - если много объектов*/
