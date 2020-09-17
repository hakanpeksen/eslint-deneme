<template>
  <div class="parent">
    <div class="child1">
      <h1>one</h1>
    </div>
    <div class="child2">
      <h1>two</h1>
    </div>
    <div class="child3">
      <h1>three</h1>
    </div>
    <!-- <div class="child4">
      <h1>four</h1>
    </div> -->
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.parent {
  height: 100vh;
  border: 20px solid #000000;
  display: flex;
  flex-wrap: wrap;

  /* 3 kutu üst üste durur */
  /* flex-direction: column;   */

  justify-content: center;
  /* justify-content: space-between; */
  /* justify-content: space-around; */
  /* justify-content: space-evenly; */
  /* align-items: center; */
  /* align-items: flex-start; */
  /* align-items: flex-end; */
  align-items: stretch;
  /* bu özellik için height kapatılmalı */ /* height: 200px; */

  /* ekranı küçültünce  sağdaki kutuyu alta atar ve üstten boşluk brakır */
  /* flex-wrap: wrap; */
  /* ekranı küçültünce  sağdaki kutuyu alta atar ve üstteki kutulara  yapışır */
  /* align-content: flex-start; */

  /* ilk 2  kutuyu aşağı  atar */
  /* align-items: baseline; */
  /*ilk olarak dikeyde üst üste durur    dikeyde  ekranı  küçültünce 4 kutu da yatayda aralarında  boşluk olarak yanyana gelir  */
  /* flex-flow: column wrap; */
}
.child1 {
  /* width: 200px; */
  height: 200px;
  background: blue;
  /* 1.kutu  en sağa gelir  */
  /* order: 1; */
  /* 1.kutu soldan bütün boşluk alanı kullandı.2. ve 3.kutuyu yanına aldı */
  /* flex-grow: 1; */
  /* 1.kutuda  width: 200px; ve  flex: 1 1 300px; olursa  1.kutunun genişliği 985px olur */
  /* flex: 1 1 300px; */

  /* 3.kutuya da  flex: 1 1 300px;  eklersen, 3 kutunun genişliği  461px olur ve    flex-wrap: wrap; olursa parentın genişliği 900px den azalırsa
  yani ekranı daraltırsan  3.kutuyu alta atar, eğer 600px den azalırsa 3 kutu dikeyde alt alta  gelir, aralarında az biraz boşlukla */
}
.child2 {
  width: 200px;
  height: 200px;
  background: saddlebrown;
  /* order: 2; */
  /* 1. ve 2.kutu  aynı genişlikte 3.kutu daha az genişlikte oldu */
  /* flex-grow: 1; */

  /* 1.kutudaki width ve grow u silip, 3.kutudaki grow u silip ve 2.kutudaki grow u silip,  flex 1 0 auto dersen, 2.kutunun genişliği  büyür  */
  flex: 1 0 auto;
  /* 1.kutudaki width ve grow u silip, 3.kutudaki grow u silip ve 2.kutudaki grow u silip,  flex 1 dersen, 2.kutunun genişliği  büyür  */
  /* flex: 1; */
  /* flex: 1 1 300px; */
  /* 2.kutu ortada olur */
  /* align-self: center; */
}
.child3 {
  width: 200px;
  height: 200px;
  background: slateblue;
  /* kutular three two  four diye sıralandı */
  /* order: 1; */
  /* flex-grow: 1; */
  /* flex: 1 1 300px; */
  /* 3.kutu aşağıda olur */
  /* align-self: flex-end; */
}
.child4 {
  width: 200px;
  height: 200px;
  background: slategrey;
  order: 4;
}
h1 {
  color: white;
}
</style>
