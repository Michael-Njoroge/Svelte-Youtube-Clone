<script lang="ts">
	import './app.css';
	import Header from '$lib/components/Header.svelte';
 	import { afterNavigate, beforeNavigate } from '$app/navigation';
	import NProgress from 'nprogress';
	beforeNavigate(() => {
		NProgress.start();
	});
	afterNavigate(() => {
		NProgress.done();
	});
	NProgress.configure({
		showSpinner: false
	});
</script>

<Header />

<slot />