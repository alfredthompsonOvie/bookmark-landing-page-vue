<template>
  <div class="extension__container">
    <div
    v-for="ext in extensions"
    :key="ext.title"
      class="extension"
      :class="[
        { 'extension--firefox': ext.title === 'Add to Firefox' },
        { 'extension--opera': ext.title === 'Add to Opera' },
      ]"
    >
      <img
        :src="require(`@/assets/${ext.img}`)"
        :alt="`${ext.title.split(' ').slice(2).join('')} logo`"
        class="extension__icon"
      />
      <h1 class="heading heading--extension">{{ ext.title }}</h1>
      <p class="extension--description">{{ ext.version }}</p>
      <div class="extension__bg"></div>
      <button class="cta cta--prim cta--extension">
        {{ ext.linkText }}
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
export default {
  name: 'AppExtensions',
	setup() {
		const extensions = ref([
			{
				img: "logo-chrome.svg",
				title: "Add to Chrome",
				version: "Minimum version 62",
				linkText: "Add & Install Extension",
			},
			{
				img: "logo-firefox.svg",
				title: "Add to Firefox",
				version: "Minimum version 55",
				linkText: "Add & Install Extension",
			},
			{
				img: "logo-opera.svg",
				title: "Add to Opera",
				version: "Minimum version 46",
				linkText: "Add & Install Extension",
			},
    ]);

    return {
      extensions,
    };
	},
};
</script>

<style lang="scss" scoped></style>
