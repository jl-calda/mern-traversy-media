import { useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getGoals, reset } from "../features/goals/goalSlice";
import GoalItem from "../components/GoalItem";

const GoalItems = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  const { goals, isError, message } = useSelector((state) => state.goals);
  const memoizedGoals = useMemo(() => goals, [goals]);

  useEffect(() => {
    if (isError) {
      console.log(message);
    }
    if (!user) {
      navigate("/login");
    } else {
      dispatch(getGoals());
    }

    return () => dispatch(reset());
  }, [user, navigate, isError, message, dispatch]);
  return (
    <>
      {memoizedGoals.length !== 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-4 grid-flow-row">
          {memoizedGoals.map((goal) => (
            <GoalItem goal={goal} key={goal._id} />
          ))}
        </div>
      ) : (
        <p>You have no goals</p>
      )}
    </>
  );
};

export default GoalItems;
