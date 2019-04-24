<template>
  <div>
    <home-header></home-header>
    <home-banner></home-banner>
  </div>
</template>

<script>
import HomeHeader from './components/header'
import HomeBanner from './components/banner'
export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeBanner
  }
}
</script>

<style lang="stylus" scoped>

</style>
