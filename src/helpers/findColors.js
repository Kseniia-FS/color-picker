import data from "../colorsData/caparol3dsystem.json";

export default class FindColors {
  constructor() {
    this.colors = [];
  }
  findColor(color) {
    switch (color) {
      case "white":
        const color = data.caparol.find((el) =>
          el.name.toLowerCase().includes("white")
        );
        return this.colors.push(color);

      default:
        break;
    }
  }
}
