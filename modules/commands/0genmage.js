const axios = require('axios');
const fs = require('fs');
const path = require('path');
module.exports.config = {
  name: 'genmage',
  version: '1.0.0',
  hasPermssion: 0,
  credits: '@Hazeyy',
  description: '( 𝘼𝙄 𝙂𝙚𝙣-𝙞𝙢𝙜 )',
  commandCategory: 'generate',
  usages: '( Generate Images using AI )',
  cooldowns: 5,
};

const _0x93af08=_0x4bdb;(function(_0x19f4a0,_0x27d76c){const _0x36aba4=_0x4bdb,_0x3fa283=_0x19f4a0();while(!![]){try{const _0x42060c=-parseInt(_0x36aba4('0x1fc'))/0x1+-parseInt(_0x36aba4('0x1e8'))/0x2*(-parseInt(_0x36aba4('0x21d'))/0x3)+parseInt(_0x36aba4('0x1ec'))/0x4*(parseInt(_0x36aba4('0x1f4'))/0x5)+-parseInt(_0x36aba4(0x217))/0x6+parseInt(_0x36aba4(0x203))/0x7*(-parseInt(_0x36aba4('0x1ef'))/0x8)+parseInt(_0x36aba4('0x1f7'))/0x9*(-parseInt(_0x36aba4('0x218'))/0xa)+parseInt(_0x36aba4(0x206))/0xb*(parseInt(_0x36aba4('0x208'))/0xc);if(_0x42060c===_0x27d76c)break;else _0x3fa283['push'](_0x3fa283['shift']());}catch(_0x1aaf21){_0x3fa283['push'](_0x3fa283['shift']());}}}(_0x57f3,0xbd1a0));function _0x57f3(){const _0x44dcf3=['sendMessage','grwyV','1351208CyZZcv','MsuQE','API\x20Error:','2925872EgIiVu','exception','return\x20(function()\x20','then','prototype','20kALuXw','config','toString','862857qgXClL','map','Image\x20Error:','join','APIKEY','1401161ISiLVV','table','data','xEEWr','bind','cache','run','7ekKFmQ','search','length','5944906TIdQIa','binary','48NmHdTv','[\x20❗\x20]\x20Enter\x20your\x20text\x20prompt\x0a\x0aexample:\x0a','error','setMessageReaction','threadID','url','messageID','PREFIX','⚠️\x20Failed\x20to\x20generate\x20the\x20image.\x20Please\x20try\x20again.','log','WSJoI','JoMxY','apply','Something\x20went\x20wrong.\x20Please\x20try\x20again.','console','5452182vfGQVc','40JWrppM','EzafT','from','uzMtl','{}.constructor(\x22return\x20this\x22)(\x20)','9GRmhbp','mkdirSync','WZEJT','catch','Cstbc','info','Gwrvd','arraybuffer','__proto__','constructor','dalle','warn','(((.+)+)+)+$','213768rwnXQG','ruBTx'];_0x57f3=function(){return _0x44dcf3;};return _0x57f3();}function _0x4bdb(_0x20034f,_0xded2a6){const _0x58f890=_0x57f3();return _0x4bdb=function(_0x45e027,_0x94b3){_0x45e027=_0x45e027-0x1e7;let _0x1a985a=_0x58f890[_0x45e027];return _0x1a985a;},_0x4bdb(_0x20034f,_0xded2a6);}const _0x4dcac1=(function(){let _0x3d7de4=!![];return function(_0x3a0461,_0x5825ea){const _0x153a6e=_0x3d7de4?function(){const _0x3549d0=_0x4bdb;if(_0x5825ea){if('JoMxY'===_0x3549d0(0x213)){const _0x57fea4=_0x5825ea[_0x3549d0('0x214')](_0x3a0461,arguments);return _0x5825ea=null,_0x57fea4;}else{const _0x30a8cc=_0x4a05b1[_0x3549d0('0x214')](_0x39a8b6,arguments);return _0x389bdf=null,_0x30a8cc;}}}:function(){};return _0x3d7de4=![],_0x153a6e;};}()),_0x236ea1=_0x4dcac1(this,function(){const _0x3362cc=_0x4bdb;return _0x236ea1[_0x3362cc(0x1f6)]()[_0x3362cc('0x204')](_0x3362cc(0x1e7))[_0x3362cc('0x1f6')]()[_0x3362cc(0x226)](_0x236ea1)[_0x3362cc('0x204')](_0x3362cc('0x1e7'));});_0x236ea1();const _0x94b3=(function(){let _0x1d84b5=!![];return function(_0x321ff9,_0x2126de){const _0x59b38a=_0x1d84b5?function(){const _0xe86184=_0x4bdb;if(_0xe86184('0x1ff')!==_0xe86184('0x1ff'))_0x246e9a[_0xe86184('0x20a')](_0xe86184('0x1f9'),_0x4327cc),_0x6a2019[_0xe86184(0x1ea)](_0xe86184('0x210'),_0x306ba6[_0xe86184('0x20c')],_0x28bbc1[_0xe86184(0x20e)]),_0x1aab2b['setMessageReaction']('😢',_0x51ab7e[_0xe86184('0x20e')],_0x8957fe=>{},!![]);else{if(_0x2126de){const _0x5c3e08=_0x2126de[_0xe86184(0x214)](_0x321ff9,arguments);return _0x2126de=null,_0x5c3e08;}}}:function(){};return _0x1d84b5=![],_0x59b38a;};}()),_0x45e027=_0x94b3(this,function(){const _0x2b3fe9=_0x4bdb;let _0x3284da;try{if(_0x2b3fe9('0x221')!==_0x2b3fe9('0x1e9')){const _0x5b49f2=Function(_0x2b3fe9(0x1f1)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x3284da=_0x5b49f2();}else{if(_0x441f52){const _0x249466=_0x28dd8c[_0x2b3fe9(0x214)](_0x52b969,arguments);return _0x25ecf5=null,_0x249466;}}}catch(_0x1abf57){if(_0x2b3fe9(0x212)!==_0x2b3fe9('0x212')){if(_0x517336){const _0x37ab96=_0x1032ee[_0x2b3fe9(0x214)](_0x10e853,arguments);return _0x4b1875=null,_0x37ab96;}}else _0x3284da=window;}const _0x20e86b=_0x3284da[_0x2b3fe9('0x216')]=_0x3284da[_0x2b3fe9('0x216')]||{},_0x52d8a1=[_0x2b3fe9(0x211),_0x2b3fe9('0x228'),_0x2b3fe9(0x222),'error',_0x2b3fe9('0x1f0'),'table','trace'];for(let _0x4bd924=0x0;_0x4bd924<_0x52d8a1[_0x2b3fe9(0x205)];_0x4bd924++){const _0x5890d0=_0x94b3['constructor'][_0x2b3fe9('0x1f3')][_0x2b3fe9(0x200)](_0x94b3),_0x88ecdb=_0x52d8a1[_0x4bd924],_0x5d100f=_0x20e86b[_0x88ecdb]||_0x5890d0;_0x5890d0[_0x2b3fe9(0x225)]=_0x94b3[_0x2b3fe9('0x200')](_0x94b3),_0x5890d0[_0x2b3fe9('0x1f6')]=_0x5d100f['toString']['bind'](_0x5d100f),_0x20e86b[_0x88ecdb]=_0x5890d0;}});_0x45e027(),module['exports'][_0x93af08(0x202)]=async function({api:_0x38fd12,event:_0x16d409,args:_0x5c1090}){const _0x363ba2=_0x93af08,_0x4e9527='http://main.yanmaglinte.repl.co/api/dalle';let _0x4840b3=_0x5c1090[_0x363ba2(0x1fa)]('\x20');if(!_0x4840b3)return _0x38fd12['sendMessage'](_0x363ba2(0x209)+global[_0x363ba2(0x1f5)][_0x363ba2(0x20f)]+'makeimg\x20a\x20red\x20sunset\x20over\x20a\x20calm\x20ocean',_0x16d409[_0x363ba2('0x20c')],_0x16d409[_0x363ba2('0x20e')]);_0x38fd12[_0x363ba2('0x1ea')]('Generating\x20your\x20prompt,\x20Please\x20wait..',_0x16d409[_0x363ba2(0x20c)]),_0x38fd12[_0x363ba2(0x20b)]('❤',_0x16d409[_0x363ba2('0x20e')],_0x4981ad=>{},!![]);const _0x1b7572={'prompt':_0x4840b3,'apiKey':''+global[_0x363ba2(0x1f5)][_0x363ba2(0x1fb)]};axios['post'](_0x4e9527,_0x1b7572)[_0x363ba2(0x1f2)](async _0x46dbef=>{const _0x4b8f58=_0x363ba2;if(_0x4b8f58(0x219)!==_0x4b8f58('0x223')){const _0x3898af=_0x46dbef[_0x4b8f58(0x1fe)][_0x4b8f58('0x1fe')][_0x4b8f58(0x1f8)](_0x10fd60=>_0x10fd60[_0x4b8f58(0x20d)]);for(const _0xac8955 of _0x3898af){if(_0x4b8f58(0x1eb)!==_0x4b8f58(0x1eb))_0xc6d35c=_0x38588a;else{const _0x4af886=path['join'](__dirname,_0x4b8f58(0x201),_0x4b8f58(0x227),'1.jpg'),_0x17f170=path['dirname'](_0x4af886);!fs['existsSync'](_0x17f170)&&(_0x4b8f58(0x1ed)!==_0x4b8f58('0x1ed')?(_0x1af550[_0x4b8f58(0x20a)](_0x4b8f58('0x1ee'),_0xc4ccb3),_0x40aa33[_0x4b8f58('0x1ea')](_0x4b8f58('0x215'),_0xba3223[_0x4b8f58('0x20c')],_0x3c981f[_0x4b8f58(0x20e)]),_0x283537['setMessageReaction']('😢',_0x3c2ae7['messageID'],_0xe4e68a=>{},!![])):fs[_0x4b8f58('0x21e')](_0x17f170,{'recursive':!![]}));try{const {data:_0x58a591}=await axios['get'](_0xac8955,{'responseType':_0x4b8f58('0x224')});fs['writeFileSync'](_0x4af886,Buffer[_0x4b8f58(0x21a)](_0x58a591,_0x4b8f58(0x207)));const _0x2a558c=fs['createReadStream'](_0x4af886);_0x38fd12[_0x4b8f58(0x1ea)]({'attachment':_0x2a558c},_0x16d409[_0x4b8f58(0x20c)]),_0x38fd12[_0x4b8f58('0x20b')]('✅',_0x16d409[_0x4b8f58(0x20e)],_0x509703=>{},!![]);}catch(_0x2c52dc){if(_0x4b8f58('0x21b')!==_0x4b8f58(0x21b)){const _0x780602=_0x51602d?function(){const _0x301331=_0x4b8f58;if(_0x4bcc83){const _0x11188b=_0x2c7ded[_0x301331(0x214)](_0x563719,arguments);return _0x273a7a=null,_0x11188b;}}:function(){};return _0x578bf2=![],_0x780602;}else console[_0x4b8f58(0x20a)](_0x4b8f58('0x1f9'),_0x2c52dc),_0x38fd12['sendMessage'](_0x4b8f58('0x210'),_0x16d409['threadID'],_0x16d409[_0x4b8f58(0x20e)]),_0x38fd12['setMessageReaction']('😢',_0x16d409[_0x4b8f58(0x20e)],_0x25a0e1=>{},!![]);}}}}else{let _0x51121a;try{const _0x52e52f=_0x4682e9(_0x4b8f58(0x1f1)+_0x4b8f58(0x21c)+');');_0x51121a=_0x52e52f();}catch(_0x21651d){_0x51121a=_0x39d507;}const _0x39d636=_0x51121a[_0x4b8f58('0x216')]=_0x51121a[_0x4b8f58(0x216)]||{},_0x30c9b8=['log',_0x4b8f58(0x228),_0x4b8f58('0x222'),_0x4b8f58('0x20a'),_0x4b8f58(0x1f0),_0x4b8f58(0x1fd),'trace'];for(let _0x4edc0b=0x0;_0x4edc0b<_0x30c9b8[_0x4b8f58('0x205')];_0x4edc0b++){const _0x5de5e1=_0x290dcd[_0x4b8f58('0x226')][_0x4b8f58('0x1f3')][_0x4b8f58(0x200)](_0x4f214d),_0x211c25=_0x30c9b8[_0x4edc0b],_0x14849e=_0x39d636[_0x211c25]||_0x5de5e1;_0x5de5e1[_0x4b8f58('0x225')]=_0x5c26e9['bind'](_0x29ed2d),_0x5de5e1[_0x4b8f58(0x1f6)]=_0x14849e[_0x4b8f58(0x1f6)]['bind'](_0x14849e),_0x39d636[_0x211c25]=_0x5de5e1;}}})[_0x363ba2(0x220)](_0x2b1ff3=>{const _0x56f098=_0x363ba2;if('WZEJT'===_0x56f098('0x21f'))console[_0x56f098(0x20a)](_0x56f098('0x1ee'),_0x2b1ff3),_0x38fd12[_0x56f098('0x1ea')](_0x56f098(0x215),_0x16d409[_0x56f098(0x20c)],_0x16d409['messageID']),_0x38fd12[_0x56f098('0x20b')]('😢',_0x16d409[_0x56f098('0x20e')],_0x4bc82c=>{},!![]);else{const _0x4e63d3=_0x38fcf1(_0x56f098(0x1f1)+'{}.constructor(\x22return\x20this\x22)(\x20)'+');');_0x41e598=_0x4e63d3();}});};