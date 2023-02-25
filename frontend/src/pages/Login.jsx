import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { login, reset } from "../features/auth/authSlice";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, userDetails, isLoading, isError, isSuccess, message } =
    useSelector((state) => state.auth);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/");
    }

    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = { email, password };
    dispatch(login(userData));
  };

  //Styles
  const inputRowStyle = `flex justify-start items-center space-x-2`;
  const inputStyle = `w-full border rounded-md p-2 px-3 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-transparent`;
  const labelStyle = `w-28 text-right`;

  return (
    <>
      <section className="flex-1">
        <div className="flex flex-col md:flex-row mx-auto w-full p-2 justify-center items-center mt-14">
          <div className="px-4 py-2 flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold">.Login</h1>
            <p className="text-md tracking-wider font-thin">
              1. Login to your account.
            </p>
            <p className="text-md tracking-wider font-thin">
              2. Write your goals.
            </p>
          </div>
          <form
            className="flex flex-col space-y-2 flex-1 border rounded-md shadow-md p-6 max-w-xl"
            onSubmit={onSubmit}
          >
            <div className={inputRowStyle}>
              <label htmlFor="email" className={labelStyle}>
                Email
              </label>
              <input
                id="email"
                name="email"
                value={email}
                type="email"
                className={inputStyle}
                placeholder="johndoe@email.com"
                onChange={onChange}
                required
              />
            </div>
            <div className={inputRowStyle}>
              <label htmlFor="password" className={labelStyle}>
                Password
              </label>
              <input
                id="password"
                name="password"
                value={password}
                type="password"
                className={inputStyle}
                placeholder="*********"
                onChange={onChange}
                required
              />
            </div>

            <div className=" flex items-center justify-end">
              <button
                type="submit"
                className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded w-32"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Login;
