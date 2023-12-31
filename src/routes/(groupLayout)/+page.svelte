<script>
	import VideoCard from "$lib/components/VideoCard.svelte";
   export let data;
   console.log(data.content)

</script>
<div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 gap-y-16">
   <VideoCard/>
   <VideoCard/>
   <VideoCard/>
   <VideoCard/>
   <VideoCard/>
   <VideoCard/>
   <VideoCard/>
   <VideoCard/>
   <VideoCard/>
   <VideoCard/>
   <VideoCard/>
   <VideoCard/>
</div>