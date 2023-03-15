<template>
  <div class="runners">
   <video autoplay loop muted playsinline class="Video">
   <source src="../assets/run.mp4" type="video/mp4">
  </video>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.runners{
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
 }
 .Video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
