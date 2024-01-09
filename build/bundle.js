var app=function(){"use strict";function t(){}function e(t){return t()}function i(){return Object.create(null)}function n(t){t.forEach(e)}function u(t){return"function"==typeof t}function l(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r,s;function o(t,e){return r||(r=document.createElement("a")),r.href=e,t===r.href}function c(t,e){t.appendChild(e)}function a(t,e,i){t.insertBefore(e,i||null)}function m(t){t.parentNode&&t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function p(t,e,i,n){return t.addEventListener(e,i,n),()=>t.removeEventListener(e,i,n)}function f(t,e,i){null==i?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function b(t){s=t}const y=[],v=[];let g=[];const _=[],E=Promise.resolve();let x=!1;function N(t){g.push(t)}const k=new Set;let j=0;function T(){if(0!==j)return;const t=s;do{try{for(;j<y.length;){const t=y[j];j++,b(t),Z(t.$$)}}catch(t){throw y.length=0,j=0,t}for(b(null),y.length=0,j=0;v.length;)v.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];k.has(e)||(k.add(e),e())}g.length=0}while(y.length);for(;_.length;)_.pop()();x=!1,k.clear(),b(t)}function Z(t){if(null!==t.fragment){t.update(),n(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(N)}}const H=new Set;let I;function q(t,e){t&&t.i&&(H.delete(t),t.i(e))}function V(t,e,i,n){if(t&&t.o){if(H.has(t))return;H.add(t),I.c.push((()=>{H.delete(t),n&&(i&&t.d(1),n())})),t.o(e)}else n&&n()}function K(t,i,l,r){const{fragment:s,after_update:o}=t.$$;s&&s.m(i,l),r||N((()=>{const i=t.$$.on_mount.map(e).filter(u);t.$$.on_destroy?t.$$.on_destroy.push(...i):n(i),t.$$.on_mount=[]})),o.forEach(N)}function R(t,e){const i=t.$$;null!==i.fragment&&(!function(t){const e=[],i=[];g.forEach((n=>-1===t.indexOf(n)?e.push(n):i.push(n))),i.forEach((t=>t())),g=e}(i.after_update),n(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function M(t,e){-1===t.$$.dirty[0]&&(y.push(t),x||(x=!0,E.then(T)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function A(e,u,l,r,o,c,a,w=[-1]){const d=s;b(e);const h=e.$$={fragment:null,ctx:[],props:c,update:t,not_equal:o,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(u.context||(d?d.$$.context:[])),callbacks:i(),dirty:w,skip_bound:!1,root:u.target||d.$$.root};a&&a(h.root);let p=!1;if(h.ctx=l?l(e,u.props||{},((t,i,...n)=>{const u=n.length?n[0]:i;return h.ctx&&o(h.ctx[t],h.ctx[t]=u)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](u),p&&M(e,t)),i})):[],h.update(),p=!0,n(h.before_update),h.fragment=!!r&&r(h.ctx),u.target){if(u.hydrate){const t=function(t){return Array.from(t.childNodes)}(u.target);h.fragment&&h.fragment.l(t),t.forEach(m)}else h.fragment&&h.fragment.c();u.intro&&q(e.$$.fragment),K(e,u.target,u.anchor,u.customElement),T()}b(d)}class J{$destroy(){R(this,1),this.$destroy=t}$on(e,i){if(!u(i))return t;const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(i),()=>{const t=n.indexOf(i);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Q(t,e,i){const n=t.slice();return n[12]=e[i],n}function W(t){let e,i,n=t[12]+"";return{c(){e=w("p"),i=d(n),f(e,"class","lyrics-line svelte-y7qwkx")},m(t,n){a(t,e,n),c(e,i)},p(t,e){1&e&&n!==(n=t[12]+"")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(i,n)},d(t){t&&m(e)}}}function B(t){let e;return{c(){e=w("span"),e.textContent="▶",f(e,"class","play-icon show svelte-y7qwkx")},m(t,i){a(t,e,i)},d(t){t&&m(e)}}}function C(t){let e,i,n,u,l,r,s;return{c(){e=w("div"),i=w("iframe"),u=h(),l=w("div"),l.textContent="닫기",f(i,"width","640"),f(i,"height","480"),o(i.src,n=t[1])||f(i,"src",n),f(i,"frameborder","0"),f(i,"title","mv"),i.allowFullscreen=!0,f(l,"class","close-button"),f(e,"class","video-player show svelte-y7qwkx")},m(n,o){a(n,e,o),c(e,i),c(e,u),c(e,l),r||(s=p(l,"click",t[6]),r=!0)},p(t,e){2&e&&!o(i.src,n=t[1])&&f(i,"src",n)},d(t){t&&m(e),r=!1,s()}}}function D(e){let i,u,l,r,s,o=e[0],d=[];for(let t=0;t<o.length;t+=1)d[t]=W(Q(e,o,t));let b=e[2]&&B(),y=e[3]&&C(e);return{c(){i=w("div");for(let t=0;t<d.length;t+=1)d[t].c();u=h(),b&&b.c(),l=h(),y&&y.c(),f(i,"class","lyrics svelte-y7qwkx")},m(t,n){a(t,i,n);for(let t=0;t<d.length;t+=1)d[t]&&d[t].m(i,null);c(i,u),b&&b.m(i,null),c(i,l),y&&y.m(i,null),r||(s=[p(i,"mouseover",e[4]),p(i,"mouseout",e[4]),p(i,"click",e[5])],r=!0)},p(t,[e]){if(1&e){let n;for(o=t[0],n=0;n<o.length;n+=1){const l=Q(t,o,n);d[n]?d[n].p(l,e):(d[n]=W(l),d[n].c(),d[n].m(i,u))}for(;n<d.length;n+=1)d[n].d(1);d.length=o.length}t[2]?b||(b=B(),b.c(),b.m(i,l)):b&&(b.d(1),b=null),t[3]?y?y.p(t,e):(y=C(t),y.c(),y.m(i,null)):y&&(y.d(1),y=null)},i:t,o:t,d(t){t&&m(i),function(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}(d,t),b&&b.d(),y&&y.d(),r=!1,n(s)}}}function z(t,e,i){let n,u=[],l=!1,r=!1,s=new Date;s.setHours(s.getHours());let o=s.getDate()-1,c=[{id:1,title:"하늘 위로(Up)",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp",mvurl:"https://www.youtube.com/embed/QqlxGUm9MLE?si=nD-Lh8hON1QY3Nqv",date:"2024-01-01",lyricsNum:2,lyrics:["구름에 적어둬 없어지지 않도록","언제나 보고 싶을때 나만 꺼내 볼거야"]},{id:2,title:"별의 하모니(Harmoney of stars)",artist:"QWER",thumbnail:"https://i.namu.wiki/i/TclIk6XCp0alVu2n2N5-kOfqxjcmGFzzsiA5R0BLSMksnvLvO8RFsTd7zTRMDDK9yjI-vDsw7PKIOpf_vQjeACESafkrTYu0Rn8l6jPzf6zQucRvtSBf3MvKD_MThWdum3PFzHfT4NTZWy1co5jXYg.webp",mvurl:"https://www.youtube.com/embed/On6Pm4M-dQQ?si=tcSPM0vq7Gx3ES7E",date:"2024-01-02",lyricsNum:3,lyrics:["너와 함께라는 이유로 운명을 믿어 난","눈 앞에 펼쳐진 미랠 향해 인사를 해","빛나는 별처럼"]},{id:3,title:"Jump",artist:"김동률",thumbnail:"https://i.namu.wiki/i/wTLNyckul3i0nKFfIZVq1XAe-88hlbi_EHzxUvVTe188eRq0naWpnLtZ_Pkx1FgBt7rIMj5e90xU7XHhTr45zFkSglqfmwkabKfX4JKVGp_fZuw2VHGdwt0bvd3mj2K8Jv2AAwTEwRCBkOiS-nFRZQ.webp",mvurl:"https://www.youtube.com/embed/-FSQ3DaVE9E?si=Qrq5IihGYxIkZwaY",mvurlalt:"https://www.youtube.com/embed/wbXSaM2-vQ0?si=7xj8_8qdsx1PK65a",date:"2024-01-03",lyricsNum:3,lyrics:["하고 싶은 일이 많았었는데 웬일인지 다 시시해","아직 모든게 신기한 내 스무 살 때 처럼","새로운 일들에 설레하며 가슴이 뛰고 싶어"]},{id:4,title:"우주를 줄게",artist:"볼빨간사춘기",thumbnail:"https://i.namu.wiki/i/vbcm7cee53m6nahs4pvwTZtGC8FLZO2REPEcJDpNAh6C3gIDetj5Dc2k0zTVxnZGBu0Pix9ovsDrfv2wgn06NxXLOWXaz7bJEoXJuxm3DKNFWcM9ifjqh06vwMRusLljFljwgHtvOzrEJ3pE8c4TSA.webp",mvurl:"https://www.youtube.com/embed/MYBScu8ha0I?si=n4wYHMREdldxCeV1",mvurlalt:"https://www.youtube.com/embed/9U8uA702xrE?si=0usD_JtOKHdUE3vy",date:"2024-01-04",lyricsNum:4,lyrics:["어제는 내가 기분이 참 좋아서","지나간 행성에다가 그대 이름 새겨 놓았죠","한참 뒤에 별빛이 내리면","그 별이 가장 밝게 빛나요"]},{id:5,title:"회전목마 (Feat. Zion.T, 원슈타인)",artist:"소코도모",thumbnail:"https://i.namu.wiki/i/7fQgahkg_dZ4353cvUnfw6Rq0j4FbWw-5o8UEJx__qsH62aVQL4_8cIrem0BNWRSK-Xtj3UAp2KruLSREHmkFxhpGZVbVbow8nuiEGOyAsPXlEZfWy9qwrjmhMLjKyb_dSMvYZsZM_oV-YVoks6Iog.webp",mvurl:"https://www.youtube.com/embed/tnAxZipkuWw?si=a5d_M-sCFcteBnJb",mvurlalt:" ",date:"2024-01-05",lyricsNum:4,lyrics:["빙빙 돌아가는 회전목마처럼","영원히 계속될 것처럼","빙빙 돌아온 우리의 시간처럼","인생은 회전목마"]},{id:6,title:"Either Way",artist:"IVE (아이브)",thumbnail:"https://i.namu.wiki/i/WU4wKflKkzaeq_bhXiLPDcud6WmEJP07Km-mo7c1jpsG4a853y87xBVVxT_elb_KgxhTxiEw7mlGTeHcC8i3SYuC1Ron9Ofb75DeTL9PKM1SUmhj759ou7xSrlJxh6LWNXwiBpqsgsTqI6fKHf9N8A.webp",mvurl:"https://www.youtube.com/embed/cJc62vZZs8A?si=PNfhOW_qZBzvZmwQ",mvurlalt:"https://www.youtube.com/embed/_Hu4GYtye5U?si=lQb7iLfQyybk5MGF",date:"2024-01-06",lyricsNum:2,lyrics:["쟤 I 라서 그래 넌 E 라서 그래","됐고 그냥 V 나 하자"]},{id:7,title:"MIRROR",artist:"권은비",thumbnail:"https://i.namu.wiki/i/PVxdfPyaX6oHXzJYA75rzu4kAkHUB2uwvl-6LhCJdAbN43zZiqBRm1dC3lZNy6irmjyr7XhtHxmmq4Z7uWP3492lI1sLxynK-cr2G-tqy7FTXyupIga5qGSeCON0a5KTdHtqnJAGmF82nQ86aswmRg.webp",mvurl:"https://www.youtube.com/embed/V7KHhsUMAI0?si=2LI6a95J_jhnF_UH",mvurlalt:" ",date:"2024-01-07",lyricsNum:3,lyrics:["외로웠던 시간 버텨왔던 날들","잘해왔잖아 모두 다","좀 느려도 괜찮아 내가 여기 기다릴게"]},{id:8,title:"사건의 지평선",artist:"윤하",thumbnail:"https://i.namu.wiki/i/tVpSZIeqgkQXACiB3Cr12HZ7kBdas93tIJZz9z2zmth9DWEUTfxVslb88hIEDhJ0-CPjnCNtgL27pnvR_sg9IoDm_jV7-x-8_INrzV_kB6jl-A5GsBwdYgmJ8eprYySi8GiO71tJYI3EIw-m6aF_cw.webp",mvurl:"https://www.youtube.com/embed/BBdC1rl5sKY?si=fVus5iX5Si_j-qQ2",mvurlalt:" ",date:"2024-01-08",lyricsNum:3,lyrics:["솔직히 두렵기도 하지만","노력은 우리에게 정답이 아니라서","마지막 선물은 산뜻한 안녕"]},{id:9,title:"This Time",artist:"조유리",thumbnail:"https://i.namu.wiki/i/xz_c11EoM1gMomoS1HuiRrOb6NOaZxqi_jo1yfzW9suzh90jpvHWooTFK688B-2htvfTNbkp3TR4PTuucWwDPwPqfA1FMn_6j1Wn7cjeQbI6AGntCTo-EngIHsXUn2tqwQr-BGicC1jbT_-VE2CVyw.webp",mvurl:"https://www.youtube.com/embed/QkOPJG1DwWU?si=zOzWBt5CKh0tdyH7",mvurlalt:" ",date:"2024-01-09",lyricsNum:4,lyrics:["반짝이는 저 하늘의 별 곁에 은은한 달빛","소리 없이 마음을 울리는 따뜻한 손길","일렁이는 물결처럼 가끔은 두려워도","간절한 이 꿈속에 우리가 있어"]},{id:10,title:"This Time",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/2eaWoLJNiHx35ChvW1Z-6OzuA-DhtuZd4a4j6bwQU5mVo_ZRQSvfgx9qNGRRtHaV7l0TgB3N8t_MgFHbK1pH-cyQNjqpVG6jocfJbGYBaFJWyEZYHWl-rijR5YQyNJa9HQ9uV127QYZPNg6G0Z6Jiw.webp",mvurl:"https://www.youtube.com/embed/BaKSB650TNk?si=rIUIm_wK5tRcmaAV",mvurlalt:" ",date:"2024-01-10",lyricsNum:4,lyrics:["언젠가 우리의 밤도 모두 지나가겠죠","끝없는 어둠이 밀려와도 난 다신","두려워하지는 않죠 우리 두 손 꼭 잡고서","어둠 끝자락 함께 걸어갈게요"]}];for(let t=0;t<c[o].lyricsNum;t++){let e=c[o].lyrics[t];u=[...u,e]}function a(){i(3,r=!r),console.log("toggleVideoPlayer called")}console.log(u),c[o].lyrics1,c[o].lyrics2,n=c[o].mvurl,console.log(n);return[u,n,l,r,function(){i(2,l=!l)},a,t=>{t.stopPropagation(),a()}]}class F extends J{constructor(t){super(),A(this,t,z,D,l,{})}}function G(e){let i,n,u,l,r,s,o,c,w=e[1].getFullYear()+"",h=e[1].getMonth()+1+"",p=e[1].getDate()+"";return{c(){i=d(w),n=d("년 "),u=d(h),l=d("월 "),r=d(p),s=d("일 "),o=d(e[2]),c=d("요일, 오늘의 노래")},m(t,e){a(t,i,e),a(t,n,e),a(t,u,e),a(t,l,e),a(t,r,e),a(t,s,e),a(t,o,e),a(t,c,e)},p:t,d(t){t&&m(i),t&&m(n),t&&m(u),t&&m(l),t&&m(r),t&&m(s),t&&m(o),t&&m(c)}}}function S(e){let i,n,u,l,r,s,o,c,w=e[1].getFullYear()+"",h=e[1].getMonth()+1+"",p=e[1].getDate()+"";return{c(){i=d(w),n=d("년 "),u=d(h),l=d("월 "),r=d(p),s=d("일 "),o=d(e[2]),c=d("요일, 올해의 첫 노래")},m(t,e){a(t,i,e),a(t,n,e),a(t,u,e),a(t,l,e),a(t,r,e),a(t,s,e),a(t,o,e),a(t,c,e)},p:t,d(t){t&&m(i),t&&m(n),t&&m(u),t&&m(l),t&&m(r),t&&m(s),t&&m(o),t&&m(c)}}}function P(e){let i,n,u,l,r,s,o,c,w=e[1].getFullYear()+"",h=e[1].getMonth()+1+"",p=e[1].getDate()+"";return{c(){i=d(w),n=d("년 "),u=d(h),l=d("월 "),r=d(p),s=d("일 "),o=d(e[2]),c=d("요일, 올해의 마지막 노래")},m(t,e){a(t,i,e),a(t,n,e),a(t,u,e),a(t,l,e),a(t,r,e),a(t,s,e),a(t,o,e),a(t,c,e)},p:t,d(t){t&&m(i),t&&m(n),t&&m(u),t&&m(l),t&&m(r),t&&m(s),t&&m(o),t&&m(c)}}}function $(e){let i,n,u;return n=new F({}),{c(){var t,u,l,r,s;i=w("div"),(t=n.$$.fragment)&&t.c(),f(i,"class","album-art svelte-1iptbpe"),u=i,l="background-image",null==(r="url("+e[0][e[3]].thumbnail+")")?u.style.removeProperty(l):u.style.setProperty(l,r,s?"important":"")},m(t,e){a(t,i,e),K(n,i,null),u=!0},p:t,i(t){u||(q(n.$$.fragment,t),u=!0)},o(t){V(n.$$.fragment,t),u=!1},d(t){t&&m(i),R(n)}}}function O(e){let i;return{c(){i=d("아직 서비스 오픈하지 않았습니다.")},m(t,e){a(t,i,e)},p:t,i:t,o:t,d(t){t&&m(i)}}}function L(t){let e,i,n,u,l,r,s,o,d;let p=function(t,e){return 11==t[1].getMonth()&&31==t[1].getDate()?P:0==t[1].getMonth()&&1==t[1].getDate()?S:G}(t),b=p(t);const y=[O,$],v=[];return s=function(t,e){return 11==t[1].getMonth()&&31==t[1].getDate()?0:1}(t),o=v[s]=y[s](t),{c(){e=w("header"),i=w("div"),b.c(),n=h(),u=w("div"),u.textContent=`${X}`,l=h(),r=w("div"),o.c(),f(i,"class","date-info svelte-1iptbpe"),f(u,"class","title svelte-1iptbpe"),f(e,"class","svelte-1iptbpe"),f(r,"class","container svelte-1iptbpe")},m(t,o){a(t,e,o),c(e,i),b.m(i,null),c(e,n),c(e,u),a(t,l,o),a(t,r,o),v[s].m(r,null),d=!0},p(t,[e]){b.p(t,e),o.p(t,e)},i(t){d||(q(o),d=!0)},o(t){V(o),d=!1},d(t){t&&m(e),b.d(),t&&m(l),t&&m(r),v[s].d()}}}let X="하루 한 곡";function Y(t){let e=new Date;e.setHours(e.getHours());let i=["일","월","화","수","목","금","토"][e.getDay()],n=e.getDate()-1;return console.log(e),[[{id:1,title:"하늘 위로(Up)",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp",mvurl:"https://www.youtube.com/embed/QqlxGUm9MLE?si=nD-Lh8hON1QY3Nqv",date:"2024-01-01",lyricsNum:2,lyrics:["구름에 적어둬 없어지지 않도록","언제나 보고 싶을때 나만 꺼내 볼거야"]},{id:2,title:"별의 하모니(Harmoney of stars)",artist:"QWER",thumbnail:"https://i.namu.wiki/i/TclIk6XCp0alVu2n2N5-kOfqxjcmGFzzsiA5R0BLSMksnvLvO8RFsTd7zTRMDDK9yjI-vDsw7PKIOpf_vQjeACESafkrTYu0Rn8l6jPzf6zQucRvtSBf3MvKD_MThWdum3PFzHfT4NTZWy1co5jXYg.webp",mvurl:"https://www.youtube.com/embed/On6Pm4M-dQQ?si=tcSPM0vq7Gx3ES7E",date:"2024-01-02",lyricsNum:3,lyrics:["너와 함께라는 이유로 운명을 믿어 난","눈 앞에 펼쳐진 미랠 향해 인사를 해","빛나는 별처럼"]},{id:3,title:"Jump",artist:"김동률",thumbnail:"https://i.namu.wiki/i/wTLNyckul3i0nKFfIZVq1XAe-88hlbi_EHzxUvVTe188eRq0naWpnLtZ_Pkx1FgBt7rIMj5e90xU7XHhTr45zFkSglqfmwkabKfX4JKVGp_fZuw2VHGdwt0bvd3mj2K8Jv2AAwTEwRCBkOiS-nFRZQ.webp",mvurl:"https://www.youtube.com/embed/-FSQ3DaVE9E?si=Qrq5IihGYxIkZwaY",mvurlalt:"https://www.youtube.com/embed/wbXSaM2-vQ0?si=7xj8_8qdsx1PK65a",date:"2024-01-03",lyricsNum:3,lyrics:["하고 싶은 일이 많았었는데 웬일인지 다 시시해","아직 모든게 신기한 내 스무 살 때 처럼","새로운 일들에 설레하며 가슴이 뛰고 싶어"]},{id:4,title:"우주를 줄게",artist:"볼빨간사춘기",thumbnail:"https://i.namu.wiki/i/vbcm7cee53m6nahs4pvwTZtGC8FLZO2REPEcJDpNAh6C3gIDetj5Dc2k0zTVxnZGBu0Pix9ovsDrfv2wgn06NxXLOWXaz7bJEoXJuxm3DKNFWcM9ifjqh06vwMRusLljFljwgHtvOzrEJ3pE8c4TSA.webp",mvurl:"https://www.youtube.com/embed/MYBScu8ha0I?si=n4wYHMREdldxCeV1",mvurlalt:"https://www.youtube.com/embed/9U8uA702xrE?si=0usD_JtOKHdUE3vy",date:"2024-01-03",lyricsNum:4,lyrics:["어제는 내가 기분이 참 좋아서","지나간 행성에다가 그대 이름 새겨 놓았죠","한참 뒤에 별빛이 내리면","그 별이 가장 밝게 빛나요"]},{id:5,title:"회전목마 (Feat. Zion.T, 원슈타인)",artist:"소코도모",thumbnail:"https://i.namu.wiki/i/7fQgahkg_dZ4353cvUnfw6Rq0j4FbWw-5o8UEJx__qsH62aVQL4_8cIrem0BNWRSK-Xtj3UAp2KruLSREHmkFxhpGZVbVbow8nuiEGOyAsPXlEZfWy9qwrjmhMLjKyb_dSMvYZsZM_oV-YVoks6Iog.webp",mvurl:"https://www.youtube.com/embed/tnAxZipkuWw?si=a5d_M-sCFcteBnJb",mvurlalt:" ",date:"2024-01-04",lyricsNum:4,lyrics:["빙빙 돌아가는 회전목마처럼","영원히 계속될 것처럼","빙빙 돌아온 우리의 시간처럼","인생은 회전목마"]},{id:6,title:"Either Way",artist:"IVE (아이브)",thumbnail:"https://i.namu.wiki/i/WU4wKflKkzaeq_bhXiLPDcud6WmEJP07Km-mo7c1jpsG4a853y87xBVVxT_elb_KgxhTxiEw7mlGTeHcC8i3SYuC1Ron9Ofb75DeTL9PKM1SUmhj759ou7xSrlJxh6LWNXwiBpqsgsTqI6fKHf9N8A.webp",mvurl:"https://www.youtube.com/embed/cJc62vZZs8A?si=PNfhOW_qZBzvZmwQ",mvurlalt:"https://www.youtube.com/embed/_Hu4GYtye5U?si=lQb7iLfQyybk5MGF",date:"2024-01-05",lyricsNum:2,lyrics:["쟤 I 라서 그래 넌 E 라서 그래","됐고 그냥 V 나 하자"]},{id:7,title:"MIRROR",artist:"권은비",thumbnail:"https://i.namu.wiki/i/PVxdfPyaX6oHXzJYA75rzu4kAkHUB2uwvl-6LhCJdAbN43zZiqBRm1dC3lZNy6irmjyr7XhtHxmmq4Z7uWP3492lI1sLxynK-cr2G-tqy7FTXyupIga5qGSeCON0a5KTdHtqnJAGmF82nQ86aswmRg.webp",mvurl:"https://www.youtube.com/embed/V7KHhsUMAI0?si=2LI6a95J_jhnF_UH",mvurlalt:" ",date:"2024-01-06",lyricsNum:3,lyrics:["외로웠던 시간 버텨왔던 날들","잘해왔잖아 모두 다","좀 느려도 괜찮아 내가 여기 기다릴게"]},{id:8,title:"사건의 지평선",artist:"윤하",thumbnail:"https://i.namu.wiki/i/tVpSZIeqgkQXACiB3Cr12HZ7kBdas93tIJZz9z2zmth9DWEUTfxVslb88hIEDhJ0-CPjnCNtgL27pnvR_sg9IoDm_jV7-x-8_INrzV_kB6jl-A5GsBwdYgmJ8eprYySi8GiO71tJYI3EIw-m6aF_cw.webp",mvurl:"https://www.youtube.com/embed/BBdC1rl5sKY?si=fVus5iX5Si_j-qQ2",mvurlalt:" ",date:"2024-01-08",lyricsNum:3,lyrics:["솔직히 두렵기도 하지만","노력은 우리에게 정답이 아니라서","마지막 선물은 산뜻한 안녕"]},{id:9,title:"This Time",artist:"조유리",thumbnail:"https://i.namu.wiki/i/xz_c11EoM1gMomoS1HuiRrOb6NOaZxqi_jo1yfzW9suzh90jpvHWooTFK688B-2htvfTNbkp3TR4PTuucWwDPwPqfA1FMn_6j1Wn7cjeQbI6AGntCTo-EngIHsXUn2tqwQr-BGicC1jbT_-VE2CVyw.webp",mvurl:"https://www.youtube.com/embed/QkOPJG1DwWU?si=zOzWBt5CKh0tdyH7",mvurlalt:" ",date:"2024-01-09",lyricsNum:4,lyrics:["반짝이는 저 하늘의 별 곁에 은은한 달빛","소리 없이 마음을 울리는 따뜻한 손길","일렁이는 물결처럼 가끔은 두려워도","간절한 이 꿈속에 우리가 있어"]},{id:10,title:"This Time",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/2eaWoLJNiHx35ChvW1Z-6OzuA-DhtuZd4a4j6bwQU5mVo_ZRQSvfgx9qNGRRtHaV7l0TgB3N8t_MgFHbK1pH-cyQNjqpVG6jocfJbGYBaFJWyEZYHWl-rijR5YQyNJa9HQ9uV127QYZPNg6G0Z6Jiw.webp",mvurl:"https://www.youtube.com/embed/BaKSB650TNk?si=rIUIm_wK5tRcmaAV",mvurlalt:" ",date:"2024-01-10",lyricsNum:4,lyrics:["언젠가 우리의 밤도 모두 지나가겠죠","끝없는 어둠이 밀려와도 난 다신","두려워하지는 않죠 우리 두 손 꼭 잡고서","어둠 끝자락 함께 걸어갈게요"]}],e,i,n]}return new class extends J{constructor(t){super(),A(this,t,Y,L,l,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
