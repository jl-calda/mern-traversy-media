import { HiXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { deleteGoal } from "../features/goals/goalSlice";

const GoalItem = ({ goal }) => {
  const dispatch = useDispatch();

  const onDelete = (e) => {
    // e.preventDefault();
    dispatch(deleteGoal(goal._id));
  };

  const text = goal.text;
  const date = new Date(goal.createdAt).toLocaleDateString("en-US");
  return (
    <div className="p-2 rounded-lg border-2 border-slate-50 bg-amber-400">
      <div className="flex p-2 justify-between items-center border-b">
        <p className="text-xs tracking-wide text-slate-50 font-bold">{date}</p>
        <HiXMark
          className="text-slate-50 text-xl hover:text-md cursor-pointer"
          onClick={onDelete}
        />
      </div>
      <p>{text}</p>
    </div>
  );
};

export default GoalItem;
