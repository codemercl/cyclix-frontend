import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const middleware = (request: NextRequest) => {
  const cookie = request.cookies.get("greeting");

  const response = NextResponse.next();
  response.cookies.set("greeting", "Ласкаво просимо!");

  if (cookie) {
    response.cookies.set("greeting", "Привіт, раді бачити тебе знову!");
  }

  return response;
};

export { middleware };
