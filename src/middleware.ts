import { NextResponse, type NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const basicAuth = request.headers.get("authorization");

  if (
    pathname.startsWith("/brand") ||
    pathname.startsWith("/brand-old")
  ) {
    if (!checkAuth(basicAuth, process.env.OWNER_USER, process.env.OWNER_PASS)) {
      return unauthorized("brand");
    }
  }

  if (pathname.startsWith("/media")) {
    const ownerOk = checkAuth(
      basicAuth,
      process.env.OWNER_USER,
      process.env.OWNER_PASS,
    );
    const brandOk = checkAuth(
      basicAuth,
      process.env.MEDIA_USER,
      process.env.MEDIA_PASS,
    );
    if (!ownerOk && !brandOk) return unauthorized("media");
  }

  if (pathname.startsWith("/admin")) {
    if (!checkAuth(basicAuth, process.env.OWNER_USER, process.env.OWNER_PASS)) {
      return unauthorized("admin");
    }
  }

  return NextResponse.next();
}

function checkAuth(header: string | null, user?: string, pass?: string): boolean {
  if (!header || !user || !pass) return false;
  const [scheme, encoded] = header.split(" ");
  if (scheme !== "Basic" || !encoded) return false;

  try {
    const decoded = decodeBase64(encoded);
    if (!decoded) return false;
    const [decodedUser, decodedPass] = decoded.split(":");
    return decodedUser === user && decodedPass === pass;
  } catch {
    return false;
  }
}

const BASE64_CHARS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";

function decodeBase64(input: string): string | null {
  let buffer = 0;
  let bitsCollected = 0;
  let output = "";

  for (const char of input.replace(/=+$/u, "")) {
    const index = BASE64_CHARS.indexOf(char);
    if (index === -1) return null;

    buffer = (buffer << 6) | index;
    bitsCollected += 6;

    if (bitsCollected >= 8) {
      bitsCollected -= 8;
      output += String.fromCharCode((buffer >> bitsCollected) & 0xff);
    }
  }

  return output;
}

function unauthorized(realm: string) {
  return new NextResponse("Authentication required", {
    status: 401,
    headers: {
      "WWW-Authenticate": `Basic realm="${realm}", charset="UTF-8"`,
    },
  });
}

export const config = {
  matcher: [
    "/brand/:path*",
    "/brand-old/:path*",
    "/media/:path*",
    "/admin/:path*",
  ],
};
