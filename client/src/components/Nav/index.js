import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input, Menu, Segment } from "semantic-ui-react";

import Auth from "../../utils/auth";

function Nav() {
  const pathname = window.location.pathname;
  const path = pathname === "/" ? "home" : pathname.substr(1);
  const [activeItem, setActiveItem] = useState(path);

  const handleItemClick = (e, { name }) => setActiveItem(name);

  return (
    <div>
      <Menu pointing>
        <Menu.Item
          name="home"
          active={activeItem === "home"}
          onClick={handleItemClick}
          as={Link}
          to="/"
        />
        <Menu.Item
          name="signup"
          active={activeItem === "signup"}
          onClick={handleItemClick}
          as={Link}
          to="/signup"
        />
        <Menu.Item
          name="recipe-list"
          active={activeItem === "recipe-list"}
          onClick={handleItemClick}
          as={Link}
          to="/recipe-list"
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>

      <Segment>
        <img src="/images/wireframe/paragraph.png" />
      </Segment>
    </div>
  );
}

export default Nav;
