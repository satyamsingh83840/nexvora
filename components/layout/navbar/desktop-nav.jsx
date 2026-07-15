import NavLink from "./nav-link";
import NavDropdown from "./nav-dropdown";

import navigation from "@/data/navigation";
import practiceAreas from "@/data/practiceAreas";
import industries from "@/data/industries";

export default function DesktopNav() {
  return (
    <nav
      className="hidden items-center gap-8 xl:flex"
      aria-label="Primary Navigation"
    >
      {navigation.map((item) => {
        if (item.href === "/practice-areas") {
          return (
            <NavDropdown
              key={item.href}
              title={item.title}
              href={item.href}
              items={practiceAreas}
            />
          );
        }

        if (item.href === "/industries") {
          return (
            <NavDropdown
              key={item.href}
              title={item.title}
              href={item.href}
              items={industries}
            />
          );
        }

        return (
          <NavLink key={item.href} href={item.href}>
            {item.title}
          </NavLink>
        );
      })}
    </nav>
  );
}
