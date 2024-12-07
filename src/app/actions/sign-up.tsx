import Cookies from 'js-cookie';

export async function signUp(
  email: string,
  password: string,
  role: string,
  price: string,
  name: string
): Promise<{ success: boolean; error?: string }> {
  try {
    const response = await fetch('https://cyclix-backend.vercel.app/api/auth/sign-up', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, role, price, name }),
    });

    if (!response.ok) {
      const errorMessage = (await response.json()).message || 'Failed to log in. Please check your credentials.';
      return { success: false, error: errorMessage };
    }

    const data = await response.json();

    Cookies.set('access_token', data.access_token, { expires: 7, secure: true });

    return { success: true };
  } catch (err: any) {
    return { success: false, error: err.message || 'An unexpected error occurred.' };
  }
}
