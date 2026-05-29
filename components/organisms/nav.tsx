import { DrawerButton } from "./drawer";
import { NAV } from "@/constants/NAV";

export const Nav = () => {
  return (
    <nav>
      <DrawerButton />
      <div className="hidden md:block">
        <ul className="flex-cb gap-6">
          {NAV.map((item, i) => (
            <li
              key={i}
              className="hover:text-brand-blue pressable text-sm font-semibold text-black"
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
