import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Spinner from "../components/Spinner";

import { register, reset } from "../features/auth/authSlice";
import avatarDefault from "../assets/avatar.svg";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    avatar: null,
    email: "",
    password: "",
    password2: "",
  });
  const { name, avatar, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess || user) {
      navigate("/login");
      toast.success("Registration successful. Please login");
    }
    dispatch(reset());
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onFileUpload = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertToBase64(file);
    setFormData((prevState) => ({
      ...prevState,
      avatar: base64,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(e);
    if (password !== password2) {
      toast.error("Passwords do not match");
    } else {
      const userData = {
        name,
        avatar,
        email,
        password,
      };
      console.log(userData);
      dispatch(register(userData));
    }
  };

  if (isLoading) {
    return <Spinner />;
  }

  //Styles
  const inputRowStyle = `flex justify-start items-center space-x-2`;
  const inputStyle = `w-full border rounded-md p-2 px-3 py-2 text-slate-800 focus:outline-none focus:ring-1 focus:ring-teal-500 focus:border-transparent`;
  const labelStyle = `w-28 text-right`;

  return (
    <>
      <section className="flex-1">
        <div className="flex flex-col md:flex-row mx-auto w-full p-2 justify-center items-center mt-14">
          <div className="px-4 py-2 flex flex-col items-center justify-center space-y-4">
            <h1 className="text-4xl font-bold">.Register</h1>
            <p className="text-md tracking-wider font-thin">
              1. Create an account.
            </p>
            <p className="text-md tracking-wider font-thin">
              2. Achieve your goals.
            </p>
          </div>
          <form
            className="flex flex-col space-y-2 flex-1 border rounded-md shadow-md p-6 max-w-xl"
            onSubmit={onSubmit}
          >
            <div className={`${inputRowStyle} justify-center`}>
              <label htmlFor="avatar">
                <img
                  src={avatar || avatarDefault}
                  className="h-24 w-24 rounded-full border-[1px] border-teal-500 p-2 cursor-pointer"
                  alt="avatar"
                />
              </label>
              <input
                type="file"
                name="avatar"
                id="avatar"
                onChange={onFileUpload}
                accept="jpeg, png, jpg"
                className="hidden"
              />
            </div>
            <div className={inputRowStyle}>
              <label htmlFor="name" className={labelStyle}>
                Username
              </label>
              <input
                id="name"
                name="name"
                value={name}
                type="text"
                className={inputStyle}
                placeholder="John Doe"
                onChange={onChange}
                required
              />
            </div>
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
            <div className={inputRowStyle}>
              <label htmlFor="password2" className={labelStyle}>
                Confirm Password
              </label>
              <input
                id="password2"
                name="password2"
                value={password2}
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
                Register
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Register;

function convertToBase64(file) {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
}
