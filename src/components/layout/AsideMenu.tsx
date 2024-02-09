import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";
import ACIDE_MENU_ITEMS from "@/constants/AcideMenuItems";
import { Link } from "react-router-dom";

function AsideMenu() {
    return (
        <div className="col-span-3 p-5 bg-gradient-to-b from-violet-100 to-blue-100 rounded-2xl border-[2px] border-white shadow-md">
            <Accordion
                type="single"
                collapsible
                className="bg-white px-4 rounded-lg shadow-md"
            >
                {ACIDE_MENU_ITEMS.map((i) => (
                    <AccordionItem value={`item-${i.id}`} key={i.id}>
                        <AccordionTrigger className="text-medium_3">
                            {i.title}
                        </AccordionTrigger>
                        <AccordionContent>
                            <ul className="flex flex-col gap-2">
                                {i.links.map((link) => (
                                    <li key={link.id} className="flex">
                                        <Link
                                            className="p-2 bg-slate-50 rounded-md shadow-sm w-full hover:bg-slate-100 transition-all duration-300"
                                            to={link.href}
                                        >
                                            {link.title}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </AccordionContent>
                    </AccordionItem>
                ))}
            </Accordion>
        </div>
    );
}

export default AsideMenu;
