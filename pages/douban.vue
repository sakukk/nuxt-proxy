<template>
	<section>
    <p>{{test}}</p>
  </section>
</template>

<script>
  export default {
		name: 'douban',
    async asyncData ({ app }) {
      let {data} = await app.$axios.get('https://api.douban.com/v2/book/1220562')
      return { test : data }
    },
    data () {
      return {
        test : ''
      }
    }
	}
</script>

<style scoped>

</style>
