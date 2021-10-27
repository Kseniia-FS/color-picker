import { NavLink, Route } from "react-router-dom";

import s from "./ColorLine.module.css";
import ColorByFamily from "../ColorsByFamily/ColorsByFamily";

import { Header } from "../Header/Header";

export const ColorLine = () => {
  return (
    <>
      <Header />
      <nav className={s.list}>
        <NavLink
          // onClick={handleOnClick}
          to="/colors/white"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          // onClick={handleOnClick}
          to="/colors/red"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          // onClick={handleOnClick}
          to="/colors/orange"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          // onClick={handleOnClick}
          to="/colors/gold"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          // onClick={handleOnClick}
          to="/colors/yellow"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          // onClick={handleOnClick}
          to="/colors/lime"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>
        <NavLink
          // onClick={handleOnClick}
          to="/colors/green"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          // onClick={handleOnClick}
          to="/colors/teal"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          // onClick={handleOnClick}
          to="/colors/blue"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          // onClick={handleOnClick}
          to="/colors/violet"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          // onClick={handleOnClick}
          to="/colors/cold"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>

        <NavLink
          // onClick={handleOnClick}
          to="/colors/warm"
          className={s.link}
          activeClassName={s.active}
        ></NavLink>
      </nav>
      <Route path="/colors/:color">
        <ColorByFamily />
      </Route>
    </>
  );
};
