import Link from "next/link";
import { Accordion, resetNextUuid } from "react-accessible-accordion";
import NavAccordion from "./NavAccordion";
const NavMenu = () => {
  resetNextUuid();
  return (
    <div>
      <Link href="/">
        <h3 className="text-white font-semibold text-xl mb-4 cursor-pointer">
          Home
        </h3>
      </Link>
      <Accordion allowZeroExpanded={true}>
        <NavAccordion Title="Input/Edit Data" />
        <NavAccordion Title="Info Akademik" />
        <NavAccordion Title="Info Keuangan" />
        <NavAccordion Title="Life Skills" />
      </Accordion>
    </div>
  );
};

export default NavMenu;
