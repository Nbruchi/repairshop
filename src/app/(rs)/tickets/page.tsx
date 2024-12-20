import { Metadata } from "next";
import TicketSearch from "./TicketSearch";
import { getOpenTickets } from "@/lib/queries/getOpenTickets";
import searchTickets from "@/lib/queries/searchTickets";

export const metadata: Metadata = {
    title: "Tickets",
};

export default async function TicketsPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const { searchText } = await searchParams;

    if (!searchText) {
        const results = await getOpenTickets();
        return (
            <>
                <TicketSearch />
                <p>{JSON.stringify(results)}</p>
            </>
        );
    }

    const resutls = await searchTickets(searchText);

    return (
        <>
            <TicketSearch />
            <p>{JSON.stringify(resutls)}</p>
        </>
    );
}
