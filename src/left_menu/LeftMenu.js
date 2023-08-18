import { Menu, Sidebar, SubMenu } from "react-pro-sidebar";
import Rotation from "./Rotation";
import StartPointCoordInput from "./StartPointCoordInput";
import Trash from "./Trash";

const LeftMenu = () => {
  const setFieldSize = "setFieldSize";
  const setUveData = "setUveData";
  const setUveRoration = "setUveRoration";
  const setUve = "setUve";
  console.log(`inside LeftMenu ${setFieldSize}  and ${setUveData}`);

  return (
    <>
      <Sidebar className="leftMenu">
        <Menu>
          <SubMenu label="Field size">
            <StartPointCoordInput type={setFieldSize} />
          </SubMenu>
          <SubMenu label="Uve">
            <StartPointCoordInput type={setUveData} />
            <Rotation type={setUveRoration} />
            <Trash type={setUve} />
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
