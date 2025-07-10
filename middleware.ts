export { default } from "next-auth/middleware";

export const config = {
  matcher: [
    /*
      Match all paths EXCEPT:
      - the homepage (/)
      - static files (/_next, /images, etc.)
      - API routes (/api)
    */
    "/((?!api|_next|.*\\..*|$).*)",
  ],
};
