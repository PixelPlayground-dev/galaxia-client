import { Outlet } from "react-router-dom";

import backgroundImage from "../../assets/images/private-template-background.png";
import SideMenu from "../../components/SideMenu/SideMenu";

const PrivateTemplate = () => {
  return (
    <div className=" flex relative">
      <img
        src={backgroundImage}
        className="absolute top-0 left-0 w-screen -z-10 h-screen"
      />
      <SideMenu />
      <Outlet />
    </div>
  );
};

export default PrivateTemplate;
