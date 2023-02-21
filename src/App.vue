<template>
  <section class="container">
    <header class="navbar">
      <div class="brand">
        <router-link to="/">
          Buildheim
        </router-link>
      </div>
      <div class="navbar__links">
        <router-link to="/">
          Home
        </router-link>
        <router-link to="/blueprints">
          Blueprints
        </router-link>
        <router-link to="/about">
          About
        </router-link>
        <router-link to="/upload">
          Upload
        </router-link>
        <router-link to="/profile">
          Profile
        </router-link>
      </div>
    </header>
    <main>
      <router-view />
    </main>
    <footer>
      <p>
        Made with &#128151; by <a
          class="link"
          href="https://github.com/dhershman1"
          target="_blank"
        >Dustin Hershman</a> &copy; 2022
      </p>
    </footer>
  </section>
</template>
<script>
export default {

}
</script>
