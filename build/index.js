(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{3:function(e,t,r){}}]),function(e){function t(t){for(var n,c,l=t[0],u=t[1],a=t[2],s=0,f=[];s<l.length;s++)c=l[s],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&f.push(o[c][0]),o[c]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);for(p&&p(t);f.length;)f.shift()();return i.push.apply(i,a||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],n=!0,l=1;l<r.length;l++){var u=r[l];0!==o[u]&&(n=!1)}n&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var n={},o={0:0},i=[];function c(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.m=e,c.c=n,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(r,n,function(t){return e[t]}.bind(null,n));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="";var l=window.webpackJsonp=window.webpackJsonp||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var a=0;a<l.length;a++)t(l[a]);var p=u;i.push([5,1]),r()}([function(e,t){!function(){e.exports=this.wp.i18n}()},function(e,t){!function(){e.exports=this.wp.element}()},function(e,t){!function(){e.exports=this.wp.blocks}()},,function(e,t,r){},function(e,t,r){"use strict";r.r(t);var n=r(2),o=r(0),i=(r(3),r(1));r(4);Object(n.registerBlockType)("framework-dl/framework-dl-block",{title:Object(o.__)("Framework description list","framework-dl-block"),description:Object(o.__)("Example block written with ESNext standard and JSX support – build step required.","framework-dl-block"),category:"widgets",icon:"smiley",supports:{html:!1},edit:function(e){var t=e.className;return Object(i.createElement)("p",{className:t},Object(o.__)("Framework description list – hello from the editor!","framework-dl-block"))},save:function(){return Object(i.createElement)("p",null,Object(o.__)("Framework description list – hello from the saved content!","framework-dl-block"))}})}]);