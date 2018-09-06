<template>
    <div class="summary">
        <!-- 顶部按钮 -->
        <div class="top">
            <img src="../../static/images/captions_E.png" alt="">
            <img src="../../static/images/manual_operation.png" alt="">
        </div>
        <!-- 内容 -->
        <div class="book" @click="showBar = !showBar">
            <!-- 图片部分 -->
            <div class="cover">
                <img src="../../static/images/page.png" alt="" class="page">
            </div>
            <!-- 文字部分 -->
            <div class="abstract">
                <p class="text">The Animals and the Birds decided to have a ball game. The Animals came onto the field first. They had big blue shirts with a great big “A”.</p>
            </div>
        </div>
        <!-- 播放条 -->
        <div :class="'playbar ' + showBar">
            <img src="../../static/images/play.png" alt="">
            <!-- <mt-range>
                <div slot="end">100</div>

            </mt-range> -->

            <mt-range class="range" v-model="rangeValue" :min="1" :max="page" :step="1" :bar-height="15">
                <div slot="end" class="pagination">{{ rangeValue }}/{{ page }}</div>
            </mt-range>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      rangeValue: 3,
      showBar: false,
      page: 15
    };
  }
};
</script>
<style>
.mt-range-progress {
  background-color: #fff;
  border-radius: 10px 0px 0px 10px;
}

.mt-range-runway {
  border-top-color: #489aa6;
  border-radius: 10px;
}

.mt-range-thumb {
  width: 50px;
  height: 50px;
  top: -10px;
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
    width: 170px;
    height: 54px;
    position: fixed;
    top: 0;
    right: 25px;
    z-index: 2;
  }

  .top img {
    margin-left: 15px;
  }

  .book {
    /* height: 1296px; */
    height: 90%;
    /* width: 694px; */
    width: 680px;
    margin: 0 auto;
    margin-top: 20px;
    background: url("../../static/images/book_shu.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
  }

  .cover {
    width: 576px;
    height: 576px;
    /* height: 50%; */
    /* width: 85%; */
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .page {
    width: 100%;
    height: 100%;
  }

  .abstract {
    width: 576px;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .text {
    width: 90%;
    height: 80%;
    font-size: 25px;
    line-height: 36px;
    letter-spacing: 3px;
    color: #000000;
    overflow-y: scroll;
    margin: 0 auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  .playbar {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 90px;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50px 0px 0px 0px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 20px;
    opacity: 0;
    transition: all 0.7s;
  }

  .playbar.true {
    opacity: 1;
    transition: all 0.7s;
  }

  .range {
    width: 80%;
    margin-left: 20px;
  }

  .pagination {
    font-size: 30px;
    margin-left: 20px;
    color: #fff;
  }
}
@media screen and (orientation: landscape) {
  /*横屏 css*/
  .top {
    width: 170px;
    height: 54px;
    position: fixed;
    top: 0;
    right: 0;
    z-index: 2;
    transform: rotate(90deg);
  }

  .top img {
    margin-left: 15px;
  }

  .book {
    /* height: 1296px; */
    height: 90%;
    /* width: 694px; */
    width: 90%;
    margin: 0 auto;
    margin-top: 20px;
    background: url("../../static/images/bgc_heng.png") no-repeat;
    background-size: 100% 100%;
    display: flex;
    flex-direction: column;
    padding-top: 70px;
    /* 你重启一下电脑,然后打开编辑器,右下角会提示你有一个重要的版本,你点开那个链接 */
  }

  .cover {
    width: 576px;
    height: 576px;
    /* height: 50%; */
    /* width: 85%; */
    margin: 0 auto;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  .page {
    width: 100%;
    height: 100%;
  }

  .abstract {
    width: 576px;
    height: 45%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
  }

  .text {
    width: 90%;
    height: 80%;
    font-size: 25px;
    line-height: 36px;
    letter-spacing: 3px;
    color: #000000;
    overflow-y: scroll;
    margin: 0 auto;
    padding-right: 20px;
    padding-left: 20px;
  }

  .playbar {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 90px;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    border-radius: 50px 0px 0px 0px;
    display: flex;
    justify-content: left;
    align-items: center;
    padding-left: 20px;
    opacity: 0;
    transition: all 0.7s;
  }

  .playbar.true {
    opacity: 1;
    transition: all 0.7s;
  }

  .range {
    width: 80%;
    margin-left: 20px;
  }

  .pagination {
    font-size: 30px;
    margin-left: 20px;
    color: #fff;
  }
}
</style>

