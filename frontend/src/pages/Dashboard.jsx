import GoalForm from "../components/GoalForm";
import GoalItems from "../components/GoalItems";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getUser } from "../features/auth/authSlice";
import avatarDefault from "../assets/avatar.svg";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, userDetails } = useSelector((state) => state.auth);
  // const {
  useEffect(() => {
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getUser());
    }
  }, [user]);

  return (
    <>
      <section className="flex flex-col space-y-4">
        <div className="flex space-x-2 border-1 rounded-md shadow-md px-2 py-4 bg-slate-50">
          <div className="flex flex-col items-center space-y-1">
            <div className="bg-slate-200 rounded-md">
              {userDetails ? (
                <img
                  src={userDetails.avatar}
                  alt="avatar"
                  className="w-16 h-16 rounded-full"
                />
              ) : (
                <img
                  src={avatarDefault}
                  alt="avatar"
                  className="w-16 h-16 rounded-full"
                />
              )}
            </div>
            <p className="uppercase text-lg">
              {userDetails ? userDetails.name : "...Loading"}
            </p>
          </div>
          <GoalForm />
        </div>
        <GoalItems />
      </section>
    </>
  );
};

export default Dashboard;
