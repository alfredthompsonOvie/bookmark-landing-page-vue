<template>
	<header>
		<nav class="nav__bar">
			<!--! banner -->
			<AppLink :to="{ name: 'home' }" class="main--logo">
				<img
					src="@/assets/logo-bookmark.svg"
					alt="bookmarks logo"
					class="logo"
					:class="{ 'logo--alt': menu }"
				/>
			</AppLink>

			<div class="hamburger" v-if="mobile">
				<button type="button" @click.prevent="menu = !menu" v-if="!menu">
					<img
						src="@/assets/icon-hamburger.svg"
						alt="open mobile menu"
						class="menu"
					/>
				</button>
				<button type="button" @click.prevent="menu = !menu" v-else>
					<img
						src="@/assets/icon-close.svg"
						alt="close mobile menu"
						class="menu"
					/>
				</button>
			</div>

			<!-- mobile nav -->
			<div class="overlay" v-if="menu">
				<div class="overlay__contents">
					<ul class="nav__list">
						<li class="nav__item">
							<a href="#" class="nav__link">Features</a>
						</li>
						<li class="nav__item"><a href="#" class="nav__link">Pricing</a></li>
						<li class="nav__item"><a href="#" class="nav__link">Contact</a></li>
						<li class="nav__item">
							<a href="#" class="nav__link nav__link--alt">Login</a>
						</li>
					</ul>

					<ul class="social__list">
						<li>
							<AppLink to="https://www.facebook.com" class="">
								<img
									src="@/assets/icon-facebook.svg"
									alt="facebook"
									class="social__icon"
								/>
							</AppLink>
						</li>
						<li>
							<AppLink to="https://www.twitter.com" class="">
								<img
									src="@/assets/icon-twitter.svg"
									alt="twitter"
									class="social__icon"
								/>
							</AppLink>
						</li>
					</ul>
				</div>
			</div>

			<!-- desktop nav -->
			<ul class="nav__list--desktop" v-if="!mobile">
				<li class="nav__item">
					<AppLink :to="{ name: '' }" class="nav__link"> Features </AppLink>
				</li>
				<li class="nav__item">
					<AppLink :to="{ name: '' }" class="nav__link"> Pricing </AppLink>
				</li>
				<li class="nav__item">
					<AppLink :to="{ name: '' }" class="nav__link"> Contact </AppLink>
				</li>
				<li class="nav__item">
					<AppLink :to="{ name: '' }" class="nav__link nav__link--alt">
						Login
					</AppLink>
				</li>
			</ul>
		</nav>
	</header>
</template>

<script>
import AppLink from "@/components/AppLink.vue";
import { ref, onMounted } from "vue";
export default {
	name: "Navigation",
	components: {
		AppLink,
	},

	setup() {
		const mobile = ref(null);
		const menu = ref(null);
		const windowWidth = ref(null);

		const checkScreen = () => {
			windowWidth.value = window.innerWidth;
			if (windowWidth.value < 992) {
				mobile.value = true;
				menu.value = false;
				return;
			}

			mobile.value = false;
			menu.value = false;
			return;
		};
		onMounted(() => {
			checkScreen();
			window.addEventListener("resize", checkScreen);
		});
		return {
			mobile,
			menu,
		};
	},
};
</script>

<style lang="scss" scoped>
header {
	display: grid;
	grid-template-columns: 0.1fr 1.8fr 0.1fr;
	grid-template-rows: 5em;
	z-index: 8;
	position: relative;
}
.nav__bar {
	grid-column: 2;
	grid-row: 1;
	display: flex;
	align-items: center;
	justify-content: space-between;
	position: relative;
	z-index: 8;
}
.logo--alt {
	position: relative;
	filter: invert(1) brightness(20);
	/* filter: contrast(2) sepia(2) invert(1) brightness(2); */
	z-index: 99;
}

.hamburger {
	position: relative;
	width: 1.5em;
	height: 1.5em;
	cursor: pointer;
}
.menu {
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	cursor: pointer;
	z-index: 99;
}
.overlay {
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: hsla(229, 31%, 21%, 0.9);
	padding-top: 5em;
	display: grid;
	grid-template-columns: 0.1fr 1.8fr 0.1fr;
}
.overlay__contents {
	grid-column: 2;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
}
.social__list {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2em;
	margin-bottom: 2em;
}
.nav__list {
	width: 100%;
}
.nav__item {
	border-top: 1px solid rgba(255, 255, 255, 0.2);
}
.nav__item:nth-child(4) {
	padding: 0.8em 0;
}
.nav__link {
	display: block;
	text-align: center;
	color: #fff;
	font-size: 1rem;
	text-transform: uppercase;
	font-weight: 100;
	letter-spacing: 1px;
	padding: 0.8em 0;
	padding: 1.2em 0;
}
.nav__link--alt {
	padding: 0.4em;
	padding: 0.8em;
	border: 1px solid var(--GrayishBlue);
	border-radius: 5px;
}

/* DESKTOP */
.nav__list--desktop {
	display: flex;
	align-items: center;
	gap: 2em;
}
.nav__list--desktop .nav__item {
	padding: 1em 0;
}
.nav__list--desktop .nav__item:nth-child(4) {
	padding: 0.8em 0;
}
.nav__list--desktop .nav__link {
	display: block;
	text-align: center;
	text-transform: uppercase;
	letter-spacing: 1px;

	color: var(--GrayishBlue);
	font-size: 0.9rem;
	font-weight: var(--fw-sm);
	transition: all 500ms linear;
	&:hover {
		color: var(--SoftRed);
	}
}
.nav__list--desktop .nav__link--alt {
	display: block;
	padding: 0.6em 2em;
	border-radius: 5px;
	background-color: var(--SoftRed);
	border: 2px solid transparent;
	color: #fff;
	&:hover {
		border-color: var(--SoftRed);
		background-color: white;
		color: var(--SoftRed);
	}
}
/* MEDIA QUERIES */
@media (min-width: 48em) {
	.logo {
		width: 12em;
	}
	.nav__item:nth-child(4) {
		padding: 1.5em 0 0;
	}
	.nav__link {
		font-size: 1.2rem;
		padding: 1em 0;
	}
	.nav__link--alt {
		padding: 0.8em;
		border-radius: 5px;
	}
	.overlay__social__list {
		gap: 3em;
		margin-bottom: 3em;
	}
	.overlay__social__icon {
		width: 3em;
	}
	.hamburger {
		position: relative;
		width: 1.4em;
		height: 1.4em;
		cursor: pointer;
	}
}
// 1200px
@media (min-width: 75em) {
	header {
		grid-template-columns: 0.2fr 1.6fr 0.2fr;
	}
}
</style>
