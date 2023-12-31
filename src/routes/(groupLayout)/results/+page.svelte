<script>

	import { goto } from "$app/navigation";
    import { page } from "$app/stores";
    import ChannelCard from "$lib/components/ChannelCard.svelte";
	import SearchVideoCard from "$lib/components/SearchVideoCard.svelte";
    import * as Dialog from '$lib/components/ui/dialog'
    export let data;

</script>

<Dialog.Root>
    <div class="flex justify-end my-2">
        <Dialog.Trigger class="font-medium border px-4 py-1 rounded-full hover:bg-gray-200">Filter</Dialog.Trigger>
    </div>
    <Dialog.Content class="max-w-[700px] w-full backdrop-blur-0 bg-white">
        <div class="flex gap-5">
            {#each data.contents.filterGroups as filterGroup}
                <div class="w-full">
                    <h1 class="font-medium text-xs uppercase py-5 border-b">
                        {filterGroup.title}
                    </h1>
                    <div class="mt-5 space-y-5 flex flex-col">
                        {#each filterGroup.filters as filter }
                        <button on:click={() => {
                                const searchParams = new URLSearchParams($page.url.search)
                                searchParams.set('filters',filter.cursorSelect)
                                goto(`?${searchParams.toString()}`)
                            }} class="font-medium text-xs capitalize" class:text-black={filter.selected} class:text-gray-700={!filter.selected}>{filter.label}
                        </button>
                        {/each}
                    </div>
                </div>
            {/each}
        </div>
    </Dialog.Content>
</Dialog.Root>

<div class="space-y-5">
    {#each data.contents.contents as {type,channel,video}}

    {#if type === 'video'}
    <SearchVideoCard avatar = {video.author.avatar[0].url} badges = {video.badges} views = {video.stats.views} channelName = {video.author.title} descriptionSnippet = {video.descriptionSnippet} publishedTimeText = {video.publishedTimeText} thumbnail = {video.thumbnails[0].url} title = {video.title} videoId = {video.videoId}/>
    {:else if type === 'channel'}
    <ChannelCard avatar={channel.avatar[0].url} userName={channel.username} descriptionSnippet={channel.descriptionSnippet} subscribers={channel.subscribersText} title={channel.title}/>
    {/if}

    {/each}
</div>