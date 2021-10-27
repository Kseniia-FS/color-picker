import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import { GoBackBtn } from "../../_share/GoBackBtn/GoBackBtn";
import { clearCataloge } from "../../redux/colors/colors-actions";
import { HeaderNav } from "./Header.styled";
export const Header = () => {
  const location = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const clearSelectedCataloge = () => dispatch(clearCataloge());

  const handleOnClick = () => {
    clearSelectedCataloge();
    location.state ? history.push(location.state.from) : history.push("/");
  };
  return (
    <HeaderNav>
      <GoBackBtn onClick={handleOnClick} />
    </HeaderNav>
  );
};
