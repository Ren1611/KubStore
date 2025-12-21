import { useState } from "react";
import { useProduct } from "../../MainConrext/MainContext";
import scss from "./Login.module.scss";

const Login = () => {
  const { addTask } = useProduct();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const hundlSave = () => {
    const obj = {
      Email: Email,
      Password: Password,
      id: Date.now(),
    };
    addTask(obj);
    setPassword("");
    setEmail("");
  };

  return (
    <div>
      <div id={scss.login}>
        <div className="conatier">
          <div className={scss.login}>
            <div className={scss.logImg}>
              <img src="../src/assets/images/Side Image.svg" alt="" />
            </div>
            <div className={scss.loginText}>
              <h1>Log in to Exclusive</h1>
              <h3>Enter your details below</h3>
              <input
                value={Email}
                onChange={(o) => setEmail(o.target.value)}
                type=""
                placeholder="Email or Phone Number"
              />
              <br />
              <input
                value={Password}
                onChange={(o) => setPassword(o.target.value)}
                type=""
                placeholder="Password"
              />
              <br />
              <button onClick={hundlSave}>Log In</button>
              <a href="/">Forget Password?</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
