import { LucideIcon } from "lucide-react";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import Link from "next/link";

type Props = {
    icon: LucideIcon;
    label: string;
    choices: {
        title: string;
        href: string;
    }[];
};

export default function NavMenu({ icon: Icon, label, choices }: Props) {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                    <Icon className="h-[1.2rem] w-[1.2rem]" />
                    <span className="sr-only">{label}</span>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
                {choices.map((choice) => (
                    <DropdownMenuItem key={choice.title} asChild>
                        <Link href={choice.href}>{choice.title}</Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
