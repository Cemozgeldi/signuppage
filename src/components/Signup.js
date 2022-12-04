import { useFormik } from "formik";
import validationSchema from "./validation";

function Signup() {
  const { handleSubmit, handleChange, values, errors, touched, handleBlur } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        passwordConfirm: "",
      },
      validationSchema,
    });
  return (
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input
          name="email"
          autoComplete="off"
          placeholder="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        {errors.email && touched.email && (
          <div className="error">{errors.email}</div>
        )}
        <br></br>
        <br />
        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="password"
          autoComplete="off"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.password && touched.password && (
          <div className="error">{errors.password}</div>
        )}
        <br />
        <br />
        <label>Confirm Password</label>
        <input
          name="passwordConfirm"
          placeholder="Please confirm your password"
          autoComplete="off"
          type="password"
          value={values.passwordConfirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {errors.passwordConfirm && touched.passwordConfirm && (
          <div className="error">{errors.passwordConfirm}</div>
        )}
        <br />
        <br />
        <button type="submit">Submit</button>
        <br />
        <br />
      </form>
    </div>
  );
}

export default Signup;
