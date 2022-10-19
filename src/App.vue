<template>
			<navigation-component />
			<main v-if="false">
        <!-- hero -->
				<section class="hero section--container">
					<div class="hero__graphic">
						<img src="@/assets/illustration-hero.svg" alt="" />
					</div>
					<div class="hero__content">
						<h1 class="heading heading--main">A Simple Bookmark Manager</h1>
						<p class="description isDescription--main">
							A clean and simple interface to organize your favourite websites.
							Open a new browser tab and see your sites load instantly. Try it
							for free.
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
							favourite websites. Your bookmarks sync between your devices so
							you can access them on the go.
						</p>
					</div>
					<div class="section__tab">
						<ul class="tab__controls">
							<li class="tab__control__item">
								<button
									class="tab__control__btn tab__control__btn--active"
									data-tab="0"
								>
									Simple Bookmarking
								</button>
								<span class="tab__control--active"></span>
							</li>
							<li class="tab__control__item">
								<button class="tab__control__btn" data-tab="1">
									Speedy Searching
								</button>
								<span></span>
							</li>
							<li class="tab__control__item">
								<button class="tab__control__btn" data-tab="2">
									Easy Sharing
								</button>
								<span></span>
							</li>
						</ul>
						<div class="tab__components">
							<!-- 1 -->
							<div class="tab__component">
								<div class="tab__component__graphic">
									<img src="@/assets/illustration-features-tab-1.svg" alt="" />
								</div>
								<div class="tab__component__content">
									<h2 class="heading heading--sec isHeading__tab__component">Bookmark in one click</h2>
									<p class="description description--tab isDescription__tab">
										Organize your bookmarks however you like. Our simple
										drag-and-drop interface gives you complete control over how
										you manage your favourite sites.
									</p>
									<a href="#" class="cta cta--prim cta--desktop isCta__tab">More Info</a>
								</div>
							</div>
							<!-- 2 -->
							<div class="tab__component is--hidden">
								<div class="tab__component__graphic">
									<img src="@/assets/illustration-features-tab-2.svg" alt="" />
								</div>
								<div class="tab__component__content">
									<h2 class="heading heading--sec">Intelligent search</h2>
									<p class="description description--tab">
										Our powerful search feature will help you find saved sites
										in no time at all. No need to trawl through all of your
										bookmarks.
									</p>
									<a href="#" class="cta cta--prim cta--desktop">More Info</a>
								</div>
							</div>
							<!-- 3 -->
							<div class="tab__component is--hidden">
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
							<!-- Question 1 -->
							<button class="accordion__btn" data-accordionBtn="0">
								<span class="accordion__btn__content">What is Bookmark?</span>
								<span class="accordion__btn__icon">
									<img
										src="@/assets/icon-arrow.svg"
										alt="an icon of an arrow"
										class="accordion__btn__icon__img"
									/>
								</span>
							</button>
							<!-- Answer 1 -->
							<div class="accordion__panel">
								<p class="description">
									Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
									tincidunt justo eget ultricies fringilla. Phasellus blandit
									ipsum quis quam ornare mattis.
								</p>
							</div>
							<!-- Question 2 -->
							<button class="accordion__btn" data-accordionBtn="1">
								<span class="accordion__btn__content"
									>How can I request a new browser?</span
								>
								<span class="accordion__btn__icon">
									<img
										src="@/assets/icon-arrow.svg"
										alt="an icon of an arrow"
										class="accordion__btn__icon__img"
									/>
								</span>
							</button>
							<!-- Answer 2 -->
							<div class="accordion__panel">
								<p class="description">
									Vivamus luctus eros aliquet convallis ultricies. Mauris augue
									massa, ultricies non ligula. Suspendisse imperdiet. Vivamus
									luctus eros aliquet convallis ultricies. Mauris augue massa,
									ultricies non ligula. Suspendisse imperdie tVivamus luctus
									eros aliquet convallis ultricies. Mauris augue massa,
									ultricies non ligula. Suspendisse imperdiet.
								</p>
							</div>
							<!-- Question 3 -->
							<button class="accordion__btn" data-accordionBtn="2">
								<span class="accordion__btn__content"
									>Is there a mobile app?</span
								>
								<span class="accordion__btn__icon">
									<img
										src="@/assets/icon-arrow.svg"
										alt="an icon of an arrow"
										class="accordion__btn__icon__img"
									/>
								</span>
							</button>
							<!-- Answer 3 -->
							<div class="accordion__panel">
								<p class="description">
									Sed consectetur quam id neque fermentum accumsan. Praesent
									luctus vestibulum dolor, ut condimentum urna vulputate eget.
									Cras in ligula quis est pharetra mattis sit amet pharetra
									purus. Sed sollicitudin ex et ultricies bibendum.
								</p>
							</div>
							<!-- Question 4 -->
							<button class="accordion__btn" data-accordionBtn="3">
								<span class="accordion__btn__content"
									>What about other Chromium browsers?</span
								>
								<span class="accordion__btn__icon">
									<img
										src="@/assets/icon-arrow.svg"
										alt="an icon of an arrow"
										class="accordion__btn__icon__img"
									/>
								</span>
							</button>
							<!-- Answer 4 -->
							<div class="accordion__panel">
								<p class="description">
									Integer condimentum ipsum id imperdiet finibus. Vivamus in
									placerat mi, at euismod dui. Aliquam vitae neque eget nisl
									gravida pellentesque non ut velit.
								</p>
							</div>
						</div>
						<a href="#" class="faq__btn cta cta--prim"> More Info</a>
					</div>
				</section>
        <!-- newsletter -->
				<section class="subscribe">
					<div class="inner__subscribe">
						<h6 class="heading--sub">35,000+ already joined</h6>
						<p class="description--sub">
							Stay up-to-date with what we’re doing
						</p>
						<form action="#" class="form">
							<div class="form__group">
								<label for="email"></label>
								<input
									type="email"
									class="form__control email"
									id="email"
									placeholder="Enter your email address"
								/>
								<img
									src="@/assets/icon-error.svg"
									alt="an exclamation mark"
									class="form__err__icon is--hidden"
								/>
								<p class="form__err__msg is--hidden">
									Whoops, make sure it's an email
								</p>
							</div>
							<!-- <input type="submit" value="Contact Us" class="submitBtn" /> -->
							<button class="submitBtn">Contact Us</button>
						</form>
					</div>
				</section>
			</main>
			
      <footer v-if="false">
				<div class="inner__footer">
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
		<!-- <div >

		</div> -->
</template>

<script>
import NavigationComponent from "./components/NavigationComponent.vue"

export default {
  name: 'App',
  components: {
    NavigationComponent,
  }
}
</script>

<style lang="scss">

</style>
