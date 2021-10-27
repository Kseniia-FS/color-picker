import { useRouteMatch } from "react-router";
import data from "../../colorsData/caparol3dsystem.json";
import { useState, useEffect } from "react";

import { OneColor } from "../../components/OneColor/OneColor";

export default function ColorByFamily() {
  const [colors, setColors] = useState([]);
  const { params } = useRouteMatch();

  useEffect(() => {
    switch (params.color) {
      case "white":
        const white = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("white")
        );
        const white2 = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("weiss")
        );
        const white3 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("0502")
        );

        return setColors(
          [...white, ...white2, ...white3].sort(
            (a, b) => Number(a.id) - Number(b.id)
          )
        );
      case "red":
        const red = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("korall")
        );
        const red1 = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("rose")
        );
        const red2 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("y80r")
        );
        const red3 = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("cameo")
        );
        const red4 = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("venezia")
        );
        const red5 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("y90r")
        );
        const red6 = data.tikkurila.filter((el) =>
          el.name.toLowerCase().includes("323")
        );

        return setColors(
          [...red, ...red1, ...red2, ...red3, ...red4, ...red5, ...red6]
            .splice(0, 205)
            .sort((a, b) => Number(b.id) - Number(a.id))
        );
      case "orange":
        const orange = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("onyx")
        );
        const orange2 = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("aprico")
        );
        const orange3 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("y50r")
        );

        return setColors(
          [...orange, ...orange2, ...orange3]
            .splice(0, 122)
            .sort((a, b) => Number(b.id) - Number(a.id))
        );
      case "gold":
        const gold = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("siena")
        );
        const gold2 = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("cermic")
        );
        const gold3 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("y10r")
        );
        const gold4 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("-y")
        );

        return setColors(
          [...gold, ...gold2, ...gold3, ...gold4]
            .splice(0, 99)
            .sort((a, b) => Number(b.id) - Number(a.id))
        );

      case "yellow":
        const yellow = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("curry")
        );
        const yellow2 = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("ginster")
        );
        const yellow3 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("g90y")
        );
        const yellow4 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("0515")
        );

        return setColors(
          [...yellow, ...yellow2, ...yellow3, ...yellow4]
            .splice(0, 79)
            .sort((a, b) => Number(b.id) - Number(a.id))
        );
      case "lime":
        const lime = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("jade")
        );
        const lime2 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("g30y")
        );
        const lime3 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("g40y")
        );

        return setColors(
          [...lime, ...lime2, ...lime3].sort(
            (a, b) => Number(b.id) - Number(a.id)
          )
        );

      case "green":
        const green = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("oase")
        );
        const green2 = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("mint")
        );
        const green3 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("b90g")
        );
        const green4 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("b80g")
        );

        return setColors(
          [...green, ...green2, ...green3, ...green4].sort(
            (a, b) => Number(b.id) - Number(a.id)
          )
        );

      case "teal":
        const teal = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("patina")
        );
        const teal2 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("b40g")
        );

        return setColors(
          [...teal, ...teal2].sort((a, b) => Number(b.id) - Number(a.id))
        );

      case "blue":
        const blue = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("coelin")
        );
        const blue2 = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("pacific")
        );
        const blue3 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("b10g")
        );

        return setColors(
          [...blue, ...blue2, ...blue3]
            .splice(0, 75)
            .sort((a, b) => Number(b.id) - Number(a.id))
        );
      case "violet":
        const violet = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("lavendel")
        );
        const violet2 = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("aquarell")
        );
        const violet3 = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("viola")
        );
        const violet4 = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("clematis")
        );
        const violet5 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("r50b")
        );

        return setColors(
          [...violet, ...violet2, ...violet3, ...violet4, ...violet5]
            .splice(0, 129)
            .sort((a, b) => Number(b.id) - Number(a.id))
        );

      case "cold":
        const cold = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("grau")
        );
        const cold2 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("-n")
        );

        return setColors(
          [...cold, ...cold2].sort((a, b) => Number(b.id) - Number(a.id))
        );
      case "warm":
        const warm = data.caparol.filter((el) =>
          el.name.toLowerCase().includes("palazzo")
        );
        const warm2 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("1002")
        );
        const warm3 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("1502")
        );
        const warm4 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("2002")
        );
        const warm5 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("2005")
        );
        const warm6 = data.ncs.filter((el) =>
          el.name.toLowerCase().includes("3005")
        );

        return setColors(
          [...warm, ...warm2, ...warm3, ...warm4, ...warm5, ...warm6].sort(
            (a, b) => Number(b.id) - Number(a.id)
          )
        );

      default:
        break;
    }
  }, [params.color]);

  return (
    colors.length > 0 && (
      <>
        <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
          Choose {params.color} colors
        </h1>
        <OneColor colors={colors} />
      </>
    )
  );
}
