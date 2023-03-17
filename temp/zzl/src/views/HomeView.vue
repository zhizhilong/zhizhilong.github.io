<template>
  <div class="home">
    <header>
      <!-- <h2 class="logo">Logo</h2> -->
      <nav class="navigation">
        <a href="#" class="active">主页</a>
        <a href="#/blog">博客</a>
      </nav>
    </header>

    <section class="parallax">
      <img src="../assets/hill1.png" id="hill1" />
      <img src="../assets/hill2.png" id="hill2" />
      <img src="../assets/hill3.png" id="hill3" />
      <img src="../assets/hill4.png" id="hill4" />
      <img src="../assets/hill5.png" id="hill5" />
      <img src="../assets/tree.png" id="tree" />
      <h2 id="text">Lin ZhiLong</h2>
      <!-- <div id="text" class="small-text">A developer from Fujian, China.</div>
        <div id="text" class="small-text">HTML / CSS / Javascript / React / Three.js</div> -->
      <img src="../assets/leaf.png" id="leaf" />
      <img src="../assets/plant.png" id="plant" />
    </section>

    <section class="sec">
      <h2>在想要怎么写标题</h2>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
      <p>在想了。应该从简历上抄的呀！</p>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
  mounted() {
    let text = document.getElementById("text");
    let leaf = document.getElementById("leaf");
    let hill1 = document.getElementById("hill1");
    let hill4 = document.getElementById("hill4");
    let hill5 = document.getElementById("hill5");

    window.addEventListener("scroll", () => {
      let value = window.scrollY;

      text.style.marginTop = value * 1.5 + "px";
      leaf.style.top = value * -1.5 + "px";
      leaf.style.left = value * 1.5 + "px";
      hill5.style.left = value * 1.5 + "px";
      hill4.style.left = value * -1.5 + "px";
      hill1.style.top = value * 0.5 + "px";
    });
  },
};
</script>
<style lang="css" scoped>
@import url("../assets/style.css");
</style>
