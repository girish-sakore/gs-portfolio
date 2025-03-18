import { NavLink, useLocation } from "react-router-dom";
import clsx from "clsx";
import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";
import { Home, User, Briefcase, Mail } from "lucide-react";

interface NavLinkItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

export default function Navigation() {
  const location = useLocation();
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const links: NavLinkItem[] = [
    { href: "/", label: "Home", icon: <Home size={24} /> },
    { href: "/about", label: "About", icon: <User size={24} /> },
    { href: "/projects", label: "Projects", icon: <Briefcase size={24} /> },
    { href: "/contact", label: "Contact", icon: <Mail size={24} /> },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 flex justify-center pb-4 z-50">
      <div className="glass-effect rounded-full px-6 py-2">
        <nav className="flex items-center gap-4">
          {links.map((link, index) => {
            const isHovered = hoveredIndex === index;
            const isActive = location.pathname === link.href;

            const iconAnimation = useSpring({
              transform: isHovered ? "scale(1.2)" : "scale(1)",
              config: { tension: 300, friction: 20 },
            });

            const labelAnimation = useSpring({
              opacity: isHovered ? 1 : 0,
              transform: isHovered ? "translateY(-20px)" : "translateY(0px)",
              config: { tension: 300, friction: 20 },
            });

            return (
              <NavLink
                key={link.href}
                to={link.href}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* @ts-ignore */}
                <animated.div
                  style={labelAnimation}
                  className="absolute w-max left-1/2 -translate-x-1/2 bottom-full mb-2 px-2 py-1 rounded-md bg-black/80 text-white text-sm pointer-events-none"
                >
                  {link.label}
                </animated.div>
                {/* @ts-ignore */}
                <animated.div
                  style={iconAnimation}
                  className={clsx(
                    "w-12 h-12 rounded-full flex items-center justify-center cursor-pointer transition-colors text-foreground/60 hover:text-primary", isActive ? "scale-125" : ""
                  )}
                >
                  {link.icon}
                </animated.div>
              </NavLink>
            );
          })}
        </nav>
      </div>
    </div>
  );
}
