import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

const NavAccordion = ({ Title }) => {
  return (
    <AccordionItem>
      <AccordionItemHeading>
        <AccordionItemButton className="text-xl mb-4 outline-none">
          <section className="flex items-center justify-between">
            <p>{Title}</p>
            <div className="pb-2">
              <i className="border-r-4 border-b-4 p-1 border-l-0 border-t-0 border-white transform rotate-45 inline-block outline-none"></i>
            </div>
          </section>
        </AccordionItemButton>
      </AccordionItemHeading>
      <AccordionItemPanel>
        <p className="mb-4">
          Exercitation in fugiat est ut ad ea cupidatat ut in cupidatat occaecat
          ut occaecat consequat est minim minim esse tempor laborum consequat
          esse adipisicing eu reprehenderit enim.
        </p>
      </AccordionItemPanel>
    </AccordionItem>
  );
};

export default NavAccordion;
