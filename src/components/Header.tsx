import { Link } from "react-router-dom";
import { ModeToggle } from "./ModeToggle";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Menu } from "lucide-react";
import { Button } from "./ui/button";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="w-full sticky top-0 flex h-16 items-center justify-between bg-transparent px-4 md:px-20 z-50">
      <Link to="/">
        <img src="/images/logo.png" alt="logo" className="h-7 w-7" />
      </Link>

      <div className="hidden md:flex">
        <Navbar />
      </div>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetTitle className="hidden"></SheetTitle>
          <SheetDescription className="hidden"></SheetDescription>
          <Navbar />
        </SheetContent>
      </Sheet>

      <div className="hidden md:flex items-center gap-4 md:gap-2 lg:gap-4">
        <ModeToggle />
      </div>
    </header>
  );
}
