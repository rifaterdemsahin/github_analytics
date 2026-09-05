import indexHtml from "../index.html";
import trendsHtml from "../trends.html";

const PAGES = {
  "/": indexHtml,
  "/index.html": indexHtml,
  "/trends.html": trendsHtml,
};

export default {
  async fetch(request) {
    const { pathname } = new URL(request.url);
    const html = PAGES[pathname];
    if (!html) return new Response("Not found", { status: 404 });
    return new Response(html, { headers: { "content-type": "text/html; charset=utf-8" } });
  },
};
