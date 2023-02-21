<template>
  <div class="preview">
    <section class="meta">
      <div
        class="photo"
        :style="photoStyles"
      />
      <ul class="details">
        <li class="author">
          <a href="#">{{ fakeData.author }}</a>
        </li>
        <li class="date">
          {{ fakeData.date }}
        </li>
        <li class="tags">
          <ul>
            <li
              v-for="t of fakeData.tags"
              :key="t.name"
            >
              <a href="#">{{ t.name }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
    <section class="description">
      <slot name="preview-content" />
      <p class="read-more">
        <a href="#">Visit</a>
      </p>
    </section>
  </div>
</template>

<script>
export default {
  computed: {
    photoStyles () {
      if (this.fakeData.thumbnail) {
        return `background-image: url(${this.fakeData.thumbnail});`
      }

      return 'background-image: url(./imgs/no-image.png);'
    },
    // TODO: Replace fake data with data from our DB
    fakeData () {
      return {
        author: 'Killparadise',
        date: 'May 6th, 2022',
        tags: [
          { name: 'cool' },
          { name: 'beans' },
          { name: 'vikings' }
        ],
        thumbnail: null
      }
    }
  }
}
</script>
