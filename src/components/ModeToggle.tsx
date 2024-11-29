import { Moon, Sun } from "lucide-react";

import { Button } from "@/components/ui/button";

import { useTheme } from "./ThemeProvider";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();

  const chnage = () => {
    if (theme == "dark") setTheme("light");
    if (theme == "light") setTheme("dark");
  };

  return (
    <Button variant="link" size="icon" onClick={chnage}>
      {theme == "dark" && (
        <Sun className="h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
      )}

      {theme == "light" && (
        <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      )}
    </Button>
  );
}
