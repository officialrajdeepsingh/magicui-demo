"use client";

import React from "react";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Home, Settings, Search, Contact } from "lucide-react";
import { ThemeSwitcher } from "./theme-switcher";

export function Header() {
  return (
    <Dock direction="middle" iconMagnification={60} iconDistance={100}>
      <DockIcon>
        <Home className="size-5" />
      </DockIcon>
      <DockIcon>
        <Settings className="size-5" />
      </DockIcon>
      <DockIcon>
        <Contact className="size-5" />
      </DockIcon>
      <DockIcon>
        <Search className="size-5" />
      </DockIcon>
      <ThemeSwitcher />
    </Dock>
  );
}
