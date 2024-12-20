import { Metadata } from "next";
import CustomerSearch from "./CustomerSearch";
import searchCustomers from "@/lib/queries/searchCustomers";

export const metadata: Metadata = {
    title: "Customer Search",
};

export default async function Customers({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    const { searchText } = await searchParams;

    if (!searchText) return <CustomerSearch />;

    const results = await searchCustomers(searchText);
    console.log(results);

    return (
        <div>
            <CustomerSearch />
        </div>
    );
}
