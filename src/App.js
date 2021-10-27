import "./App.css";
import { Route, Switch } from "react-router-dom";
import { ColorList } from "./views/ColorList/ColorList";

import { ColorLine } from "./views/ColorLine/ColorLine";
import Home from "./views/Home/Home";
import DesignNav from "./views/Design/DesignNav";
import { Modal } from "./components/Modal/Modal";
import { useSelector } from "react-redux";
import { getSelectedColor } from "./redux/colors/colors-selector";

function App() {
  const selectedColor = useSelector(getSelectedColor);
  console.log(selectedColor);

  return (
    <div className="App">
      <Route path="/" exact>
        <Home />
      </Route>

      <Switch>
        <Route path="/colors">
          <ColorLine />
        </Route>
        <Route path="/cataloges/">
          <ColorList />
        </Route>
        <Route path="/design/">
          <DesignNav />
        </Route>
      </Switch>
      {selectedColor.color !== "" && <Modal selectedColor={selectedColor} />}
    </div>
  );
}

export default App;
