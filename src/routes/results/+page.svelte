<script>
	import ChannelCard from "$lib/components/ChannelCard.svelte";
	import SearchVideoCard from "$lib/components/SearchVideoCard.svelte";

</script>

<div class="flex justify-end my-2">
    <button class="font-medium border px-4 py-1 rounded-full hover:bg-gray-200">Filter</button>
</div>

<div class="space-y-5">
    <ChannelCard/>
    <SearchVideoCard/>
</div>