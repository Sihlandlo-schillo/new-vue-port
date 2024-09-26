<template>
  <div class="layout">
    <div class="content-wrapper">
      <nav :class="['sidebar', {'header-nav': isMobile}]">
        <img v-if="!isMobile" src="https://sihlandlo-schillo.github.io/images/images2/Mna.jpg" alt="Your Image" class="sidebar-img">
        <ul>
          <!-- <li><router-link to="/">Home</router-link></li> -->
          <li><router-link to="/about">About</router-link></li>
          <li><router-link to="/resume">Resume</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <main>
        <router-view></router-view>
      </main>
    </div>
    <div class="footer">
      <footer-comp/>
    </div>
  </div>
</template>

<script>
import FooterComp from './components/FooterComp.vue';
export default {
  components: { FooterComp },
  data() {
    return {
      isMobile: false
    };
  },
  mounted() {
    this.checkScreenSize();
    window.addEventListener('resize', this.checkScreenSize);
  },
  beforeUnmount() {
    window.removeEventListener('resize', this.checkScreenSize);
  },
  methods: {
    checkScreenSize() {
      this.isMobile = window.innerWidth <= 768;
    }
  }
};
</script>


<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:ital,wght@0,300;0,400;0,700;0,900;1,300;1,400;1,700;1,900&display=swap');

#app {
  font-family: "Merriweather", system-ui;
  font-weight: 400;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: black;
}
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow: hidden; /* Disable scrolling */
}
body {
  background-color: E1E1E1;
}

.footer{
  margin-left: 100px;
}
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
}

.sidebar {
  width: 300px;
  height: 100vh;
  background-color: 2E2E2E;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
  padding: 10px;
  position: fixed;
  top: 0;
  left: 0;
  overflow:hidden;


  border-top-right-radius: 20px; 
  border-bottom-right-radius: 20px;

}

.sidebar-img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 20px;
}

.sidebar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.sidebar ul li {
  margin: 10px 0;
}

.sidebar ul li a {
  color: white;
  text-decoration: none;
}

.sidebar.header-nav {
  width: 100%;
  height: 50px;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: gray;
  z-index: 1000;
  /* overflow: hidden; */
} 

.sidebar.header-nav ul {

  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
}

.sidebar.header-nav ul li {
  margin: 0;
}


main {
  flex-grow: 1;
  padding: 20px;
  margin-left: 300px;
  height: 100vh;
  overflow: auto;
}

@media (max-width: 768px) {
  .footer{
    margin-left: 0;
  }
  .layout {
    flex-direction: column;
  }
  .sidebar {
    height: auto;
    overflow: hidden;
  }
  main{
    margin-top: 50px;
    margin-left: 0;
    height: calc(100vh - 50px);
  }
}

</style>
