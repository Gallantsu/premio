<template>
	<p :class="$style['font-big']" >
		<slot></slot>
	</p>
</template>

<script>
	export default {

	}
</script>

<style lang="scss" module >
	.font-big{
		position:absolute;
		font-weight:bold;
		font-size: 70px;
		color:#1cd1aa;
		text-transform:uppercase;
		letter-spacing: 3px;
		z-index:25;
	}
</style>