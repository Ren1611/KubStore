import { useState } from "react";
import { useProduct } from "../../MainConrext/MainContext";
import scss from "./Register.module.scss";

const Register = () => {
  const { addTask, reducer2, signUpWithGoogle } = useProduct();
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const hundlSave = () => {
    const obj = {
      name: name,
      Email: Email,
      Password: Password,
      id: Date.now(),
    };
    addTask(obj);
    setPassword("");
    setName("");
    setEmail("");
  };

  async function handlReducer() {
    try {
      await reducer2(email);
    } catch (error) {
      console.log(error.massege);
    }
  }

  return (
    <div>
      <div id={scss.register}>
        <div className="container">
          <div className={scss.register}>
            <div className={scss.resImg}>
              <img src="../src/assets/images/Side Image.svg" alt="" />
            </div>
            <div className={scss.inpRes}>
              <h1>Create an account</h1>
              <h3>Enter your details below</h3>

              <input
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                placeholder="Name"
              />
              <br />

              <input
                onChange={(d) => setEmail(d.target.value)}
                value={Email}
                type="text"
                placeholder="Email or Phone Number"
              />
              <br />

              <input
                onChange={(o) => setPassword(o.target.value)}
                value={Password}
                type="text"
                placeholder="Password"
              />
              <br />
              <button id={scss.ok} onClick={hundlSave}>
                Create Account
              </button>
              <br />
              <button id={scss.google}>
                <img
                  onClick={() => signUpWithGoogle()}
                  src="../src/assets/images/Icon-Google.svg"
                  alt=""
                />
                Sign up with Google
              </button>
              <div className={scss.perehod}>
                <h2>Already have account?</h2>
                <a href="/login">Log in</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;

{
  /* <div className={scss.ImgRes}>
  <img src="../src/assets/images/Side Image.svg" alt="" />
</div>
<div className="RegisInp">
  <input type="text" name="" id="" />
</div> */
}
