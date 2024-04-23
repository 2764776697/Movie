<template>
	<div class="expand-box">
		<Switch />
		<Contact />
	</div>
</template>

<script setup>
import Switch from './Switch.vue'
import Contact from './Contact.vue'
</script>

<style scoped>
.expand-box {
	margin-top: 12px;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
}
</style>