"use client";

import Image from "next/image";

import { HugeiconsIcon } from "@hugeicons/react";
import { BellRingIcon, Logout01Icon, Menu01Icon, User02Icon, Wallet01Icon } from "@hugeicons/core-free-icons";

import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuGroup, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useSidebar } from "../ui/sidebar";


export default function TopNavbar() {
  const { toggleSidebar } = useSidebar();
  return (
    <header className="w-full min-h-16 px-5 py-2 flex items-center bg-background border-b">
      <div className="flex-1">
        <Button variant="outline" size="icon-lg" onClick={toggleSidebar}>
          <HugeiconsIcon icon={Menu01Icon} />
        </Button>
      </div>
      <div className="flex-1 flex items-center justify-end gap-x-5">
        <div className="flex gap-x-2">
          <Button variant="outline" size="icon-sm"><HugeiconsIcon icon={BellRingIcon} /></Button>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger render={
            <Button variant="ghost" size="icon-lg" className="rounded-full overflow-hidden cursor-default">
              <Image src="/images/profile.jpg" alt="profile picture" width={40} height={40} />
            </Button>
          } />
          <DropdownMenuContent className="min-w-45 px-2">
            <DropdownMenuGroup>
              <DropdownMenuItem><HugeiconsIcon icon={User02Icon} /> Profil</DropdownMenuItem>
              <DropdownMenuItem><HugeiconsIcon icon={Wallet01Icon} /> Keuangan</DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem variant="destructive"><HugeiconsIcon icon={Logout01Icon} /> Keluar</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}