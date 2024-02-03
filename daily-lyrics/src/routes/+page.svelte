

<script>

    import { onMount } from "svelte";
    import Lyrics from './Lyrics.svelte';
  
    let songList = [
      //   {
      //     "id": 1,
      //     "title": "하늘 위로(Up)",
      //     "artist": "아이즈원(IZ*ONE)",
      //     "thumbnail": "https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp",
      //     "mvurl": "https://www.youtube.com/embed/QqlxGUm9MLE?si=nD-Lh8hON1QY3Nqv",
      //     "date": "2024-01-01",
      //     "lyricsNum": 2,
      //     "lyrics":
      //     [
      //       "구름에 적어둬 없어지지 않도록",
      //       "언제나 보고 싶을때 나만 꺼내 볼거야"
      //     ]
      //   },
      //   {
      //     "id": 2,
      //     "title": "별의 하모니(Harmoney of stars)",
      //     "artist": "QWER",
      //     "thumbnail": "https://i.namu.wiki/i/TclIk6XCp0alVu2n2N5-kOfqxjcmGFzzsiA5R0BLSMksnvLvO8RFsTd7zTRMDDK9yjI-vDsw7PKIOpf_vQjeACESafkrTYu0Rn8l6jPzf6zQucRvtSBf3MvKD_MThWdum3PFzHfT4NTZWy1co5jXYg.webp",
      //     "mvurl": "https://www.youtube.com/embed/On6Pm4M-dQQ?si=tcSPM0vq7Gx3ES7E",
      //     "date": "2024-01-02",
      //     "lyricsNum": 3,
      //     "lyrics":
      //     [
      //       "너와 함께라는 이유로 운명을 믿어 난",
      //       "눈 앞에 펼쳐진 미랠 향해 인사를 해",
      //       "빛나는 별처럼"
      //     ]
          
      //   },
      //   {
      //     "id": 3,
      //     "title": "Jump",
      //     "artist": "김동률",
      //     "thumbnail": "https://i.namu.wiki/i/wTLNyckul3i0nKFfIZVq1XAe-88hlbi_EHzxUvVTe188eRq0naWpnLtZ_Pkx1FgBt7rIMj5e90xU7XHhTr45zFkSglqfmwkabKfX4JKVGp_fZuw2VHGdwt0bvd3mj2K8Jv2AAwTEwRCBkOiS-nFRZQ.webp",
      //     "mvurl" : "https://www.youtube.com/embed/-FSQ3DaVE9E?si=Qrq5IihGYxIkZwaY",
      //     "mvurlalt": "https://www.youtube.com/embed/wbXSaM2-vQ0?si=7xj8_8qdsx1PK65a",
      //     "date": "2024-01-03",
      //     "lyricsNum": 3,
      //     "lyrics":
      //     [
      //       "하고 싶은 일이 많았었는데 웬일인지 다 시시해",
      //       "아직 모든게 신기한 내 스무 살 때 처럼",
      //       "새로운 일들에 설레하며 가슴이 뛰고 싶어"
      //     ]
      //   },
      //   {
      //     "id": 4,
      //     "title": "우주를 줄게",
      //     "artist": "볼빨간사춘기",
      //     "thumbnail": "https://i.namu.wiki/i/vbcm7cee53m6nahs4pvwTZtGC8FLZO2REPEcJDpNAh6C3gIDetj5Dc2k0zTVxnZGBu0Pix9ovsDrfv2wgn06NxXLOWXaz7bJEoXJuxm3DKNFWcM9ifjqh06vwMRusLljFljwgHtvOzrEJ3pE8c4TSA.webp",
      //     "mvurl" : "https://www.youtube.com/embed/MYBScu8ha0I?si=n4wYHMREdldxCeV1",
      //     "mvurlalt": "https://www.youtube.com/embed/9U8uA702xrE?si=0usD_JtOKHdUE3vy",
      //     "date": "2024-01-03",
      //     "lyricsNum": 4,
      //     "lyrics":
      //     [
      //       "어제는 내가 기분이 참 좋아서",
      //       "지나간 행성에다가 그대 이름 새겨 놓았죠",
      //       "한참 뒤에 별빛이 내리면",
      //       "그 별이 가장 밝게 빛나요"
      //     ]
      //   },
      //   {
      //     "id": 5,
      //     "title": "회전목마 (Feat. Zion.T, 원슈타인)",
      //     "artist": "소코도모",
      //     "thumbnail": "https://i.namu.wiki/i/7fQgahkg_dZ4353cvUnfw6Rq0j4FbWw-5o8UEJx__qsH62aVQL4_8cIrem0BNWRSK-Xtj3UAp2KruLSREHmkFxhpGZVbVbow8nuiEGOyAsPXlEZfWy9qwrjmhMLjKyb_dSMvYZsZM_oV-YVoks6Iog.webp",
      //     "mvurl" : "https://www.youtube.com/embed/tnAxZipkuWw?si=a5d_M-sCFcteBnJb",
      //     "mvurlalt": " ",
      //     "date": "2024-01-04",
      //     "lyricsNum": 4,
      //     "lyrics":
      //     [
      //       "빙빙 돌아가는 회전목마처럼",
      //       "영원히 계속될 것처럼",
      //       "빙빙 돌아온 우리의 시간처럼",
      //       "인생은 회전목마"
      //     ]
      //   },
      //   {
      //     "id": 6,
      //     "title": "Either Way",
      //     "artist": "IVE (아이브)",
      //     "thumbnail": "https://i.namu.wiki/i/WU4wKflKkzaeq_bhXiLPDcud6WmEJP07Km-mo7c1jpsG4a853y87xBVVxT_elb_KgxhTxiEw7mlGTeHcC8i3SYuC1Ron9Ofb75DeTL9PKM1SUmhj759ou7xSrlJxh6LWNXwiBpqsgsTqI6fKHf9N8A.webp",
      //     "mvurl" : "https://www.youtube.com/embed/cJc62vZZs8A?si=PNfhOW_qZBzvZmwQ",
      //     "mvurlalt": "https://www.youtube.com/embed/_Hu4GYtye5U?si=lQb7iLfQyybk5MGF",
      //     "date": "2024-01-05",
      //     "lyricsNum": 2,
      //     "lyrics":
      //     [
      //       "쟤 I 라서 그래 넌 E 라서 그래",
      //       "됐고 그냥 V 나 하자"
      //     ]
      //   },
      //   {
      //     "id": 7,
      //     "title": "MIRROR",
      //     "artist": "권은비",
      //     "thumbnail": "https://i.namu.wiki/i/PVxdfPyaX6oHXzJYA75rzu4kAkHUB2uwvl-6LhCJdAbN43zZiqBRm1dC3lZNy6irmjyr7XhtHxmmq4Z7uWP3492lI1sLxynK-cr2G-tqy7FTXyupIga5qGSeCON0a5KTdHtqnJAGmF82nQ86aswmRg.webp",
      //     "mvurl" : "https://www.youtube.com/embed/V7KHhsUMAI0?si=2LI6a95J_jhnF_UH",
      //     "mvurlalt": " ",
      //     "date": "2024-01-06",
      //     "lyricsNum": 3,
      //     "lyrics":
      //     [
      //       "외로웠던 시간 버텨왔던 날들",
      //       "잘해왔잖아 모두 다",
      //       "좀 느려도 괜찮아 내가 여기 기다릴게"
      //     ]
      //   },
      //   {
      //     "id": 8,
      //     "title": "사건의 지평선",
      //     "artist": "윤하",
      //     "thumbnail": "https://i.namu.wiki/i/tVpSZIeqgkQXACiB3Cr12HZ7kBdas93tIJZz9z2zmth9DWEUTfxVslb88hIEDhJ0-CPjnCNtgL27pnvR_sg9IoDm_jV7-x-8_INrzV_kB6jl-A5GsBwdYgmJ8eprYySi8GiO71tJYI3EIw-m6aF_cw.webp",
      //     "mvurl" : "https://www.youtube.com/embed/BBdC1rl5sKY?si=fVus5iX5Si_j-qQ2",
      //     "mvurlalt": " ",
      //     "date": "2024-01-08",
      //     "lyricsNum": 3,
      //     "lyrics":
      //     [
      //       "솔직히 두렵기도 하지만",
      //       "노력은 우리에게 정답이 아니라서",
      //       "마지막 선물은 산뜻한 안녕"
      //     ]
      //   },
      //   {
      //     "id": 9,
      //     "title": "This Time",
      //     "artist": "조유리",
      //     "thumbnail": "https://i.namu.wiki/i/xz_c11EoM1gMomoS1HuiRrOb6NOaZxqi_jo1yfzW9suzh90jpvHWooTFK688B-2htvfTNbkp3TR4PTuucWwDPwPqfA1FMn_6j1Wn7cjeQbI6AGntCTo-EngIHsXUn2tqwQr-BGicC1jbT_-VE2CVyw.webp",
      //     "mvurl" : "https://www.youtube.com/embed/QkOPJG1DwWU?si=zOzWBt5CKh0tdyH7",
      //     "mvurlalt": " ",
      //     "date": "2024-01-09",
      //     "lyricsNum": 4,
      //     "lyrics":
      //     [
      //       "반짝이는 저 하늘의 별 곁에 은은한 달빛",
      //       "소리 없이 마음을 울리는 따뜻한 손길",
      //       "일렁이는 물결처럼 가끔은 두려워도",
      //       "간절한 이 꿈속에 우리가 있어"
      //     ]
      //   },
      //   {
      //     "id": 10,
      //     "title": "언젠가 우리의 밤도 지나가겠죠",
      //     "artist": "아이즈원(IZ*ONE)",
      //     "thumbnail": "https://i.namu.wiki/i/2eaWoLJNiHx35ChvW1Z-6OzuA-DhtuZd4a4j6bwQU5mVo_ZRQSvfgx9qNGRRtHaV7l0TgB3N8t_MgFHbK1pH-cyQNjqpVG6jocfJbGYBaFJWyEZYHWl-rijR5YQyNJa9HQ9uV127QYZPNg6G0Z6Jiw.webp",
      //     "mvurl" : "https://www.youtube.com/embed/BaKSB650TNk?si=rIUIm_wK5tRcmaAV",
      //     "mvurlalt": " ",
      //     "date": "2024-01-10",
      //     "lyricsNum": 4,
      //     "lyrics":
      //     [
      //       "언젠가 우리의 밤도 모두 지나가겠죠",
      //       "끝없는 어둠이 밀려와도 난 다신",
      //       "두려워하지는 않죠 우리 두 손 꼭 잡고서",
      //       "어둠 끝자락 함께 걸어갈게요"
      //     ]
      //   },
      //   {
      //     "id": 11,
      //     "title": "도망가자",
      //     "artist": "선우정아",
      //     "thumbnail": "https://image.bugsm.co.kr/album/images/500/202938/20293864.jpg",
      //     "mvurl" : "https://www.youtube.com/embed/4gOfncuKK9k?si=E7a2IwHBUiFkTIuh",
      //     "mvurlalt": " ",
      //     "date": "2024-01-11",
      //     "lyricsNum": 5,
      //     "lyrics":
      //     [
      //       "걱정은 잠시 내려놓고",
      //       "대신 가볍게 짐을 챙기자",
      //       "실컷 웃고 다시 돌아오자",
      //       "거기서는 우리 아무 생각말자",
      //       "너의 얼굴 위에 빛이 스며들 때까지"
      //     ]
      //   },
      //   {
      //     "id": 12,
      //     "title": "걱정 말아요 그대",
      //     "artist": "들국화",
      //     "thumbnail": "https://i.namu.wiki/i/LxUxSjKIJKX1GaWJ-3GzHoA2v1bYHAY-6wSvs0asVdcS3JRw7iXXLp4vG5Q6u0Ug9IcjxcgESWqMAdk7i-CgBoQLruv2dKzAJQRyYLcRMqgSe5Ng4-5VvC0gRFYiCoa0F7oZb-_pg2f5OvfYSikoUA.webp",
      //     "mvurl" : "https://www.youtube.com/embed/zZOCgNXU9eY?si=6qlD7ThpCw32ETVS",
      //     "mvurlalt": "https://www.youtube.com/embed/K_d75cH7IJw?si=GNv165flwbyY-kpr",
      //     "date": "2024-01-12",
      //     "lyricsNum": 6,
      //     "lyrics":
      //     [
      //       "그대 슬픈 얘기들 모두 그대여",
      //       "그대 탓으로 훌훌 털어 버리고",
      //       "지나간 것은 지나간 대로",
      //       "그런 의미가 있죠",
      //       "우리 다 함께 노래합시다",
      //       "후회 없이 꿈을 꾸었다 말해요"
      //     ]
      //   },
      //   {
      //     "id": 13,
      //     "title": "SMILEY (Feat. BIBI)",
      //     "artist": "최예나",
      //     "thumbnail": "https://i.namu.wiki/i/iLyc8UNJK4bg2uRQDuhOVKpEShb4yXkqJWJkVLsB7P1i6dN16l9m_N6M4uh6tYxD6t-DDQdK6sQhFSIw-bmu5C1cTrWJ4inVWi2oSqBZkaJLF1flLKGq8ySQeVE-T6RZWewtMMZ5IUTWjlDYCi4Jrw.webp",
      //     "mvurl" : "https://www.youtube.com/embed/UboHqi8IQKc?si=Gcn6aB5O7SjsSlf5",
      //     "mvurlalt": "https://www.youtube.com/embed/y9kkXTucnLU?si=G8CFNPzR-ppQBkql",
      //     "date": "2024-01-13",
      //     "lyricsNum": 4,
      //     "lyrics":
      //     [
      //       "And I say hey I'm gonna make it smile smile smile away",
      //       "예쁘게 웃고 넘겨버릴래",
      //       "Just Smile away Just smile away",
      //       "아픔, 슬픔, 외로움 잊게"
      //     ]
      //   },
      //   {
      //     "id": 14,
      //     "title": "괜찮아도 괜찮아 (That's okay)",
      //     "artist": "디오",
      //     "thumbnail": "https://i.namu.wiki/i/734o-wvg5zGYLY4IH7fDh4zb_I1B-Z4rsXkmL6f7rhdnpBmN_N-_yHMEqOvbiKpI_u1PBTppIMQbWyVr1U6rSfesThEENuoUseUKBtmjxo5y4S0kkVSx4KjpMJLwtg_LLrINzufdf0Yr0sXMYcRIlA.webp",
      //     "mvurl" : "https://www.youtube.com/embed/4zC0O17rk1o?si=KJlvybL5dx-PNhB9",
      //     "mvurlalt": "https://www.youtube.com/embed/WTzCWJVjTCM?si=V8JPQ0AB9R-UXmF0",
      //     "date": "2024-01-14",
      //     "lyricsNum": 5,
      //     "lyrics":
      //     [
      //       "말하지 못할 고민거리",
      //       "깊게 상처 난 자리",
      //       "늘 같은 속도로 흘러가는 시간이",
      //       "언제나 그랬듯이 씻어내줄 테니",
      //       "흐르듯 살아도 그냥 괜찮아 괜찮아도"
      //     ]
      //   },
      //   {
      //     "id": 15,
      //     "title": "슈퍼스타",
      //     "artist": "이한철",
      //     "thumbnail": "https://image.bugsm.co.kr/album/images/500/80174/8017438.jpg",
      //     "mvurl" : "https://www.youtube.com/embed/URRimPZBHf8?si=zNh4skjl2unD8eVR",
      //     "mvurlalt": " ",
      //     "date": "2024-01-15",
      //     "lyricsNum": 4,
      //     "lyrics":
      //     [
      //       "괜찮아 잘 될 거야",
      //       "너에겐 눈부신 미래가 있어",
      //       "괜찮아 잘 될 거야",
      //       "우린 널 믿어 의심치 않아"
      //     ]
      //   },
      //   {
      //     "id": 16,
      //     "title": "Good Morning",
      //     "artist": "최예나",
      //     "thumbnail": "https://i.namu.wiki/i/ruYiQ0zarecKSRXucyOZPoZUl_RmSAheqgP8sY3QV5-g7tx152rEUsi24omvd1JpixlYdsPM0qYV-p37cOQQMfNaZaxQteBSRUZMorv8rvM6I8-pQRmcPMJvlC-tW7bJf-Z6qZbovVODd3wcF__ojg.webp",
      //     "mvurl" : "https://www.youtube.com/embed/jJjKlNeMr-I?si=fiRA8a5KqdYzabpN",
      //     "mvurlalt": " ",
      //     "date": "2024-01-16",
      //     "lyricsNum": 3,
      //     "lyrics":
      //     [
      //       "어젯밤 눈물 자국 지우고",
      //       "거울 속 내게 말해 Hi Babe",
      //       "좋은 아침이야 오늘 하루만큼은"
      //     ]
      //   },
      //   {
      //     "id": 17,
      //     "title": "거북이",
      //     "artist": "트와이스",
      //     "thumbnail": "https://i.namu.wiki/i/awzb12lAUumWhO0adHRHKcEUPAh0_QMmseuslq2bUgLsSAclv63j8Zk-gx7o3TCNj1HskB_CXqNaoaUaUS2QmDdfS06hD91Putw2cDQpl136ud5865MtJSIdTc-l0hSyor59FpxGkmsUvK4qHPV6Hw.webp",
      //     "mvurl" : "https://www.youtube.com/embed/tVv_C2fYStU?si=0im9kZNlnu0HuY4x",
      //     "mvurlalt": " ",
      //     "date": "2024-01-17",
      //     "lyricsNum": 2,
      //     "lyrics":
      //     [
      //       "늘 이렇게 곁에 내 옆에 있어 줄래",
      //       "조금 느리면 뭐 어때 나 이렇게 기다릴게"
      //     ]
      //   },
      //   {
      //     "id": 18,
      //     "title": "파이팅 해야지 (Feat. 이영지)",
      //     "artist": "부석순 (SEVENTEEN)",
      //     "thumbnail": "https://i.namu.wiki/i/qst-qLdF2ePAgcfT8kPqUwNzay-Mjvrp8skKeJdm5D6pjCPzx8cKycG7FeREQvqJIuunvdYQwMEj3VCgJD3ldI_fDDxE5FlxjN43UhqXTgPYJbUKdtLZruB1AOP1rninJeZVMtLAKIBWvoOW0qdDXA.webp",
      //     "mvurl" : "https://www.youtube.com/embed/mBXBOLG06Wc?si=YtefZtPd_RfPWfnG",
      //     "mvurlalt": " ",
      //     "date": "2024-01-18",
      //     "lyricsNum": 3,
      //     "lyrics":
      //     [
      //       "올라갔다 내려가는 주식같이",
      //       "알다가도 모르겠는 인생 뭣 같지",
      //       "한 템포 쉬고 물 한 모금 마시기"
      //     ]
      //   },
      //   {
      //     "id": 19,
      //     "title": "촛불하나",
      //     "artist": "god",
      //     "thumbnail": "https://i.namu.wiki/i/3mMYO2rJvduWWnp8mYhcCvM8heLQsygo9AKOuDPJ3U59eLlpCEOXIg_QLHLWJMqFvZh3n5mzED9nyMOKTYxek3-970f0Wd-AZ7b_5PfPI_owYMXqP5KIFRaDMufqbD_8o5lBlASJFC3eZdQ15Xqe4Q.webp",
      //     "mvurl" : "https://www.youtube.com/embed/jPry6wnwyqU?si=NRGIiuh25i5u-_-d",
      //     "mvurlalt": "https://www.youtube.com/embed/aeaJ05OG4qY?si=m0tlJ_Vc1zinCRH4",
      //     "date": "2024-01-19",
      //     "lyricsNum": 6,
      //     "lyrics":
      //     [
      //       "아무것도 없다고 믿었던 내 주위엔",
      //       "또 다른 초 하나가 놓여져 있었기에",
      //       "불을 밝히니 촛불이 두 개가 되고",
      //       "그 불빛으로 다른 초를 또 찾고",
      //       "세 개가 되고 네 개가 되고",
      //       "어둠은 사라져 가고"
      //     ]
      //   },
      //   {
      //     "id": 20,
      //     "title": "쉼표",
      //     "artist": "이무진",
      //     "thumbnail": "https://i.namu.wiki/i/Z4eOQAemH0KaVEOoRg6wFOzDf47p3r82iLLkMaP_iCTD4gPjOj4x5wE7-jmOV8xVa2GXfaV0hZmFTxj8BrLe_vSlHhwYFkFhbVGQ5iR_ohfYaCh3JDuA0t-lKqWCP4YZwo-EpEYHzdjdl6KckRZl8g.webp",
      //     "mvurl" : "https://www.youtube.com/embed/0BlPOInxIEg?si=8eAb16Kct5Ybw2BH",
      //     "mvurlalt": " ",
      //     "date": "2024-01-20",
      //     "lyricsNum": 4,
      //     "lyrics":
      //     [
      //       "힘내라는 말 안할게",
      //       "다 놓은 채 그냥 포기해도 돼",
      //       "최선을 다했기에",
      //       "지쳐버린 너의 모습 그대로 아름답기에"
      //     ]
      //   },
      //   {
      //     "id": 21,
      //     "title": "紡ぐ",
      //     "artist": "とた",
      //     "thumbnail": "https://image.bugsm.co.kr/album/images/original/205413/20541324.jpg?version=undefined",
      //     "mvurl" : "https://www.youtube.com/embed/QU-Vq9NTASc?si=yC2jM5B8zOG7P1-V",
      //     "mvurlalt": "https://www.youtube.com/embed/NDwqZIXOvKw?si=g1AtHEXBn3N3Cepu",
      //     "date": "2024-01-21",
      //     "lyricsNum": 4,
      //     "lyrics":
      //     [
      //       "水溜りに一粒落ちた雫で",
      //       "世界は波打歪んで見えた",
      //       "大事なものすら曇り空",
      //       "影隠されて下を向く"
      //     ]
      //   },
      //   {
      //     "id": 22,
      //     "title": "비행선",
      //     "artist": "이용신",
      //     "thumbnail": "https://i.namu.wiki/i/blypYYIRYw8L4W0ILxWA9PQargZJt79W2ks9Ug6QPKD-XguQjSCmYvyz5J4UusXsCcaOEWJi2sThapg-oBbvjOg18CjlYN8EQpWQPlHmi47IDisdjvNf-luGoxC6eBDrBe78z66bialAy4TKmQtZsQ.webp",
      //     "mvurl" : "https://www.youtube.com/embed/VvRRIdEqJtg?si=CdNGN0297NvZ5ldD",
      //     "mvurlalt": " ",
      //     "date": "2024-01-22",
      //     "lyricsNum": 4,
      //     "lyrics":
      //     [
      //       "저 하늘에 오직 우리 둘만의",
      //       "조그만 비행선 타고",
      //       "구름 위에 지친 몸을 누이고",
      //       "잊었던 미소 지어봐"
      //     ]
      //   },
      //   {
      //     "id": 23,
      //     "title": "신호등",
      //     "artist": "이무진",
      //     "thumbnail": "https://i.namu.wiki/i/zLbhgW38EcGT6SD5WwcL76rNEBY_ObzFTEJOYEI7jzUsTetqx1af2eQydMGxFygtc1kkm4jnuH2NjOS2FMc7JEpZxilMaw00k3cQizEqLwwdJTzYEVnNgyu3GubAI4R5Qs-Wtqyiz9rMYWIpBdWegw.webp",
      //     "mvurl" : "https://www.youtube.com/embed/SK6Sm2Ki9tI?si=nH-mxtBS3LcXsv0T",
      //     "mvurlalt": " ",
      //     "date": "2024-01-23",
      //     "lyricsNum": 4,
      //     "lyrics":
      //     [
      //       "건반처럼 생긴 도로 위",
      //       "수많은 조명들이 날 빠르게",
      //       "번갈아 가며 비추고 있지만",
      //       "난 아직 초짜란 말이야"
      //     ]
      //   },
      //   {
      //   "id": 24,
      //   "title": "길",
      //   "artist": "god",
      //   "thumbnail": "https://i.namu.wiki/i/ZT0nGNdmBcj5_RcCOXu8uixYnoeOyotkzZJz48AO4lyKGoI7etVGSPWWMg15czK_uzRHT4MKFp5wQDJmsf-_ihwEeDQxUqSYz_6mBdwXgfnkzpu_oOV7q-bRYDmrdyWfZxz5nWd9Tw0Mx59Rsb-bdw.webp",
      //   "mvurl" : "https://www.youtube.com/embed/laTIgnzONFI?si=0uC2lpiciBoYUAGx",
      //   "mvurlalt": " ",
      //   "date": "2024-01-24",
      //   "lyricsNum": 3,
      //   "lyrics":
      //   [
      //     "나는 왜 이 길에 서있나",
      //     "이게 정말 나의 길인가",
      //     "이 길의 끝에서 내 꿈은 이뤄질까"
      //   ]
      // },
      // {
      //   "id": 25,
      //   "title": "Eternity",
      //   "artist": "권은비",
      //   "thumbnail": "https://i.namu.wiki/i/rBrxLS1SkeQuSyYbsGaNP60QpeE20e5ZiaJA_uaaTjUzxoQtPE_-uUfA4h35Sbka6v3YES0yEWWO24A9lSY1ZaZiXDzbuACZK12czr_qoLC8fT_kyV_MtjlYKk0FInXXkJsFlhAez6DSE5Qw_9L4CA.webp",
      //   "mvurl" : "https://www.youtube.com/embed/Tz7W4RmQyV0?si=1mxrcX6-XNgoBpch",
      //   "mvurlalt": " ",
      //   "date": "2024-01-25",
      //   "lyricsNum": 4,
      //   "lyrics":
      //   [
      //     "거센 비바람이 지나고 난 뒤",
      //     "우리에게 찾아온 계절",
      //     "꽃보다 더 아름다운",
      //     "초록의 숲을 이룰 거야"
      //   ]
      // },
      // {
      //   "id": 26,
      //   "title": "위잉위잉",
      //   "artist": "혁오",
      //   "thumbnail": "https://i.namu.wiki/i/jFfyD_WKhBVOgmG-8XQIYFcPO4F702aNwngoJyQ7Jldt-uajQVjYja_o23XGOn24EFEtYBVvSKTaiUw1_iIRZopyNijSGgv0621yBkuYyDDimjU8XaH4IBls4Df62jRhpJRrBjPvav-1-ZJn31XyxA.webp",
      //   "mvurl" : "https://www.youtube.com/embed/IUoTjkS242c?si=yYbssnN6tR-J8bOO",
      //   "mvurlalt": " ",
      //   "date": "2024-01-26",
      //   "lyricsNum": 4,
      //   "lyrics":
      //   [
      //     "비틀비틀 걸어가는 나의 다리",
      //     "오늘도 의미없는 또 하루가 흘러가죠",
      //     "사랑도 끼리끼리 하는거라 믿는 나는",
      //     "좀처럼 두근두근 거릴일이 전혀없죠"
      //   ]
      // },
      // {
      //   "id": 27,
      //   "title": "주저하는 연인들을 위해",
      //   "artist": "잔나비",
      //   "thumbnail": "https://i.namu.wiki/i/-RGx3wAhn2fVDk4wRIW5C_083-mcbuBlbAsjt9YD3BcPvVMI_-TXfvbkwIoDcuHDMrlwsngiOrln1zad7zgSiGa2qly5Sws_mjnBgx6CbDj4dP8x14z4ZIScKiAvDwtz8qogQ2K44Y1VDzIHzDOQrQ.webp",
      //   "mvurl" : "https://www.youtube.com/embed/GpQ222I1ULc?si=rq9Qq4LunNk47x_O",
      //   "mvurlalt": " ",
      //   "date": "2024-01-27",
      //   "lyricsNum": 4,
      //   "lyrics":
      //   [
      //     "나의 자라나는 마음을",
      //     "못 본채 꺾어 버릴 수는 없네",
      //     "미련 남길바엔 그리워 아픈 게 나아",
      //     "서둘러 안겨본 그 품은 따스할 테니"
      //   ]
      // },
      // {
      //   "id": 28,
      //   "title": "꿈을 꾸는 동안 (夢を見ている間) (Japanese Ver.)",
      //   "artist": "PRODUCE　48",
      //   "thumbnail": "https://i.namu.wiki/i/o3yooAbBKniZ0T3U57lQILDi9lnSFlzuzhFgCfeU6k_It4NAzaadEJpBgxNW78rbYk8GEusj3QvUO2ZLPbm7spt0ETGk_7qvuN9JbDT5aTZY7iGaQ9_CcZa8A6NxbsVt11Gscyx7-F75oGCuxQBrCQ.webp",
      //   "mvurl" : "https://www.youtube.com/embed/3aOnnbtdKi0?si=ewqxJvLbEC5Q1uWO",
      //   "mvurlalt": " ",
      //   "date": "2024-01-28",
      //   "lyricsNum": 6,
      //   "lyrics":
      //   [
      //     "忘れない夢は消えていくもの",
      //     "いつかは叶ったり叶わなかったり",
      //     "そうだけど夢を",
      //     "見ている時間は",
      //     "なんて幸せなの",
      //     "今を生きている"
      //   ]
      // },
      // {
      //   "id": 29,
      //   "title": "Love War (Feat. BE'O)",
      //   "artist": "YENA (최예나)",
      //   "thumbnail": "https://i.namu.wiki/i/FVMlij4JHSGEL-WPfJxE4CkMmIsY4zqUSJocCM3q7zd3uhJw8UUtnD7T2Due4yaTdnEH_KpnwhJQk5W1zszn_qFsYOLdLR89WVjeB0n8OG9P6BFpsP0slDNUP9Fs2fenrcsVaeQpqaei_ik7sKcPOw.webp",
      //   "mvurl" : "https://www.youtube.com/embed/AWIpPQ6z-rk?si=fx2C_MT7OF9tzEkC",
      //   "mvurlalt": " ",
      //   "date": "2024-01-29",
      //   "lyricsNum": 3,
      //   "lyrics":
      //   [
      //     "입 쭉 내밀고 있으면",
      //     "그럼 일이 다 해결되나",
      //     "어디 할말 있음 말해 봐"
      //   ]
      // },
      // {
      //   "id": 30,
      //   "title": "Pretender",
      //   "artist": "Official髭男dism",
      //   "thumbnail": "https://i.namu.wiki/i/wpud1X9hUYZPq97DZYwTRxHKMYMo4RgbfQBA-QY15CA2TuzEr1D3C2he2LVyEeLkKi8-qNEUKFU9DH9Z3XtGE6QapXLRW9-0Vhw-88N1j0Y30uCDesuSKVySetvQG4E1w66kNIygsWcYm5aNxccB9A.webp",
      //   "mvurl" : "https://www.youtube.com/embed/Ujx2tHTdZWA?si=1N9JX2967r8WPg2T",
      //   "mvurlalt": "https://www.youtube.com/embed/TQ8WlA2GXbk?si=3IW9-h7rfaKKjw2e",
      //   "date": "2024-01-30",
      //   "lyricsNum": 4,
      //   "lyrics":
      //   [
      //     "もっと違う設定で",
      //     "もっと違う関係で",
      //     "出会える世界線",
      //     "選べたらよかった"
      //   ]
      // },
      // {
      //   "id": 31,
      //   "title": "불협화음 (Feat. AKMU)",
      //   "artist": "Mudd the student",
      //   "thumbnail": "https://i.namu.wiki/i/D2CrAdMUEbFgz_xlsUuJRF1EHN6bSbNtEbTNTZTzzqLBBt2t2z389e6BRSkorDN9L1ReJ4mSYarO84nmRnq1Ve_yocwpVk4FJ1BnzQ_bctNX2ahrP3-FDJptlTSoZII6TOJaLXSJ6RMfOqqBDNUEeQ.webp",
      //   "mvurl" : "https://www.youtube.com/embed/Nr_VQDuz3EE?si=HAxY7cfIjRIlWA63",
      //   "mvurlalt": " ",
      //   "date": new Date("2024-01-31"),
      //   "lyricsNum": 4,
      //   "lyrics":
      //   [
      //     "우리는 똑같이 쓸모없고",
      //     "세상은 뭣 같이 아름답지",
      //     "누가 나를 사랑할 수 있다 했어?",
      //     "거짓말 치지 마 재수 없어 당신"
      //   ]
      // },
      {
          "id": 32,
          "title": "Discord",
          "artist": "QWER",
          "thumbnail": "https://i.namu.wiki/i/DxYq0Qdznf32WxVvupxneNcHf4ymnmPSY2WsqUsyPrMm5QdaB-RHzxq6YFmiAuMDFPweDBw3FSf36rDeWu1gnnJerakPY11NxFmcJyLjWt8YCGwAIW2ceq7_wMUjO2DDrw8bFkm36ZroqvNUOff-wQ.webp",
          "mvurl": "https://www.youtube.com/embed/WGm2HmXeeRI?si=mtI2T0dodVf-JFlV",
          "mvurlalt": " ",
          "date": new Date("2024-02-01"),
          "lyricsNum": 4,
          "lyrics":
          [
            "딱 하나만 물어볼게 넌",
            "완벽이란 게 있다고 생각해?",
            "조금은 어색한 하모니라 해도",
            "그것도 그것대로 꽤 멋지잖아"
          ]
        },
        {
        "id": 33,
        "title": "그때 그 아인",
        "artist": "김필",
        "thumbnail": "https://i.namu.wiki/i/vLoPhG1tof8KQ9BvWO9lsk4_Z9SRcL5yKVgCkZZRyXH1UODxKUu1R0Ulsacc8rtcq-wdRXGJHo75vBms7F3Pq6Q7RAiDO4s_Pu2IupnMldwxD6KlncJOoSPCEROA-bicp6FPD474Fnfr1ACsYgpoTw.webp",
        "mvurl": "https://www.youtube.com/embed/mAjsF4UTg8g?si=hdV4XDcV1aFctCLM",
        "mvurlalt": " ",
        "date": new Date("2024-02-02"),
        "lyricsNum": 6,
        "lyrics":
        [
          "시간은 벌써 나를 키우고",
          "세상 앞으로 이젠 나가 보라고",
          "어제의 나는 내게 묻겠지",
          "웃을 만큼 행복해진 것 같냐고",
          "아주 먼 훗날 그대 그 아인",
          "꿈꿔왔던 모든 걸 가진 거냐고"
        ]
      },
      {
        "id": 34,
        "title": "I AM",
        "artist": "IVE (아이브)",
        "thumbnail": "https://i.namu.wiki/i/kDMi_mXIZL-Eq1iZ1ev3n9tWddLIzADSf1-9zgbvQA2jHcisyQr_kzYzASWuxWvplIvhKb9bk36I6jq7Z8ZWyBMyG17KtjmHjaElVtE6Fpf4BWDV8mcxMZHd1JgjVSZy7Jbq2qulE5Mv5o8B37_clg.webp",
        "mvurl": "https://www.youtube.com/embed/cU0JrSAyy7o?si=BcUT_DgDOM0vSchZ",
        "mvurlalt": "https://www.youtube.com/embed/6ZUIwj3FgUY?si=YeZlQEWPiG_ESra8",
        "date": new Date("2024-02-03"),
        "lyricsNum": 4,
        "lyrics":
        [
          "어느 깊은 밤",
          "길을 잃어도",
          "차라리 날아올라 그럼 네가",
          "지나가는 대로 길이거든"
        ]
      },
      {
        "id": 35,
        "title": "I WANT",
        "artist": "IVE (아이브)",
        "thumbnail": "https://i.namu.wiki/i/AtX6sPIxwqgf0vzrRnz7y300UBKDxKY0TtfOqHMbK6ZYxrCfMDpkCkxGyQmDCmVZGG7fvnkULmOQk7mn7tStwpS7j5Tsoj4trdKGtBiSxiBYaBQ0ChX7rxdB3pKElKyFkQVoCxImp_NKG4e2PZ1pKw.webp",
        "mvurl": "https://www.youtube.com/embed/okVTSehE414?si=qzpDoUy3olh-CXh_",
        "mvurlalt": " ",
        "date": new Date("2024-02-04"),
        "lyricsNum": 3,
        "lyrics":
        [
          "대체 누가 뭐가 그리 답답한데?",
          "윈래 내일 걱정 따윈 내일모레",
          "일어나지도 않은 일은 몰라도 돼"
        ]
      }
      ];

    
    console.log("---- +page.svelte ----")
    let today = new Date();
    today.setHours(today.getHours()); // Set to KST
    // today.setHours(today.getHours()+9); // Set to KST
    console.log(today);
    today.setHours(0,0,0,0);
    let dayNames = ["일", "월", "화", "수", "목", "금", "토"];
    let dayOfWeek = dayNames[today.getDay()];
    let title = "하루 한 곡";
    
    // let songNum = today.getDate()-1;
    let songNum = 0;
    let songNumCount;
    for(songNumCount = 0; songNumCount<songList.length; songNumCount++) {
      console.log(songNumCount);
      console.log(songList[songNumCount]["date"])
      let songListTime = songList[songNumCount]["date"];
      songListTime.setHours(0,0,0,0);
      if(songListTime.getTime()===today.getTime()) {
        songNum = songNumCount;
        console.log(songNum);
        break;
      }
    }
    
    
    
  </script>
  
  <style>
  header {
    /* display: flex; */
    /* justify-content: space-between; */
    align-items: center;
    /* text-align: center; */
    padding: 10px;
    background-color: #f0f0f0;
  }
  
  .title {
    /* order: 2; */
    /* flex-grow: 1; */
    display: flex;
    justify-content: center;
    /* text-align: center; */
    font-size: 18px;
    font-weight: bold;
  }
  
  .date-info {
    /* order: 1; */
    display: flex;
    justify-content: start;
    font-size: 16px;
  }

  .navi {
    /* order: 3; */
    display: flex;
    justify-content: end;
    /* text-align: end; */
    font-size: 16px;
  }
  
  .container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
  
  .album-art {
      width: 500px; /* 앨범 아트의 너비 설정 */
      height: 500px; /* 앨범 아트의 높이 설정 */
      /* background-image: url('https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp'); /* 앨범 아트 이미지 설정 */
      background-size: cover;
      background-position: center;
      display: flex;
      justify-content: center;
      align-items: center;
      box-shadow: 0 0 40px rgba(0, 0, 0, 0.5); /* 발광 효과 설정 */
  }
  
  </style>
  
  <header>
    <span class="date-info">
      {#if (today.getMonth()==11 && today.getDate()==31)}
        {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 {dayOfWeek}요일, 올해의 마지막 노래
      {:else if (today.getMonth()==0 && today.getDate()==1)}
        {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 {dayOfWeek}요일, 올해의 첫 노래
      {:else}
        {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 {dayOfWeek}요일, 오늘의 노래
      {/if}
    </span>
    <span class="title">{title}</span>
    <span class="navi">{title}</span>
  </header>
  
  <div class="container">
      {#if (today.getMonth()==11 && today.getDate()==31)}
      아직 서비스 오픈하지 않았습니다.
      {:else}
      <div class="album-art" style="background-image: url({songList[songNum]['thumbnail']})">
        <Lyrics/>
      </div>
      {/if}
  </div>