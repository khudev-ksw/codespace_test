<script>
    let lyrics1;
    let lyrics2;
    let mvurl;
    let showPlayIcon = false;
    let showVideoPlayer = false;

    let ltoday = new Date();
    ltoday.setHours(ltoday.getHours()); // Set to KST    
    let lsongNum = ltoday.getDate()-1;

    let lsongList = [
      {
        "id": 1,
        "title": "하늘 위로(Up)",
        "artist": "아이즈원(IZ*ONE)",
        "thumbnail": "https://i.namu.wiki/i/YSEQmx8s3trKntCl5cuINHI9gXNL1bCCAvQXXVMHPgWAa9JyK9j1eEFUgZtRST_TD-sywrMR9ujd_KdfclNesGDfbhptzB7EDw6d0w28-jdh03ZfEBjl_cJmserWhyHzInufTEEe2Jl4Av8CFiqAHw.webp",
        "mvurl": "https://www.youtube.com/embed/QqlxGUm9MLE?si=nD-Lh8hON1QY3Nqv",
        "date": "2024-01-01",
        "lyrics1": "구름에 적어둬 없어지지 않도록",
        "lyrics2": "언제나 보고 싶을때 나만 꺼내 볼거야"
      },
      {
        "id": 2,
        "title": "별의 하모니(Harmoney of stars)",
        "artist": "QWER",
        "thumbnail": "https://i.namu.wiki/i/TclIk6XCp0alVu2n2N5-kOfqxjcmGFzzsiA5R0BLSMksnvLvO8RFsTd7zTRMDDK9yjI-vDsw7PKIOpf_vQjeACESafkrTYu0Rn8l6jPzf6zQucRvtSBf3MvKD_MThWdum3PFzHfT4NTZWy1co5jXYg.webp",
        "mvurl": "https://www.youtube.com/embed/On6Pm4M-dQQ?si=tcSPM0vq7Gx3ES7E",
        "date": "2024-01-02",
        "lyrics1": "너와 함께라는 이유로 운명을 믿어 난",
        "lyrics2": "눈 앞에 펼쳐진 미랠 향해 인사를 해, 빛나는 별처럼"
      }
    ];

    lyrics1 = lsongList[lsongNum]["lyrics1"];
    lyrics2 = lsongList[lsongNum]["lyrics2"];
    mvurl = lsongList[lsongNum]["mvurl"];

    function togglePlayIcon() {
      showPlayIcon = !showPlayIcon;
    }

    function toggleVideoPlayer() {
      showVideoPlayer = !showVideoPlayer;
      console.log('toggleVideoPlayer called');
    }


</script>

<style>
  .lyrics {
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8); /* 가사의 배경 불투명도 설정 */
    padding: 5px;
  }
  
  .lyrics-line {
    font-size: 20px;
  }

  .play-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    cursor: pointer;
    display: none;
  }

  .video-player {
    display: none;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;
  }

  .show {
    display: block !important
  }

</style>

<div class="lyrics" on:mouseover={togglePlayIcon} on:mouseout={togglePlayIcon} on:click={toggleVideoPlayer}>
  <p class="lyrics-line">{lyrics1}</p>
  <p class="lyrics-line">{lyrics2}</p>
  {#if showPlayIcon}
    <span class="play-icon show">▶</span>
  {/if}
  {#if showVideoPlayer}
    <div class="video-player show">
      <!-- YouTube Video Iframe -->
      <iframe width="640" height="480" src="{mvurl}" frameborder="0" title="mv" allowfullscreen></iframe>
      <!-- stopPropagation : prevent event bubbling at div.Lyrics -->
      <div class="close-button" on:click={(e) => { e.stopPropagation(); toggleVideoPlayer(); }}>닫기</div>
    </div>
  {/if}
</div>





<!--
    .lyrics {
    position: relative;
    z-index: 1;
    font-size: 24px;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8); /* 가사의 배경 불투명도 설정 */
    padding: 10px;
  }
-->