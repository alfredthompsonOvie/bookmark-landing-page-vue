<template>
	<AppNavigation />
	<router-view></router-view>
	<AppFooter />
</template>

<script>
import AppNavigation from "./components/AppNavigation.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
	name: "App",
	components: {
		AppNavigation,
		AppFooter,
	},
};
</script>

<style lang="scss"></style>
