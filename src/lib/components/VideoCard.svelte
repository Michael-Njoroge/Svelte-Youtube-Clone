<script lang="ts">
	import { formatLargeNumber } from "$lib/utils";

    export let title:string
    export let publishedTimeText:string
    export let views:number
    export let videoId:string
    export let thumbnail:string
    export let channelName:string
    export let avatar:string

</script>

<a href="/{videoId}">
    <div class="relative">
    <div class="absolute bg-black/80 text-white font-semibold rounded-md bottom-1 right-1 text-xs px-1">10:20</div>
    <img src={thumbnail} class="sm:[208px] h-[250px] w-full object-cover rounded-2xl bg-gray-200" alt="">
    </div>
    <div class="flex mt-3 gap-3">
        <img src={avatar} class="h-9 w-9 rounded-full bg-gray-100" alt="">
        <div>
            <h3 class="capitalize font-medium">{title}</h3>
            <p class="text-gray-600 capitalize text-sm mt-1">{channelName}</p>
            <div class="text-gray-600 text-sm">
                <span>
                <p>{formatLargeNumber(views)} views</p>
                </span>
                
                <span>
                <p>{publishedTimeText}</p>
                </span>
            </div>
        </div>
    </div>
</a>