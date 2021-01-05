import HomePage from './assets/html/index.html';

export async function handleRequest(request: Request): Promise<Response> {
  return new Response(HomePage, { headers: { 'content-type': 'text/html' } });
}
