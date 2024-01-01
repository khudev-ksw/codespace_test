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
      "date": "2024-01-01"
    },
    {
      "id": 2,
      "title": "별의 하모니(Harmoney of stars)",
      "artist": "QWER",
      "thumbnail": "https://i.namu.wiki/i/TclIk6XCp0alVu2n2N5-kOfqxjcmGFzzsiA5R0BLSMksnvLvO8RFsTd7zTRMDDK9yjI-vDsw7PKIOpf_vQjeACESafkrTYu0Rn8l6jPzf6zQucRvtSBf3MvKD_MThWdum3PFzHfT4NTZWy1co5jXYg.webp",
      "mvurl": "https://www.youtube.com/embed/On6Pm4M-dQQ?si=tcSPM0vq7Gx3ES7E",
      "date": "2024-01-02"
    }
  ];

  let today = new Date();
  today.setHours(today.getHours()); // Set to KST
  let dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = dayNames[today.getDay()];
  let title = "하루 한 곡";
  
  let songNum = today.getDate()-1;
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