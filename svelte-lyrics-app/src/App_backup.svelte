<!-- <script context="module">
  // DB connetion
  import { connectToDatabase } from './db/mongo';

  export async function load({ params }) {
    const { songId } = "aaa";

    const client = await connectToDatabase();
    const database = client.db('DailyLyrics');
    const songsCollection = database.collection('songInfo');
    const song = await songsCollection.findOne({ songId });

    console.log(song);

    return {
      props: {
        song,
      },
    };
  }

</script> -->

<script>
  // export let song;

  // export let name;
  import { onMount } from "svelte";
	import Lyrics from './Lyrics.svelte';

  let songList = [];

  // onMount(async () => {
  //   // 페이지가 로드되면서 한 번만 실행되는 로직 추가 가능
  //   const response = await fetch('./db/temp_db.json');
  //   const data = await response.json();

  //   const todayJ = new Date().toISOString().split('T')[0]; // 한국 기준 시간대로 수정 필요

  //   songList = data.filter(song => song.date === todayJ);

  //   console.log(songList);

    
  // });

  let today = new Date();
  today.setHours(today.getHours+9); // Set to KST
  let dayNames = ["일", "월", "화", "수", "목", "금", "토"];
  let dayOfWeek = dayNames[today.getDay()];
  let title = "하루 한 곡";
  
  
  
  
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
    background-image: url('https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp'); /* 앨범 아트 이미지 설정 */
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
    <div class="album-art">
      <Lyrics/>
    </div>
	{/if}
</div>




<!--
  .background-image {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.5; /* 원하는 불투명도 설정 */
  }

-->