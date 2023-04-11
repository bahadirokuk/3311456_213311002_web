'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "cc99963c064dcd3e5017bfad8a41a04e",
".git/config": "533ddf1c468be739f190c47db334b7b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2606e53ea48ede8db1aae63fbb63694b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7ebf175c348130a827ab916f993e7004",
".git/logs/refs/heads/main": "150fbfb6dec72bf19cfae30ffb82407c",
".git/logs/refs/remotes/origin/main": "614cdc5f3f9887cf57a58ed159a0339f",
".git/objects/05/d1e04be22c67b1c710731695b8e06e16f18dbb": "71e530390a11735a41fca24265c4ce1c",
".git/objects/09/9423d6a9a40ed21ceaa9d966bd08552b9a40f3": "b1a321722ef09436c2c8a788b3b6b852",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/7c6cd15e9086917fb4ff3836e6b5001aefe274": "e78f6d9cbbc56a49eaa1f9e65c7cc20f",
".git/objects/17/e41c2a0e363c721e31867b2f077a224134c1cf": "c0f80aa4e7c24097af74031759c2f9f2",
".git/objects/1e/421d83b902cc733959097391dd4ec780874e38": "01e10642952acf72ea5aa5a4ed2e24cb",
".git/objects/1f/5c34ea1260ff6320f93cd4d3a29f5f6ba956fa": "8ad97941260b97a0d52caf12b32d2bcb",
".git/objects/1f/bc10fcacdc07356db051c10b6c503c28aadc7b": "081b3db1ff42b8c6fa22cb1d4ee06ec9",
".git/objects/29/5c95d27a22665681c28f0b481966d227bff911": "fe1005a72fe7a98def5465b97e71a542",
".git/objects/2c/f9be0d967b8f97a1d6a242af65d1a4074cb553": "34a348ec7ad19352ad0d8dd22530e365",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/4dcb611ffbd777c9352e4a9a48dbc7acc1aabb": "8d4c0b3f347bec8b68e308be2f58bac1",
".git/objects/39/9e4a579e1fbf432ac5dc0159901e32fab7eed2": "be40ca65ffe34039ee7b4ddb9ddd14cd",
".git/objects/3a/5dced45dae124b212a614ee02c8fe59f3278fd": "f1715afb71bdcc5d89ee608f82228f1d",
".git/objects/3b/511d7e0d6a801915ece5f4536b3144aef950f4": "9bde6b67536b6303d86fb89890882a83",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/532330a8c7fa0933fc5d134be99dfca67ed5ec": "8065b4236b2c5a4d6190a4827bb24795",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4e/f2704086180274488c49d6d4ba18ceceb1849f": "130925e326b1ce325b26dd26116a194a",
".git/objects/51/37f5a4fe8e1c9aa164881a8edd450aab4bb8b9": "c71a051a9eed845d133c044db5f748ce",
".git/objects/53/1b9c080e41e90e377595fe53d19fb3767e96f7": "f97693a9660ad29cb4b6855b834a19de",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/055ad1d370ce35e6bf6f20a8d73bcee163029a": "bc30e7ae13145d6d11fca81d8d1c7b21",
".git/objects/60/2c9a471caf31760fd566daa6d5dcfc59a094ce": "856c0da4cd996bcd15a2c8421820cda5",
".git/objects/64/579e797e54c3ea2816208be9214d42823e59f7": "a5ef368a4927c64b20fe0c306afcb485",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/9dd72be44ca92250a58f34f7822518e97c4b95": "a191d2163ca681c4130b6f6f6b708847",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/d1e4a80cd25860365340c6bfd61a3ad3a1d6dd": "5a793ee3defc934b8dad0130685b4bcd",
".git/objects/75/5ba514dff117c2a223df7dff9abe39cef51805": "73e0b7e721296095dfa6248b03118e76",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/88/13301b30eb97885a777ded1691bb98abd28d5a": "a9fe1778a21dd49a2be6fce145444f65",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/98b199c959fab57b4cbb09b2999f4fd9b4497d": "81e975bc4baefa5ea7f4e943bcf5e976",
".git/objects/99/4596a13143f7b7405bf7f2288a7e8fb4f6628f": "20cafe5ac03338d7c4c293e750b0c923",
".git/objects/9b/ec3509766b6fe2c15c168f9fe887b2e0c2f41c": "6ee0455c48521a1f70810ddd72c0a6c8",
".git/objects/9c/357eefc7cc0885ecbaa7c940d6be1daf2003f8": "e7803449640dcca7cae1e5fca8bc8552",
".git/objects/9e/e002d33e31efdaa63032cc60e7f905d5c78463": "c1d12bf267e3b10d3782bf2cd01c0340",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a3/351b1593a2dc2048fd1ed63e9edd26738cdd5c": "26a7a42e9fbad7bfe3e218c9fb6e3e82",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/7a52d87e26180a786df54e4c18672c26dc3ace": "9d5cec2754059ce678df5773cd552ae7",
".git/objects/b0/c9edd044b635430687028f2883904e8710048c": "92707914b596ea9baae11e537e69d139",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/d4/9fbd0d1d07d13ab7f8a5915740883b6d9f17dd": "a175d18a78f2797fd1cb4e6ad8b90078",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/db55a721f2ffaa9b19ed28024511c1708fe12b": "076aab75e00a7b88b96b42147d0eadee",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f8/14d80423c45ec564f0e734ffa8f11394064403": "0bf48337fec3e22599e4fe1b70f53701",
".git/objects/f9/ef27040edd52f79012009d3b59c3b2b2d094bc": "f610930272cc2642632ed7a8350ddd7a",
".git/refs/heads/main": "522a32a8a1efc66253c0c96f64d8dbdb",
".git/refs/remotes/origin/main": "522a32a8a1efc66253c0c96f64d8dbdb",
"assets/AssetManifest.json": "2999f5053c4a436217913ac2e1d5e330",
"assets/assets/Oda0/bahcelievler-suit-otel-mutfak.jpg": "9d41d414c604861e7e05c79e1b155404",
"assets/assets/Oda0/istanbul-aile-suit-otel.jpg": "88720b0ddb88823a1af5d6c3060d7516",
"assets/assets/Oda0/istanbul-suite-otel-oda.jpg": "4614c956da146375976db22555d49c26",
"assets/assets/Oda1/swimup.jpg": "b893c240215eee235e362ba93fc8e8d2",
"assets/assets/Oda1/swimup2.jpg": "421423198356890fdc0a6e0e5934db56",
"assets/assets/Oda1/swimup3.jpg": "e43da9603a1eaa7d924acbd43cce550f",
"assets/assets/Oda2/teras.jpg": "2366fc2963c4a8ff929b8a6aa3995e7b",
"assets/assets/Oda2/teras2.jpg": "d8938464b673c90dca803d4cfea4afe2",
"assets/assets/Oda2/teras3.jpg": "8d901878610396c496745993d97dc68a",
"assets/assets/Oda3/ikili.jpg": "74fe81b99164a550685aecc419e34abb",
"assets/assets/Oda3/ikili2.jpg": "f3886719a38e5556f8cfb99ac9c59253",
"assets/assets/Oda3/ikili3.jpg": "bc7ed14135fd614fa4ae06373f709fb2",
"assets/assets/Oda4/sapore.jpeg": "cadee8585c9c0b65fb9bf98725a671a3",
"assets/assets/Oda4/sapore2.jpeg": "6da8ddd0a911f520c5a3f70b09370afd",
"assets/assets/Oda4/sapore3.jpeg": "c26e0ffb06e4fb39f35837e974760040",
"assets/assets/Oda5/helena.jpg": "1ae6adb3be137f8982ab66900c242d95",
"assets/assets/Oda5/helena2.jpg": "4686895a7997657b7c1fa2ad63cba122",
"assets/assets/Oda5/helena3.jpg": "3a96a7501bb790f81a59133a501285c4",
"assets/assets/otel.jpg": "a2fb561562c040adbc93f6370be4469a",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "7ab63ac01d44ec1efd9fe826434ec775",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "854da34d4abfe5365228f42be5e55a8e",
"/": "854da34d4abfe5365228f42be5e55a8e",
"main.dart.js": "023021bc492fdea15593077fb15a6e5f",
"manifest.json": "f139c1cc92b708c186339048a42d7adf",
"version.json": "92e3f4f89e1d2597ef4ae299b1039f93"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
