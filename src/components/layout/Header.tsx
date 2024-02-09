import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

function Header() {
    return (
        <header className="col-span-full flex justify-between items-center mt-5 px-5 py-8 rounded-2xl shadow-md border-[2px] border-white bg-gradient-to-r from-red-100 to-violet-100">
            <h1 className="text-medium_1">پنل ادمین تِک‌شاپ</h1>
            <div className="flex gap-3 items-center">
                <div>
                    <DropdownMenu dir="rtl">
                        <DropdownMenuTrigger className="p-2 outline-none">
                            sobhan kazemi
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>ادمین</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <a href="#">
                                <DropdownMenuItem className="cursor-pointer">
                                    سایت
                                </DropdownMenuItem>
                            </a>
                            <a href="#">
                                <DropdownMenuItem className="cursor-pointer">
                                    خروج
                                </DropdownMenuItem>
                            </a>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
                <Avatar className="w-20 h-20">
                    <AvatarFallback>SK</AvatarFallback>
                </Avatar>
            </div>
        </header>
    );
}

export default Header;
