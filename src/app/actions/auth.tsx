export async function signin(email: string, password: string): Promise<{ success: boolean; error?: string }> {
    try {
      const response = await fetch('https://cyclix-backend.vercel.app/api/auth/sign-in', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (!response.ok) {
        const errorMessage = (await response.json()).message || 'Failed to log in. Please check your credentials.';
        return { success: false, error: errorMessage };
      }
  
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || 'An unexpected error occurred.' };
    }
  }
  