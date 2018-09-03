<template>
  <div class="summary">
    <!-- 顶部按钮 -->
    <div class="top">
      <img src="../../static/images/captions.png" alt="">
      <img src="../../static/images/auto_turning.png" alt="">
      <img src="../../static/images/music.png" alt="">
    </div>
    <!-- 内容 -->
    <div class="book">

      <div class="cover">

        <div class="page">
          <img src="../../static/images/page.png" alt="">

          <div class="play_button">
            <img src="../../static/images/play_button.png">
          </div>

        </div>

      </div>

      <!-- 简介 -->
      <div class="abstract">
        <p class="text">有一天，动物和鸟举办了一场足球比赛。动物先来到了球场，熊、鹿和袋鼠都在动物队上，他们满球场的练习和做伸展操。至于鸟队，队上有麻雀、鹪鹩、知更鸟以及大鸟——老鹰和鸵鸟也来了。大家都很期待比赛开始。这时候，蝙蝠也来了，他想要为胜利的队伍效力。蝙蝠很看好动物们，所以他加入了动物队。然而事情不如他所希望的，比赛比到一半的时候，鸟队竟然2比1领先了！现在，蝙蝠想要加入鸟队，他用「我有翅膀」顺利说服鸟儿们让他加入鸟队。最终究竟是哪一队会获得胜利呢？蝙蝠能如他所愿的在胜利的一边吗？</p>
      </div>
    </div>
    <!-- 布克 -->
    <div class="buke">
      <img src="../../static/images/buke.png" alt="">
    </div>
  </div>
</template>

<style>
/* 滚动条样式 */

::-webkit-scrollbar {
  width: 10px;
  border-radius: 1px;
}

::-webkit-scrollbar-track-piece {
  width: 4px;
  background-color: #93cad0;
  border-radius: 1px;
}

::-webkit-scrollbar-thumb {
  width: 3px;
  background-color: #fff;
  border-radius: 5px;
}
</style>


<style scoped>
@media screen and (orientation: portrait) {
  /*竖屏 css*/
  .summary {
    width: 100%;
    height: 100%;
    position: relative;
    background: #dcf6fb;
    overflow: hidden;
  }

  .top {
    width: 200px;
    height: 54px;
    position: fixed;
    top: 0;
    right: 74px;
    z-index: 2;
  }

  .top img {
    margin-left: 10px;
  }

  .book {
    /* height: 1296px; */
    width: 694px;
    margin: 0 auto;
    margin-top: 20px;
  }

  .cover {
    width: 694px;
    height: 690px;
    background: url("../../static/images/book_bgc.png") no-repeat;
    background-size: cover;
  }

  .page {
    background-color: red;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .page > img {
    width: 85%;
    height: 85%;
  }

  .play_button {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 20px;
    box-sizing: border-box;
  }

  .abstract {
    width: 576px;
    height: 537px;
    background-color: #93cad0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    margin-top: 37px;
  }

  .text {
    width: 440px;
    height: 421px;
    font-size: 25px;
    line-height: 36px;
    letter-spacing: 3px;
    color: #ffffff;
    overflow-y: auto;
    margin: 0 auto;
    padding-right: 25px;
    padding-left: 25px;
  }

  .text::-webkit-scrollbar {
    width: 8px;
    height: 10px;
    background-color: #ccc;
  }

  /*定义滚动条轨道 内阴影+圆角*/
  .text::-webkit-scrollbar-track {
    border-radius: 10px;
    background-color: #ccc;
  }

  /*定义滑块 内阴影+圆角*/
  .text::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #fff;
  }

  .buke {
    position: fixed;
    bottom: 0;
    left: -10px;
  }
}

@media screen and (orientation: landscape) {
  /*横屏 css*/
  .summary {
    width: 100%;
    height: 100%;
    position: relative;
    background: #dcf6fb;
    /* overflow: hidden; */
  }

  .top {
    width: 145px;
    height: 36px;
    position: fixed;
    top: 0;
    right: 74px;
    z-index: 2;
  }

  .top img {
    width: 35px;
    height: 35px;
    margin-left: 10px;
  }

  .book {
    height: 90%;
    width: 100%;
    /* margin: 0 auto; */
    /* margin-top: 20px; */
    padding-top: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .cover {
    width: 365px;
    height: 365px;
    background: url("../../static/images/book_bgc.png") no-repeat;
    background-size: cover;

    /* position: relative; */
    /* padding: 30px 20px; */
  }

  .page {
    background-color: red;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .page > img {
    width: 85%;
    height: 85%;
  }

  .play_button {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 7px;
    box-sizing: border-box;
  }

  .abstract {
    width: 320px;
    /* height: 300px; */
    height: 80%;
    background-color: #93cad0;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .text {
    width: 260px;
    /* height: 250px; */
    height: 85%;
    font-size: 18px;
    line-height: 36px;
    letter-spacing: 3px;
    color: #ffffff;
    overflow-y: auto;
    margin: 0 auto;
    padding-right: 15px;
    padding-left: 15px;
  }

  .buke {
    position: fixed;
    bottom: 0;
    right: 0;
    height: 100px;
    width: 100px;
  }

  .buke img {
    height: 100px;
    width: 100px;
  }
}
</style>
