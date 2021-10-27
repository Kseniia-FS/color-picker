import { IconButton } from "./Buttons.styled";
export const IconBtn = ({ onClick, ariaLabel, type, children, color }) => {
  return (
    <IconButton
      type={type}
      aria-label={ariaLabel}
      onClick={onClick}
      color={color}
      size="small"
    >
      {children}
    </IconButton>
  );
};
