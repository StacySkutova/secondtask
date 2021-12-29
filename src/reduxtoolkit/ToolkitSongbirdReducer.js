import { /*createAction, createReducer,*/ createSlice } from "@reduxjs/toolkit";

import birdsData from "./BirdsData";
import axios from "axios";
import { toast } from "react-toastify";

const pureBirdsData = birdsData.map(({ data }) => data);
const randomIndex = Math.floor(
  Math.random() * Math.floor(pureBirdsData.length)
);

const birdSlicer = createSlice({
  name: "songbird",
  initialState: {
    pureBirdsData: [],
    level: 0,
    score: 0,
    levelScore: 5,
    questionedBird: pureBirdsData[0][randomIndex],
    selectedBird: null,
    correctAnswer: false,
    resetColorIndicator: false,
    isFetching: false,
  },
  reducers: {
    setPureBirdsData: (state, action) => {
      state.pureBirdsData = action.payload;
    },
    setLevel: (state, action) => {
      state.level = action.payload;
    },
    setScore: (state, action) => {
      state.score = action.payload;
    },
    setQuestionedBird: (state, action) => {
      state.questionedBird = action.payload;
    },
    setLevelScore: (state, action) => {
      state.levelScore = action.payload;
    },
    setSelectedBird: (state, action) => {
      state.selectedBird = action.payload;
    },
    setCorrectAnswer: (state, action) => {
      state.correctAnswer = action.payload;
    },
    setResetColorIndicator: (state, action) => {
      state.resetColorIndicator = action.payload;
    },
    setIsFetching: (state, action) => {
      state.isFetching = action.payload;
    },
  },
});

export const {
  setPureBirdsData,
  setLevel,
  setScore,
  setQuestionedBird,
  setLevelScore,
  setSelectedBird,
  setCorrectAnswer,
  setResetColorIndicator,
  setIsFetching,
} = birdSlicer.actions;

const slowCode = async () => {
  return new Promise(function (resolve, reject) {
    setTimeout(resolve, 3000);
  });
};

export const fetchAsyncBirdsData = () => async (dispatch) => {
  try {
    dispatch(setIsFetching(true));
    await slowCode();
    const res = await axios.get(
      "https://raw.githubusercontent.com/StacySkutova/BirdsData/main/BirdsData.json"
    );
    const birdsData = res.data;
    dispatch(setPureBirdsData(birdsData));
    dispatch(setIsFetching(false));
  } catch (err) {
    dispatch(setIsFetching(false));
    toast.error("NO DATA AVAILABLE");
    throw Error("NO FILE");
  }
};

export default birdSlicer.reducer;
