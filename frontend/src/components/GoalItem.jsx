import { useRef, useState, useEffect } from "react";
import { HiXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { deleteGoal, updateGoal } from "../features/goals/goalSlice";
import ContentEditable from "react-contenteditable";

const GoalItem = ({ goal }) => {
  const [text, setText] = useState(goal.text);
  const date = new Date(goal.createdAt).toLocaleDateString("en-US");

  const dispatch = useDispatch();

  // useEffect(() => {
  //   text = goal.text;
  //   console.log("this is run");
  // });

  const onDelete = (e) => {
    e.preventDefault();
    dispatch(deleteGoal(goal._id));
  };

  // const handleChange = (e) => {
  //   e.preventDefault();
  //   text.current = e.target.value;
  // };

  // const handleFocus = (e) => {
  //   e.preventDefault();
  // };

  // const handleBlur = (e) => {
  //   e.preventDefault();
  //   dispatch(updateGoal(goal._id, { text: e.target.innerHTML }));
  // };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(goal._id, { text: text });
    dispatch(updateGoal(goal._id, { text: text }));
  };

  const onChange = (e) => {
    e.preventDefault();
    setText(e.target.value);
    console.log(text);
  };
  const onBlur = (e) => {
    e.preventDefault();
    e.target.setAttribute("readOnly", "");
  };

  const onClick = (e) => {
    e.preventDefault();
    //set attribute readOnly to false
    e.target.removeAttribute("readOnly");
  };

  return (
    <div className="p-2 rounded-lg border-2 border-slate-50 bg-amber-400">
      <div className="flex p-2 justify-between items-center border-b">
        <p className="text-xs tracking-wide text-slate-50 font-bold">{date}</p>
        <HiXMark
          className="text-slate-50 text-xl hover:text-md cursor-pointer"
          onClick={onDelete}
        />
      </div>

      <form onSubmit={onSubmit} className="flex">
        <input
          type="text"
          value={text}
          onChange={onChange}
          onClick={onClick}
          onBlur={onBlur}
          className="flex-1 px-2 py-3 bg-inherit focus:outline-none focus:bg-slate-50"
          readOnly
        />
      </form>
    </div>
  );
};

export default GoalItem;
