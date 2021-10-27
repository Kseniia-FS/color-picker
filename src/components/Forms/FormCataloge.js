import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { changeCataloge } from "../../redux/colors";
import s from "./Form.module.css";
export const FormCataloges = () => {
  const history = useHistory();

  const dispatch = useDispatch();
  const onSubmit = (cataloge) => dispatch(changeCataloge(cataloge));

  const handleChange = (e) => {
    onSubmit(e.currentTarget.value);
    history.push(`/cataloges/${e.currentTarget.value}`);
  };

  return (
    <form id="catalogesForm">
      <select onChange={handleChange} className={s.form}>
        <option>Выберите каталог</option>
        <option value="caparol">Caparol</option>
        {/* <option value="sadolin">Sadolin</option> */}
        {/* <option value="tikkurila">Tikkurila</option> */}
        <option value="ral">RAL</option>
        <option value="ncs">NCS</option>
        {/* <option value="dulux">Dulux</option> */}
      </select>
    </form>
  );
};
