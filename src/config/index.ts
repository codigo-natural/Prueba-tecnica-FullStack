export async function getStrapiURL(url: string, options: RequestInit = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_HOST;

  const fullUrl = `${baseUrl}/api${url}`;

  const response = await fetch(fullUrl, {
    ...options,
    headers: {
      'Content-Type': 'application/json',
      ...options.headers,
    },
  });

  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
}
