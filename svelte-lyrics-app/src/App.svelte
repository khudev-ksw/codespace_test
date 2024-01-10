<script>

  import { onMount } from "svelte";
	import Lyrics from './Lyrics.svelte';

  let songList = [
      {
        "id": 1,
        "title": "하늘 위로(Up)",
        "artist": "아이즈원(IZ*ONE)",
        "thumbnail": "https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp",
        "mvurl": "https://www.youtube.com/embed/QqlxGUm9MLE?si=nD-Lh8hON1QY3Nqv",
        "date": "2024-01-01",
        "lyricsNum": 2,
        "lyrics":
        [
          "구름에 적어둬 없어지지 않도록",
          "언제나 보고 싶을때 나만 꺼내 볼거야"
        ]
      },
      {
        "id": 2,
        "title": "별의 하모니(Harmoney of stars)",
        "artist": "QWER",
        "thumbnail": "https://i.namu.wiki/i/TclIk6XCp0alVu2n2N5-kOfqxjcmGFzzsiA5R0BLSMksnvLvO8RFsTd7zTRMDDK9yjI-vDsw7PKIOpf_vQjeACESafkrTYu0Rn8l6jPzf6zQucRvtSBf3MvKD_MThWdum3PFzHfT4NTZWy1co5jXYg.webp",
        "mvurl": "https://www.youtube.com/embed/On6Pm4M-dQQ?si=tcSPM0vq7Gx3ES7E",
        "date": "2024-01-02",
        "lyricsNum": 3,
        "lyrics":
        [
          "너와 함께라는 이유로 운명을 믿어 난",
          "눈 앞에 펼쳐진 미랠 향해 인사를 해",
          "빛나는 별처럼"
        ]
        
      },
      {
        "id": 3,
        "title": "Jump",
        "artist": "김동률",
        "thumbnail": "https://i.namu.wiki/i/wTLNyckul3i0nKFfIZVq1XAe-88hlbi_EHzxUvVTe188eRq0naWpnLtZ_Pkx1FgBt7rIMj5e90xU7XHhTr45zFkSglqfmwkabKfX4JKVGp_fZuw2VHGdwt0bvd3mj2K8Jv2AAwTEwRCBkOiS-nFRZQ.webp",
        "mvurl" : "https://www.youtube.com/embed/-FSQ3DaVE9E?si=Qrq5IihGYxIkZwaY",
        "mvurlalt": "https://www.youtube.com/embed/wbXSaM2-vQ0?si=7xj8_8qdsx1PK65a",
        "date": "2024-01-03",
        "lyricsNum": 3,
        "lyrics":
        [
          "하고 싶은 일이 많았었는데 웬일인지 다 시시해",
          "아직 모든게 신기한 내 스무 살 때 처럼",
          "새로운 일들에 설레하며 가슴이 뛰고 싶어"
        ]
      },
      {
        "id": 4,
        "title": "우주를 줄게",
        "artist": "볼빨간사춘기",
        "thumbnail": "https://i.namu.wiki/i/vbcm7cee53m6nahs4pvwTZtGC8FLZO2REPEcJDpNAh6C3gIDetj5Dc2k0zTVxnZGBu0Pix9ovsDrfv2wgn06NxXLOWXaz7bJEoXJuxm3DKNFWcM9ifjqh06vwMRusLljFljwgHtvOzrEJ3pE8c4TSA.webp",
        "mvurl" : "https://www.youtube.com/embed/MYBScu8ha0I?si=n4wYHMREdldxCeV1",
        "mvurlalt": "https://www.youtube.com/embed/9U8uA702xrE?si=0usD_JtOKHdUE3vy",
        "date": "2024-01-03",
        "lyricsNum": 4,
        "lyrics":
        [
          "어제는 내가 기분이 참 좋아서",
          "지나간 행성에다가 그대 이름 새겨 놓았죠",
          "한참 뒤에 별빛이 내리면",
          "그 별이 가장 밝게 빛나요"
        ]
      },
      {
        "id": 5,
        "title": "회전목마 (Feat. Zion.T, 원슈타인)",
        "artist": "소코도모",
        "thumbnail": "https://i.namu.wiki/i/7fQgahkg_dZ4353cvUnfw6Rq0j4FbWw-5o8UEJx__qsH62aVQL4_8cIrem0BNWRSK-Xtj3UAp2KruLSREHmkFxhpGZVbVbow8nuiEGOyAsPXlEZfWy9qwrjmhMLjKyb_dSMvYZsZM_oV-YVoks6Iog.webp",
        "mvurl" : "https://www.youtube.com/embed/tnAxZipkuWw?si=a5d_M-sCFcteBnJb",
        "mvurlalt": " ",
        "date": "2024-01-04",
        "lyricsNum": 4,
        "lyrics":
        [
          "빙빙 돌아가는 회전목마처럼",
          "영원히 계속될 것처럼",
          "빙빙 돌아온 우리의 시간처럼",
          "인생은 회전목마"
        ]
      },
      {
        "id": 6,
        "title": "Either Way",
        "artist": "IVE (아이브)",
        "thumbnail": "https://i.namu.wiki/i/WU4wKflKkzaeq_bhXiLPDcud6WmEJP07Km-mo7c1jpsG4a853y87xBVVxT_elb_KgxhTxiEw7mlGTeHcC8i3SYuC1Ron9Ofb75DeTL9PKM1SUmhj759ou7xSrlJxh6LWNXwiBpqsgsTqI6fKHf9N8A.webp",
        "mvurl" : "https://www.youtube.com/embed/cJc62vZZs8A?si=PNfhOW_qZBzvZmwQ",
        "mvurlalt": "https://www.youtube.com/embed/_Hu4GYtye5U?si=lQb7iLfQyybk5MGF",
        "date": "2024-01-05",
        "lyricsNum": 2,
        "lyrics":
        [
          "쟤 I 라서 그래 넌 E 라서 그래",
          "됐고 그냥 V 나 하자"
        ]
      },
      {
        "id": 7,
        "title": "MIRROR",
        "artist": "권은비",
        "thumbnail": "https://i.namu.wiki/i/PVxdfPyaX6oHXzJYA75rzu4kAkHUB2uwvl-6LhCJdAbN43zZiqBRm1dC3lZNy6irmjyr7XhtHxmmq4Z7uWP3492lI1sLxynK-cr2G-tqy7FTXyupIga5qGSeCON0a5KTdHtqnJAGmF82nQ86aswmRg.webp",
        "mvurl" : "https://www.youtube.com/embed/V7KHhsUMAI0?si=2LI6a95J_jhnF_UH",
        "mvurlalt": " ",
        "date": "2024-01-06",
        "lyricsNum": 3,
        "lyrics":
        [
          "외로웠던 시간 버텨왔던 날들",
          "잘해왔잖아 모두 다",
          "좀 느려도 괜찮아 내가 여기 기다릴게"
        ]
      },
      {
        "id": 8,
        "title": "사건의 지평선",
        "artist": "윤하",
        "thumbnail": "https://i.namu.wiki/i/tVpSZIeqgkQXACiB3Cr12HZ7kBdas93tIJZz9z2zmth9DWEUTfxVslb88hIEDhJ0-CPjnCNtgL27pnvR_sg9IoDm_jV7-x-8_INrzV_kB6jl-A5GsBwdYgmJ8eprYySi8GiO71tJYI3EIw-m6aF_cw.webp",
        "mvurl" : "https://www.youtube.com/embed/BBdC1rl5sKY?si=fVus5iX5Si_j-qQ2",
        "mvurlalt": " ",
        "date": "2024-01-08",
        "lyricsNum": 3,
        "lyrics":
        [
          "솔직히 두렵기도 하지만",
          "노력은 우리에게 정답이 아니라서",
          "마지막 선물은 산뜻한 안녕"
        ]
      },
      {
        "id": 9,
        "title": "This Time",
        "artist": "조유리",
        "thumbnail": "https://i.namu.wiki/i/xz_c11EoM1gMomoS1HuiRrOb6NOaZxqi_jo1yfzW9suzh90jpvHWooTFK688B-2htvfTNbkp3TR4PTuucWwDPwPqfA1FMn_6j1Wn7cjeQbI6AGntCTo-EngIHsXUn2tqwQr-BGicC1jbT_-VE2CVyw.webp",
        "mvurl" : "https://www.youtube.com/embed/QkOPJG1DwWU?si=zOzWBt5CKh0tdyH7",
        "mvurlalt": " ",
        "date": "2024-01-09",
        "lyricsNum": 4,
        "lyrics":
        [
          "반짝이는 저 하늘의 별 곁에 은은한 달빛",
          "소리 없이 마음을 울리는 따뜻한 손길",
          "일렁이는 물결처럼 가끔은 두려워도",
          "간절한 이 꿈속에 우리가 있어"
        ]
      },
      {
        "id": 10,
        "title": "언젠가 우리의 밤도 지나가겠죠",
        "artist": "아이즈원(IZ*ONE)",
        "thumbnail": "https://i.namu.wiki/i/2eaWoLJNiHx35ChvW1Z-6OzuA-DhtuZd4a4j6bwQU5mVo_ZRQSvfgx9qNGRRtHaV7l0TgB3N8t_MgFHbK1pH-cyQNjqpVG6jocfJbGYBaFJWyEZYHWl-rijR5YQyNJa9HQ9uV127QYZPNg6G0Z6Jiw.webp",
        "mvurl" : "https://www.youtube.com/embed/BaKSB650TNk?si=rIUIm_wK5tRcmaAV",
        "mvurlalt": " ",
        "date": "2024-01-10",
        "lyricsNum": 4,
        "lyrics":
        [
          "언젠가 우리의 밤도 모두 지나가겠죠",
          "끝없는 어둠이 밀려와도 난 다신",
          "두려워하지는 않죠 우리 두 손 꼭 잡고서",
          "어둠 끝자락 함께 걸어갈게요"
        ]
      }
    ];


  let today = new Date();
  today.setHours(today.getHours()); // Set to KST
  let dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = dayNames[today.getDay()];
  let title = "하루 한 곡";
  
  let songNum = today.getDate()-1;
  // let songNum = 9;
  console.log(today);
  
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
}

.title {
  font-size: 18px;
  font-weight: bold;
}

.date-info {
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
  <div class="date-info">
    {#if (today.getMonth()==11 && today.getDate()==31)}
      {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 {dayOfWeek}요일, 올해의 마지막 노래
    {:else if (today.getMonth()==0 && today.getDate()==1)}
      {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 {dayOfWeek}요일, 올해의 첫 노래
    {:else}
      {today.getFullYear()}년 {today.getMonth() + 1}월 {today.getDate()}일 {dayOfWeek}요일, 오늘의 노래
    {/if}
  </div>
  <div class="title">{title}</div>
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