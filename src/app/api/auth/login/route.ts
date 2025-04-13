import { AccessDeniedError } from '@/services/common/http.errors';
import authService from '@/services/login.service';
import LoginScheme from "@/schemes/login.scheme";
import { cookies } from 'next/headers'

export async function POST(request: Request) {
  const { email, password } = await LoginScheme.validate(await request.json());

  try {
    const loginResponse = await authService.authenticate(email, password);

    cookies().set('SocialSessionID', loginResponse.sessionId, {
      expires: loginResponse.expireAt,
      httpOnly: true,
      secure: true,
      domain: process.env.COOKIE_DOMAIN ?? 'localhost',
      path: '/',
    });

    cookies().set('SocialUsername', loginResponse.user.username, {
      expires: loginResponse.expireAt,
      httpOnly: false,
      secure: true,
      domain: process.env.COOKIE_DOMAIN ?? 'localhost',
      path: '/',
    });

    return new Response(JSON.stringify(loginResponse.user), {
      status: 200,
    });

  } catch (e) {
    if (e instanceof AccessDeniedError) {
      return new Response(JSON.stringify({
        error: `Invalid credentials for user: ${email}`,
      }), {
        status: 403,
      });
    }

    return new Response(JSON.stringify({
      error: 'Internal server error',
    }), {
      status: 500,
    });
  }
}
