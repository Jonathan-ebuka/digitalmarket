import { ReadonlyRequestCookies } from "next/dist/server/web/spec-extension/adapters/request-cookies"
import { NextRequest } from "next/server"
import payload from "payload"

export const getSeverSideUser = async (
  cookies: NextRequest["cookies"] | ReadonlyRequestCookies
) => {
  const token = cookies.get("payload-token")?.value

  const meRes = await fetch(`${process.env.NEXT_PUBLIC_SEVER_URL}/api/users/me`)
}
