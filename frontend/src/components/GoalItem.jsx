import { useRef } from "react";
import { HiXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { deleteGoal, updateGoal } from "../features/goals/goalSlice";
import { toast } from "react-toastify";
import ContentEditable from "react-contenteditable";

const GoalItem = ({ goal }) => {
  const originalText = goal.text;
  const text = useRef(goal.text);
  const date = new Date(goal.createdAt).toLocaleString("en-US", {
    timeZone: "UTC",
  });
  const dispatch = useDispatch();

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteGoal(goal._id));
    toast.warn("Goal deleted");
  };

  const onChange = (e) => {
    text.current = e.target.value;
  };
  const onBlur = (e) => {
    e.preventDefault();
    if (originalText !== text.current) {
      dispatch(updateGoal({ id: goal._id, goalData: { text: text.current } }));
    }
  };

  return (
    <div className="p-2 rounded-lg border-2 flex flex-col space-y-2 border-slate-50 bg-teal-400 min-h-max">
      <div className="flex justify-end">
        <HiXMark
          className="text-slate-50 text-xl hover:text-md cursor-pointer"
          onClick={onDelete}
        />
      </div>
      <ContentEditable
        html={text.current}
        onBlur={onBlur}
        onChange={onChange}
        className="p-2 text-slate-700 flex-1 focus:outline-none focus:bg-teal-200 rounded-md focus:border-transparent"
      />
      <div className="flex justify-end">
        <p className="text-xs tracking-wide text-slate-50 place-self-end font-bold">
          {date}
        </p>
      </div>
    </div>
  );
};

export default GoalItem;
