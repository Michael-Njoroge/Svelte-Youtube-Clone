<script lang="ts">
	import { formatLargeNumber } from "$lib/utils";


    export let name:string
    export let subscribersText:string
    export let likes:number
    export let avatar:string
</script>

<div class="flex my-5 items-center">
    <div class="flex gap-5 items-center">
        <div class="flex gap-3 items-center">
            <img src={avatar} class="w-10 h-10 rounded-full" alt="">
            <div>
                <p class="font-medium capitalize">{name}</p>
                <p class="text-gray-700 text-xl">{subscribersText}</p>
            </div>
            <button class="text-sm bg-black text-white font-medium rounded-full py-2 px-4">Subscribe</button>
        </div>
        <div class="flex gap-3 items-center">
            <div class="divide-x-2 bg-gray-100 flex items-center overflow-hidden rounded-full">
                <button class="hover:bg-gray-200 py-2 px-4 flex items-center gap-2">
                    <img src="/icons/likeIcon.svg" alt="">
                    <span class="text-sm font-medium">{formatLargeNumber(likes)}</span>
                </button>
                <button class="hover:bg-gray-200 py-2 px-4 flex items-center gap-2">
                    <img src="/icons/dislikeIcon.svg" alt="">
                </button>
            </div>
            <button class="hover:bg-gray-200 py-2 px-4 flex rounded-full items-center gap-2">
                <img src="/icons/shareIcon.svg" alt="">
                <span class="text-sm font-medium">share</span>
            </button>
            <button class="hover:bg-gray-200 rounded-full p-2 flex items-center gap-2">
                <img src="/icons/moreIcon.svg" alt="">
            </button>
        </div>
    </div>
</div>