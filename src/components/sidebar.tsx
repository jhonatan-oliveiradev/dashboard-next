"use client";

import { useState } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  PackageIcon,
  SettingsIcon,
  ShoppingBagIcon,
  UsersIcon,
} from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetHeader, SheetTrigger } from "./ui/sheet";

interface SidebarProps {
  isMenuOpen: boolean;
}

export const Sidebar = ({ isMenuOpen }: SidebarProps) => {
  const [menuOpen, setMenuOpen] = useState(isMenuOpen);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex w-full flex-col bg-muted/40">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-10 hidden flex-col overflow-hidden border-r bg-background duration-200 ease-in-out sm:flex",
          menuOpen ? "w-48" : "w-14",
        )}
      >
        <nav className="flex flex-col items-center gap-4 px-2 py-5">
          <div
            className={cn(
              "flex w-full items-center gap-2 rounded-lg text-muted-foreground transition-all hover:text-foreground",
              menuOpen ? "ml-8 justify-start" : "justify-center",
            )}
          >
            <Button size="icon" onClick={handleToggleMenu}>
              {menuOpen ? (
                <ChevronLeftIcon className="size-5" />
              ) : (
                <ChevronRightIcon className="size-5" />
              )}
            </Button>
          </div>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className={cn(
                    "flex w-full items-center gap-2 rounded-lg text-muted-foreground transition-all hover:text-foreground",
                    menuOpen ? "ml-8 justify-start" : "justify-center",
                  )}
                >
                  <HomeIcon className="size-5 transition-all" />
                  <span
                    className={cn(
                      "text-lg font-medium transition-all",
                      menuOpen ? "flex" : "hidden",
                    )}
                  >
                    Início
                  </span>
                </Link>
              </TooltipTrigger>

              <TooltipContent side="right">Início</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className={cn(
                    "flex w-full items-center gap-2 rounded-lg text-muted-foreground transition-all hover:text-foreground",
                    menuOpen ? "ml-8 justify-start" : "justify-center",
                  )}
                >
                  <ShoppingBagIcon className="size-5 transition-all" />
                  <span
                    className={cn(
                      "text-lg font-medium transition-all",
                      menuOpen ? "flex" : "hidden",
                    )}
                  >
                    Pedidos
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Pedidos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className={cn(
                    "flex w-full items-center gap-2 rounded-lg text-muted-foreground transition-all hover:text-foreground",
                    menuOpen ? "ml-8 justify-start" : "justify-center",
                  )}
                >
                  <PackageIcon className="size-5 transition-all" />
                  <span
                    className={cn(
                      "text-lg font-medium transition-all",
                      menuOpen ? "flex" : "hidden",
                    )}
                  >
                    Produtos
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Produtos</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className={cn(
                    "flex w-full items-center gap-2 rounded-lg text-muted-foreground transition-all hover:text-foreground",
                    menuOpen ? "ml-8 justify-start" : "justify-center",
                  )}
                >
                  <UsersIcon className="size-5 transition-all" />
                  <span
                    className={cn(
                      "text-lg font-medium transition-all",
                      menuOpen ? "flex" : "hidden",
                    )}
                  >
                    Clientes
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Clientes</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>

        <nav className="mt-auto flex flex-col items-center gap-4 px-2 py-5">
          <TooltipProvider>
            {/* <Tooltip>
              <TooltipTrigger asChild>
                <div
                  className={cn(
                    "flex w-full items-center gap-2 rounded-lg text-muted-foreground transition-all hover:text-foreground",
                    menuOpen ? "ml-8 justify-start" : "justify-center",
                  )}
                >
                  <ModeToggle />
                  <span
                    className={cn(
                      "text-lg font-medium transition-all duration-500",
                      menuOpen ? "flex" : "hidden",
                    )}
                  >
                    Alterar tema
                  </span>
                </div>
              </TooltipTrigger>
              <TooltipContent side="right">Alterar tema</TooltipContent>
            </Tooltip> */}
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  href="/"
                  className={cn(
                    "flex w-full items-center gap-2 rounded-lg text-muted-foreground transition-all hover:text-foreground",
                    menuOpen ? "ml-8 justify-start" : "justify-center",
                  )}
                >
                  <SettingsIcon className="size-5 transition-all" />
                  <span
                    className={cn(
                      "text-lg font-medium transition-all",
                      menuOpen ? "flex" : "hidden",
                    )}
                  >
                    Configurações
                  </span>
                </Link>
              </TooltipTrigger>
              <TooltipContent side="right">Configurações</TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </nav>
      </aside>

      <div className="flex flex-col sm:hidden sm:gap-4 sm:py-4 sm:pl-14">
        <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
          <Sheet>
            <SheetTrigger asChild>
              <Button size="icon" variant="outline" className="sm:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
                <span className="sr-only">Abrir/Fechar Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader className="mb-4 border-b">
                <Link
                  prefetch={false}
                  href="/"
                  className="mb-4 flex h-10 w-10 items-center justify-center gap-2 rounded-full bg-primary text-lg text-primary-foreground md:text-base"
                >
                  <PackageIcon className="size-5 transition-all" />
                  <span className="sr-only">Logotipo</span>
                </Link>
              </SheetHeader>
              <div>
                <nav className="grid gap-6 text-lg font-medium">
                  <Link
                    prefetch={false}
                    href="/"
                    className="group flex items-center gap-4 px-2.5 text-muted-foreground transition-all hover:text-foreground"
                  >
                    <HomeIcon className="size-5" />
                    <span className="">Início</span>
                  </Link>
                  <Link
                    prefetch={false}
                    href="/"
                    className="group flex items-center gap-4 px-2.5 text-muted-foreground transition-all hover:text-foreground"
                  >
                    <ShoppingBagIcon className="size-5" />
                    <span className="">Pedidos</span>
                  </Link>
                  <Link
                    prefetch={false}
                    href="/"
                    className="group flex items-center gap-4 px-2.5 text-muted-foreground transition-all hover:text-foreground"
                  >
                    <PackageIcon className="size-5" />
                    <span className="">Produtos</span>
                  </Link>
                  <Link
                    prefetch={false}
                    href="/"
                    className="group flex items-center gap-4 px-2.5 text-muted-foreground transition-all hover:text-foreground"
                  >
                    <UsersIcon className="size-5" />
                    <span className="">Clientes</span>
                  </Link>
                  <Link
                    prefetch={false}
                    href="/"
                    className="group flex items-center gap-4 px-2.5 text-muted-foreground transition-all hover:text-foreground"
                  >
                    <SettingsIcon className="size-5" />
                    <span className="">Configurações</span>
                  </Link>
                  <div className="group flex cursor-pointer items-center gap-4 text-muted-foreground transition-all hover:text-foreground">
                    <ModeToggle />
                    <span className="">Alterar tema</span>
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
          <span>Menu</span>
        </header>
      </div>
    </div>
  );
};
