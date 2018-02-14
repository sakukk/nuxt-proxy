<template>
  <section>
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal">
      <el-menu-item v-for="(item,index) in this.$router.options.routes.reverse()"
                    :key="index" :index="index.toString()">
        <nuxt-link :to="item.path">{{item.name}}</nuxt-link>
      </el-menu-item>
    </el-menu>
  </section>
</template>

<script>
	export default {
		name: "nav",
    data () {
		  return {
        activeIndex: '0'
      }
    }
	}
</script>

<style scoped>

</style>
