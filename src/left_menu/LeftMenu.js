import { Menu, Sidebar, SubMenu } from "react-pro-sidebar";

import Rotation from "./Rotation";
import StartPointCoordInput from "./StartPointCoordInput";

const LeftMenu = () => {
  return (
    <>
      <Sidebar className="leftMenu">
        <Menu>
          <SubMenu label="Field size">
            <StartPointCoordInput min={10} max={100} valueX={60} valueY={20} />
          </SubMenu>
          <SubMenu label="Uve">
            <StartPointCoordInput min={0} max={100} />
            <Rotation />
          </SubMenu>
          <SubMenu label="Selfcontrol"></SubMenu>
          <SubMenu label="Complex"></SubMenu>
          <SubMenu label="Find your stick"></SubMenu>
          <SubMenu label="Aport"></SubMenu>
          <SubMenu label="Heelwork"></SubMenu>
          <SubMenu label="Recall"></SubMenu>
          <SubMenu label="Square"></SubMenu>
        </Menu>
      </Sidebar>
    </>
  );
};

export default LeftMenu;
