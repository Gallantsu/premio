<template>
	<p :class="$style['font-middle']" >
		<slot></slot>
	</p>
</template>


<style lang="scss" module >
	.font-middle{
		position:absolute;
		font-weight:bold;
		font-size: 35px;
		color:#fff;
		text-transform:uppercase;
		letter-spacing: 4px;
		z-index:25;
	}
</style>