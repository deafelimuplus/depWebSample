import CardWrapper from "@/app/ui/dashboard/cards";
import RevenueChart from "../../ui/dashboard/revenue-chart";
import LatestInvoices from "../../ui/dashboard/latest-invoices";
import { lusitana } from "../../ui/fonts";
// import {fetchCardData } from "../../lib/data";
import { Suspense } from "react";
import { RevenueChartSkeleton, LatestInvoicesSkeleton, CardsSkeleton } from "@/app/ui/skeletons";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Overview',
};

export default async function Page() {
    // const revenue = await fetchRevenue();
    // const latestInvoices = await fetchLatestInvoices(); // wait for fetchRevenue() to finish
    /* const {
        totalPaidInvoices,
        totalPendingInvoices,
        numberOfCustomers,
        numberOfInvoices
    } = await fetchCardData(); // wait for fetchLatestInvoices() to finish
     */

    return (
        <main>
            <h1 className={`${lusitana.className} mb-4 text-xl md:text-2x1`}>
                Dashboard
            </h1>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                <Suspense fallback={<CardsSkeleton />}>
                    <CardWrapper />
                </Suspense>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-4 lg:grid-cols-8">
                <Suspense fallback={<RevenueChartSkeleton />}>
                    <RevenueChart />
                </Suspense>
                <Suspense fallback={<LatestInvoicesSkeleton />}>
                    <LatestInvoices />
                </Suspense>
            </div>
        </main>
    );
}