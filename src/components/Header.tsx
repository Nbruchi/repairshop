import React from "react";
import NavButton from "./NavButton";
import { File, HomeIcon, LogOut, UserRound } from "lucide-react";
import Link from "next/link";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import NavMenu from "./NavMenu";

export default function Header() {
    return (
        <header className="animate-slide bg-background h-12 p-2 border-b sticky top-0 z-20">
            <div className="flex h-8 items-center justify-between w-full">
                <div className="flex items-center gap-2">
                    <NavButton href="/home" label="Hom" icon={HomeIcon} />
                    <Link
                        href="/home"
                        className="flex justify-center items-center gap-2 ml-0"
                        title="Home"
                    >
                        <h1 className="hidden sm:block text-xl font-bold ml-0 mt-1">
                            Computer Repair Shop
                        </h1>
                    </Link>
                </div>
                <div className="flex items-center">
                    <NavButton href="/tickets" label="Tickts" icon={File} />
                    <NavMenu
                        icon={UserRound}
                        label="Customers Menu"
                        choices={[
                            { title: "Search Customers", href: "/customers" },
                            { title: "New Customer", href: "/customers/form" },
                        ]}
                    />
                    <ModeToggle />
                    <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full"
                        asChild
                        title="Logout"
                        aria-label="Logout"
                    >
                        <LogoutLink>
                            <LogOut />
                        </LogoutLink>
                    </Button>
                </div>
            </div>
        </header>
    );
}
