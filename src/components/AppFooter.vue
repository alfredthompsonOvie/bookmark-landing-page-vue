<template>
	<footer>
		<!-- v-if="false" -->
		<div class="inner__footer">
			<!-- <AppLink :to="{ name: 'home' }" class="main--logo">
				<img
					src="@/assets/logo-bookmark.svg"
					alt="bookmarks logo"
					class="logo"
					:class="{'logo--alt': menu}"
				/>
			</AppLink> -->
			<img
				src="@/assets/logo-bookmark.svg"
				alt="an image of bookmark logo"
				class="logo--footer"
			/>
			<ul class="nav__bar--footer">
				<li class="nav__item--footer">
					<AppLink :to="{ name: '' }" class="nav__link--footer">
						Features
					</AppLink>
				</li>
				<li class="nav__item--footer">
					<AppLink :to="{ name: '' }" class="nav__link--footer">
						Pricing
					</AppLink>
				</li>
				<li class="nav__item--footer">
					<AppLink :to="{ name: '' }" class="nav__link--footer">
						Contact
					</AppLink>
				</li>
			</ul>
			<ul class="nav__bar--social">
				<li>
					<AppLink to="http://www.facebook.com" >
						<img
							src="@/assets/icon-facebook.svg"
							alt="an image of facebook's logo"
					/>
					</AppLink>
				</li>
				<li>
					<AppLink to="http://www.twitter.com" >
						<img
							src="@/assets/icon-twitter.svg"
							alt="an image of twitter's logo"
					/>
					</AppLink>
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
import AppLink from "@/components/AppLink.vue"
export default {
	components: {
		AppLink
	},
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
