<template>
	<header>
		<nav class="nav__bar">
			<img src="@/assets/logo-bookmark.svg" alt="bookmarks logo" class="logo" />
			<div class="hamburger" v-if="isMobile">
        <button type="button" @click="isNavOpen = !isNavOpen" v-if="!isNavOpen">
				<img
					src="@/assets/icon-hamburger.svg"
					alt="icon to open mobile menu"
					class="openMenu menu"
				/>
        </button>
        <button type="button" @click="isNavOpen = !isNavOpen" v-else>
				<img
					src="@/assets/icon-close.svg"
					alt="icon to close mobile menu"
					class="closeMenu menu"
				/>
        </button>
			</div>
			<div class="overlay" v-if="isNavOpen">
				<ul class="social__list">
					<li>
						<a href="#">
							<img
								src="@/assets/icon-facebook.svg"
								alt=""
								class="social__icon"
							/>
						</a>
					</li>
					<li>
						<a href="#">
							<img
								src="@/assets/icon-twitter.svg"
								alt=""
								class="social__icon"
							/>
						</a>
					</li>
				</ul>
			</div>
			<!-- mobile nav -->
      <ul class="nav__list" v-if="isNavOpen">
				<li class="nav__item">
					<a href="#" class="nav__link">Features</a>
				</li>
				<li class="nav__item"><a href="#" class="nav__link">Pricing</a></li>
				<li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
				<li class="nav__item">
					<a href="#" class="nav__link nav__link--alt">Login</a>
				</li>
			</ul>
		</nav>

	</header>
</template>

<script>
export default {
	name: "Navigation",
  data() {
    return {
      isMobile: true,
      isNavOpen: false,
    }
  },
  mounted() {
    window.addEventListener("resize", ()=>{
      if(window.innerWidth > 991){
        this.isMobile = false;
        this.isNavOpen = true;
        return;
      }
      this.isMobile = false;
      this.isNavOpen = true;
    })
  }
};
</script>

<style>
.hamburger{
  cursor: pointer;
}
.menu {
  filter: brightness(0);
  cursor: pointer;
}
</style>
