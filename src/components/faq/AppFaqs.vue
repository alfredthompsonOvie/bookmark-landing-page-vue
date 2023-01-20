<template>
	<AppFaq
		v-for="(faq, i) in faqs"
		:key="faq.question"
		:faq="faq"
		:index="i"
		@toggleAnswer="toggleAnswer"
	/>
</template>

<script>
import { ref } from "vue";
import AppFaq from "./AppFaq.vue";
export default {
	components: {
		AppFaq,
	},
	setup() {
		const faqs = ref([
			{
				question: "What is Bookmark?",
				answer:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt justo eget ultricies fringilla. Phasellus blandit ipsum quis quam ornare mattis.",
				open: false,
			},
			{
				question: "How can I request a new browser?",
				answer:
					"Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet. Vivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdie tVivamus luctus eros aliquet convallis ultricies. Mauris augue massa, ultricies non ligula. Suspendisse imperdiet.",
				open: false,
			},
			{
				question: "Is there a mobile app?",
				answer:
					"Sed consectetur quam id neque fermentum accumsan. Praesent luctus vestibulum dolor, ut condimentum urna vulputate eget. Cras in ligula quis est pharetra mattis sit amet pharetra purus. Sed sollicitudin ex et ultricies bibendum.",
				open: false,
			},
			{
				question: "What about other Chromium browsers?",
				answer:
					"Integer condimentum ipsum id imperdiet finibus. Vivamus in placerat mi, at euismod dui. Aliquam vitae neque eget nisl gravida pellentesque non ut velit.",
				open: false,
			},
		]);
		const toggleAnswer = (index) => {
			faqs.value = faqs.value.map((faq, i) => {
				if (i === index) {
					faq.open = !faq.open;
				} else {
					faq.open = false;
				}
				return faq;
			});
		};

		return {
			faqs,
			toggleAnswer,
		};
	},
};
</script>

<style lang="scss" scoped></style>
