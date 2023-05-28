<script setup lang='ts'>
	import RestrictedAccess from '@/components/RestrictedAccess.vue';
	import TheContainer from '@/components/TheContainer.vue';
	import TheProfile from '@/components/TheProfile.vue';
</script>


<template>
	<RestrictedAccess>
		<TheContainer>
			<TheProfile />
		</TheContainer>
	</RestrictedAccess>
</template>
