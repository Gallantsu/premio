<template>
	<p :class="$style['font-middle']" >
		<slot></slot>
	</p>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" module >
	.font-middle{
		position:absolute;
		font-weight:bold;
		font-size: 45px;
		text-transform:uppercase;
		letter-spacing: 4px;
		z-index:25;
	}
</style>