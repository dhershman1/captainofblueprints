<template>
  <div class="home">
    <account-card />
    <div class="news">
      <basic-card
        :title="'Filters?'"
      >
        <template #content>
          <p>Hewwo</p>
        </template>
      </basic-card>
    </div>
    <div class="previews">
      <div>
        <preview-card>
          <template #preview-content>
            <h1>Tavern Build</h1>
            <h2>It's a Tavern! Whoa!</h2>
            <p>Something something, booze and unlimited power!</p>
          </template>
        </preview-card>
      </div>
      <div>
        <preview-card>
          <template #preview-content>
            <h1>Tavern Build</h1>
            <h2>It's a Tavern! Whoa!</h2>
            <p>Something something, booze and unlimited power!</p>
          </template>
        </preview-card>
      </div>
      <div>
        <preview-card>
          <template #preview-content>
            <h1>Tavern Build</h1>
            <h2>It's a Tavern! Whoa!</h2>
            <p>Something something, booze and unlimited power!</p>
          </template>
        </preview-card>
      </div>
    </div>
  </div>
</template>

<script>
import PreviewCard from '@/components/PreviewCard'
import AccountCard from '@/components/AccountCard'
import BasicCard from '@/components/BasicCard'

export default {
  name: 'HomeView',
  components: {
    AccountCard,
    BasicCard,
    PreviewCard
  }
}
</script>
<style lang="scss" scoped>
  .previews {
    grid-area: previews;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 1rem;
  }

  .news {
    grid-area: news;
  }
</style>
