import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import clsx from "clsx";

import { menuItems } from "../../constants";
import HamburgerIcon from "../../assets/icons/HamburgerIcon";

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div
      animate={{ width: isOpen ? "200px" : "65px" }}
      className="flex flex-col text-white h-screen bg-white"
    >
      <div
        className={clsx(
          "flex items-center p-2",
          isOpen ? "justify-between" : "justify-center"
        )}
      >
        {isOpen && (
          <span className="text-blue-900 font-bold text-xl">HappenHub</span>
        )}
        <div
          className="flex items-center w-8 h-8 p-1 cursor-pointer"
          onClick={handleToggle}
        >
          <HamburgerIcon className="fill-blue-900" />
        </div>
      </div>
      <div className="flex flex-col">
        {menuItems.map((item) => (
          <Link
            key={item.route}
            to={item.route}
            className={clsx(
              item.route === window.location.pathname &&
                "bg-blue-100 border-r-4 border-blue-500",
              isOpen ? "justify-start gap-3" : "justify-center",
              "flex items-center cursor-pointer"
            )}
          >
            <div className="flex items-center justify-center w-10 h-10 p-1">
              <item.icon
                className={clsx(
                  item.route === window.location.pathname
                    ? "fill-blue-900"
                    : "fill-zinc-200"
                )}
              />
            </div>
            <span
              className={clsx(
                item.route === window.location.pathname
                  ? "text-blue-900"
                  : "text-zinc-200"
              )}
            >
              {isOpen && item.label}
            </span>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default SideMenu;
