<template>
	<section>
    <p>{{text}}</p>
  </section>
</template>

<script>
	export default {
		name: "test",
    data () {
		  return {
		    text : ''
      }
    },
    mounted () {
		  this.$axios.get('/api/v2/book/1220562').then(res=>{
        console.log(res)
        this.text = res
      }).catch(err =>{
        console.log(err)
      })
    }
	}
</script>

<style scoped>

</style>
