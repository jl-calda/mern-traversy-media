import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isLoading, isError, message } = useSelector(
    (state) => state.goals
  );

  useEffect(() => {
    if (isError) {
      console.log(console.log(message));
    }
    if (!user) {
      navigate("/login");
    }
    dispatch(getGoals());
    return () => dispatch(reset());
  }, [user, navigate, isError, message, dispatch]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <>
      <section>
        <h1>Welcome</h1>
        <p>{user && user.name}</p>
        <p>Goals Dashboard</p>
        {goals ? (
          <div>
            {goals.map((goal) => (
              <p>{goal.text}</p>
            ))}
          </div>
        ) : (
          <p>You have no goals</p>
        )}
        <GoalForm />
      </section>
    </>
  );
};

export default Dashboard;
