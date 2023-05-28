<script setup lang='ts'>
	import RestrictedAccess from '@/components/utilComponents/RestrictedAccess.vue';
	import TheContainer from '@/components/utilComponents/TheContainer.vue';
	import TheProfile from '@/components/Profile/TheProfile.vue';
</script>


<template>
	<RestrictedAccess>
		<TheContainer>
			<TheProfile />
		</TheContainer>
	</RestrictedAccess>
</template>
