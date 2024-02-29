import { renderers } from './renderers.mjs';
import { manifest } from './manifest_h88vbd_R.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';
import { onRequest } from './_noop-middleware.mjs';

const _page0 = () => import('./chunks/generic_BfShaYcG.mjs');
const _page1 = () => import('./chunks/404_BPrkfRxo.mjs');
const _page2 = () => import('./chunks/_.._Bi4WERkF.mjs');
const _page3 = () => import('./chunks/_slug__DShJ2xck.mjs');
const _page4 = () => import('./chunks/_.._BEaqSv6C.mjs');
const _page5 = () => import('./chunks/cv_CPpyB6O-.mjs');
const _page6 = () => import('./chunks/projects_CqAFlNky.mjs');
const _page7 = () => import('./chunks/rss_BsloGLQJ.mjs');
const _page8 = () => import('./chunks/services_Zx_bFzbk.mjs');
const _page9 = () => import('./chunks/_slug__pf-qKzYK.mjs');
const _page10 = () => import('./chunks/_.._CO1Ht6Oh.mjs');
const _page11 = () => import('./chunks/index_C0AtTHYM.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/404.astro", _page1],
    ["src/pages/blog/tag/[tag]/[...page].astro", _page2],
    ["src/pages/blog/[slug].astro", _page3],
    ["src/pages/blog/[...page].astro", _page4],
    ["src/pages/cv.astro", _page5],
    ["src/pages/projects.astro", _page6],
    ["src/pages/rss.xml.js", _page7],
    ["src/pages/services.astro", _page8],
    ["src/pages/store/[slug].astro", _page9],
    ["src/pages/store/[...page].astro", _page10],
    ["src/pages/index.astro", _page11]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware: onRequest
});
const _args = {
    "middlewareSecret": "3ed510bb-f553-4d5b-bdb7-532ab8f72111"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
