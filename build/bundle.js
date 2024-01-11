var app=function(){"use strict";function t(){}function e(t){return t()}function i(){return Object.create(null)}function u(t){t.forEach(e)}function n(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let s,r;function o(t,e){return s||(s=document.createElement("a")),s.href=e,t===s.href}function c(t,e){t.appendChild(e)}function m(t,e,i){t.insertBefore(e,i||null)}function a(t){t.parentNode&&t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function p(t,e,i,u){return t.addEventListener(e,i,u),()=>t.removeEventListener(e,i,u)}function b(t,e,i){null==i?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function f(t){r=t}const y=[],g=[];let v=[];const k=[],E=Promise.resolve();let _=!1;function x(t){v.push(t)}const N=new Set;let j=0;function H(){if(0!==j)return;const t=r;do{try{for(;j<y.length;){const t=y[j];j++,f(t),I(t.$$)}}catch(t){throw y.length=0,j=0,t}for(f(null),y.length=0,j=0;g.length;)g.pop()();for(let t=0;t<v.length;t+=1){const e=v[t];N.has(e)||(N.add(e),e())}v.length=0}while(y.length);for(;k.length;)k.pop()();_=!1,N.clear(),f(t)}function I(t){if(null!==t.fragment){t.update(),u(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const T=new Set;let Z;function K(t,e){t&&t.i&&(T.delete(t),t.i(e))}function q(t,e,i,u){if(t&&t.o){if(T.has(t))return;T.add(t),Z.c.push((()=>{T.delete(t),u&&(i&&t.d(1),u())})),t.o(e)}else u&&u()}function V(t,i,l,s){const{fragment:r,after_update:o}=t.$$;r&&r.m(i,l),s||x((()=>{const i=t.$$.on_mount.map(e).filter(n);t.$$.on_destroy?t.$$.on_destroy.push(...i):u(i),t.$$.on_mount=[]})),o.forEach(x)}function A(t,e){const i=t.$$;null!==i.fragment&&(!function(t){const e=[],i=[];v.forEach((u=>-1===t.indexOf(u)?e.push(u):i.push(u))),i.forEach((t=>t())),v=e}(i.after_update),u(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function J(t,e){-1===t.$$.dirty[0]&&(y.push(t),_||(_=!0,E.then(H)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function R(e,n,l,s,o,c,m,w=[-1]){const d=r;f(e);const h=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:o,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(d?d.$$.context:[])),callbacks:i(),dirty:w,skip_bound:!1,root:n.target||d.$$.root};m&&m(h.root);let p=!1;if(h.ctx=l?l(e,n.props||{},((t,i,...u)=>{const n=u.length?u[0]:i;return h.ctx&&o(h.ctx[t],h.ctx[t]=n)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](n),p&&J(e,t)),i})):[],h.update(),p=!0,u(h.before_update),h.fragment=!!s&&s(h.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);h.fragment&&h.fragment.l(t),t.forEach(a)}else h.fragment&&h.fragment.c();n.intro&&K(e.$$.fragment),V(e,n.target,n.anchor,n.customElement),H()}f(d)}class S{$destroy(){A(this,1),this.$destroy=t}$on(e,i){if(!n(i))return t;const u=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return u.push(i),()=>{const t=u.indexOf(i);-1!==t&&u.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function C(t,e,i){const u=t.slice();return u[12]=e[i],u}function Q(t){let e,i,u=t[12]+"";return{c(){e=w("p"),i=d(u),b(e,"class","lyrics-line svelte-y7qwkx")},m(t,u){m(t,e,u),c(e,i)},p(t,e){1&e&&u!==(u=t[12]+"")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(i,u)},d(t){t&&a(e)}}}function M(t){let e;return{c(){e=w("span"),e.textContent="▶",b(e,"class","play-icon show svelte-y7qwkx")},m(t,i){m(t,e,i)},d(t){t&&a(e)}}}function z(t){let e,i,u,n,l,s,r;return{c(){e=w("div"),i=w("iframe"),n=h(),l=w("div"),l.textContent="닫기",b(i,"width","640"),b(i,"height","480"),o(i.src,u=t[1])||b(i,"src",u),b(i,"frameborder","0"),b(i,"title","mv"),i.allowFullscreen=!0,b(l,"class","close-button"),b(e,"class","video-player show svelte-y7qwkx")},m(u,o){m(u,e,o),c(e,i),c(e,n),c(e,l),s||(r=p(l,"click",t[6]),s=!0)},p(t,e){2&e&&!o(i.src,u=t[1])&&b(i,"src",u)},d(t){t&&a(e),s=!1,r()}}}function F(e){let i,n,l,s,r,o=e[0],d=[];for(let t=0;t<o.length;t+=1)d[t]=Q(C(e,o,t));let f=e[2]&&M(),y=e[3]&&z(e);return{c(){i=w("div");for(let t=0;t<d.length;t+=1)d[t].c();n=h(),f&&f.c(),l=h(),y&&y.c(),b(i,"class","lyrics svelte-y7qwkx")},m(t,u){m(t,i,u);for(let t=0;t<d.length;t+=1)d[t]&&d[t].m(i,null);c(i,n),f&&f.m(i,null),c(i,l),y&&y.m(i,null),s||(r=[p(i,"mouseover",e[4]),p(i,"mouseout",e[4]),p(i,"click",e[5])],s=!0)},p(t,[e]){if(1&e){let u;for(o=t[0],u=0;u<o.length;u+=1){const l=C(t,o,u);d[u]?d[u].p(l,e):(d[u]=Q(l),d[u].c(),d[u].m(i,n))}for(;u<d.length;u+=1)d[u].d(1);d.length=o.length}t[2]?f||(f=M(),f.c(),f.m(i,l)):f&&(f.d(1),f=null),t[3]?y?y.p(t,e):(y=z(t),y.c(),y.m(i,null)):y&&(y.d(1),y=null)},i:t,o:t,d(t){t&&a(i),function(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}(d,t),f&&f.d(),y&&y.d(),s=!1,u(r)}}}function G(t,e,i){let u,n=[],l=!1,s=!1,r=new Date;r.setHours(r.getHours());let o=r.getDate()-1,c=[{id:1,title:"하늘 위로(Up)",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp",mvurl:"https://www.youtube.com/embed/QqlxGUm9MLE?si=nD-Lh8hON1QY3Nqv",date:"2024-01-01",lyricsNum:2,lyrics:["구름에 적어둬 없어지지 않도록","언제나 보고 싶을때 나만 꺼내 볼거야"]},{id:2,title:"별의 하모니(Harmoney of stars)",artist:"QWER",thumbnail:"https://i.namu.wiki/i/TclIk6XCp0alVu2n2N5-kOfqxjcmGFzzsiA5R0BLSMksnvLvO8RFsTd7zTRMDDK9yjI-vDsw7PKIOpf_vQjeACESafkrTYu0Rn8l6jPzf6zQucRvtSBf3MvKD_MThWdum3PFzHfT4NTZWy1co5jXYg.webp",mvurl:"https://www.youtube.com/embed/On6Pm4M-dQQ?si=tcSPM0vq7Gx3ES7E",date:"2024-01-02",lyricsNum:3,lyrics:["너와 함께라는 이유로 운명을 믿어 난","눈 앞에 펼쳐진 미랠 향해 인사를 해","빛나는 별처럼"]},{id:3,title:"Jump",artist:"김동률",thumbnail:"https://i.namu.wiki/i/wTLNyckul3i0nKFfIZVq1XAe-88hlbi_EHzxUvVTe188eRq0naWpnLtZ_Pkx1FgBt7rIMj5e90xU7XHhTr45zFkSglqfmwkabKfX4JKVGp_fZuw2VHGdwt0bvd3mj2K8Jv2AAwTEwRCBkOiS-nFRZQ.webp",mvurl:"https://www.youtube.com/embed/-FSQ3DaVE9E?si=Qrq5IihGYxIkZwaY",mvurlalt:"https://www.youtube.com/embed/wbXSaM2-vQ0?si=7xj8_8qdsx1PK65a",date:"2024-01-03",lyricsNum:3,lyrics:["하고 싶은 일이 많았었는데 웬일인지 다 시시해","아직 모든게 신기한 내 스무 살 때 처럼","새로운 일들에 설레하며 가슴이 뛰고 싶어"]},{id:4,title:"우주를 줄게",artist:"볼빨간사춘기",thumbnail:"https://i.namu.wiki/i/vbcm7cee53m6nahs4pvwTZtGC8FLZO2REPEcJDpNAh6C3gIDetj5Dc2k0zTVxnZGBu0Pix9ovsDrfv2wgn06NxXLOWXaz7bJEoXJuxm3DKNFWcM9ifjqh06vwMRusLljFljwgHtvOzrEJ3pE8c4TSA.webp",mvurl:"https://www.youtube.com/embed/MYBScu8ha0I?si=n4wYHMREdldxCeV1",mvurlalt:"https://www.youtube.com/embed/9U8uA702xrE?si=0usD_JtOKHdUE3vy",date:"2024-01-04",lyricsNum:4,lyrics:["어제는 내가 기분이 참 좋아서","지나간 행성에다가 그대 이름 새겨 놓았죠","한참 뒤에 별빛이 내리면","그 별이 가장 밝게 빛나요"]},{id:5,title:"회전목마 (Feat. Zion.T, 원슈타인)",artist:"소코도모",thumbnail:"https://i.namu.wiki/i/7fQgahkg_dZ4353cvUnfw6Rq0j4FbWw-5o8UEJx__qsH62aVQL4_8cIrem0BNWRSK-Xtj3UAp2KruLSREHmkFxhpGZVbVbow8nuiEGOyAsPXlEZfWy9qwrjmhMLjKyb_dSMvYZsZM_oV-YVoks6Iog.webp",mvurl:"https://www.youtube.com/embed/tnAxZipkuWw?si=a5d_M-sCFcteBnJb",mvurlalt:" ",date:"2024-01-05",lyricsNum:4,lyrics:["빙빙 돌아가는 회전목마처럼","영원히 계속될 것처럼","빙빙 돌아온 우리의 시간처럼","인생은 회전목마"]},{id:6,title:"Either Way",artist:"IVE (아이브)",thumbnail:"https://i.namu.wiki/i/WU4wKflKkzaeq_bhXiLPDcud6WmEJP07Km-mo7c1jpsG4a853y87xBVVxT_elb_KgxhTxiEw7mlGTeHcC8i3SYuC1Ron9Ofb75DeTL9PKM1SUmhj759ou7xSrlJxh6LWNXwiBpqsgsTqI6fKHf9N8A.webp",mvurl:"https://www.youtube.com/embed/cJc62vZZs8A?si=PNfhOW_qZBzvZmwQ",mvurlalt:"https://www.youtube.com/embed/_Hu4GYtye5U?si=lQb7iLfQyybk5MGF",date:"2024-01-06",lyricsNum:2,lyrics:["쟤 I 라서 그래 넌 E 라서 그래","됐고 그냥 V 나 하자"]},{id:7,title:"MIRROR",artist:"권은비",thumbnail:"https://i.namu.wiki/i/PVxdfPyaX6oHXzJYA75rzu4kAkHUB2uwvl-6LhCJdAbN43zZiqBRm1dC3lZNy6irmjyr7XhtHxmmq4Z7uWP3492lI1sLxynK-cr2G-tqy7FTXyupIga5qGSeCON0a5KTdHtqnJAGmF82nQ86aswmRg.webp",mvurl:"https://www.youtube.com/embed/V7KHhsUMAI0?si=2LI6a95J_jhnF_UH",mvurlalt:" ",date:"2024-01-07",lyricsNum:3,lyrics:["외로웠던 시간 버텨왔던 날들","잘해왔잖아 모두 다","좀 느려도 괜찮아 내가 여기 기다릴게"]},{id:8,title:"사건의 지평선",artist:"윤하",thumbnail:"https://i.namu.wiki/i/tVpSZIeqgkQXACiB3Cr12HZ7kBdas93tIJZz9z2zmth9DWEUTfxVslb88hIEDhJ0-CPjnCNtgL27pnvR_sg9IoDm_jV7-x-8_INrzV_kB6jl-A5GsBwdYgmJ8eprYySi8GiO71tJYI3EIw-m6aF_cw.webp",mvurl:"https://www.youtube.com/embed/BBdC1rl5sKY?si=fVus5iX5Si_j-qQ2",mvurlalt:" ",date:"2024-01-08",lyricsNum:3,lyrics:["솔직히 두렵기도 하지만","노력은 우리에게 정답이 아니라서","마지막 선물은 산뜻한 안녕"]},{id:9,title:"This Time",artist:"조유리",thumbnail:"https://i.namu.wiki/i/xz_c11EoM1gMomoS1HuiRrOb6NOaZxqi_jo1yfzW9suzh90jpvHWooTFK688B-2htvfTNbkp3TR4PTuucWwDPwPqfA1FMn_6j1Wn7cjeQbI6AGntCTo-EngIHsXUn2tqwQr-BGicC1jbT_-VE2CVyw.webp",mvurl:"https://www.youtube.com/embed/QkOPJG1DwWU?si=zOzWBt5CKh0tdyH7",mvurlalt:" ",date:"2024-01-09",lyricsNum:4,lyrics:["반짝이는 저 하늘의 별 곁에 은은한 달빛","소리 없이 마음을 울리는 따뜻한 손길","일렁이는 물결처럼 가끔은 두려워도","간절한 이 꿈속에 우리가 있어"]},{id:10,title:"언젠가 우리의 밤도 지나가겠죠",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/2eaWoLJNiHx35ChvW1Z-6OzuA-DhtuZd4a4j6bwQU5mVo_ZRQSvfgx9qNGRRtHaV7l0TgB3N8t_MgFHbK1pH-cyQNjqpVG6jocfJbGYBaFJWyEZYHWl-rijR5YQyNJa9HQ9uV127QYZPNg6G0Z6Jiw.webp",mvurl:"https://www.youtube.com/embed/BaKSB650TNk?si=rIUIm_wK5tRcmaAV",mvurlalt:" ",date:"2024-01-10",lyricsNum:4,lyrics:["언젠가 우리의 밤도 모두 지나가겠죠","끝없는 어둠이 밀려와도 난 다신","두려워하지는 않죠 우리 두 손 꼭 잡고서","어둠 끝자락 함께 걸어갈게요"]},{id:11,title:"도망가자",artist:"선우정아",thumbnail:"https://image.bugsm.co.kr/album/images/500/202938/20293864.jpg",mvurl:"https://www.youtube.com/embed/4gOfncuKK9k?si=E7a2IwHBUiFkTIuh",mvurlalt:" ",date:"2024-01-11",lyricsNum:5,lyrics:["걱정은 잠시 내려놓고","대신 가볍게 짐을 챙기자","실컷 웃고 다시 돌아오자","거기서는 우리 아무 생각말자","너의 얼굴 위에 빛이 스며들 때까지"]},{id:12,title:"걱정 말아요 그대",artist:"들국화",thumbnail:"https://i.namu.wiki/i/LxUxSjKIJKX1GaWJ-3GzHoA2v1bYHAY-6wSvs0asVdcS3JRw7iXXLp4vG5Q6u0Ug9IcjxcgESWqMAdk7i-CgBoQLruv2dKzAJQRyYLcRMqgSe5Ng4-5VvC0gRFYiCoa0F7oZb-_pg2f5OvfYSikoUA.webp",mvurl:"https://www.youtube.com/embed/zZOCgNXU9eY?si=6qlD7ThpCw32ETVS",mvurlalt:"https://www.youtube.com/embed/K_d75cH7IJw?si=GNv165flwbyY-kpr",date:"2024-01-12",lyricsNum:6,lyrics:["그대 슬픈 얘기들 모두 그대여","그대 탓으로 훌훌 털어 버리고","지나간 것은 지나간 대로","그런 의미가 있죠","우리 다 함께 노래합시다","후회 없이 꿈을 꾸었다 말해요"]}];for(let t=0;t<c[o].lyricsNum;t++){let e=c[o].lyrics[t];n=[...n,e]}function m(){i(3,s=!s),console.log("toggleVideoPlayer called")}console.log(n),c[o].lyrics1,c[o].lyrics2,u=c[o].mvurl,console.log(u);return[n,u,l,s,function(){i(2,l=!l)},m,t=>{t.stopPropagation(),m()}]}class W extends S{constructor(t){super(),R(this,t,G,F,l,{})}}function B(e){let i,u,n,l,s,r,o,c,w=e[1].getFullYear()+"",h=e[1].getMonth()+1+"",p=e[1].getDate()+"";return{c(){i=d(w),u=d("년 "),n=d(h),l=d("월 "),s=d(p),r=d("일 "),o=d(e[2]),c=d("요일, 오늘의 노래")},m(t,e){m(t,i,e),m(t,u,e),m(t,n,e),m(t,l,e),m(t,s,e),m(t,r,e),m(t,o,e),m(t,c,e)},p:t,d(t){t&&a(i),t&&a(u),t&&a(n),t&&a(l),t&&a(s),t&&a(r),t&&a(o),t&&a(c)}}}function D(e){let i,u,n,l,s,r,o,c,w=e[1].getFullYear()+"",h=e[1].getMonth()+1+"",p=e[1].getDate()+"";return{c(){i=d(w),u=d("년 "),n=d(h),l=d("월 "),s=d(p),r=d("일 "),o=d(e[2]),c=d("요일, 올해의 첫 노래")},m(t,e){m(t,i,e),m(t,u,e),m(t,n,e),m(t,l,e),m(t,s,e),m(t,r,e),m(t,o,e),m(t,c,e)},p:t,d(t){t&&a(i),t&&a(u),t&&a(n),t&&a(l),t&&a(s),t&&a(r),t&&a(o),t&&a(c)}}}function Y(e){let i,u,n,l,s,r,o,c,w=e[1].getFullYear()+"",h=e[1].getMonth()+1+"",p=e[1].getDate()+"";return{c(){i=d(w),u=d("년 "),n=d(h),l=d("월 "),s=d(p),r=d("일 "),o=d(e[2]),c=d("요일, 올해의 마지막 노래")},m(t,e){m(t,i,e),m(t,u,e),m(t,n,e),m(t,l,e),m(t,s,e),m(t,r,e),m(t,o,e),m(t,c,e)},p:t,d(t){t&&a(i),t&&a(u),t&&a(n),t&&a(l),t&&a(s),t&&a(r),t&&a(o),t&&a(c)}}}function O(e){let i,u,n;return u=new W({}),{c(){var t,n,l,s,r;i=w("div"),(t=u.$$.fragment)&&t.c(),b(i,"class","album-art svelte-1iptbpe"),n=i,l="background-image",null==(s="url("+e[0][e[3]].thumbnail+")")?n.style.removeProperty(l):n.style.setProperty(l,s,r?"important":"")},m(t,e){m(t,i,e),V(u,i,null),n=!0},p:t,i(t){n||(K(u.$$.fragment,t),n=!0)},o(t){q(u.$$.fragment,t),n=!1},d(t){t&&a(i),A(u)}}}function L(e){let i;return{c(){i=d("아직 서비스 오픈하지 않았습니다.")},m(t,e){m(t,i,e)},p:t,i:t,o:t,d(t){t&&a(i)}}}function X(t){let e,i,u,n,l,s,r,o,d;let p=function(t,e){return 11==t[1].getMonth()&&31==t[1].getDate()?Y:0==t[1].getMonth()&&1==t[1].getDate()?D:B}(t),f=p(t);const y=[L,O],g=[];return r=function(t,e){return 11==t[1].getMonth()&&31==t[1].getDate()?0:1}(t),o=g[r]=y[r](t),{c(){e=w("header"),i=w("div"),f.c(),u=h(),n=w("div"),n.textContent=`${P}`,l=h(),s=w("div"),o.c(),b(i,"class","date-info svelte-1iptbpe"),b(n,"class","title svelte-1iptbpe"),b(e,"class","svelte-1iptbpe"),b(s,"class","container svelte-1iptbpe")},m(t,o){m(t,e,o),c(e,i),f.m(i,null),c(e,u),c(e,n),m(t,l,o),m(t,s,o),g[r].m(s,null),d=!0},p(t,[e]){f.p(t,e),o.p(t,e)},i(t){d||(K(o),d=!0)},o(t){q(o),d=!1},d(t){t&&a(e),f.d(),t&&a(l),t&&a(s),g[r].d()}}}let P="하루 한 곡";function U(t){let e=new Date;e.setHours(e.getHours());let i=["일","월","화","수","목","금","토"][e.getDay()],u=e.getDate()-1;return console.log(e),[[{id:1,title:"하늘 위로(Up)",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp",mvurl:"https://www.youtube.com/embed/QqlxGUm9MLE?si=nD-Lh8hON1QY3Nqv",date:"2024-01-01",lyricsNum:2,lyrics:["구름에 적어둬 없어지지 않도록","언제나 보고 싶을때 나만 꺼내 볼거야"]},{id:2,title:"별의 하모니(Harmoney of stars)",artist:"QWER",thumbnail:"https://i.namu.wiki/i/TclIk6XCp0alVu2n2N5-kOfqxjcmGFzzsiA5R0BLSMksnvLvO8RFsTd7zTRMDDK9yjI-vDsw7PKIOpf_vQjeACESafkrTYu0Rn8l6jPzf6zQucRvtSBf3MvKD_MThWdum3PFzHfT4NTZWy1co5jXYg.webp",mvurl:"https://www.youtube.com/embed/On6Pm4M-dQQ?si=tcSPM0vq7Gx3ES7E",date:"2024-01-02",lyricsNum:3,lyrics:["너와 함께라는 이유로 운명을 믿어 난","눈 앞에 펼쳐진 미랠 향해 인사를 해","빛나는 별처럼"]},{id:3,title:"Jump",artist:"김동률",thumbnail:"https://i.namu.wiki/i/wTLNyckul3i0nKFfIZVq1XAe-88hlbi_EHzxUvVTe188eRq0naWpnLtZ_Pkx1FgBt7rIMj5e90xU7XHhTr45zFkSglqfmwkabKfX4JKVGp_fZuw2VHGdwt0bvd3mj2K8Jv2AAwTEwRCBkOiS-nFRZQ.webp",mvurl:"https://www.youtube.com/embed/-FSQ3DaVE9E?si=Qrq5IihGYxIkZwaY",mvurlalt:"https://www.youtube.com/embed/wbXSaM2-vQ0?si=7xj8_8qdsx1PK65a",date:"2024-01-03",lyricsNum:3,lyrics:["하고 싶은 일이 많았었는데 웬일인지 다 시시해","아직 모든게 신기한 내 스무 살 때 처럼","새로운 일들에 설레하며 가슴이 뛰고 싶어"]},{id:4,title:"우주를 줄게",artist:"볼빨간사춘기",thumbnail:"https://i.namu.wiki/i/vbcm7cee53m6nahs4pvwTZtGC8FLZO2REPEcJDpNAh6C3gIDetj5Dc2k0zTVxnZGBu0Pix9ovsDrfv2wgn06NxXLOWXaz7bJEoXJuxm3DKNFWcM9ifjqh06vwMRusLljFljwgHtvOzrEJ3pE8c4TSA.webp",mvurl:"https://www.youtube.com/embed/MYBScu8ha0I?si=n4wYHMREdldxCeV1",mvurlalt:"https://www.youtube.com/embed/9U8uA702xrE?si=0usD_JtOKHdUE3vy",date:"2024-01-03",lyricsNum:4,lyrics:["어제는 내가 기분이 참 좋아서","지나간 행성에다가 그대 이름 새겨 놓았죠","한참 뒤에 별빛이 내리면","그 별이 가장 밝게 빛나요"]},{id:5,title:"회전목마 (Feat. Zion.T, 원슈타인)",artist:"소코도모",thumbnail:"https://i.namu.wiki/i/7fQgahkg_dZ4353cvUnfw6Rq0j4FbWw-5o8UEJx__qsH62aVQL4_8cIrem0BNWRSK-Xtj3UAp2KruLSREHmkFxhpGZVbVbow8nuiEGOyAsPXlEZfWy9qwrjmhMLjKyb_dSMvYZsZM_oV-YVoks6Iog.webp",mvurl:"https://www.youtube.com/embed/tnAxZipkuWw?si=a5d_M-sCFcteBnJb",mvurlalt:" ",date:"2024-01-04",lyricsNum:4,lyrics:["빙빙 돌아가는 회전목마처럼","영원히 계속될 것처럼","빙빙 돌아온 우리의 시간처럼","인생은 회전목마"]},{id:6,title:"Either Way",artist:"IVE (아이브)",thumbnail:"https://i.namu.wiki/i/WU4wKflKkzaeq_bhXiLPDcud6WmEJP07Km-mo7c1jpsG4a853y87xBVVxT_elb_KgxhTxiEw7mlGTeHcC8i3SYuC1Ron9Ofb75DeTL9PKM1SUmhj759ou7xSrlJxh6LWNXwiBpqsgsTqI6fKHf9N8A.webp",mvurl:"https://www.youtube.com/embed/cJc62vZZs8A?si=PNfhOW_qZBzvZmwQ",mvurlalt:"https://www.youtube.com/embed/_Hu4GYtye5U?si=lQb7iLfQyybk5MGF",date:"2024-01-05",lyricsNum:2,lyrics:["쟤 I 라서 그래 넌 E 라서 그래","됐고 그냥 V 나 하자"]},{id:7,title:"MIRROR",artist:"권은비",thumbnail:"https://i.namu.wiki/i/PVxdfPyaX6oHXzJYA75rzu4kAkHUB2uwvl-6LhCJdAbN43zZiqBRm1dC3lZNy6irmjyr7XhtHxmmq4Z7uWP3492lI1sLxynK-cr2G-tqy7FTXyupIga5qGSeCON0a5KTdHtqnJAGmF82nQ86aswmRg.webp",mvurl:"https://www.youtube.com/embed/V7KHhsUMAI0?si=2LI6a95J_jhnF_UH",mvurlalt:" ",date:"2024-01-06",lyricsNum:3,lyrics:["외로웠던 시간 버텨왔던 날들","잘해왔잖아 모두 다","좀 느려도 괜찮아 내가 여기 기다릴게"]},{id:8,title:"사건의 지평선",artist:"윤하",thumbnail:"https://i.namu.wiki/i/tVpSZIeqgkQXACiB3Cr12HZ7kBdas93tIJZz9z2zmth9DWEUTfxVslb88hIEDhJ0-CPjnCNtgL27pnvR_sg9IoDm_jV7-x-8_INrzV_kB6jl-A5GsBwdYgmJ8eprYySi8GiO71tJYI3EIw-m6aF_cw.webp",mvurl:"https://www.youtube.com/embed/BBdC1rl5sKY?si=fVus5iX5Si_j-qQ2",mvurlalt:" ",date:"2024-01-08",lyricsNum:3,lyrics:["솔직히 두렵기도 하지만","노력은 우리에게 정답이 아니라서","마지막 선물은 산뜻한 안녕"]},{id:9,title:"This Time",artist:"조유리",thumbnail:"https://i.namu.wiki/i/xz_c11EoM1gMomoS1HuiRrOb6NOaZxqi_jo1yfzW9suzh90jpvHWooTFK688B-2htvfTNbkp3TR4PTuucWwDPwPqfA1FMn_6j1Wn7cjeQbI6AGntCTo-EngIHsXUn2tqwQr-BGicC1jbT_-VE2CVyw.webp",mvurl:"https://www.youtube.com/embed/QkOPJG1DwWU?si=zOzWBt5CKh0tdyH7",mvurlalt:" ",date:"2024-01-09",lyricsNum:4,lyrics:["반짝이는 저 하늘의 별 곁에 은은한 달빛","소리 없이 마음을 울리는 따뜻한 손길","일렁이는 물결처럼 가끔은 두려워도","간절한 이 꿈속에 우리가 있어"]},{id:10,title:"언젠가 우리의 밤도 지나가겠죠",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/2eaWoLJNiHx35ChvW1Z-6OzuA-DhtuZd4a4j6bwQU5mVo_ZRQSvfgx9qNGRRtHaV7l0TgB3N8t_MgFHbK1pH-cyQNjqpVG6jocfJbGYBaFJWyEZYHWl-rijR5YQyNJa9HQ9uV127QYZPNg6G0Z6Jiw.webp",mvurl:"https://www.youtube.com/embed/BaKSB650TNk?si=rIUIm_wK5tRcmaAV",mvurlalt:" ",date:"2024-01-10",lyricsNum:4,lyrics:["언젠가 우리의 밤도 모두 지나가겠죠","끝없는 어둠이 밀려와도 난 다신","두려워하지는 않죠 우리 두 손 꼭 잡고서","어둠 끝자락 함께 걸어갈게요"]},{id:11,title:"도망가자",artist:"선우정아",thumbnail:"https://image.bugsm.co.kr/album/images/500/202938/20293864.jpg",mvurl:"https://www.youtube.com/embed/4gOfncuKK9k?si=E7a2IwHBUiFkTIuh",mvurlalt:" ",date:"2024-01-11",lyricsNum:5,lyrics:["걱정은 잠시 내려놓고","대신 가볍게 짐을 챙기자","실컷 웃고 다시 돌아오자","거기서는 우리 아무 생각말자","너의 얼굴 위에 빛이 스며들 때까지"]},{id:12,title:"걱정 말아요 그대",artist:"들국화",thumbnail:"https://i.namu.wiki/i/LxUxSjKIJKX1GaWJ-3GzHoA2v1bYHAY-6wSvs0asVdcS3JRw7iXXLp4vG5Q6u0Ug9IcjxcgESWqMAdk7i-CgBoQLruv2dKzAJQRyYLcRMqgSe5Ng4-5VvC0gRFYiCoa0F7oZb-_pg2f5OvfYSikoUA.webp",mvurl:"https://www.youtube.com/embed/zZOCgNXU9eY?si=6qlD7ThpCw32ETVS",mvurlalt:"https://www.youtube.com/embed/K_d75cH7IJw?si=GNv165flwbyY-kpr",date:"2024-01-12",lyricsNum:6,lyrics:["그대 슬픈 얘기들 모두 그대여","그대 탓으로 훌훌 털어 버리고","지나간 것은 지나간 대로","그런 의미가 있죠","우리 다 함께 노래합시다","후회 없이 꿈을 꾸었다 말해요"]}],e,i,u]}return new class extends S{constructor(t){super(),R(this,t,U,X,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
