<template>
	<div class="card">

		<div class="info">
			<div>
				<p class="name">
					魔法解析
				</p>
				<p class="function">
					VIP视频在线解析
				</p>
			</div>
			<div>
				<img src="/images/vite.svg" />
			</div>
		</div>

		<div class="butt">
			<button @click="handleClick" class="request" type="button">
				关注
			</button>
			<a class="request" href="https://pay.mofaxi.cn/user/test.php" target="_blank">
				<p>打赏</p>
			</a>
			<a class="request2" href="https://github.com/2764776697/Movie" target="_blank">
				<img src="/images/github.svg" />
				<p>开源地址</p>
			</a>
		</div>
		<a-modal width="auto" v-model:visible="visible" @ok="handleOk" @cancel="handleCancel">
			<template #title>
				关注微信公众号
			</template>
			<div class="gz">
				<img src="/images/gzh-app.png" />
			</div>
		</a-modal>

	</div>
</template>

<script setup>
import {
	ref
} from 'vue';

const visible = ref(false);

const handleClick = () => {
	visible.value = true;
};

const handleOk = () => {
	visible.value = false;
};

const handleCancel = () => {
	visible.value = false;
};
</script>

<style scoped>
.card {
	transition: all 0.3s ease-in-out;
	width: 49%;
	background-color: var(--color-bg-2);
	border-radius: var(--fillet);
	box-shadow: var(--shadow);
	padding: 15px;
}

.gz img {
	width: 200px;
}

.info {
	flex: 1;
	display: flex;
	justify-content: space-between;

	img {
		width: 40px;
		margin-right: 5px;
	}


	@media only screen and (max-width:768px) {

		img {
			width: 35px;
			margin-right: 0px;
		}
	}
}

.name {
	font-size: 21px;
	margin-bottom: 5px;
	font-weight: 500;
	color: var(--color-text-1);

	@media only screen and (max-width:768px) {
		font-size: 16px;
	}
}

.function {
	font-size: 13px;
	color: var(--color-text-2);

	@media only screen and (max-width:768px) {
		font-size: 12px;
	}
}

.butt {
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	flex-wrap: wrap;
}

.request {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 12px;
	width: 49%;
	border: 1px solid transparent;
	border-radius: var(--fillet);
	padding: 8px;
	font-size: 14px;
	transition: all .3s ease;
	background-color: rgb(118, 36, 194);
	color: #fff;




	@media only screen and (max-width:768px) {
		width: 48%;
		text-align: center;
		padding: 6px 2px;

	}
}

.request2 {
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 12px;
	width: 100%;
	border: 1px solid transparent;
	border-radius: var(--fillet);
	padding: 6px 12px;
	font-size: 14px;
	transition: all .3s ease;
	background-color: rgb(118, 36, 194);
	color: #fff;



	img {
		width: 20px;
		margin-right: 5px;
	}


}

.request:hover {
	background-color: rgb(133, 89, 194);
}

.request2:hover {
	background-color: rgb(133, 89, 194);
}
</style>