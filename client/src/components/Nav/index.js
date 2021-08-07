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
          name="foodbook"
          active={activeItem === "foodbook"}
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
          name="login"
          active={activeItem === "login"}
          onClick={handleItemClick}
          as={Link}
          to="/login"
        />
        <Menu.Item
          name="create-recipe"
          active={activeItem === "create-recipe"}
          onClick={handleItemClick}
          as={Link}
          to="/create-recipe"
        />
        <Menu.Item
          name="profile"
          active={activeItem === "profile"}
          onClick={handleItemClick}
          as={Link}
          to="/profile"
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
}

export default Nav;
