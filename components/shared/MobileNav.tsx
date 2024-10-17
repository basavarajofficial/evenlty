import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Image from "next/image"
import { Separator } from "../ui/separator"
import NavItems from "./NavItems"
import Logo from "./Logo"
import { HiOutlineMenuAlt3 } from "react-icons/hi";

function MobileNav() {
  return (
    <nav className="md:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <HiOutlineMenuAlt3 size={23} />
      </SheetTrigger>
      <SheetContent className="flex flex-col items-center gap-6 md:hidden">
        <Logo width={138} height={42} />
        <Separator className="border border-gray-100" />

        <NavItems />

      </SheetContent>
    </Sheet>
    </nav>
  )
}


export default MobileNav;
