<template>
	<p :class="$style['font-italic']" >
		<slot></slot>
	</p>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" module >
	.font-italic{
		position:absolute;
		font-size: 18px;
		font-style:italic;
		color:#fff;
		z-index:25;
	}
</style>