<script lang="ts">
    export let title:string
    export let avatar:string
    export let publishedTimeText:string
    export let descriptionSnippet:string
    export let thumbnail:string
    export let channelName:string
    export let videoId:string
    export let badges:string[]
    export let views:string[]
</script>

<a href="/{videoId}" class="flex gap-4">
    <img src={thumbnail} class="max-w-[360px] object-cover aspect-video rounded-2xl w-full " alt="">
    <div class="text-gray-700">
        <h1 class="capitalize font-medium text-lg text-black">{title}</h1>
        <p class="text-xs">{views}.{publishedTimeText}</p>
        <div class="flex items-center gap-2 my-4">
            <img src={avatar} class="w-6 h-6 rounded-full" alt="">
            <p class="capitalize text-xs">{channelName}</p>
        </div>
        <p class="text-xs">{descriptionSnippet}</p>
        <div class="flex items-center gap-2 mt-3">
            {#each badges as badge}
            <p class="bg-gray-200 text-gray-800 text-xs font-semibold py-0.5 px-1">{badge}</p>
            {/each}
        </div>
    </div>
</a>