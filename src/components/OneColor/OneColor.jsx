import { useDispatch } from "react-redux";
import { selectColor } from "../../redux/colors/colors-actions";
import s from "./OneColor.module.css";

export const OneColor = ({ colors }) => {
  const dispatch = useDispatch();
  const getColor = (color, background) =>
    dispatch(selectColor(color, background));

  const handleOnClick = (e) => {
    getColor(e.currentTarget.textContent, e.target.style.backgroundColor);
  };
  return (
    <ul className={s.list}>
      {colors.map(({ id, name, color }) => (
        <li key={Number(id)} className={s.item} onClick={handleOnClick}>
          <h2>{name}</h2>
          <div style={{ backgroundColor: `${color}` }} className={s.wrap}></div>
        </li>
      ))}
    </ul>
  );
};
