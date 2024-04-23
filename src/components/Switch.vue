<template>


	<div class="card" @click="toggleTheme">
		<p class="day-text">{{ year }} 年 {{ month }} 月 {{ day }} 日 </p>
		<p class="time-text">{{ currentTime }}</p>
		<!-- 根据自动模式显示当前主题 -->
		<span class="theme-text">当前主题：{{ currentTheme === 'auto' ? getAutoThemeName() : currentTheme }}</span>
		<p class="day-text2"><span>点击卡片可更换主题</span></p>
	</div>


</template>

<script setup>
import {
	ref
} from 'vue';

const currentTime = ref('00:00:00');
const year = ref(0);
const month = ref(0);
const day = ref(0);
const currentTheme = ref(getThemeFromStorage());

function updateTime() {
	const now = new Date();
	year.value = now.getFullYear();
	month.value = now.getMonth() + 1;
	day.value = now.getDate();
	const hours = now.getHours();
	const minutes = now.getMinutes();
	const seconds = now.getSeconds();
	currentTime.value =
		`${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

function toggleTheme() {
	if (currentTheme.value === '夜间') {
		currentTheme.value = '日间';
		localStorage.setItem('userTheme', '日间');
	} else {
		currentTheme.value = '夜间';
		localStorage.setItem('userTheme', '夜间');
	}
	updateTheme();
}

function updateTheme() {
	const theme = currentTheme.value === '夜间' ? 'dark' : '';
	document.body.setAttribute('arco-theme', theme);
}

function getThemeFromStorage() {
	// 如果存在用户选择的主题，则使用用户选择的主题
	// 否则，使用自动模式，并返回相应的主题名称
	const theme = localStorage.getItem('userTheme');
	return theme !== null ? theme : 'auto';
}

function getAutoThemeName() {
	// 根据当前时间自动决定主题名称
	const hour = new Date().getHours();
	return hour >= 8 && hour < 20 ? '日间' : '夜间';
}

// 初始调用一次以显示正确时间
updateTime();

// 更新时间的定时器，每秒更新一次
setInterval(updateTime, 1000);

// 根据用户选择的主题或自动模式设置初始主题
if (currentTheme.value === 'auto') {
	currentTheme.value = getAutoThemeName();
}
updateTheme();
</script>

<style scoped>
/* CSS styles remain the same as in your original example */
</style>

<style scoped>
.card {
	transition: all 0.3s ease-in-out;
	padding: 15px;
	width: 49%;
	height: auto;
	background-color: var(--color-bg-2);
	border-radius: var(--fillet);
	box-shadow: var(--shadow);
	display: flex;
	position: relative;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	overflow: hidden;

}

.theme-text {
	color: var(--color-text-1);
	font-size: 16px;
	font-weight: 500;
	margin-bottom: 10px;

	@media only screen and (max-width:768px) {
		font-size: 14px;

	}
}

.time-text {
	color: var(--color-text-1);
	font-size: 40px;

	margin: 10px 0;

	@media only screen and (max-width:768px) {
		font-size: 28px;

	}
}

.time-sub-text {
	color: var(--color-text-1);
	font-size: 15px;
	margin-left: 5px;
}

.day-text {
	color: var(--color-text-1);
	font-size: 21px;


	@media only screen and (max-width:768px) {
		font-size: 15px;

	}
}

.day-text2 {
	color: var(--color-text-1);
	font-size: 16px;

	@media only screen and (max-width:768px) {
		font-size: 14px;

	}
}
</style>