import { BackButton } from "@/components/BackButton";
import { getCustomer } from "@/lib/queries/getCustomer";
import * as Sentry from "@sentry/nextjs";
import CustomerForm from "./CustomerForm";

export const generateMetadata = async ({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
    }) => {
    const { customerId } = await searchParams;
    if (!customerId) {
        return {title:"New Customer"};
    }
    return {title: `Edit Customer #${customerId}`};
};

export default async function CustomerFormPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | undefined }>;
}) {
    try {
        const { customerId } = await searchParams;

        // Edit customer form
        if (customerId) {
            const customer = await getCustomer(parseInt(customerId));
            if (!customer) {
                return (
                    <>
                        <h2 className="text-2xl mb-2">
                            Customer ID #{customerId} not found
                        </h2>
                        <BackButton title="Go back" variant="default" />
                    </>
                );
            }
            return <CustomerForm customer={customer} />;
        } else {
            return <CustomerForm />;
        }
    } catch (error) {
        if (error instanceof Error) {
            Sentry.captureException(error);
            throw error;
        }
    }
}
