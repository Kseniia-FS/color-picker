import { NavLink } from "react-router-dom";
import { Route } from "react-router";
import { Header } from "../Header/Header";
import s from "./Design.module.css";
import Design from "./Design";

export default function DesignNAv() {
  return (
    <>
      <Header />
      <h1 style={{ textAlign: "center", marginBottom: "20px" }}>
        Select a color shade
      </h1>
      <nav className={s.list}>
        <NavLink
          to="/design/white"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          to="/design/red"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          to="/design/orange"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          to="/design/gold"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          to="/design/yellow"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          to="/design/lime"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>
        <NavLink
          to="/design/green"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          to="/design/teal"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          to="/design/blue"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          to="/design/violet"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          to="/design/cold"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          to="/design/warm"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>
      </nav>
      <Route path="/design/:color">
        <Design />
      </Route>
    </>
  );
}
