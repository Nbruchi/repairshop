"use client";

import { useFormContext } from "react-hook-form";
import {
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "../ui/form";

type DataObject = {
    id: string;
    description: string;
};

type Props<S> = {
    fieldTitle: string;
    nameInSchema: keyof S & string;
    data: DataObject[];
    className?: string;
};

import React from "react";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "../ui/select";

export default function SelectWithLabel<S>({
    fieldTitle,
    nameInSchema,
    data,
    className,
}: Props<S>) {
    const form = useFormContext();

    return (
        <FormField
            control={form.control}
            name={nameInSchema}
            render={({ field }) => (
                <FormItem>
                    <FormLabel htmlFor={nameInSchema}>{fieldTitle}</FormLabel>
                    <Select {...field} onValueChange={field.onChange}>
                        <FormControl>
                            <SelectTrigger
                                id={nameInSchema}
                                className={`w-full max-w-xs ${className}`}
                            >
                                <SelectValue placeholder="Select" />
                            </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                            {data.map((item) => (
                                <SelectItem
                                    key={`${nameInSchema}-${item.id}`}
                                    value={item.id}
                                >
                                    {item.description}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <FormMessage />
                </FormItem>
            )}
        />
    );
}
