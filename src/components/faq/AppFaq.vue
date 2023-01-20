<template>
	<button 
  class="accordion__btn"
  @click.prevent="handleClick"
  >
		<span class="accordion__btn__content"
			>{{ faq.question }}</span
		>
		<span class="accordion__btn__icon">
			<img
				src="@/assets/icon-arrow.svg"
				alt="an icon of an arrow"
				class="accordion__btn__icon__img"
        :class="{ 'accordion__icon--active': faq.open}"
			/>
		</span>
	</button>
	<div class="accordion__panel" v-show="faq.open">
		<p 
    class="description "
    :class="{ active: faq.open }"
    >
			{{ faq.answer }}
		</p>
	</div>
</template>

<script>
// import { onMounted } from 'vue';
export default {
  props: {
    faq: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
    }
  },
  emits: ['toggleAnswer'],
  setup(props, { emit}) {
    // onMounted(() => {
    //   console.log(props.faq);

    // })
    const handleClick = () => { 
      // console.log(props.index);
      emit('toggleAnswer', props.index);
    } 
    return {
      handleClick,
    };
	},
};
</script>

<style lang="scss" scoped>
.accordion__panel {
  transition: all 3s linear;
}
.description {
  max-height: 0px;
  opacity: 0;
}
.active {
  opacity: 1;
  max-height: 1000px;
}
</style>
