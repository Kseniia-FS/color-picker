import { OneColor } from "../../components/OneColor/OneColor";
import { useRouteMatch } from "react-router";
import data from "../../colorsData/design.json";

import { useEffect } from "react";
import { useState } from "react";

export default function Design() {
  const [colors, setColors] = useState([]);
  const { params } = useRouteMatch();

  useEffect(() => {
    switch (params.color) {
      case "white":
        return setColors([...data.white]);
      case "red":
        return setColors(data.red);
      case "orange":
        return setColors(data.orange);
      case "gold":
        return setColors(data.gold);

      case "yellow":
        return setColors(data.yellow);
      case "lime":
        return setColors(data.lime);

      case "green":
        return setColors(data.green);

      case "teal":
        return setColors(data.teal);

      case "blue":
        return setColors(data.blue);
      case "violet":
        return setColors(data.violet);

      case "cold":
        return setColors(data.cold);
      case "warm":
        return setColors(data.warm);

      default:
        break;
    }
  }, [params.color]);

  return colors.length > 0 && <OneColor colors={colors} />;
}
