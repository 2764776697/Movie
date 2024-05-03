<template>
	<div class="player-box">

		<!-- 提示信息 -->
		<a-alert center style="margin-bottom: 12px;border-radius: var(--fillet);">若播放异常，请更换接口后重试</a-alert>

		<!-- 播放器 -->
		<div class="player">
			<transition name="fade">
				<div class="loader" v-if="load">
					<loader />
				</div>
			</transition>
			<iframe ref="videoIframe" width="100%" height="100%" allowtransparency="true" frameborder="0"
				allowfullscreen></iframe>
		</div>

		<!-- 解析组件 -->
		<div class="parse">
			<!-- 选择框 -->
			<div class="select-api">
				<a-select v-model="selectApi" size="large" placeholder="选择接口" style="border-radius: var(--fillet);">
					<a-option v-for="item in options" :key="item.value" :value="item.value">{{ item.label }}</a-option>
				</a-select>
			</div>
			<!-- 输入框 -->
			<div class="input-url">
				<a-input size="large" v-model="inputUrl" placeholder="输入视频链接,点击解析播放" allow-clear
					style="border-radius: var(--fillet);">
					<template #prefix>
						<img src="/public/images/lj.svg" width="20px">
					</template>
				</a-input>
			</div>
			<!-- 按钮 -->
			<div v-if="playButton" class="button-play">
				<a-button @click="play" size="large" type="primary" long
					style="border-radius: var(--fillet);">解析播放</a-button>
			</div>
			<div v-if="stopButton" class="button-play">
				<a-button @click="stop" type="primary" size="large" status="warning" long
					style="border-radius: var(--fillet);">停止播放</a-button>
			</div>
		</div>

	</div>
</template>

<script setup>
import {
	ref
} from 'vue'
import loader from './Loader.vue'
const playButton = ref(true)
const stopButton = ref(false)
const inputUrl = ref('')
const load = ref(true)
const selectApi = ref('https://im1907.top/?jx='); // 默认选择推荐接口
const options = [

	{
		value: 'https://im1907.top/?jx=',
		label: '默认接口',
	},

]
const play = () => {
	const selectApiValue = selectApi.value; // 获取选择框的值
	const videoUrl = inputUrl.value; // 获取输入框的值

	if (videoUrl) {
		const finalUrl = selectApiValue + encodeURIComponent(videoUrl); // 拼接接口链接和输入框的值

		const iframe = document.querySelector('.player iframe');
		iframe.src = finalUrl;

		ElMessage({
			message: '连接成功，请等待视频加载完成',
			type: 'success',
		});
		// 在播放视频时隐藏动画元素
		load.value = false;
		// 在播放视频时隐藏播放按钮
		playButton.value = false;
		// 在播放视频时显示停止按钮
		stopButton.value = true;
	} else {
		ElMessage({
			message: '请输入视频链接',
			type: 'warning',
		});
	}
}
const stop = () => {
	const iframe = document.querySelector('.player iframe');
	iframe.src = '';
	load.value = true; // 在停止播放时显示动画元素
	playButton.value = true; // 在停止播放时显示播放按钮
	stopButton.value = false; // 在停止播放时隐藏停止按钮
	ElMessage({
		message: '已停止播放，继续看点啥？',
		type: 'success',
	});
}
</script>


<style scoped>
.player-box {
	transition: all 0.3s ease-in-out;
	background-color: var(--color-bg-2);
	padding: 12px;
	border-radius: var(--fillet);
	box-shadow: var(--shadow);

	@media only screen and (max-width:768px) {
		margin-top: 0px;
	}
}

.player {
	width: 100%;
	height: 350px;
	border-radius: var(--fillet);
	background: #000;
	position: relative;

	@media only screen and (max-width:768px) {
		height: 250px;

	}

}

.player iframe {
	border-radius: var(--fillet);
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
}

.loader {
	width: 100%;
	height: 100%;
	border-radius: var(--fillet);
	background-image: url('/images/zmbg.webp');
	background-repeat: no-repeat;
	background-size: 100% 100%;

}

.parse {
	display: flex;
	flex-direction: row;
	width: 100%;
	margin-top: 10px;

	@media only screen and (max-width:768px) {
		flex-direction: column;
	}
}

/* 选择框 */
.select-api {
	width: 20%;

	@media only screen and (max-width:768px) {
		width: 100%;
	}
}

/* 输入框 */
.input-url {
	width: 60%;
	margin: 0 6px;

	@media only screen and (max-width:768px) {
		width: 100%;
		margin: 12px 0;
	}
}

/* 按钮 */
.button-play {
	width: 20%;

	@media only screen and (max-width:768px) {
		width: 100%;
	}
}

.fade-enter-active,
.fade-leave-active {
	transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to

/* .fade-leave-active 在Vue 2.1.8+中 */
	{
	opacity: 0;
}
</style>
