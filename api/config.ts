export default async function handler(req: any, res: any) {
  // Return the API base URL based on the current environment
  // In Vercel, this is usually the current deployment URL
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['host'];
  const apiBaseUrl = `${protocol}://${host}`;

  return res.status(200).json({
    API_BASE_URL: apiBaseUrl
  });
}
