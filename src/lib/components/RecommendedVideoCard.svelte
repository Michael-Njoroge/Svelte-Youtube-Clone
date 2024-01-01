<script lang="ts">
	import { formatLargeNumber } from "$lib/utils";

    export let videoId:string
    export let thumbnail:string
    export let channelName:string
    export let title:string
    export let views:number
    export let publishedTimeText:string
</script>

<a href="/{videoId}" class="flex gap-2">
    <img src={thumbnail} alt="thumbnail" class="h-[100px] rounded-lg">
    <div class="text-xs text-gray-700 capitalize">
        <h1 class="text-sm font-medium mb-1.5">{title}</h1>
        <p>{channelName}</p>
        <p>{formatLargeNumber(views)} views .{publishedTimeText}</p>
    </div>
</a>