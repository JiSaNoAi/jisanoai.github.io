'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "5e462eedd00e136fe2dc63664587bf39",
"version.json": "4085480314bb3526fad9fec99d7a6014",
"index.html": "e3a6cb049c760afc6813d3b0c43af5be",
"/": "e3a6cb049c760afc6813d3b0c43af5be",
"CNAME": "ef9540383d82ecae2eccfcd79ea7b601",
"main.dart.js": "872c6ec5ed99e1dd7b0bd22eb940fa94",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "d79f5582b5d3820fb9476279f286c690",
".git/config": "4c7c9269a5da6fea7f0c10bc90df524f",
".git/objects/3e/f0a8a94dd1ef1a78ae2a169651948b95401cf0": "5cc31ef02f079d08fa7b3c740bb8c73a",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/6f/dfe358defa54066f5c2126d3729110ae3ccad1": "c8f452f5ed5b948f1eb725d767876e4c",
".git/objects/9b/b10ca1115c887e2ac19b6eb08395e8fb0fa6da": "bc7f02d578ebc9c17649155eaa8e4373",
".git/objects/6a/b88d4b7748d9799084b6ee2c619b7a42510038": "ea1536bd8ffa5ebe8e7b33758fc6e6c9",
".git/objects/32/e09c6ca354cb8328fe35e2bc46049e0036aaee": "22d14f0e7c714a114e483f7452e47db1",
".git/objects/69/9346368b7c6a9f90bdb1a8c780d19de5c92c4d": "974f4da6c314c0feead972c6dca95bed",
".git/objects/56/79f8b5cfc148157389370a6624369c9d6dc0ea": "daa16485f353de2e6902c95aa0792a03",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/34/d3a3d884b6faf5518b99222db866e40493303e": "b424ffc52de6f51d9a605e08547f919d",
".git/objects/05/5a157e70c1d88e3487b47804b63c01a32bca5a": "302530c86d01f5372870b669b44c34d0",
".git/objects/9d/bbecb20f30f4e2807d7fe4e16cffb515a05eb3": "4ce259167a194463295eab4f7316faeb",
".git/objects/d9/d10bc57bd208571b2ad07da1a7678e7565c139": "24f982ef66190367e527b6d5044ede7d",
".git/objects/ac/b734facde6e8f8ebadc1536a4413b6fd9eb811": "b7af56cc67c821a4733394c6b625fb9a",
".git/objects/b3/a4782b909a81c927aca36d05d993a02023885f": "7155a8805545505f624a138c838e51e6",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/a5/abcafe0c8aade398436f3d81c8752829d24a5d": "b758924314df1235c880c1da2f4a1c89",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d1/1c014129e6585337ab33723e475e8936690d74": "9cf3ceaaf33bc4023587212bd56e36aa",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/e2/16d55f31638171998deab8f49262d06258b90b": "caa58143af8c427f388f1394e42b933d",
".git/objects/f3/bb3de0020125c15055ddfde748b14cdaa98346": "7d1f49b7c20957973a031d89ddd7f1aa",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/ca/8482c88c44dcfdf9ead9d3726df9574ac9775c": "81cbf504c8b90bc81a07b514349a4ac5",
".git/objects/c6/5029e464039e7a07c09eef8bf94f2712bfc0aa": "c398125782bcb5335334fd793c1dafcb",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/27/c24a898b6757cdd41d20efa53676578f7b8a83": "189a793dd29b65e79dc487f6a06f6088",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/pack/pack-fed7e9f124710c584e9bb22ab47f7067995255ff.idx": "f2028e6aeca6b5069cec686174ef1e25",
".git/objects/pack/pack-fed7e9f124710c584e9bb22ab47f7067995255ff.rev": "fe0bada61d3623fc7e32484279518c7f",
".git/objects/pack/pack-fed7e9f124710c584e9bb22ab47f7067995255ff.pack": "e079cc56184272191162cdda0acf3a49",
".git/objects/11/ab8425d842121c13dd83e33d84a8b84ded6607": "ea0ed842d5827d4bd3e4e87b586960b4",
".git/objects/7c/09d499f23e8c9cfadbd067e09e62b423cd8b4a": "4f5d6ea007527788d254cd3ceeb9b8a8",
".git/objects/7c/c0fa2315ddca98557032f9d539c7118769f956": "ec54ab5341c16c8b8d3fa6dfe53a360f",
".git/objects/7c/1b3c14fa0b724c4a5d08f18f93adb504f52a0a": "b08dc446c003b06c34c59b3302a74166",
".git/objects/16/610fa731875e35e6a73ed4fdd895fb8b92445f": "6edc16c1861afd82a0b903735334ca70",
".git/objects/42/1201a4cdd6fa6d51b67bec2e2e9facf05308ed": "0f0a0ef609950e37b64f2aa307a59130",
".git/objects/42/f007c799250890c02f6c06dd41e6aab2c7fce1": "3b2529e553c0cf76fdeb2f3011e0e23d",
".git/objects/42/8d98c8aab7617c4dad9f16b2525eb64856277f": "67384a2efc7882e620822fce852d6e51",
".git/objects/42/d4191c4c60feed922c8dd8292050c78f2e9bf6": "eefaa3a002b2b36399ce94595c0c0162",
".git/objects/89/3745b1f5c8ecba3dbebfa515fb79747aa3ae1b": "89170bcc22d3f921461c3d648f6fa8fe",
".git/objects/45/997ad0bac4fa9b3f81f4b6fc93e26d271fdb65": "5210102ac7041fa4e0bfe9f156eefaf7",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/1f/032373b02c80a34670f80588527e0329827628": "b157f4fd6e66c2dfc582a68c7eb078ef",
".git/objects/73/b5411122528596f6fe711d4cc193885ff935a1": "6e0b92d2c37049fb6700b0932894d818",
".git/objects/7b/a820b04d2f3da28a068995f607350d28a9f1d0": "27e952f7f6ddea3892a91f70e6122c34",
".git/objects/8f/d44d1adafc6884bfa0afab1ef3c99e59e50a11": "654e34f4717a2824d9c94e6ab21527ab",
".git/objects/8a/84e59f36e8e6bb894ab295f64c71ddd96578fb": "e140ca4a4a599dccfdeb926b43255e73",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/7e/b01ae3eefe6cc5866363a54a5abcbdc5bf1a5b": "045b6350e205b699a929e9b898bf820d",
".git/objects/4d/3cc090d112f4b3689d03575822e200e1c96afa": "ffeae9a200df31b23f57d3a8b5f35481",
".git/objects/81/3ffb75837b3329ff5c2298a12c5810c2db270a": "7c468919ba2b557de73498841069f501",
".git/objects/86/7b194ffcce673a5aa6fe091aaf09305c9048dd": "60551a8de157f016ea8b7f543e247741",
".git/objects/72/6154816ae2fce188899e19d7604a5916e4ecdd": "79db39d23b61cd2b0a6f28d7e1a0f76e",
".git/objects/72/2139c72005c4eef57e8ae67dbf12b0af990382": "841f548b070a57597d5a75704a0c2ce8",
".git/objects/2a/b386fcacb1691bff9f4043831442999684e2bb": "f8360a9e79ed2e50d8aff8b653e5e399",
".git/objects/43/f6f55973dafa3e4ff44bfb06e0c0212a6b0ad5": "6aae521acac822fdb0272da01b553c37",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/6b/9ff22cda44a04ba45eb863826e739ee81f84d3": "7106451462b57bca203b811f8ce4d52e",
".git/objects/38/8d4f604c74d0f9803836f186dd05835afc85a1": "d4423482b40a5f44b55d1acc705ebe4e",
".git/objects/00/e31cc8a2d604b989cf95288c3b2a10bc43d345": "adfd24340621d703915d6148d4a85495",
".git/objects/6e/02cbc88388c9caf57fd291cbb222c2c4cb91ec": "511c37dea4902970b9a3e0d7e4b76a29",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/09/54e4af434044d2b6be68f00eb4ddcc0bb64047": "23aef192467ccffd348e26a63623e3c6",
".git/objects/3f/79770fff19ae4a88cdf77b2d9507dcd1a31103": "1cdcba8d7b9e439e3a86c9feef7ee9ce",
".git/objects/3f/76768faa1929669e75cc3bd45ed883320bbd3b": "8ba07f776943d63a64e9f22d6190b8e0",
".git/objects/5e/6ab231d9aa663e9ef0ba0513b2802e90dccf36": "664c260b560d0a8cdd5b9bdfe71e55fa",
".git/objects/5b/6f91d3316892102714d0634ae6a42bedd0bbb1": "24679c91711822120a634e81a0243030",
".git/objects/37/e74592b7dafb8ff818f640b434bcccf6d9cb03": "18f9fd6bef505b4ee865b98f255b01ad",
".git/objects/08/c9058685666bf980bd2dcebf4c64cc32213549": "e06ed221f08e9de6fef03c50e62ae6aa",
".git/objects/6d/88c20bd2e2c91eb5c77270ff7ec8b48ee79bc7": "ea56d2c9aa93ea21f7f89d816cb77d03",
".git/objects/6d/9126b93db23e95e8033a365125de36f12690ef": "d76f4c9d6c0b238fd5a43d4aacd4d8a8",
".git/objects/06/3debb712102496d6e14d52fbd0c4c045fca51a": "41dfcbe420c141cab8281c840f1701ef",
".git/objects/0f/fe525f1d35c1aa3e22914d4cfc41a57f74134e": "4e078837835191239b2563fbd701d9c3",
".git/objects/64/5332fb7321f683d6dfd9b1b9b83d905750bbfe": "0b9a70fb89394140b589d53ff176559d",
".git/objects/90/813a39cffb96cd22041643e598c9259a985d36": "1d8b873117a11c997aee2f7a9587132d",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/d54a905baac31f612530e654220a158dc21655": "c63741bcd92d38fac1254a31528d5283",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/2cc978799493895633906a3a35d20cea814cfe": "6fa7e01816dad903cc9aabec238e9677",
".git/objects/dd/721941f58b23d5e46317272cf3f67afdefb638": "b3520c77180cc7c25fb068bd833fdb6e",
".git/objects/d2/5bb1b8fd510e4b9f3d2fd5d39ec6d74e73fd82": "237ed9ad4ddd77ac577cf6bae62ab08f",
".git/objects/b7/606982e479666fed0e10dc1c56b3359294d048": "9a76bf8ec6649e3a6bf22a114ea255b6",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/a8/1c30a166a3b8e646997940b58223334d4d3707": "404654ef965a6cfa5f117f86d0660b1f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/a1/901f9a4d7e7fb7645d1bce208b126e6787d647": "ba37c87de1733489c1e139cab3d8bfde",
".git/objects/e6/ded0c9cc036be04fe8e1267daf5361c5472431": "96489cc225b8d1b482058255ec0a903d",
".git/objects/ff/6bf9b5aea06dcfb829a867ea5addd67ec18281": "95385e58595d44939fdbe3fa9ff31c9c",
".git/objects/ff/5ae17d5dfb54f739c5350b359dd20367479c88": "6c2c402795c2483b64984a503d027eb5",
".git/objects/c5/24d43ef51965f4cd2c002ae3205bc9662daa12": "e6e15ea193e9f2429da22bb2df1d577d",
".git/objects/c5/cbe61b40e8bac85e49c5036f24e716e3889dc3": "85429c65290a22adab62347791d02ca9",
".git/objects/ce/1cb2ceeb0d41d5d1cebc1b8d6369f109c3ab73": "31422a921b8eff4769461d0abffa8f75",
".git/objects/2c/dde17d3bd011c18cf4cbccf8dee90db04a9664": "94a74415b685c7de70481065f4608411",
".git/objects/79/359c460b13e94945a8700227dabdc790091c0e": "73405ba2e8edc9aa7ab0b89388371a1d",
".git/objects/41/dabb3fc0fa98c3746535a6655a813106987d3c": "f5ebd891e8ee29cd9e43ac3d1fcd8fb1",
".git/objects/83/a9e8435fe804edb04a6b82be0e135fc6110123": "3331e362b58c6d424cba5514f7f2b3f6",
".git/objects/70/a1cc9a9f39c20ff046f634ee0f158816a6d8d7": "b4b92cb22b2bac31c5f5424d2eb99e9c",
".git/objects/1e/144074c51f7348c849167a3084b7c874d2034f": "45ca76526e95c7ee39e7cf926be77d45",
".git/objects/84/7b94a9620c9b2657ec53f71a9fc3b8b2c23b6b": "314246ab5b91bdbe76bed7cdf0d5b595",
".git/objects/24/1d26e502b0a099a9738f66d7c1b590d555091d": "d815b3be98ebcbf314cd7e25302e49af",
".git/objects/12/e4a61ab134614339a69dc8fa4092e9754e534f": "39b4e2ae632249b3475e933a62931127",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/1aabd67dfa7a4e3cbb62d05ba835932ba24844": "78c2f5055c2d577930a730ebabfc5744",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/49f49e5ce605403ea6d1d65ea4a6ac3c23dc55": "c974255c85a06d17ee19e5e96cfcc5c5",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/40/f142625cbe370b5defcce5e20e3a77bc4d3f48": "42983802c3a8bdc65e6f94a8d9a52898",
".git/objects/78/27020f2b8a7683dc7ac4f5cdc98d8e99814518": "d9a5d8fe094a17ebea98ef8725a188ee",
".git/objects/8b/04303b0d8d72fd1bd549b091b489f3c2f6b19b": "cc38690f5341049742cb877f651efe06",
".git/objects/14/e8f017a4ade4b1a6d74a358f939a850578b6a2": "a553ac907452a6ecfa22656dfab1a4db",
".git/objects/22/4cf40bfcec5b9dbf4862f1183bf0048b703316": "885fd96cdfc4137e784c90b965dfc6ac",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "5ab7a4355e4c959b0c5c008f202f51ec",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "6247f5d4b552e225f97ddf301369ad16",
".git/logs/refs/heads/gh-pages": "85c549b4f4e6cf38c09533dba75c5a1f",
".git/logs/refs/remotes/origin/gh-pages": "1171873d8673abeb03bd02bbc9edd1ab",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/gh-pages": "c56d76f319a2bbc83d36d19a284f008e",
".git/refs/remotes/origin/gh-pages": "c56d76f319a2bbc83d36d19a284f008e",
".git/index": "7e56402c47d826feff0428154ea60dfa",
".git/COMMIT_EDITMSG": "4bb0f72c222b789950a703619b89960c",
".git/FETCH_HEAD": "0ce3f94c86a73e91701d2b1665480752",
"assets/images/home_app_img.png": "5e9286b6ff6964d5faa5e3311784fa00",
"assets/AssetManifest.json": "2a83b82145b291255b493bed4a832b63",
"assets/NOTICES": "a771d895d996b535e0431c0072c7a665",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "34e0b505c1b4cd8222ae33859f02ff37",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "19d13b6197af8080b4595bae3a302be4",
"assets/fonts/MaterialIcons-Regular.otf": "0db35ae7a415370b89e807027510caf0",
"assets/fonts/NotoSansArabic-Regular.ttf": "75527903c6a793772b02807c5343f4c8",
"assets/assets/images/home_app_img.png": "5e9286b6ff6964d5faa5e3311784fa00",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
