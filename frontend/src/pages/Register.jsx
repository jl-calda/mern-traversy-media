import { useState, useEffect } from "react";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = formData;

  const onChange = (e) => {
    e.preventDefault();
    setFormData((prevState) => ({
      ...formData,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
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
            <h1 className="text-4xl font-bold">.Register</h1>
            <p className="text-md tracking-wider font-thin">
              1. Create an account.
            </p>
            <p className="text-md tracking-wider font-thin">
              2. Achieve your goals.
            </p>
          </div>
          <form
            className="flex flex-col space-y-2 border rounded-md shadow-md p-6 max-w-xl"
            onSubmit={onSubmit}
          >
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
