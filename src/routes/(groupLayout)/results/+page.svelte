<script>
	import ChannelCard from "$lib/components/ChannelCard.svelte";
	import SearchVideoCard from "$lib/components/SearchVideoCard.svelte";
    export let data;

</script>

<div class="flex justify-end my-2">
    <button class="font-medium border px-4 py-1 rounded-full hover:bg-gray-200">Filter</button>
</div>

<div class="space-y-5">
    {#each data.contents.contents as {type,channel,video}}

    {#if type === 'video'}
    <SearchVideoCard avatar = {video.author.avatar[0].url} badges = {video.badges} views = {video.stats.views} channelName = {video.author.title} descriptionSnippet = {video.descriptionSnippet} publishedTimeText = {video.publishedTimeText} thumbnail = {video.thumbnails[0].url} title = {video.title} videoId = {video.videoId}/>
    {:else if type === 'channel'}
    <ChannelCard/>
    {/if}

    {/each}
</div>