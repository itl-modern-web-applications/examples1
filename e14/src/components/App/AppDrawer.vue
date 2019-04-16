<template>
  <nav>
    <img src='@/assets/logo.png'>
    <ul>
      <li><a href="#">London</a></li>
      <li><a href="#">Paris</a></li>
      <li><a href="#">Tokyo</a></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style>
  nav {
    float: left;
    width: 30%;
    height: 400px;
    background: #ccc;
    padding: 20px;
    line-height: 30px;
  }
  nav ul {
    list-style-type: none;
    padding: 0;
  }
  @media (max-width: 500px) {
    nav {
      width: 100%;
      height: auto;
    }
    nav ul {
      display: flex;
    }
    nav li {
      margin-right: 10px;
    }
  }
</style>
