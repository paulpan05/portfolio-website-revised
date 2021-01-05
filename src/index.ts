import HomePage from './assets/html/index.html';

export async function handleRequest(request: Request): Promise<Response> {
  switch (new URL(request.url).pathname) {
    case '/':
      return new Response(HomePage, {
        headers: { 'content-type': 'text/html' },
      });
    default:
      return new Response()
  }
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
