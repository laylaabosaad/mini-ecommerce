import Inputs from "../../src/components/Inputs";
import { Link } from "react-router-dom";

function Register() {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-1/3 ">
        <h1 className="title"> Register</h1>
        <form>
          <Inputs title="Email" htmlFor="email" type="email" name="email" />
          <Inputs
            title="Confirm password"
            htmlFor="confirmPassword"
            type="password"
            name="confirmPassword"
          />
          <Inputs
            title="Password"
            htmlFor="password"
            type="password"
            name="password"
          />
          <button className="btn-primary cursor-pointer">Register</button>
          <p>
            Already have an account?{" "}
            <Link to="/login" className="text-link">
              Login Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Register;
