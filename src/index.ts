import HomePage from './assets/html/index.html';

export async function handleRequest(request: Request): Promise<Response> {
  console.log(new URL(request.url).pathname);
  switch (new URL(request.url).pathname) {
    case '/':
      return new Response(HomePage, {
        headers: { 'content-type': 'text/html' },
      });
    case '/favicon.ico':
      return new Response();
    default:
      return new Response()
  }
}

addEventListener('fetch', (event) => {
  event.respondWith(handleRequest(event.request))
})
