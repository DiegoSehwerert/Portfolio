// // lib/supabase/server.ts
// import { cookies } from "next/headers";
// import { createServerClient } from "@supabase/ssr";

// export const createServerSupabaseClient = () => {
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: () => cookies(),
//     }
//   );
// };
