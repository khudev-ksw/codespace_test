var app=function(){"use strict";function t(){}function i(t){return t()}function e(){return Object.create(null)}function u(t){t.forEach(i)}function l(t){return"function"==typeof t}function s(t,i){return t!=t?i==i:t!==i||t&&"object"==typeof t||"function"==typeof t}let m,r;function a(t,i){return m||(m=document.createElement("a")),m.href=i,t===m.href}function n(t,i){t.appendChild(i)}function c(t,i,e){t.insertBefore(i,e||null)}function o(t){t.parentNode&&t.parentNode.removeChild(t)}function w(t){return document.createElement(t)}function d(t){return document.createTextNode(t)}function b(){return d(" ")}function h(t,i,e,u){return t.addEventListener(i,e,u),()=>t.removeEventListener(i,e,u)}function p(t,i,e){null==e?t.removeAttribute(i):t.getAttribute(i)!==e&&t.setAttribute(i,e)}function y(t){r=t}const v=[],f=[];let g=[];const N=[],k=Promise.resolve();let E=!1;function x(t){g.push(t)}const _=new Set;let I=0;function K(){if(0!==I)return;const t=r;do{try{for(;I<v.length;){const t=v[I];I++,y(t),j(t.$$)}}catch(t){throw v.length=0,I=0,t}for(y(null),v.length=0,I=0;f.length;)f.pop()();for(let t=0;t<g.length;t+=1){const i=g[t];_.has(i)||(_.add(i),i())}g.length=0}while(v.length);for(;N.length;)N.pop()();E=!1,_.clear(),y(t)}function j(t){if(null!==t.fragment){t.update(),u(t.before_update);const i=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,i),t.after_update.forEach(x)}}const J=new Set;let Z;function T(t,i){t&&t.i&&(J.delete(t),t.i(i))}function Q(t,i,e,u){if(t&&t.o){if(J.has(t))return;J.add(t),Z.c.push((()=>{J.delete(t),u&&(e&&t.d(1),u())})),t.o(i)}else u&&u()}function q(t,e,s,m){const{fragment:r,after_update:a}=t.$$;r&&r.m(e,s),m||x((()=>{const e=t.$$.on_mount.map(i).filter(l);t.$$.on_destroy?t.$$.on_destroy.push(...e):u(e),t.$$.on_mount=[]})),a.forEach(x)}function Y(t,i){const e=t.$$;null!==e.fragment&&(!function(t){const i=[],e=[];g.forEach((u=>-1===t.indexOf(u)?i.push(u):e.push(u))),e.forEach((t=>t())),g=i}(e.after_update),u(e.on_destroy),e.fragment&&e.fragment.d(i),e.on_destroy=e.fragment=null,e.ctx=[])}function M(t,i){-1===t.$$.dirty[0]&&(v.push(t),E||(E=!0,k.then(K)),t.$$.dirty.fill(0)),t.$$.dirty[i/31|0]|=1<<i%31}function S(i,l,s,m,a,n,c,w=[-1]){const d=r;y(i);const b=i.$$={fragment:null,ctx:[],props:n,update:t,not_equal:a,bound:e(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(l.context||(d?d.$$.context:[])),callbacks:e(),dirty:w,skip_bound:!1,root:l.target||d.$$.root};c&&c(b.root);let h=!1;if(b.ctx=s?s(i,l.props||{},((t,e,...u)=>{const l=u.length?u[0]:e;return b.ctx&&a(b.ctx[t],b.ctx[t]=l)&&(!b.skip_bound&&b.bound[t]&&b.bound[t](l),h&&M(i,t)),e})):[],b.update(),h=!0,u(b.before_update),b.fragment=!!m&&m(b.ctx),l.target){if(l.hydrate){const t=function(t){return Array.from(t.childNodes)}(l.target);b.fragment&&b.fragment.l(t),t.forEach(o)}else b.fragment&&b.fragment.c();l.intro&&T(i.$$.fragment),q(i,l.target,l.anchor,l.customElement),K()}y(d)}class B{$destroy(){Y(this,1),this.$destroy=t}$on(i,e){if(!l(e))return t;const u=this.$$.callbacks[i]||(this.$$.callbacks[i]=[]);return u.push(e),()=>{const t=u.indexOf(e);-1!==t&&u.splice(t,1)}}$set(t){var i;this.$$set&&(i=t,0!==Object.keys(i).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function R(t,i,e){const u=t.slice();return u[12]=i[e],u}function W(t){let i,e,u=t[12]+"";return{c(){i=w("p"),e=d(u),p(i,"class","lyrics-line svelte-y7qwkx")},m(t,u){c(t,i,u),n(i,e)},p(t,i){1&i&&u!==(u=t[12]+"")&&function(t,i){i=""+i,t.data!==i&&(t.data=i)}(e,u)},d(t){t&&o(i)}}}function C(t){let i;return{c(){i=w("span"),i.textContent="▶",p(i,"class","play-icon show svelte-y7qwkx")},m(t,e){c(t,i,e)},d(t){t&&o(i)}}}function O(t){let i,e,u,l,s,m,r;return{c(){i=w("div"),e=w("iframe"),l=b(),s=w("div"),s.textContent="닫기",p(e,"width","640"),p(e,"height","480"),a(e.src,u=t[1])||p(e,"src",u),p(e,"frameborder","0"),p(e,"title","mv"),e.allowFullscreen=!0,p(s,"class","close-button"),p(i,"class","video-player show svelte-y7qwkx")},m(u,a){c(u,i,a),n(i,e),n(i,l),n(i,s),m||(r=h(s,"click",t[6]),m=!0)},p(t,i){2&i&&!a(e.src,u=t[1])&&p(e,"src",u)},d(t){t&&o(i),m=!1,r()}}}function z(i){let e,l,s,m,r,a=i[0],d=[];for(let t=0;t<a.length;t+=1)d[t]=W(R(i,a,t));let y=i[2]&&C(),v=i[3]&&O(i);return{c(){e=w("div");for(let t=0;t<d.length;t+=1)d[t].c();l=b(),y&&y.c(),s=b(),v&&v.c(),p(e,"class","lyrics svelte-y7qwkx")},m(t,u){c(t,e,u);for(let t=0;t<d.length;t+=1)d[t]&&d[t].m(e,null);n(e,l),y&&y.m(e,null),n(e,s),v&&v.m(e,null),m||(r=[h(e,"mouseover",i[4]),h(e,"mouseout",i[4]),h(e,"click",i[5])],m=!0)},p(t,[i]){if(1&i){let u;for(a=t[0],u=0;u<a.length;u+=1){const s=R(t,a,u);d[u]?d[u].p(s,i):(d[u]=W(s),d[u].c(),d[u].m(e,l))}for(;u<d.length;u+=1)d[u].d(1);d.length=a.length}t[2]?y||(y=C(),y.c(),y.m(e,s)):y&&(y.d(1),y=null),t[3]?v?v.p(t,i):(v=O(t),v.c(),v.m(e,null)):v&&(v.d(1),v=null)},i:t,o:t,d(t){t&&o(e),function(t,i){for(let e=0;e<t.length;e+=1)t[e]&&t[e].d(i)}(d,t),y&&y.d(),v&&v.d(),m=!1,u(r)}}}function H(t,i,e){let u,l=[],s=!1,m=!1,r=new Date;r.setHours(r.getHours());let a=r.getDate()-1,n=[{id:1,title:"하늘 위로(Up)",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp",mvurl:"https://www.youtube.com/embed/QqlxGUm9MLE?si=nD-Lh8hON1QY3Nqv",date:"2024-01-01",lyricsNum:2,lyrics:["구름에 적어둬 없어지지 않도록","언제나 보고 싶을때 나만 꺼내 볼거야"]},{id:2,title:"별의 하모니(Harmoney of stars)",artist:"QWER",thumbnail:"https://i.namu.wiki/i/TclIk6XCp0alVu2n2N5-kOfqxjcmGFzzsiA5R0BLSMksnvLvO8RFsTd7zTRMDDK9yjI-vDsw7PKIOpf_vQjeACESafkrTYu0Rn8l6jPzf6zQucRvtSBf3MvKD_MThWdum3PFzHfT4NTZWy1co5jXYg.webp",mvurl:"https://www.youtube.com/embed/On6Pm4M-dQQ?si=tcSPM0vq7Gx3ES7E",date:"2024-01-02",lyricsNum:3,lyrics:["너와 함께라는 이유로 운명을 믿어 난","눈 앞에 펼쳐진 미랠 향해 인사를 해","빛나는 별처럼"]},{id:3,title:"Jump",artist:"김동률",thumbnail:"https://i.namu.wiki/i/wTLNyckul3i0nKFfIZVq1XAe-88hlbi_EHzxUvVTe188eRq0naWpnLtZ_Pkx1FgBt7rIMj5e90xU7XHhTr45zFkSglqfmwkabKfX4JKVGp_fZuw2VHGdwt0bvd3mj2K8Jv2AAwTEwRCBkOiS-nFRZQ.webp",mvurl:"https://www.youtube.com/embed/-FSQ3DaVE9E?si=Qrq5IihGYxIkZwaY",mvurlalt:"https://www.youtube.com/embed/wbXSaM2-vQ0?si=7xj8_8qdsx1PK65a",date:"2024-01-03",lyricsNum:3,lyrics:["하고 싶은 일이 많았었는데 웬일인지 다 시시해","아직 모든게 신기한 내 스무 살 때 처럼","새로운 일들에 설레하며 가슴이 뛰고 싶어"]},{id:4,title:"우주를 줄게",artist:"볼빨간사춘기",thumbnail:"https://i.namu.wiki/i/vbcm7cee53m6nahs4pvwTZtGC8FLZO2REPEcJDpNAh6C3gIDetj5Dc2k0zTVxnZGBu0Pix9ovsDrfv2wgn06NxXLOWXaz7bJEoXJuxm3DKNFWcM9ifjqh06vwMRusLljFljwgHtvOzrEJ3pE8c4TSA.webp",mvurl:"https://www.youtube.com/embed/MYBScu8ha0I?si=n4wYHMREdldxCeV1",mvurlalt:"https://www.youtube.com/embed/9U8uA702xrE?si=0usD_JtOKHdUE3vy",date:"2024-01-04",lyricsNum:4,lyrics:["어제는 내가 기분이 참 좋아서","지나간 행성에다가 그대 이름 새겨 놓았죠","한참 뒤에 별빛이 내리면","그 별이 가장 밝게 빛나요"]},{id:5,title:"회전목마 (Feat. Zion.T, 원슈타인)",artist:"소코도모",thumbnail:"https://i.namu.wiki/i/7fQgahkg_dZ4353cvUnfw6Rq0j4FbWw-5o8UEJx__qsH62aVQL4_8cIrem0BNWRSK-Xtj3UAp2KruLSREHmkFxhpGZVbVbow8nuiEGOyAsPXlEZfWy9qwrjmhMLjKyb_dSMvYZsZM_oV-YVoks6Iog.webp",mvurl:"https://www.youtube.com/embed/tnAxZipkuWw?si=a5d_M-sCFcteBnJb",mvurlalt:" ",date:"2024-01-05",lyricsNum:4,lyrics:["빙빙 돌아가는 회전목마처럼","영원히 계속될 것처럼","빙빙 돌아온 우리의 시간처럼","인생은 회전목마"]},{id:6,title:"Either Way",artist:"IVE (아이브)",thumbnail:"https://i.namu.wiki/i/WU4wKflKkzaeq_bhXiLPDcud6WmEJP07Km-mo7c1jpsG4a853y87xBVVxT_elb_KgxhTxiEw7mlGTeHcC8i3SYuC1Ron9Ofb75DeTL9PKM1SUmhj759ou7xSrlJxh6LWNXwiBpqsgsTqI6fKHf9N8A.webp",mvurl:"https://www.youtube.com/embed/cJc62vZZs8A?si=PNfhOW_qZBzvZmwQ",mvurlalt:"https://www.youtube.com/embed/_Hu4GYtye5U?si=lQb7iLfQyybk5MGF",date:"2024-01-06",lyricsNum:2,lyrics:["쟤 I 라서 그래 넌 E 라서 그래","됐고 그냥 V 나 하자"]},{id:7,title:"MIRROR",artist:"권은비",thumbnail:"https://i.namu.wiki/i/PVxdfPyaX6oHXzJYA75rzu4kAkHUB2uwvl-6LhCJdAbN43zZiqBRm1dC3lZNy6irmjyr7XhtHxmmq4Z7uWP3492lI1sLxynK-cr2G-tqy7FTXyupIga5qGSeCON0a5KTdHtqnJAGmF82nQ86aswmRg.webp",mvurl:"https://www.youtube.com/embed/V7KHhsUMAI0?si=2LI6a95J_jhnF_UH",mvurlalt:" ",date:"2024-01-07",lyricsNum:3,lyrics:["외로웠던 시간 버텨왔던 날들","잘해왔잖아 모두 다","좀 느려도 괜찮아 내가 여기 기다릴게"]},{id:8,title:"사건의 지평선",artist:"윤하",thumbnail:"https://i.namu.wiki/i/tVpSZIeqgkQXACiB3Cr12HZ7kBdas93tIJZz9z2zmth9DWEUTfxVslb88hIEDhJ0-CPjnCNtgL27pnvR_sg9IoDm_jV7-x-8_INrzV_kB6jl-A5GsBwdYgmJ8eprYySi8GiO71tJYI3EIw-m6aF_cw.webp",mvurl:"https://www.youtube.com/embed/BBdC1rl5sKY?si=fVus5iX5Si_j-qQ2",mvurlalt:" ",date:"2024-01-08",lyricsNum:3,lyrics:["솔직히 두렵기도 하지만","노력은 우리에게 정답이 아니라서","마지막 선물은 산뜻한 안녕"]},{id:9,title:"This Time",artist:"조유리",thumbnail:"https://i.namu.wiki/i/xz_c11EoM1gMomoS1HuiRrOb6NOaZxqi_jo1yfzW9suzh90jpvHWooTFK688B-2htvfTNbkp3TR4PTuucWwDPwPqfA1FMn_6j1Wn7cjeQbI6AGntCTo-EngIHsXUn2tqwQr-BGicC1jbT_-VE2CVyw.webp",mvurl:"https://www.youtube.com/embed/QkOPJG1DwWU?si=zOzWBt5CKh0tdyH7",mvurlalt:" ",date:"2024-01-09",lyricsNum:4,lyrics:["반짝이는 저 하늘의 별 곁에 은은한 달빛","소리 없이 마음을 울리는 따뜻한 손길","일렁이는 물결처럼 가끔은 두려워도","간절한 이 꿈속에 우리가 있어"]},{id:10,title:"언젠가 우리의 밤도 지나가겠죠",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/2eaWoLJNiHx35ChvW1Z-6OzuA-DhtuZd4a4j6bwQU5mVo_ZRQSvfgx9qNGRRtHaV7l0TgB3N8t_MgFHbK1pH-cyQNjqpVG6jocfJbGYBaFJWyEZYHWl-rijR5YQyNJa9HQ9uV127QYZPNg6G0Z6Jiw.webp",mvurl:"https://www.youtube.com/embed/BaKSB650TNk?si=rIUIm_wK5tRcmaAV",mvurlalt:" ",date:"2024-01-10",lyricsNum:4,lyrics:["언젠가 우리의 밤도 모두 지나가겠죠","끝없는 어둠이 밀려와도 난 다신","두려워하지는 않죠 우리 두 손 꼭 잡고서","어둠 끝자락 함께 걸어갈게요"]},{id:11,title:"도망가자",artist:"선우정아",thumbnail:"https://image.bugsm.co.kr/album/images/500/202938/20293864.jpg",mvurl:"https://www.youtube.com/embed/4gOfncuKK9k?si=E7a2IwHBUiFkTIuh",mvurlalt:" ",date:"2024-01-11",lyricsNum:5,lyrics:["걱정은 잠시 내려놓고","대신 가볍게 짐을 챙기자","실컷 웃고 다시 돌아오자","거기서는 우리 아무 생각말자","너의 얼굴 위에 빛이 스며들 때까지"]},{id:12,title:"걱정 말아요 그대",artist:"들국화",thumbnail:"https://i.namu.wiki/i/LxUxSjKIJKX1GaWJ-3GzHoA2v1bYHAY-6wSvs0asVdcS3JRw7iXXLp4vG5Q6u0Ug9IcjxcgESWqMAdk7i-CgBoQLruv2dKzAJQRyYLcRMqgSe5Ng4-5VvC0gRFYiCoa0F7oZb-_pg2f5OvfYSikoUA.webp",mvurl:"https://www.youtube.com/embed/zZOCgNXU9eY?si=6qlD7ThpCw32ETVS",mvurlalt:"https://www.youtube.com/embed/K_d75cH7IJw?si=GNv165flwbyY-kpr",date:"2024-01-12",lyricsNum:6,lyrics:["그대 슬픈 얘기들 모두 그대여","그대 탓으로 훌훌 털어 버리고","지나간 것은 지나간 대로","그런 의미가 있죠","우리 다 함께 노래합시다","후회 없이 꿈을 꾸었다 말해요"]},{id:13,title:"SMILEY (Feat. BIBI)",artist:"최예나",thumbnail:"https://i.namu.wiki/i/iLyc8UNJK4bg2uRQDuhOVKpEShb4yXkqJWJkVLsB7P1i6dN16l9m_N6M4uh6tYxD6t-DDQdK6sQhFSIw-bmu5C1cTrWJ4inVWi2oSqBZkaJLF1flLKGq8ySQeVE-T6RZWewtMMZ5IUTWjlDYCi4Jrw.webp",mvurl:"https://www.youtube.com/embed/UboHqi8IQKc?si=Gcn6aB5O7SjsSlf5",mvurlalt:"https://www.youtube.com/embed/y9kkXTucnLU?si=G8CFNPzR-ppQBkql",date:"2024-01-13",lyricsNum:4,lyrics:["And I say hey I'm gonna make it smile smile smile away","예쁘게 웃고 넘겨버릴래","Just Smile away Just smile away","아픔, 슬픔, 외로움 잊게"]},{id:14,title:"괜찮아도 괜찮아 (That's okay)",artist:"디오",thumbnail:"https://i.namu.wiki/i/734o-wvg5zGYLY4IH7fDh4zb_I1B-Z4rsXkmL6f7rhdnpBmN_N-_yHMEqOvbiKpI_u1PBTppIMQbWyVr1U6rSfesThEENuoUseUKBtmjxo5y4S0kkVSx4KjpMJLwtg_LLrINzufdf0Yr0sXMYcRIlA.webp",mvurl:"https://www.youtube.com/embed/4zC0O17rk1o?si=KJlvybL5dx-PNhB9",mvurlalt:"https://www.youtube.com/embed/WTzCWJVjTCM?si=V8JPQ0AB9R-UXmF0",date:"2024-01-14",lyricsNum:5,lyrics:["말하지 못할 고민거리","깊게 상처 난 자리","늘 같은 속도로 흘러가는 시간이","언제나 그랬듯이 씻어내줄 테니","흐르듯 살아도 그냥 괜찮아 괜찮아도"]},{id:15,title:"슈퍼스타",artist:"이한철",thumbnail:"https://image.bugsm.co.kr/album/images/500/80174/8017438.jpg",mvurl:"https://www.youtube.com/embed/URRimPZBHf8?si=zNh4skjl2unD8eVR",mvurlalt:" ",date:"2024-01-15",lyricsNum:4,lyrics:["괜찮아 잘 될 거야","너에겐 눈부신 미래가 있어","괜찮아 잘 될 거야","우린 널 믿어 의심치 않아"]},{id:16,title:"Good Morning",artist:"최예나",thumbnail:"https://i.namu.wiki/i/ruYiQ0zarecKSRXucyOZPoZUl_RmSAheqgP8sY3QV5-g7tx152rEUsi24omvd1JpixlYdsPM0qYV-p37cOQQMfNaZaxQteBSRUZMorv8rvM6I8-pQRmcPMJvlC-tW7bJf-Z6qZbovVODd3wcF__ojg.webp",mvurl:"https://www.youtube.com/embed/jJjKlNeMr-I?si=fiRA8a5KqdYzabpN",mvurlalt:" ",date:"2024-01-16",lyricsNum:3,lyrics:["어젯밤 눈물 자국 지우고","거울 속 내게 말해 Hi Babe","좋은 아침이야 오늘 하루만큼은"]},{id:17,title:"거북이",artist:"트와이스",thumbnail:"https://i.namu.wiki/i/awzb12lAUumWhO0adHRHKcEUPAh0_QMmseuslq2bUgLsSAclv63j8Zk-gx7o3TCNj1HskB_CXqNaoaUaUS2QmDdfS06hD91Putw2cDQpl136ud5865MtJSIdTc-l0hSyor59FpxGkmsUvK4qHPV6Hw.webp",mvurl:"https://www.youtube.com/embed/tVv_C2fYStU?si=0im9kZNlnu0HuY4x",mvurlalt:" ",date:"2024-01-17",lyricsNum:2,lyrics:["늘 이렇게 곁에 내 옆에 있어 줄래","조금 느리면 뭐 어때 나 이렇게 기다릴게"]},{id:18,title:"파이팅 해야지 (Feat. 이영지)",artist:"부석순 (SEVENTEEN)",thumbnail:"https://i.namu.wiki/i/qst-qLdF2ePAgcfT8kPqUwNzay-Mjvrp8skKeJdm5D6pjCPzx8cKycG7FeREQvqJIuunvdYQwMEj3VCgJD3ldI_fDDxE5FlxjN43UhqXTgPYJbUKdtLZruB1AOP1rninJeZVMtLAKIBWvoOW0qdDXA.webp",mvurl:"https://www.youtube.com/embed/mBXBOLG06Wc?si=YtefZtPd_RfPWfnG",mvurlalt:" ",date:"2024-01-18",lyricsNum:3,lyrics:["올라갔다 내려가는 주식같이","알다가도 모르겠는 인생 뭣 같지","한 템포 쉬고 물 한 모금 마시기"]},{id:19,title:"촛불하나",artist:"god",thumbnail:"https://i.namu.wiki/i/3mMYO2rJvduWWnp8mYhcCvM8heLQsygo9AKOuDPJ3U59eLlpCEOXIg_QLHLWJMqFvZh3n5mzED9nyMOKTYxek3-970f0Wd-AZ7b_5PfPI_owYMXqP5KIFRaDMufqbD_8o5lBlASJFC3eZdQ15Xqe4Q.webp",mvurl:"https://www.youtube.com/embed/jPry6wnwyqU?si=NRGIiuh25i5u-_-d",mvurlalt:"https://www.youtube.com/embed/aeaJ05OG4qY?si=m0tlJ_Vc1zinCRH4",date:"2024-01-19",lyricsNum:6,lyrics:["아무것도 없다고 믿었던 내 주위엔","또 다른 초 하나가 놓여져 있었기에","불을 밝히니 촛불이 두 개가 되고","그 불빛으로 다른 초를 또 찾고","세 개가 되고 네 개가 되고","어둠은 사라져 가고"]},{id:20,title:"쉼표",artist:"이무진",thumbnail:"https://i.namu.wiki/i/Z4eOQAemH0KaVEOoRg6wFOzDf47p3r82iLLkMaP_iCTD4gPjOj4x5wE7-jmOV8xVa2GXfaV0hZmFTxj8BrLe_vSlHhwYFkFhbVGQ5iR_ohfYaCh3JDuA0t-lKqWCP4YZwo-EpEYHzdjdl6KckRZl8g.webp",mvurl:"https://www.youtube.com/embed/0BlPOInxIEg?si=8eAb16Kct5Ybw2BH",mvurlalt:" ",date:"2024-01-20",lyricsNum:4,lyrics:["힘내라는 말 안할게","다 놓은 채 그냥 포기해도 돼","최선을 다했기에","지쳐버린 너의 모습 그대로 아름답기에"]},{id:21,title:"紡ぐ",artist:"とた",thumbnail:"https://image.bugsm.co.kr/album/images/original/205413/20541324.jpg?version=undefined",mvurl:"https://www.youtube.com/embed/QU-Vq9NTASc?si=yC2jM5B8zOG7P1-V",mvurlalt:"https://www.youtube.com/embed/NDwqZIXOvKw?si=g1AtHEXBn3N3Cepu",date:"2024-01-21",lyricsNum:4,lyrics:["水溜りに一粒落ちた雫で","世界は波打歪んで見えた","大事なものすら曇り空","影隠されて下を向く"]},{id:22,title:"비행선",artist:"이용신",thumbnail:"https://i.namu.wiki/i/blypYYIRYw8L4W0ILxWA9PQargZJt79W2ks9Ug6QPKD-XguQjSCmYvyz5J4UusXsCcaOEWJi2sThapg-oBbvjOg18CjlYN8EQpWQPlHmi47IDisdjvNf-luGoxC6eBDrBe78z66bialAy4TKmQtZsQ.webp",mvurl:"https://www.youtube.com/embed/VvRRIdEqJtg?si=CdNGN0297NvZ5ldD",mvurlalt:" ",date:"2024-01-22",lyricsNum:4,lyrics:["저 하늘에 오직 우리 둘만의","조그만 비행선 타고","구름 위에 지친 몸을 누이고","잊었던 미소 지어봐"]},{id:23,title:"신호등",artist:"이무진",thumbnail:"https://i.namu.wiki/i/zLbhgW38EcGT6SD5WwcL76rNEBY_ObzFTEJOYEI7jzUsTetqx1af2eQydMGxFygtc1kkm4jnuH2NjOS2FMc7JEpZxilMaw00k3cQizEqLwwdJTzYEVnNgyu3GubAI4R5Qs-Wtqyiz9rMYWIpBdWegw.webp",mvurl:"https://www.youtube.com/embed/SK6Sm2Ki9tI?si=nH-mxtBS3LcXsv0T",mvurlalt:" ",date:"2024-01-23",lyricsNum:4,lyrics:["건반처럼 생긴 도로 위","수많은 조명들이 날 빠르게","번갈아 가며 비추고 있지만","난 아직 초짜란 말이야"]},{id:24,title:"길",artist:"god",thumbnail:"https://i.namu.wiki/i/ZT0nGNdmBcj5_RcCOXu8uixYnoeOyotkzZJz48AO4lyKGoI7etVGSPWWMg15czK_uzRHT4MKFp5wQDJmsf-_ihwEeDQxUqSYz_6mBdwXgfnkzpu_oOV7q-bRYDmrdyWfZxz5nWd9Tw0Mx59Rsb-bdw.webp",mvurl:"https://www.youtube.com/embed/laTIgnzONFI?si=0uC2lpiciBoYUAGx",mvurlalt:" ",date:"2024-01-24",lyricsNum:3,lyrics:["나는 왜 이 길에 서있나","이게 정말 나의 길인가","이 길의 끝에서 내 꿈은 이뤄질까"]},{id:25,title:"Eternity",artist:"권은비",thumbnail:"https://i.namu.wiki/i/c90OYa52OaAZywrLCcOFxuKawCRuWSio40idnLcGtKLCHqflsugt_BqG8B2TdZL6mLmdLH_x4Hc8S9pa-wZm-PiCXBEC-wugT_y08DHK25eTnM1CWKfDLxNOXa_L4R5ssSx3jNISW7aKM9Ac7YOFzw.webp",mvurl:"https://www.youtube.com/embed/Tz7W4RmQyV0?si=1mxrcX6-XNgoBpch",mvurlalt:" ",date:"2024-01-25",lyricsNum:4,lyrics:["거센 비바람이 지나고 난 뒤","우리에게 찾아온 계절","꽃보다 더 아름다운","초록의 숲을 이룰 거야"]}];for(let t=0;t<n[a].lyricsNum;t++){let i=n[a].lyrics[t];l=[...l,i]}function c(){e(3,m=!m),console.log("toggleVideoPlayer called")}console.log(l),n[a].lyrics1,n[a].lyrics2,u=n[a].mvurl,console.log(u);return[l,u,s,m,function(){e(2,s=!s)},c,t=>{t.stopPropagation(),c()}]}class V extends B{constructor(t){super(),S(this,t,H,z,s,{})}}function L(i){let e,u,l,s,m,r,a,n,w=i[1].getFullYear()+"",b=i[1].getMonth()+1+"",h=i[1].getDate()+"";return{c(){e=d(w),u=d("년 "),l=d(b),s=d("월 "),m=d(h),r=d("일 "),a=d(i[2]),n=d("요일, 오늘의 노래")},m(t,i){c(t,e,i),c(t,u,i),c(t,l,i),c(t,s,i),c(t,m,i),c(t,r,i),c(t,a,i),c(t,n,i)},p:t,d(t){t&&o(e),t&&o(u),t&&o(l),t&&o(s),t&&o(m),t&&o(r),t&&o(a),t&&o(n)}}}function D(i){let e,u,l,s,m,r,a,n,w=i[1].getFullYear()+"",b=i[1].getMonth()+1+"",h=i[1].getDate()+"";return{c(){e=d(w),u=d("년 "),l=d(b),s=d("월 "),m=d(h),r=d("일 "),a=d(i[2]),n=d("요일, 올해의 첫 노래")},m(t,i){c(t,e,i),c(t,u,i),c(t,l,i),c(t,s,i),c(t,m,i),c(t,r,i),c(t,a,i),c(t,n,i)},p:t,d(t){t&&o(e),t&&o(u),t&&o(l),t&&o(s),t&&o(m),t&&o(r),t&&o(a),t&&o(n)}}}function A(i){let e,u,l,s,m,r,a,n,w=i[1].getFullYear()+"",b=i[1].getMonth()+1+"",h=i[1].getDate()+"";return{c(){e=d(w),u=d("년 "),l=d(b),s=d("월 "),m=d(h),r=d("일 "),a=d(i[2]),n=d("요일, 올해의 마지막 노래")},m(t,i){c(t,e,i),c(t,u,i),c(t,l,i),c(t,s,i),c(t,m,i),c(t,r,i),c(t,a,i),c(t,n,i)},p:t,d(t){t&&o(e),t&&o(u),t&&o(l),t&&o(s),t&&o(m),t&&o(r),t&&o(a),t&&o(n)}}}function P(i){let e,u,l;return u=new V({}),{c(){var t,l,s,m,r;e=w("div"),(t=u.$$.fragment)&&t.c(),p(e,"class","album-art svelte-1iptbpe"),l=e,s="background-image",null==(m="url("+i[0][i[3]].thumbnail+")")?l.style.removeProperty(s):l.style.setProperty(s,m,r?"important":"")},m(t,i){c(t,e,i),q(u,e,null),l=!0},p:t,i(t){l||(T(u.$$.fragment,t),l=!0)},o(t){Q(u.$$.fragment,t),l=!1},d(t){t&&o(e),Y(u)}}}function F(i){let e;return{c(){e=d("아직 서비스 오픈하지 않았습니다.")},m(t,i){c(t,e,i)},p:t,i:t,o:t,d(t){t&&o(e)}}}function G(t){let i,e,u,l,s,m,r,a,d;let h=function(t,i){return 11==t[1].getMonth()&&31==t[1].getDate()?A:0==t[1].getMonth()&&1==t[1].getDate()?D:L}(t),y=h(t);const v=[F,P],f=[];return r=function(t,i){return 11==t[1].getMonth()&&31==t[1].getDate()?0:1}(t),a=f[r]=v[r](t),{c(){i=w("header"),e=w("div"),y.c(),u=b(),l=w("div"),l.textContent=`${U}`,s=b(),m=w("div"),a.c(),p(e,"class","date-info svelte-1iptbpe"),p(l,"class","title svelte-1iptbpe"),p(i,"class","svelte-1iptbpe"),p(m,"class","container svelte-1iptbpe")},m(t,a){c(t,i,a),n(i,e),y.m(e,null),n(i,u),n(i,l),c(t,s,a),c(t,m,a),f[r].m(m,null),d=!0},p(t,[i]){y.p(t,i),a.p(t,i)},i(t){d||(T(a),d=!0)},o(t){Q(a),d=!1},d(t){t&&o(i),y.d(),t&&o(s),t&&o(m),f[r].d()}}}let U="하루 한 곡";function X(t){let i=new Date;i.setHours(i.getHours());let e=["일","월","화","수","목","금","토"][i.getDay()],u=i.getDate()-1;return console.log(i),[[{id:1,title:"하늘 위로(Up)",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp",mvurl:"https://www.youtube.com/embed/QqlxGUm9MLE?si=nD-Lh8hON1QY3Nqv",date:"2024-01-01",lyricsNum:2,lyrics:["구름에 적어둬 없어지지 않도록","언제나 보고 싶을때 나만 꺼내 볼거야"]},{id:2,title:"별의 하모니(Harmoney of stars)",artist:"QWER",thumbnail:"https://i.namu.wiki/i/TclIk6XCp0alVu2n2N5-kOfqxjcmGFzzsiA5R0BLSMksnvLvO8RFsTd7zTRMDDK9yjI-vDsw7PKIOpf_vQjeACESafkrTYu0Rn8l6jPzf6zQucRvtSBf3MvKD_MThWdum3PFzHfT4NTZWy1co5jXYg.webp",mvurl:"https://www.youtube.com/embed/On6Pm4M-dQQ?si=tcSPM0vq7Gx3ES7E",date:"2024-01-02",lyricsNum:3,lyrics:["너와 함께라는 이유로 운명을 믿어 난","눈 앞에 펼쳐진 미랠 향해 인사를 해","빛나는 별처럼"]},{id:3,title:"Jump",artist:"김동률",thumbnail:"https://i.namu.wiki/i/wTLNyckul3i0nKFfIZVq1XAe-88hlbi_EHzxUvVTe188eRq0naWpnLtZ_Pkx1FgBt7rIMj5e90xU7XHhTr45zFkSglqfmwkabKfX4JKVGp_fZuw2VHGdwt0bvd3mj2K8Jv2AAwTEwRCBkOiS-nFRZQ.webp",mvurl:"https://www.youtube.com/embed/-FSQ3DaVE9E?si=Qrq5IihGYxIkZwaY",mvurlalt:"https://www.youtube.com/embed/wbXSaM2-vQ0?si=7xj8_8qdsx1PK65a",date:"2024-01-03",lyricsNum:3,lyrics:["하고 싶은 일이 많았었는데 웬일인지 다 시시해","아직 모든게 신기한 내 스무 살 때 처럼","새로운 일들에 설레하며 가슴이 뛰고 싶어"]},{id:4,title:"우주를 줄게",artist:"볼빨간사춘기",thumbnail:"https://i.namu.wiki/i/vbcm7cee53m6nahs4pvwTZtGC8FLZO2REPEcJDpNAh6C3gIDetj5Dc2k0zTVxnZGBu0Pix9ovsDrfv2wgn06NxXLOWXaz7bJEoXJuxm3DKNFWcM9ifjqh06vwMRusLljFljwgHtvOzrEJ3pE8c4TSA.webp",mvurl:"https://www.youtube.com/embed/MYBScu8ha0I?si=n4wYHMREdldxCeV1",mvurlalt:"https://www.youtube.com/embed/9U8uA702xrE?si=0usD_JtOKHdUE3vy",date:"2024-01-03",lyricsNum:4,lyrics:["어제는 내가 기분이 참 좋아서","지나간 행성에다가 그대 이름 새겨 놓았죠","한참 뒤에 별빛이 내리면","그 별이 가장 밝게 빛나요"]},{id:5,title:"회전목마 (Feat. Zion.T, 원슈타인)",artist:"소코도모",thumbnail:"https://i.namu.wiki/i/7fQgahkg_dZ4353cvUnfw6Rq0j4FbWw-5o8UEJx__qsH62aVQL4_8cIrem0BNWRSK-Xtj3UAp2KruLSREHmkFxhpGZVbVbow8nuiEGOyAsPXlEZfWy9qwrjmhMLjKyb_dSMvYZsZM_oV-YVoks6Iog.webp",mvurl:"https://www.youtube.com/embed/tnAxZipkuWw?si=a5d_M-sCFcteBnJb",mvurlalt:" ",date:"2024-01-04",lyricsNum:4,lyrics:["빙빙 돌아가는 회전목마처럼","영원히 계속될 것처럼","빙빙 돌아온 우리의 시간처럼","인생은 회전목마"]},{id:6,title:"Either Way",artist:"IVE (아이브)",thumbnail:"https://i.namu.wiki/i/WU4wKflKkzaeq_bhXiLPDcud6WmEJP07Km-mo7c1jpsG4a853y87xBVVxT_elb_KgxhTxiEw7mlGTeHcC8i3SYuC1Ron9Ofb75DeTL9PKM1SUmhj759ou7xSrlJxh6LWNXwiBpqsgsTqI6fKHf9N8A.webp",mvurl:"https://www.youtube.com/embed/cJc62vZZs8A?si=PNfhOW_qZBzvZmwQ",mvurlalt:"https://www.youtube.com/embed/_Hu4GYtye5U?si=lQb7iLfQyybk5MGF",date:"2024-01-05",lyricsNum:2,lyrics:["쟤 I 라서 그래 넌 E 라서 그래","됐고 그냥 V 나 하자"]},{id:7,title:"MIRROR",artist:"권은비",thumbnail:"https://i.namu.wiki/i/PVxdfPyaX6oHXzJYA75rzu4kAkHUB2uwvl-6LhCJdAbN43zZiqBRm1dC3lZNy6irmjyr7XhtHxmmq4Z7uWP3492lI1sLxynK-cr2G-tqy7FTXyupIga5qGSeCON0a5KTdHtqnJAGmF82nQ86aswmRg.webp",mvurl:"https://www.youtube.com/embed/V7KHhsUMAI0?si=2LI6a95J_jhnF_UH",mvurlalt:" ",date:"2024-01-06",lyricsNum:3,lyrics:["외로웠던 시간 버텨왔던 날들","잘해왔잖아 모두 다","좀 느려도 괜찮아 내가 여기 기다릴게"]},{id:8,title:"사건의 지평선",artist:"윤하",thumbnail:"https://i.namu.wiki/i/tVpSZIeqgkQXACiB3Cr12HZ7kBdas93tIJZz9z2zmth9DWEUTfxVslb88hIEDhJ0-CPjnCNtgL27pnvR_sg9IoDm_jV7-x-8_INrzV_kB6jl-A5GsBwdYgmJ8eprYySi8GiO71tJYI3EIw-m6aF_cw.webp",mvurl:"https://www.youtube.com/embed/BBdC1rl5sKY?si=fVus5iX5Si_j-qQ2",mvurlalt:" ",date:"2024-01-08",lyricsNum:3,lyrics:["솔직히 두렵기도 하지만","노력은 우리에게 정답이 아니라서","마지막 선물은 산뜻한 안녕"]},{id:9,title:"This Time",artist:"조유리",thumbnail:"https://i.namu.wiki/i/xz_c11EoM1gMomoS1HuiRrOb6NOaZxqi_jo1yfzW9suzh90jpvHWooTFK688B-2htvfTNbkp3TR4PTuucWwDPwPqfA1FMn_6j1Wn7cjeQbI6AGntCTo-EngIHsXUn2tqwQr-BGicC1jbT_-VE2CVyw.webp",mvurl:"https://www.youtube.com/embed/QkOPJG1DwWU?si=zOzWBt5CKh0tdyH7",mvurlalt:" ",date:"2024-01-09",lyricsNum:4,lyrics:["반짝이는 저 하늘의 별 곁에 은은한 달빛","소리 없이 마음을 울리는 따뜻한 손길","일렁이는 물결처럼 가끔은 두려워도","간절한 이 꿈속에 우리가 있어"]},{id:10,title:"언젠가 우리의 밤도 지나가겠죠",artist:"아이즈원(IZ*ONE)",thumbnail:"https://i.namu.wiki/i/2eaWoLJNiHx35ChvW1Z-6OzuA-DhtuZd4a4j6bwQU5mVo_ZRQSvfgx9qNGRRtHaV7l0TgB3N8t_MgFHbK1pH-cyQNjqpVG6jocfJbGYBaFJWyEZYHWl-rijR5YQyNJa9HQ9uV127QYZPNg6G0Z6Jiw.webp",mvurl:"https://www.youtube.com/embed/BaKSB650TNk?si=rIUIm_wK5tRcmaAV",mvurlalt:" ",date:"2024-01-10",lyricsNum:4,lyrics:["언젠가 우리의 밤도 모두 지나가겠죠","끝없는 어둠이 밀려와도 난 다신","두려워하지는 않죠 우리 두 손 꼭 잡고서","어둠 끝자락 함께 걸어갈게요"]},{id:11,title:"도망가자",artist:"선우정아",thumbnail:"https://image.bugsm.co.kr/album/images/500/202938/20293864.jpg",mvurl:"https://www.youtube.com/embed/4gOfncuKK9k?si=E7a2IwHBUiFkTIuh",mvurlalt:" ",date:"2024-01-11",lyricsNum:5,lyrics:["걱정은 잠시 내려놓고","대신 가볍게 짐을 챙기자","실컷 웃고 다시 돌아오자","거기서는 우리 아무 생각말자","너의 얼굴 위에 빛이 스며들 때까지"]},{id:12,title:"걱정 말아요 그대",artist:"들국화",thumbnail:"https://i.namu.wiki/i/LxUxSjKIJKX1GaWJ-3GzHoA2v1bYHAY-6wSvs0asVdcS3JRw7iXXLp4vG5Q6u0Ug9IcjxcgESWqMAdk7i-CgBoQLruv2dKzAJQRyYLcRMqgSe5Ng4-5VvC0gRFYiCoa0F7oZb-_pg2f5OvfYSikoUA.webp",mvurl:"https://www.youtube.com/embed/zZOCgNXU9eY?si=6qlD7ThpCw32ETVS",mvurlalt:"https://www.youtube.com/embed/K_d75cH7IJw?si=GNv165flwbyY-kpr",date:"2024-01-12",lyricsNum:6,lyrics:["그대 슬픈 얘기들 모두 그대여","그대 탓으로 훌훌 털어 버리고","지나간 것은 지나간 대로","그런 의미가 있죠","우리 다 함께 노래합시다","후회 없이 꿈을 꾸었다 말해요"]},{id:13,title:"SMILEY (Feat. BIBI)",artist:"최예나",thumbnail:"https://i.namu.wiki/i/iLyc8UNJK4bg2uRQDuhOVKpEShb4yXkqJWJkVLsB7P1i6dN16l9m_N6M4uh6tYxD6t-DDQdK6sQhFSIw-bmu5C1cTrWJ4inVWi2oSqBZkaJLF1flLKGq8ySQeVE-T6RZWewtMMZ5IUTWjlDYCi4Jrw.webp",mvurl:"https://www.youtube.com/embed/UboHqi8IQKc?si=Gcn6aB5O7SjsSlf5",mvurlalt:"https://www.youtube.com/embed/y9kkXTucnLU?si=G8CFNPzR-ppQBkql",date:"2024-01-13",lyricsNum:4,lyrics:["And I say hey I'm gonna make it smile smile smile away","예쁘게 웃고 넘겨버릴래","Just Smile away Just smile away","아픔, 슬픔, 외로움 잊게"]},{id:14,title:"괜찮아도 괜찮아 (That's okay)",artist:"디오",thumbnail:"https://i.namu.wiki/i/734o-wvg5zGYLY4IH7fDh4zb_I1B-Z4rsXkmL6f7rhdnpBmN_N-_yHMEqOvbiKpI_u1PBTppIMQbWyVr1U6rSfesThEENuoUseUKBtmjxo5y4S0kkVSx4KjpMJLwtg_LLrINzufdf0Yr0sXMYcRIlA.webp",mvurl:"https://www.youtube.com/embed/4zC0O17rk1o?si=KJlvybL5dx-PNhB9",mvurlalt:"https://www.youtube.com/embed/WTzCWJVjTCM?si=V8JPQ0AB9R-UXmF0",date:"2024-01-14",lyricsNum:5,lyrics:["말하지 못할 고민거리","깊게 상처 난 자리","늘 같은 속도로 흘러가는 시간이","언제나 그랬듯이 씻어내줄 테니","흐르듯 살아도 그냥 괜찮아 괜찮아도"]},{id:15,title:"슈퍼스타",artist:"이한철",thumbnail:"https://image.bugsm.co.kr/album/images/500/80174/8017438.jpg",mvurl:"https://www.youtube.com/embed/URRimPZBHf8?si=zNh4skjl2unD8eVR",mvurlalt:" ",date:"2024-01-15",lyricsNum:4,lyrics:["괜찮아 잘 될 거야","너에겐 눈부신 미래가 있어","괜찮아 잘 될 거야","우린 널 믿어 의심치 않아"]},{id:16,title:"Good Morning",artist:"최예나",thumbnail:"https://i.namu.wiki/i/ruYiQ0zarecKSRXucyOZPoZUl_RmSAheqgP8sY3QV5-g7tx152rEUsi24omvd1JpixlYdsPM0qYV-p37cOQQMfNaZaxQteBSRUZMorv8rvM6I8-pQRmcPMJvlC-tW7bJf-Z6qZbovVODd3wcF__ojg.webp",mvurl:"https://www.youtube.com/embed/jJjKlNeMr-I?si=fiRA8a5KqdYzabpN",mvurlalt:" ",date:"2024-01-16",lyricsNum:3,lyrics:["어젯밤 눈물 자국 지우고","거울 속 내게 말해 Hi Babe","좋은 아침이야 오늘 하루만큼은"]},{id:17,title:"거북이",artist:"트와이스",thumbnail:"https://i.namu.wiki/i/awzb12lAUumWhO0adHRHKcEUPAh0_QMmseuslq2bUgLsSAclv63j8Zk-gx7o3TCNj1HskB_CXqNaoaUaUS2QmDdfS06hD91Putw2cDQpl136ud5865MtJSIdTc-l0hSyor59FpxGkmsUvK4qHPV6Hw.webp",mvurl:"https://www.youtube.com/embed/tVv_C2fYStU?si=0im9kZNlnu0HuY4x",mvurlalt:" ",date:"2024-01-17",lyricsNum:2,lyrics:["늘 이렇게 곁에 내 옆에 있어 줄래","조금 느리면 뭐 어때 나 이렇게 기다릴게"]},{id:18,title:"파이팅 해야지 (Feat. 이영지)",artist:"부석순 (SEVENTEEN)",thumbnail:"https://i.namu.wiki/i/qst-qLdF2ePAgcfT8kPqUwNzay-Mjvrp8skKeJdm5D6pjCPzx8cKycG7FeREQvqJIuunvdYQwMEj3VCgJD3ldI_fDDxE5FlxjN43UhqXTgPYJbUKdtLZruB1AOP1rninJeZVMtLAKIBWvoOW0qdDXA.webp",mvurl:"https://www.youtube.com/embed/mBXBOLG06Wc?si=YtefZtPd_RfPWfnG",mvurlalt:" ",date:"2024-01-18",lyricsNum:3,lyrics:["올라갔다 내려가는 주식같이","알다가도 모르겠는 인생 뭣 같지","한 템포 쉬고 물 한 모금 마시기"]},{id:19,title:"촛불하나",artist:"god",thumbnail:"https://i.namu.wiki/i/3mMYO2rJvduWWnp8mYhcCvM8heLQsygo9AKOuDPJ3U59eLlpCEOXIg_QLHLWJMqFvZh3n5mzED9nyMOKTYxek3-970f0Wd-AZ7b_5PfPI_owYMXqP5KIFRaDMufqbD_8o5lBlASJFC3eZdQ15Xqe4Q.webp",mvurl:"https://www.youtube.com/embed/jPry6wnwyqU?si=NRGIiuh25i5u-_-d",mvurlalt:"https://www.youtube.com/embed/aeaJ05OG4qY?si=m0tlJ_Vc1zinCRH4",date:"2024-01-19",lyricsNum:6,lyrics:["아무것도 없다고 믿었던 내 주위엔","또 다른 초 하나가 놓여져 있었기에","불을 밝히니 촛불이 두 개가 되고","그 불빛으로 다른 초를 또 찾고","세 개가 되고 네 개가 되고","어둠은 사라져 가고"]},{id:20,title:"쉼표",artist:"이무진",thumbnail:"https://i.namu.wiki/i/Z4eOQAemH0KaVEOoRg6wFOzDf47p3r82iLLkMaP_iCTD4gPjOj4x5wE7-jmOV8xVa2GXfaV0hZmFTxj8BrLe_vSlHhwYFkFhbVGQ5iR_ohfYaCh3JDuA0t-lKqWCP4YZwo-EpEYHzdjdl6KckRZl8g.webp",mvurl:"https://www.youtube.com/embed/0BlPOInxIEg?si=8eAb16Kct5Ybw2BH",mvurlalt:" ",date:"2024-01-20",lyricsNum:4,lyrics:["힘내라는 말 안할게","다 놓은 채 그냥 포기해도 돼","최선을 다했기에","지쳐버린 너의 모습 그대로 아름답기에"]},{id:21,title:"紡ぐ",artist:"とた",thumbnail:"https://image.bugsm.co.kr/album/images/original/205413/20541324.jpg?version=undefined",mvurl:"https://www.youtube.com/embed/QU-Vq9NTASc?si=yC2jM5B8zOG7P1-V",mvurlalt:"https://www.youtube.com/embed/NDwqZIXOvKw?si=g1AtHEXBn3N3Cepu",date:"2024-01-21",lyricsNum:4,lyrics:["水溜りに一粒落ちた雫で","世界は波打歪んで見えた","大事なものすら曇り空","影隠されて下を向く"]},{id:22,title:"비행선",artist:"이용신",thumbnail:"https://i.namu.wiki/i/blypYYIRYw8L4W0ILxWA9PQargZJt79W2ks9Ug6QPKD-XguQjSCmYvyz5J4UusXsCcaOEWJi2sThapg-oBbvjOg18CjlYN8EQpWQPlHmi47IDisdjvNf-luGoxC6eBDrBe78z66bialAy4TKmQtZsQ.webp",mvurl:"https://www.youtube.com/embed/VvRRIdEqJtg?si=CdNGN0297NvZ5ldD",mvurlalt:" ",date:"2024-01-22",lyricsNum:4,lyrics:["저 하늘에 오직 우리 둘만의","조그만 비행선 타고","구름 위에 지친 몸을 누이고","잊었던 미소 지어봐"]},{id:23,title:"신호등",artist:"이무진",thumbnail:"https://i.namu.wiki/i/zLbhgW38EcGT6SD5WwcL76rNEBY_ObzFTEJOYEI7jzUsTetqx1af2eQydMGxFygtc1kkm4jnuH2NjOS2FMc7JEpZxilMaw00k3cQizEqLwwdJTzYEVnNgyu3GubAI4R5Qs-Wtqyiz9rMYWIpBdWegw.webp",mvurl:"https://www.youtube.com/embed/SK6Sm2Ki9tI?si=nH-mxtBS3LcXsv0T",mvurlalt:" ",date:"2024-01-23",lyricsNum:4,lyrics:["건반처럼 생긴 도로 위","수많은 조명들이 날 빠르게","번갈아 가며 비추고 있지만","난 아직 초짜란 말이야"]},{id:24,title:"길",artist:"god",thumbnail:"https://i.namu.wiki/i/ZT0nGNdmBcj5_RcCOXu8uixYnoeOyotkzZJz48AO4lyKGoI7etVGSPWWMg15czK_uzRHT4MKFp5wQDJmsf-_ihwEeDQxUqSYz_6mBdwXgfnkzpu_oOV7q-bRYDmrdyWfZxz5nWd9Tw0Mx59Rsb-bdw.webp",mvurl:"https://www.youtube.com/embed/laTIgnzONFI?si=0uC2lpiciBoYUAGx",mvurlalt:" ",date:"2024-01-24",lyricsNum:3,lyrics:["나는 왜 이 길에 서있나","이게 정말 나의 길인가","이 길의 끝에서 내 꿈은 이뤄질까"]},{id:25,title:"Eternity",artist:"권은비",thumbnail:"https://i.namu.wiki/i/c90OYa52OaAZywrLCcOFxuKawCRuWSio40idnLcGtKLCHqflsugt_BqG8B2TdZL6mLmdLH_x4Hc8S9pa-wZm-PiCXBEC-wugT_y08DHK25eTnM1CWKfDLxNOXa_L4R5ssSx3jNISW7aKM9Ac7YOFzw.webp",mvurl:"https://www.youtube.com/embed/Tz7W4RmQyV0?si=1mxrcX6-XNgoBpch",mvurlalt:" ",date:"2024-01-25",lyricsNum:4,lyrics:["거센 비바람이 지나고 난 뒤","우리에게 찾아온 계절","꽃보다 더 아름다운","초록의 숲을 이룰 거야"]}],i,e,u]}return new class extends B{constructor(t){super(),S(this,t,X,G,s,{})}}({target:document.body,props:{name:"world"}})}();
//# sourceMappingURL=bundle.js.map
