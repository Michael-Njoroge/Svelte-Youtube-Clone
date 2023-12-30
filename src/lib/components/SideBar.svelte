<script lang="ts">
    
    const nav = [
        {
            icon: 'homeIcon',
            title: 'Home'
        },
        {
            icon: 'shortsIcon',
            title: 'Shorts'
        },
        {
            icon: 'libraryIcon',
            title: 'library'
        },
        {
            icon: 'subIcon',
            title: 'Subscription'
        }
    ]

</script>
<div class="bg-white py-2 flex flex-col px-1 fixed top-[60px]">
{#each nav as item}
        <a href="/" class="flex items-center flex-col gap-1 py-4 hover:bg-gray-100 rounded-lg">
            <img src= {`/icons/${item.icon}.svg`} alt="">
            <p>{item.title}</p>
        </a>
{/each}
</div>

