import * as adapter from '@astrojs/netlify/ssr-function.js';
import { renderers } from './renderers.mjs';
import { manifest } from './manifest_DWHxVOPp.mjs';

const _page0  = () => import('./chunks/generic_BsQYBXNa.mjs');
const _page1  = () => import('./chunks/get-info-playlist-json_HqYgl7Ce.mjs');
const _page2  = () => import('./chunks/get-info-playlist_x5Xzr8TS.mjs');
const _page3  = () => import('./chunks/_id__CSkPUYnE.mjs');
const _page4  = () => import('./chunks/index_CIxET8lm.mjs');const pageMap = new Map([["node_modules/astro/dist/assets/endpoint/generic.js", _page0],["src/pages/api/get-info-playlist-json.js", _page1],["src/pages/api/get-info-playlist.json.js", _page2],["src/pages/playlist/[id].astro", _page3],["src/pages/index.astro", _page4]]);
const _manifest = Object.assign(manifest, {
	pageMap,
	renderers,
});
const _args = {"middlewareSecret":"c7d317b7-68b0-4a06-a302-03ffee69f4fe"};

const _exports = adapter.createExports(_manifest, _args);
const _default = _exports['default'];

const _start = 'start';
if(_start in adapter) {
	adapter[_start](_manifest, _args);
}

export { _default as default, pageMap };
