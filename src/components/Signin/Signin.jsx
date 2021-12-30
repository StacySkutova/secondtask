import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

import styles from "./../Signup.module.scss";

const Signin = () => {
  const validationsSchema = yup.object().shape({
    email: yup.string().email("Enter the correct e-mail").required("Required"),
    password: yup.string().typeError("Should be a string").required("Required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
        }}
        validateOnBlur
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={validationsSchema}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isValid,
          handleSubmit,
          dirty,
        }) => (
          <div className={styles.signForm}>
            <p>
              <label htmlFor={`email`}>Email</label>
              <br />
              <input
                className={styles.field}
                type={`email`}
                name={`email`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.email}
              />
            </p>
            {touched.email && errors.email && <p>{errors.email}</p>}
            <p>
              <label htmlFor={`password`}>Password</label>
              <br />
              <input
                className={styles.field}
                type={`password`}
                name={`password`}
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
              />
            </p>
            {touched.password && errors.password && <p>{errors.password}</p>}
            <button
              className={styles.submitButton}
              disabled={!isValid || !dirty}
              onClick={handleSubmit}
              type={`submit`}
            >
              Submit
            </button>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default Signin;
