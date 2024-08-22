import { initTRPC } from "@trpc/server"
import { trpc } from "./client"
import { ExpressContext } from "../server"

const t = initTRPC.context<ExpressContext>().create()
export const router = t.router
export const publicProcidure = t.procedure
