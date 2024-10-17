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

function MobileNav() {
  return (
    <nav className="md:hidden">
    <Sheet>
      <SheetTrigger asChild>
        <Image src='/assets/icons/menu.svg' alt="menu" width={24} height={24}  />
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
