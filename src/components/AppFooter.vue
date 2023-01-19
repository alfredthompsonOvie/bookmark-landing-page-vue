<template>
	<footer 
  >
  <!-- v-if="false" -->
		<div class="inner__footer">
      <AppLink :to="{ name: 'home' }" class="main--logo">
				<img
					src="@/assets/logo-bookmark.svg"
					alt="bookmarks logo"
					class="logo"
					:class="{'logo--alt': menu}"
				/>
			</AppLink>
			<img
				src="@/assets/logo-bookmark.svg"
				alt="an image of bookmark logo"
				class="logo--footer"
			/>
			<ul class="nav__bar--footer">
				<li class="nav__item--footer">
					<a href="#" class="nav__link--footer">Features</a>
				</li>
				<li class="nav__item--footer">
					<a href="#" class="nav__link--footer">Pricing</a>
				</li>
				<li class="nav__item--footer">
					<a href="#" class="nav__link--footer">Contact</a>
				</li>
			</ul>
			<ul class="nav__bar--social">
				<li>
					<a href="#"
						><img
							src="@/assets/icon-facebook.svg"
							alt="an image of facebook's logo"
					/></a>
				</li>
				<li>
					<a href="#"
						><img
							src="@/assets/icon-twitter.svg"
							alt="an image of twitter's logo"
					/></a>
				</li>
			</ul>
		</div>
		<p class="attribution">
			Challenge by
			<a href="https://www.frontendmentor.io?ref=challenge" target="_blank"
				>Frontend Mentor</a
			>. Coded by <a href="#" target="_blank">Alfred Thompson Ovie</a>.
		</p>
	</footer>
</template>

<script>
export default {
	setup() {
		return {};
	},
};
</script>

<style lang="scss" scoped>
.logo {
  filter: invert(1) brightness(20);
}
</style>
