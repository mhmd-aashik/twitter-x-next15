"use client";
import { Button } from "@/components/ui/button";
import {
  Bell,
  Bookmark,
  Home,
  Mail,
  List,
  Hash,
  Settings,
  CircleEllipsis,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface MenuBarProps {
  className?: string;
}

const menuItems = [
  { href: "/", icon: Home, label: "Home", title: "Home" },
  {
    href: "/notifications",
    icon: Bell,
    label: "Notifications",
    title: "Notifications",
  },
  { href: "/messages", icon: Mail, label: "Messages", title: "Messages" },
  {
    href: "/bookmarks",
    icon: Bookmark,
    label: "Bookmarks",
    title: "Bookmarks",
  },
  {
    href: "#",
    icon: List,
    label: "List",
    title: "List",
  },
  {
    href: "#",
    icon: Hash,
    label: "Explore",
    title: "Explore",
  },
  {
    href: "#",
    icon: Settings,
    label: "Settings",
    title: "Settings",
  },

  {
    href: "#",
    icon: CircleEllipsis,
    label: "More",
    title: "More",
  },
];

export default function MenuBar({ className }: MenuBarProps) {
  const pathname = usePathname();
  return (
    <div className={className}>
      {menuItems.map(({ href, icon: Icon, label, title }) => {
        const isActive = pathname === href;
        return (
          <Button
            key={href}
            variant="ghost"
            className={`${
              isActive ? "bg-blue-500  font-bold text-white" : ""
            } flex text-xl items-center py-6 rounded-full justify-start gap-3`}
            title={title}
            asChild
          >
            <Link href={href!}>
              <Icon className="!size-6 border-red-500" />
              <span className="hidden lg:inline">{label}</span>
            </Link>
          </Button>
        );
      })}
    </div>
  );
}
