import { cn } from "@/utils/tailwind/tw-merge";

export default async function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className={cn("font-extrabold text-5xl")}>
                Just a workflow template
            </h1>
        </main>
    );
}
