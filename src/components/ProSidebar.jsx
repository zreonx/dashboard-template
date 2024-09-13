import {
  BarChart2,
  DollarSign,
  Menu,
  Settings,
  ShoppingBag,
  ShoppingCart,
  TrendingUp,
  Users,
} from "lucide-react";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Link, NavLink, useLocation } from "react-router-dom";

import { Sidebar, Menu as SMenu, MenuItem, SubMenu } from "react-pro-sidebar";
import { div } from "framer-motion/client";
import useScreenType from "react-screentype-hook";

const SIDEBAR_ITEMS = [
  {
    name: "Overview",
    icon: BarChart2,
    color: "#6366f1",
    href: "/",
  },
  { name: "Products", icon: ShoppingBag, color: "#8B5CF6", href: "/products" },
  { name: "Users", icon: Users, color: "#EC4899", href: "/users" },
  { name: "Sales", icon: DollarSign, color: "#10B981", href: "/sales" },
  { name: "Orders", icon: ShoppingCart, color: "#F59E0B", href: "/orders" },
  { name: "Analytics", icon: TrendingUp, color: "#3B82F6", href: "/analytics" },
  { name: "Settings", icon: Settings, color: "#6EE7B7", href: "/settings" },
];

function ProSidebar() {
  const screenType = useScreenType();
  const [isSidebarClose, setIsSidebarClose] = useState(false);
  const [activeLink, setActiveLink] = useState("/");

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 768) {
        setIsSidebarClose(true);
      } else {
        setIsSidebarClose(false);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const useActiveLink = () => {
    const location = useLocation();

    useEffect(() => {
      setActiveLink(location.pathname);
    }, [location.pathname]);
  };

  const toggleSidebar = () => {
    setIsSidebarClose((prev) => !prev);
  };

  useActiveLink();

  return (
    <div className='h-full top-0 bottom-0 flex flex-col  relative z-10 border-r border-gray-700'>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={toggleSidebar}
        className={`p-4  transition-colors max-w-fit self-start ml-3`}
      >
        <Menu />
      </motion.button>
      <Sidebar
        collapsed={isSidebarClose}
        backgroundColor='rgb(55 65 81 / var(--tw-bg-opacity)'
        rootStyles={{
          border: "none",
        }}
      >
        <SMenu
          rootStyles={{
            padding: 5,
          }}
          menuItemStyles={{
            button: ({ level, active, disabled }) => {
              if (level === 0) {
                return {
                  color: disabled
                    ? "#fff"
                    : "rgb(229 231 235 / var(--tw-text-opacity))",
                  backgroundColor: active
                    ? "rgb(243 244 246 / 0.1)"
                    : undefined,
                  borderRadius: "12px !important",
                  marginBottom: "8px",
                  "&:hover": {
                    backgroundColor: "rgb(243 244 246 / 0.1) !important",
                    color: "white !important",
                    borderRadius: "12px !important",
                  },
                };
              }
            },
          }}
        >
          {SIDEBAR_ITEMS.map((item) => (
            <MenuItem
              active={activeLink === item.href}
              key={item.name}
              icon={
                <item.icon
                  size={20}
                  style={{
                    color: item.color,
                    minWidth: "20px",
                    marginRight: 5,
                  }}
                />
              }
              component={<NavLink to={item.href} />}
            >
              <span className="ml-4 whitespace-nowrap'">{item.name}</span>
            </MenuItem>
          ))}
          {/* <SubMenu label='Theme'>
            <MenuItem> Dark</MenuItem>
            <MenuItem> Light</MenuItem>
          </SubMenu> */}
        </SMenu>
      </Sidebar>
    </div>
  );
}

export default ProSidebar;
