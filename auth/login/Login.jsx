import Inputs from "../../src/components/Inputs";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className=" flex justify-center items-center">
      <div className="w-1/3 ">
        <h1 className="title"> Login</h1>
        <form>
          <Inputs title="Email" htmlFor="email" type="email" name="email" />
          <Inputs
            title="Password"
            htmlFor="password"
            type="password"
            name="password"
          />

          <button className="btn-primary cursor-pointer">Login</button>

          <p>
            Don't have an account? {""}
            <Link to="/register" className="text-link">
              Register Here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
