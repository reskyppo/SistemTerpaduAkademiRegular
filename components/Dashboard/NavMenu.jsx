import Link from "next/link";
import { Accordion } from "react-accessible-accordion";
import NavAccordion from "./NavAccordion";
const NavMenu = () => {
  return (
    <div>
      <Link href="/">
        <h3 className="text-white font-semibold text-xl mb-4">Home</h3>
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
