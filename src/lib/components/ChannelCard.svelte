<script lang="ts">
    export let title:string
    export let avatar:string
    export let subscribers:string
    export let descriptionSnippet:string
    export let userName:string
 
</script>
<a href="/" class="flex gap-3 items-center">
    <div class="max-w-[360px] flex w-full justify-center items-center">
        <img src={avatar} class="w-[136px] h-[136px] rounded-full" alt="">
    </div>
    <div>
        <h1 class="capitalize font-medium text-lg mb-2">{title}</h1>
        <p class="text-gray-600 text-xs mb-1">{userName}. {subscribers}subscribers</p>
        <p class="text-gray-600 text-xs">{descriptionSnippet || ''}</p>
    </div>
    <button class="text-sm bg-black text-white ml-auto font-medium rounded-full py-2 px-4">Subscribe</button>
</a>