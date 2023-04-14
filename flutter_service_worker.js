'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c55da179f2bf8da8e92e5aa4d8d8e5d0",
".git/config": "533ddf1c468be739f190c47db334b7b6",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "106895fd863715c71892a4a22e85b891",
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
".git/index": "236518f186313efcede658571ed2be2b",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bbe4861d8824fdf288379d3fe4b7b94e",
".git/logs/refs/heads/main": "7347fa9d6d1924cc8190f62387fe2ee4",
".git/logs/refs/remotes/origin/main": "99726faa4d39c39b6dfe3fda46e20b00",
".git/objects/05/d1e04be22c67b1c710731695b8e06e16f18dbb": "71e530390a11735a41fca24265c4ce1c",
".git/objects/09/9423d6a9a40ed21ceaa9d966bd08552b9a40f3": "b1a321722ef09436c2c8a788b3b6b852",
".git/objects/0e/bfd12edbdfe5edd482855795cb5495f997f343": "693350bc41225af249a6322cffb50ed8",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/7c6cd15e9086917fb4ff3836e6b5001aefe274": "e78f6d9cbbc56a49eaa1f9e65c7cc20f",
".git/objects/17/26ae75d6c56c649bc1d48dd4405160154c6d74": "102eb71b4eb93a0c056158bce2cf0474",
".git/objects/17/e41c2a0e363c721e31867b2f077a224134c1cf": "c0f80aa4e7c24097af74031759c2f9f2",
".git/objects/1e/421d83b902cc733959097391dd4ec780874e38": "01e10642952acf72ea5aa5a4ed2e24cb",
".git/objects/1f/5c34ea1260ff6320f93cd4d3a29f5f6ba956fa": "8ad97941260b97a0d52caf12b32d2bcb",
".git/objects/1f/bc10fcacdc07356db051c10b6c503c28aadc7b": "081b3db1ff42b8c6fa22cb1d4ee06ec9",
".git/objects/20/0a91d3bd312b51f898342f71d34a237962f44b": "7a4d8563b6456aa3ec5b1b6dc5ff5844",
".git/objects/25/15c30dc25646b8020c897723216d4b9f03a21d": "9aae6f91da57eb46c3a9af8028246d43",
".git/objects/25/51538774c58674a4c05a7d604e2a3a2fa516c3": "5898af772513d207a8e510655d4394a7",
".git/objects/29/5c95d27a22665681c28f0b481966d227bff911": "fe1005a72fe7a98def5465b97e71a542",
".git/objects/2c/f6d38e1a3f8114d42fb0d55740b340a1f04c74": "54db839fb526403215b7fce608a2f374",
".git/objects/2c/f9be0d967b8f97a1d6a242af65d1a4074cb553": "34a348ec7ad19352ad0d8dd22530e365",
".git/objects/2d/0705f08858f1c15b9d6f69302bff0c15e552d2": "3c9337d7ed34efdda6b70b074b47fc6f",
".git/objects/31/93f1740d8baf23b9d9a88eee3553eefab23a26": "59711a25110f9d8e6f45327c37ba6d91",
".git/objects/36/4804bac14f226adef5667111ff00115271e9ff": "cba134b636132b41e3c420051bff5b30",
".git/objects/36/eb5dc2088f6f52e3cc72283f12fed4d6a0e72b": "36eaf73d1b932d9959acce2968c934d2",
".git/objects/37/51d263c4ccdb2c6af0baeaba072bf2d340d329": "1637b9727d66f426b3d3cbdd8a2826c1",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/34ec53a408dce6229611f3e1f34a8f2cdb02fa": "2261fc8c36114ad30b8556e3956d3f88",
".git/objects/39/4dcb611ffbd777c9352e4a9a48dbc7acc1aabb": "8d4c0b3f347bec8b68e308be2f58bac1",
".git/objects/39/9e4a579e1fbf432ac5dc0159901e32fab7eed2": "be40ca65ffe34039ee7b4ddb9ddd14cd",
".git/objects/3a/5dced45dae124b212a614ee02c8fe59f3278fd": "f1715afb71bdcc5d89ee608f82228f1d",
".git/objects/3b/511d7e0d6a801915ece5f4536b3144aef950f4": "9bde6b67536b6303d86fb89890882a83",
".git/objects/3c/5eb6e61c76c7b42075531726adbe1b79fcb23f": "515f5bb8ffdfcf93da529344ee86dc40",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/45/532330a8c7fa0933fc5d134be99dfca67ed5ec": "8065b4236b2c5a4d6190a4827bb24795",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/758a51b9e4e3fe9ca356ec2d132a24c140c549": "23e9e8a9dd15965a34bedf6402d385de",
".git/objects/47/ca3ed242ffa3d03c05069e6d2c9d0900bff4a5": "ca826f73c7d49e43a9955faca1962e3c",
".git/objects/4b/4b1bdeced277a64177ae44ea8a13e11ad1961b": "a6651a4f7d4ec1be3aabb93d41c5c2ab",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/9d193a71d36722c46f1c5f77e1e18eef2cff73": "618fcd1bdf3ce526f22f4a624cabb756",
".git/objects/4e/061057dddd53be1acedea7b0a56c09fc03fba8": "3688e6d8f5693878d9e92bdc6a3e995d",
".git/objects/4e/f2704086180274488c49d6d4ba18ceceb1849f": "130925e326b1ce325b26dd26116a194a",
".git/objects/51/37f5a4fe8e1c9aa164881a8edd450aab4bb8b9": "c71a051a9eed845d133c044db5f748ce",
".git/objects/53/1b9c080e41e90e377595fe53d19fb3767e96f7": "f97693a9660ad29cb4b6855b834a19de",
".git/objects/54/5801d1e8afcda98aae1afb3aff0b3954feebb8": "5a2abb1384aaa37408478445aca4a757",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/56/055ad1d370ce35e6bf6f20a8d73bcee163029a": "bc30e7ae13145d6d11fca81d8d1c7b21",
".git/objects/5a/0b8679a8e497dc01011be7dd83d36c532079b9": "92c4b315c8859a1a6a90b1a30f9a0f65",
".git/objects/5e/80b86da23ef5ca8fde335ed6a440061e9a4b2b": "71087f8b51c93debc4999f534cd376c9",
".git/objects/5f/8042ee277e264943f4e56c88cd3ed35aa12478": "6bb127f5ce622cf073f783c120bfc1cf",
".git/objects/5f/e42fe916e0264b86845898d1b8e0d30710aa82": "ecc7e8e587e6256c912dbdddd63948a7",
".git/objects/60/2c9a471caf31760fd566daa6d5dcfc59a094ce": "856c0da4cd996bcd15a2c8421820cda5",
".git/objects/62/be4875fecc2107ca5e5982a2ec572c19817246": "2fb43f82e27ba8cfb8260f52e61c6e82",
".git/objects/63/f79623aa563539b3c1340895c9b943086b4cba": "22e406655d40dfd1bdb1d3719ae363e8",
".git/objects/64/579e797e54c3ea2816208be9214d42823e59f7": "a5ef368a4927c64b20fe0c306afcb485",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/9dd72be44ca92250a58f34f7822518e97c4b95": "a191d2163ca681c4130b6f6f6b708847",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/73/d1e4a80cd25860365340c6bfd61a3ad3a1d6dd": "5a793ee3defc934b8dad0130685b4bcd",
".git/objects/75/5ba514dff117c2a223df7dff9abe39cef51805": "73e0b7e721296095dfa6248b03118e76",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7d/99f8db8e8b34e9ac70ed3e9ffbfccded7fc88f": "ed4b69e839c8c72aa08742a6b053ad51",
".git/objects/7d/e93df172f475e3616235b1cd53da10c5c9bffd": "b7d8dadad422f5d227f365c24b80ae8a",
".git/objects/7f/410d131deebbe0a163e2ecc4b8845724cd6c39": "a92743e92136c9fc1c5e7a8d6bdde596",
".git/objects/84/a1dd5f946856da39fc6b0b8575f60e46ea54e1": "e7664538d40f39850976ebda658dc1b8",
".git/objects/85/7dfbd59f5d88e795da8bebaa91e129e64529c5": "c8ac437a66f27de8e2f4047e04c65124",
".git/objects/88/13301b30eb97885a777ded1691bb98abd28d5a": "a9fe1778a21dd49a2be6fce145444f65",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/8d/98b199c959fab57b4cbb09b2999f4fd9b4497d": "81e975bc4baefa5ea7f4e943bcf5e976",
".git/objects/8f/e3927e26fed6b4525437f0d11679dddb783a0a": "71dc2ac1625a2fd838ddd689db00a24a",
".git/objects/93/a51e201d6a57dd5f13f988e700727e0f48ce84": "5c4d446c01aa9d5ad26280ac29caf02b",
".git/objects/95/1bf843a09f6cecb3ec5c69d44854e994569c54": "6da73c8e166afa959e47bb97d93b805b",
".git/objects/99/4596a13143f7b7405bf7f2288a7e8fb4f6628f": "20cafe5ac03338d7c4c293e750b0c923",
".git/objects/9a/62cf51b57edcc1d6fb1199e7b9fe56c06a7343": "ba028f21c2bdb4d1bdaed2fcba0c4c24",
".git/objects/9b/b621627c9ad0414e7f37dd60231549487a5b3c": "b335ff5707978b4f99ef86490a4d44d7",
".git/objects/9b/ec3509766b6fe2c15c168f9fe887b2e0c2f41c": "6ee0455c48521a1f70810ddd72c0a6c8",
".git/objects/9c/357eefc7cc0885ecbaa7c940d6be1daf2003f8": "e7803449640dcca7cae1e5fca8bc8552",
".git/objects/9d/1853f888dbea2b75b8fb7d46baa415491e8109": "4e5e06b5d06ba9475a5ecb9d92cced97",
".git/objects/9e/3852d721be309ed7385c2ab3a4ea88d82661fe": "007cb4fbbcdaa30113951d7481e335b2",
".git/objects/9e/e002d33e31efdaa63032cc60e7f905d5c78463": "c1d12bf267e3b10d3782bf2cd01c0340",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/93afdfd9f046b3fae181a7ba1a09a40403db44": "fdcbba841ac4803f3f62b3dc3410ecdf",
".git/objects/a3/351b1593a2dc2048fd1ed63e9edd26738cdd5c": "26a7a42e9fbad7bfe3e218c9fb6e3e82",
".git/objects/aa/395c16358b5631b2e24ef3b50fae714c8a14ec": "6ee89cb0611a6a5d50cf077125c167cd",
".git/objects/aa/7bce5107eda63893c7db24336e541b9f39efb0": "baf0270bb074d241d869ce32197a8d0c",
".git/objects/aa/f9775aa89c03137dbf48721cdc05191703de5e": "25802b31f0bee36b4e1a7a67835f99f0",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915aa276eabf0314dce9c03572d3f0db483315": "c3d5839347f53182e79a30ba17ccc4e4",
".git/objects/ac/8b20c634ef44dfb473e978b5438ec28960e5c9": "9504e916c1250ea0341d1a07f7bd164a",
".git/objects/ad/7a52d87e26180a786df54e4c18672c26dc3ace": "9d5cec2754059ce678df5773cd552ae7",
".git/objects/b0/c9edd044b635430687028f2883904e8710048c": "92707914b596ea9baae11e537e69d139",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/fb55bef1d8813989f90d5a0da219ea01d1ca41": "36e9b0835325c9dd46c70beb6b031a36",
".git/objects/bd/674005b9f95377dea2ba89d30f9dc7b1416b5d": "8a5efde1e2f5d42f445f1acb2668440c",
".git/objects/c2/89f2acfe9fef62d84ed03a7f210e4eaf673336": "1e939a63da1ebcee0e619fc4d4a72d11",
".git/objects/c3/9dbf89f44c164319b4ed15fc1bcfb4f15147dc": "7e49214e6da4cf73c7feb376319ea959",
".git/objects/c4/a39017ccdef5af57cf9dfac564694b4c203038": "931fe726dc65643596c82664eb160d3d",
".git/objects/c8/097393120172d967dbcc53791e8112ca6ada51": "ba81c69ea35d9dd351b684b0464c0655",
".git/objects/c9/0e2c2e314922af7c5764faebc1b93080f70c76": "0536cfdb45fe2f45a5eaeb4707cd908a",
".git/objects/ca/26d7fde70b985d4da59a19d3b7c3040ca4d8c3": "ecd5dc2577ffcca233196b9cd1acb897",
".git/objects/ca/517099803f95d51e7cdfc65000c593d773c389": "2239a9dd5aa5ad69f2ed0a8e630ba53e",
".git/objects/ce/e01529c58357e65162681f51481028d18e03be": "04cb3e430a31177a19776393e0bdd3b2",
".git/objects/d2/31520bb5c64868e15b6c1e3aa0082d81ce5c6f": "cdabe8fe6e4ff9e252f5bee415b7bfc6",
".git/objects/d4/9fbd0d1d07d13ab7f8a5915740883b6d9f17dd": "a175d18a78f2797fd1cb4e6ad8b90078",
".git/objects/d6/33320ed4984a810c76310e8a904e7e70d703d7": "1a766ef3e892e0ec1165184fd5145601",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e0/27ee5a2941ab26809cb37a01ab522377f6e33d": "6669d6b2eeddded168d56d057cabcad5",
".git/objects/e4/da2644bac4ff3a641a7e3bf5f2b0396d53ebfe": "eb81261c012b9fa9b066ef2e22694513",
".git/objects/e5/4d7cbc535ebf8457e7b2419636b288fc7fbc5d": "b24a2acf3f8a8dd084214c36650dd2b3",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/db55a721f2ffaa9b19ed28024511c1708fe12b": "076aab75e00a7b88b96b42147d0eadee",
".git/objects/eb/05ff075563c241720331557667afff16424c15": "f1ead350939040c5153fcd610c102f5d",
".git/objects/eb/065196409f29188e9ece8a2e5d5cb57f182433": "0668d5107bb5067fe628b0b1a2be9d41",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/d28d6fcb84ddc0ea4f3c6707591a61851b9941": "cf586e2d84b2b8eccfbee06dc3444ab9",
".git/objects/ec/713c5edbd0084f75de4f9f9541f7c9bf491219": "5bc15750ed333f65fd2420d83e52913a",
".git/objects/ed/4b76e0edf9d4a48ea2fc19e45356a7c4601bf2": "9276eca61d19025e716d7d9b37ef0ba3",
".git/objects/f6/644b73d50a13f3e8061c911abba04df822e34f": "2ad36becdef441f0c41441e9952bb742",
".git/objects/f8/00403b8b3f2a7382c72afccd7d09b72c5802e3": "b8bc84fe46427a000395ac97921456b3",
".git/objects/f8/14d80423c45ec564f0e734ffa8f11394064403": "0bf48337fec3e22599e4fe1b70f53701",
".git/objects/f9/ef27040edd52f79012009d3b59c3b2b2d094bc": "f610930272cc2642632ed7a8350ddd7a",
".git/ORIG_HEAD": "19108b400c9baae1aaadcb341311cdd4",
".git/refs/heads/main": "d930c2eb89e0552eb5957644775fba20",
".git/refs/remotes/origin/main": "d930c2eb89e0552eb5957644775fba20",
"assets/AssetManifest.json": "ecbd1f472bc16f1598b573f74819c417",
"assets/assets/images/BackGround/otelBack.jpg": "42298bdc8dadb2c55da29f4eaad393b9",
"assets/assets/images/BackGround/otelBack2.jpg": "f24cf73a428e40164078e1a014969e83",
"assets/assets/images/BackGround/otelBack3.jpg": "a2fb561562c040adbc93f6370be4469a",
"assets/assets/images/BackGround/otelBack4.jpg": "7a581607af1afdf7f51d4bedf1e89806",
"assets/assets/images/kargo-banner.jpg": "9df64158e2eae091dc3bc8b47c1c0d84",
"assets/assets/images/Oda0/superiot.jpg": "4614c956da146375976db22555d49c26",
"assets/assets/images/Oda0/superiot2.jpg": "9d41d414c604861e7e05c79e1b155404",
"assets/assets/images/Oda0/superiot3.jpg": "88720b0ddb88823a1af5d6c3060d7516",
"assets/assets/images/Oda1/swimup.jpg": "b893c240215eee235e362ba93fc8e8d2",
"assets/assets/images/Oda1/swimup2.jpg": "421423198356890fdc0a6e0e5934db56",
"assets/assets/images/Oda1/swimup3.jpg": "e43da9603a1eaa7d924acbd43cce550f",
"assets/assets/images/Oda2/teras.jpg": "2366fc2963c4a8ff929b8a6aa3995e7b",
"assets/assets/images/Oda2/teras2.jpg": "d8938464b673c90dca803d4cfea4afe2",
"assets/assets/images/Oda2/teras3.jpg": "8d901878610396c496745993d97dc68a",
"assets/assets/images/Oda3/ikili.jpg": "74fe81b99164a550685aecc419e34abb",
"assets/assets/images/Oda3/ikili2.jpg": "f3886719a38e5556f8cfb99ac9c59253",
"assets/assets/images/Oda3/ikili3.jpg": "bc7ed14135fd614fa4ae06373f709fb2",
"assets/assets/images/Oda4/sapore.jpeg": "cadee8585c9c0b65fb9bf98725a671a3",
"assets/assets/images/Oda4/sapore2.jpeg": "6da8ddd0a911f520c5a3f70b09370afd",
"assets/assets/images/Oda4/sapore3.jpeg": "c26e0ffb06e4fb39f35837e974760040",
"assets/assets/images/Oda5/helena.jpg": "1ae6adb3be137f8982ab66900c242d95",
"assets/assets/images/Oda5/helena2.jpg": "4686895a7997657b7c1fa2ad63cba122",
"assets/assets/images/Oda5/helena3.jpg": "3a96a7501bb790f81a59133a501285c4",
"assets/assets/images/Oda6/pool.jpg": "0558d146f37006f4173fbdd0045d0619",
"assets/assets/images/Oda6/pool2.jpg": "f1f422a22dc01eb7111f3e95f053e75c",
"assets/assets/images/Oda6/pool3.jpg": "20f521c08657826abb60ac5c052b8a1a",
"assets/assets/images/otelpng.png": "bf971de5705bb9bde63d0def0e25e62e",
"assets/assets/images/otelpng2.png": "798ca0aa41eb953e16a2ab3e7b28f073",
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
"index.html": "a019514af235a83b07f45803bc35b9ff",
"/": "a019514af235a83b07f45803bc35b9ff",
"main.dart.js": "0ea481848223075ebab8e66a038e4f4c",
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
