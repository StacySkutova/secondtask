import React, { createRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Header from "./components/Header/Header";
import Results from "./components/Results/Results";
import Question from "./components/Question/Question";
import Answers from "./components/Answers/Answers";
import Description from "./components/Description/Description";
import Button from "./components/Button/Button";
import FullPageLoader from "./components/FullPageLoader/FullPageLoader";
import {
  isFetchingSelector,
  levelSelector,
  pureBirdsDataSelector,
} from "./../src/reduxtoolkit/Selectors";
import { fetchAsyncBirdsData } from "./../src/reduxtoolkit/ToolkitSongbirdReducer";

import styles from "./App.module.scss";

const App = () => {
  const pureBirdsData = useSelector(pureBirdsDataSelector);
  const level = useSelector(levelSelector);
  const isFetching = useSelector(isFetchingSelector);

  const dispatch = useDispatch();

  const audioPlayer = createRef();
  const detailsAudioPlayer = createRef();

  useEffect(() => {
    dispatch(fetchAsyncBirdsData());
  }, []);

  if (isFetching) {
    return (
      <div>
        <FullPageLoader />
      </div>
    );
  }

  return (
    <div>
      {pureBirdsData.length === 0 ? (
        <ToastContainer autoClose={10000} />
      ) : (
        <div className={styles.app}>
          <Header />
          <div>
            {level > pureBirdsData.length - 1 ? (
              <Results />
            ) : (
              <>
                <Question
                  audioPlayer={audioPlayer}
                  detailsAudioPlayer={detailsAudioPlayer}
                />
                <div className={styles.answersDetails}>
                  <Answers
                    birdsList={pureBirdsData[level]}
                    audioPlayer={audioPlayer}
                  />
                  <Description
                    audioPlayer={audioPlayer}
                    detailsAudioPlayer={detailsAudioPlayer}
                  />
                </div>
              </>
            )}
            <Button />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
