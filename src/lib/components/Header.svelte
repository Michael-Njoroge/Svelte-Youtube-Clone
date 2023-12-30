<script>

	import SearchBar from "./SearchBar.svelte";

</script>
 
<header class="flex px-4 items-center h-[64px] py-2 bg-white z-10 justify-between sticky top-0 left-0">

    <!-- <a href="/">
        <img src="/icons/ytLogo.svg" class="md:hidden mr-5" alt="">
    </a> -->
    <div class="md:flex hidden items-center gap-4">
       <img src="/icons/bugerIcon.svg" class="cursor-pointer p-3 rounded-full hover:bg-gray-200" alt="">
    <a href="/">
        <img src="/icons/ytLogo.svg" alt="">
    </a>
    </div>

    <SearchBar/>

    <div class="md:flex hidden items-center gap-3">
        <img src="/icons/createIcon.svg" class="cursor-pointer p-3 rounded-full hover:bg-gray-200" alt="">
        <img src="/icons/notIcon.svg" class="cursor-pointer p-3 rounded-full hover:bg-gray-200" alt="">
        <img src="/avatar.png" class="bg-gray-200 h-8 w-8 rounded-full cursor-pointer" alt="">
    </div>
    
</header>