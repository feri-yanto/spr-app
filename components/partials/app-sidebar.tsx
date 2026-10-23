import Image from "next/image";

import { HugeiconsIcon } from "@hugeicons/react";
import { AddCircleHalfDotIcon, ChevronDownIcon, Home02Icon, NoteIcon, TransactionHistoryIcon } from "@hugeicons/core-free-icons";

import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";


export default function AppSidebar() {
  return (
    <Sidebar collapsible="icon">
      <SidebarHeader className="min-h-16 justify-center border-b">
        <SidebarMenu>
          <SidebarMenuItem>
            <div className="w-full h-10 flex items-center gap-x-2 overflow-hidden transition-all [&>span]:last:truncate group-data-[collapsible=icon]:size-9">
              <Image src="/images/brand-logo.svg" alt="brand-logo" width={40} height={40} className="object-cover mix-blend-multiply" />
              <span className="text-xl font-semibold">SIPINTAR</span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Utama</SidebarGroupLabel>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton isActive size="md">
                <HugeiconsIcon icon={Home02Icon} /> <span>Beranda</span>
              </SidebarMenuButton>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <Collapsible>
                <CollapsibleTrigger render={
                  <SidebarMenuButton size="md" className="data-panel-open:[&_svg]:last:rotate-180">
                    <HugeiconsIcon icon={NoteIcon} /> <span>Izin Pegawai</span> <HugeiconsIcon icon={ChevronDownIcon} className="ml-auto transition-transform" />
                  </SidebarMenuButton>
                } />
                <CollapsibleContent>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton><HugeiconsIcon icon={AddCircleHalfDotIcon} /> <span>Buat izin</span></SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <SidebarMenuSubButton><HugeiconsIcon icon={TransactionHistoryIcon} /> <span>Riwayat izin</span></SidebarMenuSubButton>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </Collapsible>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}