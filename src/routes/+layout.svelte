<script lang="ts">
	import Header from "$lib/components/Header.svelte";
	import SideBar from "$lib/components/SideBar.svelte";
    import "./app.css"
</script>

<Header/>
<div class="flex">
    <SideBar/>
    <main class="ml-[74px] p-6">
        <slot/>
    </main>
</div>