import { useSelector } from "react-redux";

import { FormCataloges } from "../../components/Forms/FormCataloge";
import { OneColor } from "../../components/OneColor/OneColor";

import { getSelectedCataloge } from "../../redux/colors";
import { Header } from "../Header/Header";

export const ColorList = () => {
  const selectedCataloge = useSelector(getSelectedCataloge);

  const colors = useSelector((state) => state.colors.items[selectedCataloge]);

  return (
    <>
      <Header />
      <FormCataloges />
      {selectedCataloge && <OneColor colors={colors} />}
    </>
  );
};
