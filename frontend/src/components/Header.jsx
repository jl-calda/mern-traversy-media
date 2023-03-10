import { FaSignInAlt, FaUserAlt, FaTasks } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { logout, reset } from "../features/auth/authSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/login");
  };

  //Icon Link Styles
  const linkIconStyle = `text-2xl text-slate-700 `;
  const linkTextStyle = `text-slate-700`;
  const linkBoxStyle = `flex flex-col space-y-2 justify-center items-center p-2 cursor-pointer hover:bg-slate-200 rounded-md`;
  return (
    <header className="flex justify-between p-2 items-center border-b-[1px] border-slate-100">
      <Link to="/">
        <div className="flex items-center justify-center space-x-2 p-2 cursor-pointer hover:bg-slate-200 rounded-md">
          <FaTasks className={linkIconStyle} />
          <h1 className="text-2xl font-bold text-slate-700">GoalSetter</h1>
        </div>
      </Link>
      <nav>
        {user ? (
          <Link to={user ? "/" : "/login"}>
            <button className={linkBoxStyle} onClick={onLogout}>
              <FaSignInAlt className={linkIconStyle} />
              <span className={linkTextStyle}>Logout</span>
            </button>
          </Link>
        ) : (
          <ul className="flex items-center justify-end space-x-2">
            <Link to="/login">
              <li className={linkBoxStyle}>
                <FaSignInAlt className={linkIconStyle} />
                <span className={linkTextStyle}>Login</span>
              </li>
            </Link>
            <Link to="/register">
              <li className={linkBoxStyle}>
                <FaUserAlt className={linkIconStyle} />
                <span className={linkTextStyle}>Register</span>
              </li>
            </Link>
          </ul>
        )}

        {/* 
  
          <Link to="/login">
            <li className={linkBoxStyle}>
              <FaSignInAlt className={linkIconStyle} />
              <span className={linkTextStyle}>Login</span>
            </li>
          </Link>
          <Link to="/register">
            <li className={linkBoxStyle}>
              <FaUserAlt className={linkIconStyle} />
              <span className={linkTextStyle}>Register</span>
            </li>
          </Link>
        </ul> */}
      </nav>
    </header>
  );
};

export default Header;
