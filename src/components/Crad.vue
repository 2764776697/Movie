<template>
	<div class="crad-box">
		<a-divider size="2px" orientation="center" type="dashed">
			<p>支持解析</p>
		</a-divider>
		<a v-for="(site, index) in crad" :key="index" :href="site.link" target="_blank" class="card">
			<div class="img">
				<img :src="site.logo" width="30px" />
			</div>
			<div class="textBox">
				<div class="textContent">
					<p class="h1">{{ site.name }}</p>
				</div>
			</div>
		</a>
	</div>
</template>

<script setup>
import crad from '../assets/Crad.json';
</script>

<style scoped>
p {
	font-size: 15px;
}

.crad-box {
	transition: all 0.3s ease-in-out;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	flex-wrap: wrap;
	margin-top: 12px;
	background-color: var(--color-bg-2);
	padding: 12px;
	border-radius: var(--fillet);
	box-shadow: var(--shadow);

	@media only screen and (max-width:768px) {
		justify-content: flex-start;
	}
}

.card {
	width: 21%;
	height: 40px;
	border-radius: 6px;
	display: flex;
	align-items: center;
	justify-content: left;
	margin: 6px 0;


	@media only screen and (max-width:768px) {
		width: 33%;
	}

}

.img {
	width: 30px;
	height: 30px;
	margin-left: 10px;
}



.textBox {
	margin-left: 10px;
}

.textContent {
	display: flex;
	align-items: center;
	justify-content: space-between;
}

.h1 {
	font-size: 14px;
	font-weight: bold;
	color: var(--color-text-2);

	@media only screen and (max-width:768px) {
		font-weight: 100;
	}
}
</style>