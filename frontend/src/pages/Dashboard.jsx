import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalForm from "../components/GoalForm";
import Spinner from "../components/Spinner";
import GoalItem from "../components/GoalItem";

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
    console.log(isLoading);
    return <Spinner />;
  }

  return (
    <>
      <section>
        <h1>Welcome</h1>
        <p>{user && user.name}</p>
        <p>Goals Dashboard</p>
        {goals.length !== 0 ? (
          <div className="flex flex-col space-y-2">
            {goals.map((goal) => (
              <GoalItem goal={goal} key={goal._id} />
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
