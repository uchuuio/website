interface Env {
  ASSETS: Fetcher;
}

export default {
  fetch() {
    // const url = new URL(request.url);
    return new Response(null, { status: 404 });
  },
} satisfies ExportedHandler<Env>;