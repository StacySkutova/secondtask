import { createSelector } from "reselect";

export const songbirdSelector = (state) => state.songbird;

export const pureBirdsDataSelector = createSelector(
  songbirdSelector,
  ({ pureBirdsData }) => pureBirdsData
);

export const levelSelector = createSelector(
  songbirdSelector,
  ({ level }) => level
);

export const scoreSelector = createSelector(
  songbirdSelector,
  ({ score }) => score
);

export const levelScoreSelector = createSelector(
  songbirdSelector,
  ({ levelScore }) => levelScore
);

export const correctAnswerSelector = createSelector(
  songbirdSelector,
  ({ correctAnswer }) => correctAnswer
);

export const questionedBirdSelector = createSelector(
  songbirdSelector,
  ({ questionedBird }) => questionedBird
);

export const selectedBirdSelector = createSelector(
  songbirdSelector,
  ({ selectedBird }) => selectedBird
);
