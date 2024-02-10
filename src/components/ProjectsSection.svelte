<script lang="ts">
  import { blur } from "svelte/transition";
  import {
    showMenu,
    showPost,
    showProjects,
    showProfile,
  } from "../stores/stores";

  import Post from "./posts.svelte";
  import Profile from "./profile.svelte";
  import Projects from "./projects.svelte";

  const closeSection = () => {
    showMenu.set(false);
  };
</script>

{#if $showMenu}
  <div
    transition:blur
    class="w-full font-serif border border-purple-900 flex flex-col gap-y-4 bg-[#17171799] backdrop-blur-[3px] backdrop-saturate-[100%] p-8 rounded-xl"
  >
    <div class="w-full flex justify-between place-items-center">
      {#if $showProfile}
        <h2 class="text-2xl">Bio</h2>
      {:else if $showProjects}
        <h2 class="text-2xl">Projects</h2>
      {/if}

      <button
        class=" border-2 border-purple-500 bg-purple-600 rounded-md my-2 text-white px-2"
        on:click={() => closeSection()}>Close</button
      >
    </div>

    {#if $showProfile}
      <Profile />
    {/if}

    {#if $showProjects}
      <Projects />
    {/if}

    {#if $showPost}
      <Post />
    {/if}
  </div>
{/if}
