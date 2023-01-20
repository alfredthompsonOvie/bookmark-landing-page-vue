<template>
	<main>
		<!-- hero -->
		<section class="hero section--container">
			<div class="hero__graphic">
				<img src="@/assets/illustration-hero.svg" alt="" />
			</div>
			<div class="hero__content">
				<h1 class="heading heading--main">A Simple Bookmark Manager</h1>
				<p class="description isDescription--main">
					A clean and simple interface to organize your favourite websites.
					Open a new browser tab and see your sites load instantly. Try it for
					free.
				</p>
				<div class="cta__wrapper isCta__wrapper">
					<a href="#" class="cta cta--prim isCta--prim">Get it on Chrome</a>
					<a href="#" class="cta cta--alt isCta--prim">Get it on Firefox</a>
				</div>
			</div>
		</section>
		<!-- features -->
		<section class="section section--features features section--container">
			<div class="section__content feature__content">
				<h2 class="heading heading--sec isHeading__features">Features</h2>
				<p class="description description--features isDescription__features">
					Our aim is to make it quick and easy for you to access your
					favourite websites. Your bookmarks sync between your devices so you
					can access them on the go.
				</p>
			</div>
			<div class="section__tab">
				<ul class="tab">
					<li class="tab__item">
						<button
							class="tab__btn tab__btn--active"
							
							data-tab="0"
							@click.prevent="tabMenu = 'bookmark'"
						>
							Simple Bookmarking
						</button>
						<span 
						:class="{'tab--active': tabMenu === 'bookmark'}"
						></span>
					</li>
					<li class="tab__item">
						<button 
						class="tab__btn" 
						data-tab="1"
						@click.prevent="tabMenu = 'search'"
						>
							Speedy Searching
						</button>
						<span 
						:class="{'tab--active': tabMenu === 'search'}"
						></span>
					</li>
					<li class="tab__item">
						<button 
						class="tab__btn" 
						data-tab="2"
						@click.prevent="tabMenu = 'share'"
						>
							Easy Sharing
						</button>
						<span
						:class="{'tab--active': tabMenu === 'share'}"
						></span>
					</li>
				</ul>
				<div class="tab__components">
					<!-- 1 -->
					<div 
					class="tab__component"
					v-if="tabMenu === 'bookmark'"
					>
						<div class="tab__component__graphic">
							<img src="@/assets/illustration-features-tab-1.svg" alt="" />
						</div>
						<div class="tab__component__content">
							<h2 class="heading heading--sec isHeading__tab__component">
								Bookmark in one click
							</h2>
							<p class="description description--tab isDescription__tab">
								Organize your bookmarks however you like. Our simple
								drag-and-drop interface gives you complete control over how
								you manage your favourite sites.
							</p>
							<a href="#" class="cta cta--prim cta--desktop isCta__tab"
								>More Info</a
							>
						</div>
					</div>
					<!-- 2 -->
					<div
					class="tab__component"
					v-if="tabMenu === 'search'"
					>
						<div class="tab__component__graphic">
							<img src="@/assets/illustration-features-tab-2.svg" alt="" />
						</div>
						<div class="tab__component__content">
							<h2 class="heading heading--sec">Intelligent search</h2>
							<p class="description description--tab">
								Our powerful search feature will help you find saved sites in
								no time at all. No need to trawl through all of your
								bookmarks.
							</p>
							<a href="#" class="cta cta--prim cta--desktop">More Info</a>
						</div>
					</div>
					<!-- 3 -->
					<div class="tab__component"
					v-if="tabMenu === 'share'"
					>
						<div class="tab__component__graphic">
							<img src="@/assets/illustration-features-tab-3.svg" alt="" />
						</div>
						<div class="tab__component__content">
							<h2 class="heading heading--sec">Share your bookmarks</h2>
							<p class="description description--tab">
								Easily share your bookmarks and collections with others.
								Create a shareable link that you can send at the click of a
								button.
							</p>
							<a href="#" class="cta cta--prim cta--desktop">More Info</a>
						</div>
					</div>
				</div>
			</div>
		</section>
		<!-- extensions -->
		<section class="section section--extensions section--container">
			<div class="section__content">
				<h2 class="heading heading--sec">Download the extension</h2>
				<p class="description description--features">
					We’ve got more browsers in the pipeline. Please do let us know if
					you’ve got a favourite you’d like us to prioritize.
				</p>
			</div>
			<div class="extension__container">
				<div class="extension">
					<img
						src="@/assets/logo-chrome.svg"
						alt="chrome's icon"
						class="extension__icon"
					/>
					<h4 class="heading heading--extension">Add to Chrome</h4>
					<p class="extension--description">Minimum version 62</p>
					<div class="extension__bg"></div>
					<button class="cta cta--prim cta--extension">
						Add & Install Extension
					</button>
				</div>
				<div class="extension extension--firefox">
					<img
						src="@/assets/logo-firefox.svg"
						alt="firefox's icon"
						class="extension__icon"
					/>
					<h4 class="heading heading--extension">Add to Firefox</h4>
					<p class="extension--description">Minimum version 55</p>
					<div class="extension__bg"></div>
					<button class="cta cta--prim cta--extension">
						Add & Install Extension
					</button>
				</div>
				<div class="extension extension--opera">
					<img
						src="@/assets/logo-opera.svg"
						alt="opera mini's icon"
						class="extension__icon"
					/>
					<h4 class="heading heading--extension">Add to Opera</h4>
					<p class="extension--description">Minimum version 46</p>
					<div class="extension__bg"></div>
					<button class="cta cta--prim cta--extension">
						Add & Install Extension
					</button>
				</div>
			</div>
		</section>
		<!-- faqs -->
		<section class="section section--faq section--container">
			<div class="section__content">
				<h2 class="heading heading--sec">Frequently Asked Questions</h2>
				<p class="description description--features description--faq">
					Here are some of our FAQs. If you have any other questions you’d
					like answered please feel free to email us.
				</p>
			</div>
			<div class="accordion__container">
				<div class="accordion">
					<AppFaqs />
				</div>
				<a href="#" class="faq__btn cta cta--prim"> More Info</a>
			</div>
		</section>
		<!-- newsletter -->
		<AppNewsletter />
	</main>
</template>

<script>
import AppLink from '@/components/AppLink.vue';
import AppFaqs from '@/components/faq/AppFaqs.vue';
import AppNewsletter from '@/components/AppNewsletter.vue';
import { ref } from "vue";
export default {
  name: "home",
  components: {
		AppLink,
		AppFaqs,
		AppNewsletter
  },
	setup() {
		const tabMenu = ref('bookmark');
		return {
			tabMenu
		}
	},
};
</script>

<style lang="scss" scoped></style>
