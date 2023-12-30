 <script lang="ts">
	import ChannelInfo from "$lib/components/ChannelInfo.svelte";
	import VideoDescription from "$lib/components/VideoDescription.svelte";

    let videoId = ''
 </script>

 <!-- <iframe
 class="w-full h-[480px]"
 src={`https://www.youtube.com.embed/${videoId}`}
 title="Youtube Video Player"
 frameborder = "0"
 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
 allowfullscreen
 /> -->

 <div class="max-w-[1150px] px-2 w-full mx-auto">
    <h1 class="text-xl capitalize font-semibold">
        svelte Rules
    </h1>
    <div class="flex flex-col md:flex-row gap-5 items-start">
        <ChannelInfo/>
        <VideoDescription/>
    </div>
 </div>