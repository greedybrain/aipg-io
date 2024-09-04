import { AuthService } from "../models/supabase/auth-service";
import OAuthOptions from "../components/features/oauth-options";
import { readEntityOrEntities } from "../services/actions/server/supabase/crud/readEntityOrEntities";
// import { createEntityOrEntities } from "@/services/actions/server/supabase/createEntityOrEntities";
// import { deleteEntityOrEntities } from "@/services/actions/server/supabase/deleteEntityOrEntities";

// import { updateEntity } from "@/services/actions/server/supabase/updateEntity";
// import { upsertEntityOrEntities } from "@/services/actions/server/supabase/upsertEntityOrEntities";

export default async function Home() {
    // readEntityOrEntities<"notes">({
    //     relation: "notes",
    //     entityIds: ["a2d3d4db-e1e0-4776-ba25-fdc8896f2cdf"],
    //     selectCriteria: {
    //         columns: "title, saves(*)",
    //     },
    // }).then((data) => console.log(JSON.stringify(data, null, 2)));
    // const authService = new AuthService();

    // authService
    //     .authenticate<"signUp">("signUp", {
    //         email: "willisnaya@gmail.com",
    //         password: "12345678lol",
    //     })
    //     .then((data) => console.log(data.user));

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <h1>Just a workflow template</h1>
            <OAuthOptions />
        </main>
    );
}
