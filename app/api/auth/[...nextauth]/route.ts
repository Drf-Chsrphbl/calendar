import { handlers } from "@/auth" // Referring to the auth.ts we just created
// this is a route handler: which NextAuth returns to route.ts file so that Auth.js can run on any incoming request
export const { GET, POST } = handlers
export const runtime = "edge" // optional: specifying API route should run on Vercel's edge runtime instead of default Node.js runtime (lower latency)