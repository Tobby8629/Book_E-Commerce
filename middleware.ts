export {default} from "next-auth/middleware"

export const config = { matcher: ["/", "/author/:path*", "/books/:path*", "/scheduled"]}