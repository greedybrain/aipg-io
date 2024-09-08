import { cn } from "@/utils/tailwind/tw-merge";
import { createEntityOrEntities } from "@/services/actions/server/crud/createEntityOrEntities";

export default async function Home() {
    // createEntityOrEntities<'Notes'>({}).then(data => console.log("Data: ", JSON.stringify(data, null, 2)))
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1 className={cn("font-extrabold text-5xl")}>
                Just a workflow template
            </h1>
        </main>
    );
}
