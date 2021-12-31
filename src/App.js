import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Route, Routes } from "react-router-dom";

import Header from "src/components/Header/Header";
import FullPageLoader from "src/components/FullPageLoader/FullPageLoader";
import Registration from "src/components/Game/Game";
import Signup from "src/components/Signup/Signup";
import Signin from "src/components/Signin/Signin";
import {
  isFetchingSelector,
  pureBirdsDataSelector,
} from "src/reduxtoolkit/Selectors";
import { fetchAsyncBirdsData } from "src/reduxtoolkit/ToolkitSongbirdReducer";

import styles from "./App.module.scss";

const App = () => {
  const pureBirdsData = useSelector(pureBirdsDataSelector);
  const isFetching = useSelector(isFetchingSelector);
  const dispatch = useDispatch();

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
          <Routes>
            <Route exact path="/" element={<Registration />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/signin" element={<Signin />} />
          </Routes>
        </div>
      )}
    </div>
  );
};

export default App;
