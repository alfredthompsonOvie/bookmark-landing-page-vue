<template>
  <a 
  :href="to" 
  target="_blank" 
  rel="noopener" 
  v-bind="$attrs"
  v-if="isExternal"
  >
  <slot/>
  </a>
  <router-link 
  v-bind="$props"
  v-else
  >
  <slot/>
  </router-link>
</template>

<script>
import { computed } from "vue";
import { RouterLink } from "vue-router";
export default {
  props: {
    ...RouterLink.props
  },
  setup (props) {
    const isExternal = computed(() => {
      return typeof props.to === "string" && props.to.startsWith('http')
    })

    return {
      isExternal
    }
  }
}
</script>

<style lang="scss" scoped>

</style>