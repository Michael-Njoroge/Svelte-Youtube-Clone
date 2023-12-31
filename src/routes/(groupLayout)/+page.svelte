<script>
	import VideoCard from "$lib/components/VideoCard.svelte";
   export let data;
   console.log(data.contents)
 
</script>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-16">
   {#each data.contents as {type,video}}
      {#if type === 'video'}

      <VideoCard title={video.title} thumbnail={video.thumbnails[0].url} videoId={video.videoId} views={video.stats.views} publishedTimeText={video.publishedTimeText} channelName={video.author.title} avatar={video.author.avatar[0].url}/>

      {/if}
   {/each}
 
</div>