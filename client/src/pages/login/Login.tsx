import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import api from "../../api/Api";
import Buttons from "../../componets/custom/buttons/Buttons";
import Inputs from "../../componets/custom/inputs/Inputs";
import { errorType } from "../../types/types";
import "./login.css";

const Login = () => {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState<errorType>({ email: "", password: "" });
  const navigate = useNavigate();
  const onChangeHandler = (event: any) => {
    setForm({
      ...form,
      [event?.target?.name]: event?.target?.value as string,
    });
  };
  const handleSubmit = async (event: any) => {
    event.preventDefault();
    try {
      const response = await api.post("/user/login", form);
      const token = response.data.token
      const user = response.data.user
     localStorage.setItem("user-token",JSON.stringify(token))
     localStorage.setItem("user",JSON.stringify(user))
      alert("welcom to your home page ");
      navigate("/");
    } catch (error: any | undefined) {
      setErrors(error.response.data);
    }
  };
  return (
    <div className="container p-4 mt-4">
      <div className="row justify-content-evenly mt-4">
        <div className="col-lg-6 col-md-12 mt-4">
          <div className="d-flex">
            <i className="fa-solid fa-right-to-bracket fs-1 mx-2"></i>{" "}
            <h2>Login</h2>
          </div>
          <div
            className="p-6 shadow-lg p-3 mb-5 bg-body rounded"
            style={{ backgroundColor: "white" }}
          >
            <form onSubmit={handleSubmit}>
              <Inputs
                name="email"
                label="Email"
                type="email"
                icon="fa-solid fa-user"
                errors={errors.email}
                onChange={onChangeHandler}
              />
              <Inputs
                name="password"
                label="Password"
                type="password"
                icon="fa-solid fa-key"
                errors={errors.password}
                onChange={onChangeHandler}
              />
              <div className="d-flex justify-content-between">
                <Buttons type="submit" name="Login"/>
                <Link to="/register">I don't have account</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
