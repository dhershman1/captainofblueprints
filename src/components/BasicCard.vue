<template>
  <div :class="cardClass">
    <section
      v-show="title"
      class="card__title"
    >
      <p>{{ title }}</p>
    </section>
    <section class="card__content">
      <slot name="content" />
    </section>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: null
    },
    size: {
      type: String,
      default: 'full'
    }
  },

  computed: {
    cardClass () {
      const validSizes = ['sm', 'md', 'lg', 'full']

      if (!validSizes.some(s => s === this.size)) {
        throw new Error('Invalid size, should be one of: sm, md, lg, full')
      }

      return `card card--${this.size}`
    }
  }
}
</script>
