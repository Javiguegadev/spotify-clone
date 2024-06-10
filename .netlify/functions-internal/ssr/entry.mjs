import { renderers } from './renderers.mjs';
import { manifest } from './manifest_CNjzWnNU.mjs';
import * as serverEntrypointModule from '@astrojs/netlify/ssr-function.js';

const _page0 = () => import('./chunks/generic_cdRR4Ale.mjs');
const _page1 = () => import('./chunks/get-info-playlist-json_DB6qcNBY.mjs');
const _page2 = () => import('./chunks/get-info-playlist_lKFFQs6M.mjs');
const _page3 = () => import('./chunks/_id__BCnEfhYK.mjs');
const _page4 = () => import('./chunks/index_BSWkcozP.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/get-info-playlist-json.js", _page1],
    ["src/pages/api/get-info-playlist.json.js", _page2],
    ["src/pages/playlist/[id].astro", _page3],
    ["src/pages/index.astro", _page4]
]);
const middleware = (_, next) => next();
const _manifest = Object.assign(manifest, {
    pageMap,
    renderers,
    middleware
});
const _args = {
    "middlewareSecret": "b5015546-ac1c-4967-9355-226dd94e796d"
};
const _exports = serverEntrypointModule.createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (_start in serverEntrypointModule) {
	serverEntrypointModule[_start](_manifest, _args);
}

export { __astrojsSsrVirtualEntry as default, pageMap };
