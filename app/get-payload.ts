import dotenv from "dotenv"
import path from "path"
import type { InitOptions } from "payload/config"
import payload, { Payload } from "payload"
import nodemailer from "nodemailer"

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
})

const transporter = nodemailer.createTransport({
  host: "smtp.resend.com",
  secure: true,
  port: 465,
  auth: {
    user: "resend",
    pass: process.env.RESEND_API_KEY,
  },
})

let cached = (global as any).payload

if (!cached) {
  cached = (global as any).payload = {
    client: null,
    promise: null,
  }
}

interface Args {
  initOptions?: Partial<InitOptions>
}

export const getPAyloadClient = async ({
  initOptions,
}: Args = {}): Promise<Payload> => {
  if (!process.env.PAYLOAD__SECRET) {
    throw new Error("PAYLOAD__SECRET is missing")
  }

  if (cached.client) {
    return cached.client
  }

  if (!cached.promise) {
    return (cached.promise = payload.init({
      email: {
        transport: transporter,
        fromAddress: "onboarding@resend.dev",
        fromName: "digitalMarket",
      },
      secret: process.env.PAYLOAD__SECRET,
      local: initOptions?.express ? false : true,
      ...(initOptions || {}),
    }))
  }

  try {
    cached.client = await cached.promise
  } catch (e: unknown) {
    cached.promise = null
    throw e
  }

  return cached.client
}
