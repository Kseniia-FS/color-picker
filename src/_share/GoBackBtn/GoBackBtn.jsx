import { IconBtn } from "../Buttons/IconButton";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";

export const GoBackBtn = ({ onClick }) => {
  return (
    <IconBtn onClick={onClick}>
      <ArrowBackIosNewIcon />
    </IconBtn>
  );
};
