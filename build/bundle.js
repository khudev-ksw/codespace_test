var app=function(){"use strict";function t(){}function e(t){return t()}function i(){return Object.create(null)}function u(t){t.forEach(e)}function l(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}let r,m;function n(t,e){return r||(r=document.createElement("a")),r.href=e,t===r.href}function a(t,e){t.appendChild(e)}function o(t,e,i){t.insertBefore(e,i||null)}function c(t){t.parentNode&&t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function h(){return d(" ")}function b(t,e,i,u){return t.addEventListener(e,i,u),()=>t.removeEventListener(e,i,u)}function p(t,e,i){null==i?t.removeAttribute(e):t.getAttribute(e)!==i&&t.setAttribute(e,i)}function y(t){m=t}const f=[],v=[];let g=[];const k=[],N=Promise.resolve();let _=!1;function x(t){g.push(t)}const E=new Set;let I=0;function S(){if(0!==I)return;const t=m;do{try{for(;I<f.length;){const t=f[I];I++,y(t),j(t.$$)}}catch(t){throw f.length=0,I=0,t}for(y(null),f.length=0,I=0;v.length;)v.pop()();for(let t=0;t<g.length;t+=1){const e=g[t];E.has(e)||(E.add(e),e())}g.length=0}while(f.length);for(;k.length;)k.pop()();_=!1,E.clear(),y(t)}function j(t){if(null!==t.fragment){t.update(),u(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(x)}}const J=new Set;let Z;function H(t,e){t&&t.i&&(J.delete(t),t.i(e))}function K(t,e,i,u){if(t&&t.o){if(J.has(t))return;J.add(t),Z.c.push((()=>{J.delete(t),u&&(i&&t.d(1),u())})),t.o(e)}else u&&u()}function M(t,i,s,r){const{fragment:m,after_update:n}=t.$$;m&&m.m(i,s),r||x((()=>{const i=t.$$.on_mount.map(e).filter(l);t.$$.on_destroy?t.$$.on_destroy.push(...i):u(i),t.$$.on_mount=[]})),n.forEach(x)}function T(t,e){const i=t.$$;null!==i.fragment&&(!function(t){const e=[],i=[];g.forEach((u=>-1===t.indexOf(u)?e.push(u):i.push(u))),i.forEach((t=>t())),g=e}(i.after_update),u(i.on_destroy),i.fragment&&i.fragment.d(e),i.on_destroy=i.fragment=null,i.ctx=[])}function Q(t,e){-1===t.$$.dirty[0]&&(f.push(t),_||(_=!0,N.then(S)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function V(e,l,s,r,n,a,o,w=[-1]){const d=m;y(e);const h=e.$$={fragment:null,ctx:[],props:a,update:t,not_equal:n,bound:i(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(d?d.$$.context:[])),callbacks:i(),dirty:w,skip_bound:!1,root:l.target||d.$$.root};o&&o(h.root);let b=!1;if(h.ctx=s?s(e,l.props||{},((t,i,...u)=>{const l=u.length?u[0]:i;return h.ctx&&n(h.ctx[t],h.ctx[t]=l)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](l),b&&Q(e,t)),i})):[],h.update(),b=!0,u(h.before_update),h.fragment=!!r&&r(h.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);h.fragment&&h.fragment.l(t),t.forEach(c)}else h.fragment&&h.fragment.c();l.intro&&H(e.$$.fragment),M(e,l.target,l.anchor,l.customElement),S()}y(d)}class R{$destroy(){T(this,1),this.$destroy=t}$on(e,i){if(!l(i))return t;const u=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return u.push(i),()=>{const t=u.indexOf(i);-1!==t&&u.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function q(t,e,i){const u=t.slice();return u[12]=e[i],u}function B(t){let e,i,u=t[12]+"";return{c(){e=w("p"),i=d(u),p(e,"class","lyrics-line svelte-y7qwkx")},m(t,u){o(t,e,u),a(e,i)},p(t,e){1&e&&u!==(u=t[12]+"")&&function(t,e){e=""+e,t.data!==e&&(t.data=e)}(i,u)},d(t){t&&c(e)}}}function U(t){let e;return{c(){e=w("span"),e.textContent="▶",p(e,"class","play-icon show svelte-y7qwkx")},m(t,i){o(t,e,i)},d(t){t&&c(e)}}}function C(t){let e,i,u,l,s,r,m;return{c(){e=w("div"),i=w("iframe"),l=h(),s=w("div"),s.textContent="닫기",p(i,"width","640"),p(i,"height","480"),n(i.src,u=t[1])||p(i,"src",u),p(i,"frameborder","0"),p(i,"title","mv"),i.allowFullscreen=!0,p(s,"class","close-button"),p(e,"class","video-player show svelte-y7qwkx")},m(u,n){o(u,e,n),a(e,i),a(e,l),a(e,s),r||(m=b(s,"click",t[6]),r=!0)},p(t,e){2&e&&!n(i.src,u=t[1])&&p(i,"src",u)},d(t){t&&c(e),r=!1,m()}}}function Y(e){let i,l,s,r,m,n=e[0],d=[];for(let t=0;t<n.length;t+=1)d[t]=B(q(e,n,t));let y=e[2]&&U(),f=e[3]&&C(e);return{c(){i=w("div");for(let t=0;t<d.length;t+=1)d[t].c();l=h(),y&&y.c(),s=h(),f&&f.c(),p(i,"class","lyrics svelte-y7qwkx")},m(t,u){o(t,i,u);for(let t=0;t<d.length;t+=1)d[t]&&d[t].m(i,null);a(i,l),y&&y.m(i,null),a(i,s),f&&f.m(i,null),r||(m=[b(i,"mouseover",e[4]),b(i,"mouseout",e[4]),b(i,"click",e[5])],r=!0)},p(t,[e]){if(1&e){let u;for(n=t[0],u=0;u<n.length;u+=1){const s=q(t,n,u);d[u]?d[u].p(s,e):(d[u]=B(s),d[u].c(),d[u].m(i,l))}for(;u<d.length;u+=1)d[u].d(1);d.length=n.length}t[2]?y||(y=U(),y.c(),y.m(i,s)):y&&(y.d(1),y=null),t[3]?f?f.p(t,e):(f=C(t),f.c(),f.m(i,null)):f&&(f.d(1),f=null)},i:t,o:t,d(t){t&&c(i),function(t,e){for(let i=0;i<t.length;i+=1)t[i]&&t[i].d(e)}(d,t),y&&y.d(),f&&f.d(),r=!1,u(m)}}}function A(t,e,i){let u,l=[],s=!1,r=!1,m=new Date;m.setHours(m.getHours());let n=m.getDate()-1,a=[{id:1,title:"하늘 위로(Up)",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp",mvurl:"https://www.youtube.com/embed/QqlxGUm9MLE?si=nD-Lh8hON1QY3Nqv",date:"2024-01-01",lyricsNum:2,lyrics:["구름에 적어둬 없어지지 않도록","언제나 보고 싶을때 나만 꺼내 볼거야"]},{id:2,title:"별의 하모니(Harmoney of stars)",artist:"QWER",thumbnail:"https://i.namu.wiki/i/TclIk6XCp0alVu2n2N5-kOfqxjcmGFzzsiA5R0BLSMksnvLvO8RFsTd7zTRMDDK9yjI-vDsw7PKIOpf_vQjeACESafkrTYu0Rn8l6jPzf6zQucRvtSBf3MvKD_MThWdum3PFzHfT4NTZWy1co5jXYg.webp",mvurl:"https://www.youtube.com/embed/On6Pm4M-dQQ?si=tcSPM0vq7Gx3ES7E",date:"2024-01-02",lyricsNum:3,lyrics:["너와 함께라는 이유로 운명을 믿어 난","눈 앞에 펼쳐진 미랠 향해 인사를 해","빛나는 별처럼"]},{id:3,title:"Jump",artist:"김동률",thumbnail:"https://i.namu.wiki/i/wTLNyckul3i0nKFfIZVq1XAe-88hlbi_EHzxUvVTe188eRq0naWpnLtZ_Pkx1FgBt7rIMj5e90xU7XHhTr45zFkSglqfmwkabKfX4JKVGp_fZuw2VHGdwt0bvd3mj2K8Jv2AAwTEwRCBkOiS-nFRZQ.webp",mvurl:"https://www.youtube.com/embed/-FSQ3DaVE9E?si=Qrq5IihGYxIkZwaY",mvurlalt:"https://www.youtube.com/embed/wbXSaM2-vQ0?si=7xj8_8qdsx1PK65a",date:"2024-01-03",lyricsNum:3,lyrics:["하고 싶은 일이 많았었는데 웬일인지 다 시시해","아직 모든게 신기한 내 스무 살 때 처럼","새로운 일들에 설레하며 가슴이 뛰고 싶어"]},{id:4,title:"우주를 줄게",artist:"볼빨간사춘기",thumbnail:"https://i.namu.wiki/i/vbcm7cee53m6nahs4pvwTZtGC8FLZO2REPEcJDpNAh6C3gIDetj5Dc2k0zTVxnZGBu0Pix9ovsDrfv2wgn06NxXLOWXaz7bJEoXJuxm3DKNFWcM9ifjqh06vwMRusLljFljwgHtvOzrEJ3pE8c4TSA.webp",mvurl:"https://www.youtube.com/embed/MYBScu8ha0I?si=n4wYHMREdldxCeV1",mvurlalt:"https://www.youtube.com/embed/9U8uA702xrE?si=0usD_JtOKHdUE3vy",date:"2024-01-04",lyricsNum:4,lyrics:["어제는 내가 기분이 참 좋아서","지나간 행성에다가 그대 이름 새겨 놓았죠","한참 뒤에 별빛이 내리면","그 별이 가장 밝게 빛나요"]},{id:5,title:"회전목마 (Feat. Zion.T, 원슈타인)",artist:"소코도모",thumbnail:"https://i.namu.wiki/i/7fQgahkg_dZ4353cvUnfw6Rq0j4FbWw-5o8UEJx__qsH62aVQL4_8cIrem0BNWRSK-Xtj3UAp2KruLSREHmkFxhpGZVbVbow8nuiEGOyAsPXlEZfWy9qwrjmhMLjKyb_dSMvYZsZM_oV-YVoks6Iog.webp",mvurl:"https://www.youtube.com/embed/tnAxZipkuWw?si=a5d_M-sCFcteBnJb",mvurlalt:" ",date:"2024-01-05",lyricsNum:4,lyrics:["빙빙 돌아가는 회전목마처럼","영원히 계속될 것처럼","빙빙 돌아온 우리의 시간처럼","인생은 회전목마"]},{id:6,title:"Either Way",artist:"IVE (아이브)",thumbnail:"https://i.namu.wiki/i/WU4wKflKkzaeq_bhXiLPDcud6WmEJP07Km-mo7c1jpsG4a853y87xBVVxT_elb_KgxhTxiEw7mlGTeHcC8i3SYuC1Ron9Ofb75DeTL9PKM1SUmhj759ou7xSrlJxh6LWNXwiBpqsgsTqI6fKHf9N8A.webp",mvurl:"https://www.youtube.com/embed/cJc62vZZs8A?si=PNfhOW_qZBzvZmwQ",mvurlalt:"https://www.youtube.com/embed/_Hu4GYtye5U?si=lQb7iLfQyybk5MGF",date:"2024-01-06",lyricsNum:2,lyrics:["쟤 I 라서 그래 넌 E 라서 그래","됐고 그냥 V 나 하자"]},{id:7,title:"MIRROR",artist:"권은비",thumbnail:"https://i.namu.wiki/i/PVxdfPyaX6oHXzJYA75rzu4kAkHUB2uwvl-6LhCJdAbN43zZiqBRm1dC3lZNy6irmjyr7XhtHxmmq4Z7uWP3492lI1sLxynK-cr2G-tqy7FTXyupIga5qGSeCON0a5KTdHtqnJAGmF82nQ86aswmRg.webp",mvurl:"https://www.youtube.com/embed/V7KHhsUMAI0?si=2LI6a95J_jhnF_UH",mvurlalt:" ",date:"2024-01-07",lyricsNum:3,lyrics:["외로웠던 시간 버텨왔던 날들","잘해왔잖아 모두 다","좀 느려도 괜찮아 내가 여기 기다릴게"]},{id:8,title:"사건의 지평선",artist:"윤하",thumbnail:"https://i.namu.wiki/i/tVpSZIeqgkQXACiB3Cr12HZ7kBdas93tIJZz9z2zmth9DWEUTfxVslb88hIEDhJ0-CPjnCNtgL27pnvR_sg9IoDm_jV7-x-8_INrzV_kB6jl-A5GsBwdYgmJ8eprYySi8GiO71tJYI3EIw-m6aF_cw.webp",mvurl:"https://www.youtube.com/embed/BBdC1rl5sKY?si=fVus5iX5Si_j-qQ2",mvurlalt:" ",date:"2024-01-08",lyricsNum:3,lyrics:["솔직히 두렵기도 하지만","노력은 우리에게 정답이 아니라서","마지막 선물은 산뜻한 안녕"]},{id:9,title:"This Time",artist:"조유리",thumbnail:"https://i.namu.wiki/i/xz_c11EoM1gMomoS1HuiRrOb6NOaZxqi_jo1yfzW9suzh90jpvHWooTFK688B-2htvfTNbkp3TR4PTuucWwDPwPqfA1FMn_6j1Wn7cjeQbI6AGntCTo-EngIHsXUn2tqwQr-BGicC1jbT_-VE2CVyw.webp",mvurl:"https://www.youtube.com/embed/QkOPJG1DwWU?si=zOzWBt5CKh0tdyH7",mvurlalt:" ",date:"2024-01-09",lyricsNum:4,lyrics:["반짝이는 저 하늘의 별 곁에 은은한 달빛","소리 없이 마음을 울리는 따뜻한 손길","일렁이는 물결처럼 가끔은 두려워도","간절한 이 꿈속에 우리가 있어"]},{id:10,title:"언젠가 우리의 밤도 지나가겠죠",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/2eaWoLJNiHx35ChvW1Z-6OzuA-DhtuZd4a4j6bwQU5mVo_ZRQSvfgx9qNGRRtHaV7l0TgB3N8t_MgFHbK1pH-cyQNjqpVG6jocfJbGYBaFJWyEZYHWl-rijR5YQyNJa9HQ9uV127QYZPNg6G0Z6Jiw.webp",mvurl:"https://www.youtube.com/embed/BaKSB650TNk?si=rIUIm_wK5tRcmaAV",mvurlalt:" ",date:"2024-01-10",lyricsNum:4,lyrics:["언젠가 우리의 밤도 모두 지나가겠죠","끝없는 어둠이 밀려와도 난 다신","두려워하지는 않죠 우리 두 손 꼭 잡고서","어둠 끝자락 함께 걸어갈게요"]},{id:11,title:"도망가자",artist:"선우정아",thumbnail:"https://image.bugsm.co.kr/album/images/500/202938/20293864.jpg",mvurl:"https://www.youtube.com/embed/4gOfncuKK9k?si=E7a2IwHBUiFkTIuh",mvurlalt:" ",date:"2024-01-11",lyricsNum:5,lyrics:["걱정은 잠시 내려놓고","대신 가볍게 짐을 챙기자","실컷 웃고 다시 돌아오자","거기서는 우리 아무 생각말자","너의 얼굴 위에 빛이 스며들 때까지"]},{id:12,title:"걱정 말아요 그대",artist:"들국화",thumbnail:"https://i.namu.wiki/i/LxUxSjKIJKX1GaWJ-3GzHoA2v1bYHAY-6wSvs0asVdcS3JRw7iXXLp4vG5Q6u0Ug9IcjxcgESWqMAdk7i-CgBoQLruv2dKzAJQRyYLcRMqgSe5Ng4-5VvC0gRFYiCoa0F7oZb-_pg2f5OvfYSikoUA.webp",mvurl:"https://www.youtube.com/embed/zZOCgNXU9eY?si=6qlD7ThpCw32ETVS",mvurlalt:"https://www.youtube.com/embed/K_d75cH7IJw?si=GNv165flwbyY-kpr",date:"2024-01-12",lyricsNum:6,lyrics:["그대 슬픈 얘기들 모두 그대여","그대 탓으로 훌훌 털어 버리고","지나간 것은 지나간 대로","그런 의미가 있죠","우리 다 함께 노래합시다","후회 없이 꿈을 꾸었다 말해요"]},{id:13,title:"SMILEY (Feat. BIBI)",artist:"최예나",thumbnail:"https://i.namu.wiki/i/iLyc8UNJK4bg2uRQDuhOVKpEShb4yXkqJWJkVLsB7P1i6dN16l9m_N6M4uh6tYxD6t-DDQdK6sQhFSIw-bmu5C1cTrWJ4inVWi2oSqBZkaJLF1flLKGq8ySQeVE-T6RZWewtMMZ5IUTWjlDYCi4Jrw.webp",mvurl:"https://www.youtube.com/embed/UboHqi8IQKc?si=Gcn6aB5O7SjsSlf5",mvurlalt:"https://www.youtube.com/embed/y9kkXTucnLU?si=G8CFNPzR-ppQBkql",date:"2024-01-13",lyricsNum:4,lyrics:["And I say hey I'm gonna make it smile smile smile away","예쁘게 웃고 넘겨버릴래","Just Smile away Just smile away","아픔, 슬픔, 외로움 잊게"]},{id:14,title:"괜찮아도 괜찮아 (That's okay)",artist:"디오",thumbnail:"https://i.namu.wiki/i/734o-wvg5zGYLY4IH7fDh4zb_I1B-Z4rsXkmL6f7rhdnpBmN_N-_yHMEqOvbiKpI_u1PBTppIMQbWyVr1U6rSfesThEENuoUseUKBtmjxo5y4S0kkVSx4KjpMJLwtg_LLrINzufdf0Yr0sXMYcRIlA.webp",mvurl:"https://www.youtube.com/embed/4zC0O17rk1o?si=KJlvybL5dx-PNhB9",mvurlalt:"https://www.youtube.com/embed/WTzCWJVjTCM?si=V8JPQ0AB9R-UXmF0",date:"2024-01-14",lyricsNum:5,lyrics:["말하지 못할 고민거리","깊게 상처 난 자리","늘 같은 속도로 흘러가는 시간이","언제나 그랬듯이 씻어내줄 테니","흐르듯 살아도 그냥 괜찮아 괜찮아도"]},{id:15,title:"슈퍼스타",artist:"이한철",thumbnail:"https://image.bugsm.co.kr/album/images/500/80174/8017438.jpg",mvurl:"https://www.youtube.com/embed/URRimPZBHf8?si=zNh4skjl2unD8eVR",mvurlalt:" ",date:"2024-01-15",lyricsNum:4,lyrics:["괜찮아 잘 될 거야","너에겐 눈부신 미래가 있어","괜찮아 잘 될 거야","우린 널 믿어 의심치 않아"]},{id:16,title:"Good Morning",artist:"최예나",thumbnail:"https://i.namu.wiki/i/ruYiQ0zarecKSRXucyOZPoZUl_RmSAheqgP8sY3QV5-g7tx152rEUsi24omvd1JpixlYdsPM0qYV-p37cOQQMfNaZaxQteBSRUZMorv8rvM6I8-pQRmcPMJvlC-tW7bJf-Z6qZbovVODd3wcF__ojg.webp",mvurl:"https://www.youtube.com/embed/jJjKlNeMr-I?si=fiRA8a5KqdYzabpN",mvurlalt:" ",date:"2024-01-16",lyricsNum:3,lyrics:["어젯밤 눈물 자국 지우고","거울 속 내게 말해 Hi Babe","좋은 아침이야 오늘 하루만큼은"]},{id:17,title:"거북이",artist:"트와이스",thumbnail:"https://i.namu.wiki/i/awzb12lAUumWhO0adHRHKcEUPAh0_QMmseuslq2bUgLsSAclv63j8Zk-gx7o3TCNj1HskB_CXqNaoaUaUS2QmDdfS06hD91Putw2cDQpl136ud5865MtJSIdTc-l0hSyor59FpxGkmsUvK4qHPV6Hw.webp",mvurl:"https://www.youtube.com/embed/tVv_C2fYStU?si=0im9kZNlnu0HuY4x",mvurlalt:" ",date:"2024-01-17",lyricsNum:2,lyrics:["늘 이렇게 곁에 내 옆에 있어 줄래","조금 느리면 뭐 어때 나 이렇게 기다릴게"]}];for(let t=0;t<a[n].lyricsNum;t++){let e=a[n].lyrics[t];l=[...l,e]}function o(){i(3,r=!r),console.log("toggleVideoPlayer called")}console.log(l),a[n].lyrics1,a[n].lyrics2,u=a[n].mvurl,console.log(u);return[l,u,s,r,function(){i(2,s=!s)},o,t=>{t.stopPropagation(),o()}]}class z extends R{constructor(t){super(),V(this,t,A,Y,s,{})}}function W(e){let i,u,l,s,r,m,n,a,w=e[1].getFullYear()+"",h=e[1].getMonth()+1+"",b=e[1].getDate()+"";return{c(){i=d(w),u=d("년 "),l=d(h),s=d("월 "),r=d(b),m=d("일 "),n=d(e[2]),a=d("요일, 오늘의 노래")},m(t,e){o(t,i,e),o(t,u,e),o(t,l,e),o(t,s,e),o(t,r,e),o(t,m,e),o(t,n,e),o(t,a,e)},p:t,d(t){t&&c(i),t&&c(u),t&&c(l),t&&c(s),t&&c(r),t&&c(m),t&&c(n),t&&c(a)}}}function D(e){let i,u,l,s,r,m,n,a,w=e[1].getFullYear()+"",h=e[1].getMonth()+1+"",b=e[1].getDate()+"";return{c(){i=d(w),u=d("년 "),l=d(h),s=d("월 "),r=d(b),m=d("일 "),n=d(e[2]),a=d("요일, 올해의 첫 노래")},m(t,e){o(t,i,e),o(t,u,e),o(t,l,e),o(t,s,e),o(t,r,e),o(t,m,e),o(t,n,e),o(t,a,e)},p:t,d(t){t&&c(i),t&&c(u),t&&c(l),t&&c(s),t&&c(r),t&&c(m),t&&c(n),t&&c(a)}}}function L(e){let i,u,l,s,r,m,n,a,w=e[1].getFullYear()+"",h=e[1].getMonth()+1+"",b=e[1].getDate()+"";return{c(){i=d(w),u=d("년 "),l=d(h),s=d("월 "),r=d(b),m=d("일 "),n=d(e[2]),a=d("요일, 올해의 마지막 노래")},m(t,e){o(t,i,e),o(t,u,e),o(t,l,e),o(t,s,e),o(t,r,e),o(t,m,e),o(t,n,e),o(t,a,e)},p:t,d(t){t&&c(i),t&&c(u),t&&c(l),t&&c(s),t&&c(r),t&&c(m),t&&c(n),t&&c(a)}}}function P(e){let i,u,l;return u=new z({}),{c(){var t,l,s,r,m;i=w("div"),(t=u.$$.fragment)&&t.c(),p(i,"class","album-art svelte-1iptbpe"),l=i,s="background-image",null==(r="url("+e[0][e[3]].thumbnail+")")?l.style.removeProperty(s):l.style.setProperty(s,r,m?"important":"")},m(t,e){o(t,i,e),M(u,i,null),l=!0},p:t,i(t){l||(H(u.$$.fragment,t),l=!0)},o(t){K(u.$$.fragment,t),l=!1},d(t){t&&c(i),T(u)}}}function F(e){let i;return{c(){i=d("아직 서비스 오픈하지 않았습니다.")},m(t,e){o(t,i,e)},p:t,i:t,o:t,d(t){t&&c(i)}}}function G(t){let e,i,u,l,s,r,m,n,d;let b=function(t,e){return 11==t[1].getMonth()&&31==t[1].getDate()?L:0==t[1].getMonth()&&1==t[1].getDate()?D:W}(t),y=b(t);const f=[F,P],v=[];return m=function(t,e){return 11==t[1].getMonth()&&31==t[1].getDate()?0:1}(t),n=v[m]=f[m](t),{c(){e=w("header"),i=w("div"),y.c(),u=h(),l=w("div"),l.textContent=`${O}`,s=h(),r=w("div"),n.c(),p(i,"class","date-info svelte-1iptbpe"),p(l,"class","title svelte-1iptbpe"),p(e,"class","svelte-1iptbpe"),p(r,"class","container svelte-1iptbpe")},m(t,n){o(t,e,n),a(e,i),y.m(i,null),a(e,u),a(e,l),o(t,s,n),o(t,r,n),v[m].m(r,null),d=!0},p(t,[e]){y.p(t,e),n.p(t,e)},i(t){d||(H(n),d=!0)},o(t){K(n),d=!1},d(t){t&&c(e),y.d(),t&&c(s),t&&c(r),v[m].d()}}}let O="하루 한 곡";function X(t){let e=new Date;e.setHours(e.getHours());let i=["일","월","화","수","목","금","토"][e.getDay()],u=e.getDate()-1;return console.log(e),[[{id:1,title:"하늘 위로(Up)",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp",mvurl:"https://www.youtube.com/embed/QqlxGUm9MLE?si=nD-Lh8hON1QY3Nqv",date:"2024-01-01",lyricsNum:2,lyrics:["구름에 적어둬 없어지지 않도록","언제나 보고 싶을때 나만 꺼내 볼거야"]},{id:2,title:"별의 하모니(Harmoney of stars)",artist:"QWER",thumbnail:"https://i.namu.wiki/i/TclIk6XCp0alVu2n2N5-kOfqxjcmGFzzsiA5R0BLSMksnvLvO8RFsTd7zTRMDDK9yjI-vDsw7PKIOpf_vQjeACESafkrTYu0Rn8l6jPzf6zQucRvtSBf3MvKD_MThWdum3PFzHfT4NTZWy1co5jXYg.webp",mvurl:"https://www.youtube.com/embed/On6Pm4M-dQQ?si=tcSPM0vq7Gx3ES7E",date:"2024-01-02",lyricsNum:3,lyrics:["너와 함께라는 이유로 운명을 믿어 난","눈 앞에 펼쳐진 미랠 향해 인사를 해","빛나는 별처럼"]},{id:3,title:"Jump",artist:"김동률",thumbnail:"https://i.namu.wiki/i/wTLNyckul3i0nKFfIZVq1XAe-88hlbi_EHzxUvVTe188eRq0naWpnLtZ_Pkx1FgBt7rIMj5e90xU7XHhTr45zFkSglqfmwkabKfX4JKVGp_fZuw2VHGdwt0bvd3mj2K8Jv2AAwTEwRCBkOiS-nFRZQ.webp",mvurl:"https://www.youtube.com/embed/-FSQ3DaVE9E?si=Qrq5IihGYxIkZwaY",mvurlalt:"https://www.youtube.com/embed/wbXSaM2-vQ0?si=7xj8_8qdsx1PK65a",date:"2024-01-03",lyricsNum:3,lyrics:["하고 싶은 일이 많았었는데 웬일인지 다 시시해","아직 모든게 신기한 내 스무 살 때 처럼","새로운 일들에 설레하며 가슴이 뛰고 싶어"]},{id:4,title:"우주를 줄게",artist:"볼빨간사춘기",thumbnail:"https://i.namu.wiki/i/vbcm7cee53m6nahs4pvwTZtGC8FLZO2REPEcJDpNAh6C3gIDetj5Dc2k0zTVxnZGBu0Pix9ovsDrfv2wgn06NxXLOWXaz7bJEoXJuxm3DKNFWcM9ifjqh06vwMRusLljFljwgHtvOzrEJ3pE8c4TSA.webp",mvurl:"https://www.youtube.com/embed/MYBScu8ha0I?si=n4wYHMREdldxCeV1",mvurlalt:"https://www.youtube.com/embed/9U8uA702xrE?si=0usD_JtOKHdUE3vy",date:"2024-01-03",lyricsNum:4,lyrics:["어제는 내가 기분이 참 좋아서","지나간 행성에다가 그대 이름 새겨 놓았죠","한참 뒤에 별빛이 내리면","그 별이 가장 밝게 빛나요"]},{id:5,title:"회전목마 (Feat. Zion.T, 원슈타인)",artist:"소코도모",thumbnail:"https://i.namu.wiki/i/7fQgahkg_dZ4353cvUnfw6Rq0j4FbWw-5o8UEJx__qsH62aVQL4_8cIrem0BNWRSK-Xtj3UAp2KruLSREHmkFxhpGZVbVbow8nuiEGOyAsPXlEZfWy9qwrjmhMLjKyb_dSMvYZsZM_oV-YVoks6Iog.webp",mvurl:"https://www.youtube.com/embed/tnAxZipkuWw?si=a5d_M-sCFcteBnJb",mvurlalt:" ",date:"2024-01-04",lyricsNum:4,lyrics:["빙빙 돌아가는 회전목마처럼","영원히 계속될 것처럼","빙빙 돌아온 우리의 시간처럼","인생은 회전목마"]},{id:6,title:"Either Way",artist:"IVE (아이브)",thumbnail:"https://i.namu.wiki/i/WU4wKflKkzaeq_bhXiLPDcud6WmEJP07Km-mo7c1jpsG4a853y87xBVVxT_elb_KgxhTxiEw7mlGTeHcC8i3SYuC1Ron9Ofb75DeTL9PKM1SUmhj759ou7xSrlJxh6LWNXwiBpqsgsTqI6fKHf9N8A.webp",mvurl:"https://www.youtube.com/embed/cJc62vZZs8A?si=PNfhOW_qZBzvZmwQ",mvurlalt:"https://www.youtube.com/embed/_Hu4GYtye5U?si=lQb7iLfQyybk5MGF",date:"2024-01-05",lyricsNum:2,lyrics:["쟤 I 라서 그래 넌 E 라서 그래","됐고 그냥 V 나 하자"]},{id:7,title:"MIRROR",artist:"권은비",thumbnail:"https://i.namu.wiki/i/PVxdfPyaX6oHXzJYA75rzu4kAkHUB2uwvl-6LhCJdAbN43zZiqBRm1dC3lZNy6irmjyr7XhtHxmmq4Z7uWP3492lI1sLxynK-cr2G-tqy7FTXyupIga5qGSeCON0a5KTdHtqnJAGmF82nQ86aswmRg.webp",mvurl:"https://www.youtube.com/embed/V7KHhsUMAI0?si=2LI6a95J_jhnF_UH",mvurlalt:" ",date:"2024-01-06",lyricsNum:3,lyrics:["외로웠던 시간 버텨왔던 날들","잘해왔잖아 모두 다","좀 느려도 괜찮아 내가 여기 기다릴게"]},{id:8,title:"사건의 지평선",artist:"윤하",thumbnail:"https://i.namu.wiki/i/tVpSZIeqgkQXACiB3Cr12HZ7kBdas93tIJZz9z2zmth9DWEUTfxVslb88hIEDhJ0-CPjnCNtgL27pnvR_sg9IoDm_jV7-x-8_INrzV_kB6jl-A5GsBwdYgmJ8eprYySi8GiO71tJYI3EIw-m6aF_cw.webp",mvurl:"https://www.youtube.com/embed/BBdC1rl5sKY?si=fVus5iX5Si_j-qQ2",mvurlalt:" ",date:"2024-01-08",lyricsNum:3,lyrics:["솔직히 두렵기도 하지만","노력은 우리에게 정답이 아니라서","마지막 선물은 산뜻한 안녕"]},{id:9,title:"This Time",artist:"조유리",thumbnail:"https://i.namu.wiki/i/xz_c11EoM1gMomoS1HuiRrOb6NOaZxqi_jo1yfzW9suzh90jpvHWooTFK688B-2htvfTNbkp3TR4PTuucWwDPwPqfA1FMn_6j1Wn7cjeQbI6AGntCTo-EngIHsXUn2tqwQr-BGicC1jbT_-VE2CVyw.webp",mvurl:"https://www.youtube.com/embed/QkOPJG1DwWU?si=zOzWBt5CKh0tdyH7",mvurlalt:" ",date:"2024-01-09",lyricsNum:4,lyrics:["반짝이는 저 하늘의 별 곁에 은은한 달빛","소리 없이 마음을 울리는 따뜻한 손길","일렁이는 물결처럼 가끔은 두려워도","간절한 이 꿈속에 우리가 있어"]},{id:10,title:"언젠가 우리의 밤도 지나가겠죠",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/2eaWoLJNiHx35ChvW1Z-6OzuA-DhtuZd4a4j6bwQU5mVo_ZRQSvfgx9qNGRRtHaV7l0TgB3N8t_MgFHbK1pH-cyQNjqpVG6jocfJbGYBaFJWyEZYHWl-rijR5YQyNJa9HQ9uV127QYZPNg6G0Z6Jiw.webp",mvurl:"https://www.youtube.com/embed/BaKSB650TNk?si=rIUIm_wK5tRcmaAV",mvurlalt:" ",date:"2024-01-10",lyricsNum:4,lyrics:["언젠가 우리의 밤도 모두 지나가겠죠","끝없는 어둠이 밀려와도 난 다신","두려워하지는 않죠 우리 두 손 꼭 잡고서","어둠 끝자락 함께 걸어갈게요"]},{id:11,title:"도망가자",artist:"선우정아",thumbnail:"https://image.bugsm.co.kr/album/images/500/202938/20293864.jpg",mvurl:"https://www.youtube.com/embed/4gOfncuKK9k?si=E7a2IwHBUiFkTIuh",mvurlalt:" ",date:"2024-01-11",lyricsNum:5,lyrics:["걱정은 잠시 내려놓고","대신 가볍게 짐을 챙기자","실컷 웃고 다시 돌아오자","거기서는 우리 아무 생각말자","너의 얼굴 위에 빛이 스며들 때까지"]},{id:12,title:"걱정 말아요 그대",artist:"들국화",thumbnail:"https://i.namu.wiki/i/LxUxSjKIJKX1GaWJ-3GzHoA2v1bYHAY-6wSvs0asVdcS3JRw7iXXLp4vG5Q6u0Ug9IcjxcgESWqMAdk7i-CgBoQLruv2dKzAJQRyYLcRMqgSe5Ng4-5VvC0gRFYiCoa0F7oZb-_pg2f5OvfYSikoUA.webp",mvurl:"https://www.youtube.com/embed/zZOCgNXU9eY?si=6qlD7ThpCw32ETVS",mvurlalt:"https://www.youtube.com/embed/K_d75cH7IJw?si=GNv165flwbyY-kpr",date:"2024-01-12",lyricsNum:6,lyrics:["그대 슬픈 얘기들 모두 그대여","그대 탓으로 훌훌 털어 버리고","지나간 것은 지나간 대로","그런 의미가 있죠","우리 다 함께 노래합시다","후회 없이 꿈을 꾸었다 말해요"]},{id:13,title:"SMILEY (Feat. BIBI)",artist:"최예나",thumbnail:"https://i.namu.wiki/i/iLyc8UNJK4bg2uRQDuhOVKpEShb4yXkqJWJkVLsB7P1i6dN16l9m_N6M4uh6tYxD6t-DDQdK6sQhFSIw-bmu5C1cTrWJ4inVWi2oSqBZkaJLF1flLKGq8ySQeVE-T6RZWewtMMZ5IUTWjlDYCi4Jrw.webp",mvurl:"https://www.youtube.com/embed/UboHqi8IQKc?si=Gcn6aB5O7SjsSlf5",mvurlalt:"https://www.youtube.com/embed/y9kkXTucnLU?si=G8CFNPzR-ppQBkql",date:"2024-01-13",lyricsNum:4,lyrics:["And I say hey I'm gonna make it smile smile smile away","예쁘게 웃고 넘겨버릴래","Just Smile away Just smile away","아픔, 슬픔, 외로움 잊게"]},{id:14,title:"괜찮아도 괜찮아 (That's okay)",artist:"디오",thumbnail:"https://i.namu.wiki/i/734o-wvg5zGYLY4IH7fDh4zb_I1B-Z4rsXkmL6f7rhdnpBmN_N-_yHMEqOvbiKpI_u1PBTppIMQbWyVr1U6rSfesThEENuoUseUKBtmjxo5y4S0kkVSx4KjpMJLwtg_LLrINzufdf0Yr0sXMYcRIlA.webp",mvurl:"https://www.youtube.com/embed/4zC0O17rk1o?si=KJlvybL5dx-PNhB9",mvurlalt:"https://www.youtube.com/embed/WTzCWJVjTCM?si=V8JPQ0AB9R-UXmF0",date:"2024-01-14",lyricsNum:5,lyrics:["말하지 못할 고민거리","깊게 상처 난 자리","늘 같은 속도로 흘러가는 시간이","언제나 그랬듯이 씻어내줄 테니","흐르듯 살아도 그냥 괜찮아 괜찮아도"]},{id:15,title:"슈퍼스타",artist:"이한철",thumbnail:"https://image.bugsm.co.kr/album/images/500/80174/8017438.jpg",mvurl:"https://www.youtube.com/embed/URRimPZBHf8?si=zNh4skjl2unD8eVR",mvurlalt:" ",date:"2024-01-15",lyricsNum:4,lyrics:["괜찮아 잘 될 거야","너에겐 눈부신 미래가 있어","괜찮아 잘 될 거야","우린 널 믿어 의심치 않아"]},{id:16,title:"Good Morning",artist:"최예나",thumbnail:"https://i.namu.wiki/i/ruYiQ0zarecKSRXucyOZPoZUl_RmSAheqgP8sY3QV5-g7tx152rEUsi24omvd1JpixlYdsPM0qYV-p37cOQQMfNaZaxQteBSRUZMorv8rvM6I8-pQRmcPMJvlC-tW7bJf-Z6qZbovVODd3wcF__ojg.webp",mvurl:"https://www.youtube.com/embed/jJjKlNeMr-I?si=fiRA8a5KqdYzabpN",mvurlalt:" ",date:"2024-01-16",lyricsNum:3,lyrics:["어젯밤 눈물 자국 지우고","거울 속 내게 말해 Hi Babe","좋은 아침이야 오늘 하루만큼은"]},{id:17,title:"거북이",artist:"트와이스",thumbnail:"https://i.namu.wiki/i/awzb12lAUumWhO0adHRHKcEUPAh0_QMmseuslq2bUgLsSAclv63j8Zk-gx7o3TCNj1HskB_CXqNaoaUaUS2QmDdfS06hD91Putw2cDQpl136ud5865MtJSIdTc-l0hSyor59FpxGkmsUvK4qHPV6Hw.webp",mvurl:"https://www.youtube.com/embed/tVv_C2fYStU?si=0im9kZNlnu0HuY4x",mvurlalt:" ",date:"2024-01-17",lyricsNum:2,lyrics:["늘 이렇게 곁에 내 옆에 있어 줄래","조금 느리면 뭐 어때 나 이렇게 기다릴게"]}],e,i,u]}return new class extends R{constructor(t){super(),V(this,t,X,G,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map