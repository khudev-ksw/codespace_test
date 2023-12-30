<script>
    let lyrics1 = "구름에 적어둬 없어지지 않도록";
    let lyrics2 = "언제나 보고 싶을때 나만 꺼내 볼거야";
    let showPlayIcon = false;
    let showVideoPlayer = false;

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
      <iframe width="640" height="480" src="https://www.youtube.com/embed/QqlxGUm9MLE?si=nD-Lh8hON1QY3Nqv" frameborder="0" title="mv" allowfullscreen></iframe>
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