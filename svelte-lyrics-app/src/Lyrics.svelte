<script>
    let lyrics1;
    let lyrics2;
    let lyrics = [];
    let mvurl;
    let showPlayIcon = false;
    let showVideoPlayer = false;

    let ltoday = new Date();
    ltoday.setHours(ltoday.getHours()); // Set to KST    
    let lsongNum = ltoday.getDate()-1;
    // let lsongNum = 6;

    let lsongList = [
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
      }
    ];

    // 가사 수에 따른 lyrics 초기화
    for(let i=0;i<lsongList[lsongNum]["lyricsNum"];i++) {
      let lyricLine = lsongList[lsongNum]["lyrics"][i];
      lyrics = [...lyrics, lyricLine];
    }
    console.log(lyrics);

    lyrics1 = lsongList[lsongNum]["lyrics1"];
    lyrics2 = lsongList[lsongNum]["lyrics2"];
    mvurl = lsongList[lsongNum]["mvurl"];
    console.log(mvurl);

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
  
  {#each lyrics as line}
    <p class="lyrics-line">{line}</p>
  {/each}
  <!-- <p class="lyrics-line">{lyrics1}</p>
  <p class="lyrics-line">{lyrics2}</p> -->
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