<script lang="ts">
  import Profile from "./profile.svelte";
  import Projects from "./projects.svelte";
  import { blur } from "svelte/transition";

  let activeItem = 0;
  let showMenu = false;

  const handleClick = (itemValue: number) => () => {
    showMenu = true;
    activeItem = itemValue;
  };

  const close = () => {
    showMenu = false;
  };

  let Items = [
    {
      label: "Profile",
      value: 1,
      component: Profile,
      img: "profile.svg",
    },
    {
      label: "Projects",
      value: 2,
      component: Projects,
      img: "briefcase.svg",
    },
  ];
</script>

<div
  class="  flex justify-center xl:grid xl:grid-cols-2 text-white absolute h-screen w-full place-items-center"
>
  <section class="text-center w-4/5 grid gap-y-10">
    <div>
      <h1 class="text-9xl">
        <span class="text-6xl">Hello i'm</span> Vital
      </h1>
      <p>Full Stack Developer.</p>
    </div>
    <div class="flex justify-evenly">
      <a href="https://x.com/vitalcodexyz" target="_blank"
        ><img src="x.svg" alt="x" title="x" class="w-8" /></a
      >
      <a href="https://github.com/vitalspace" target="_blank"
        ><img src="g.svg" alt="x" title="x" class="w-8" /></a
      >
      <a href="/"><img src="l.svg" alt="x" title="x" class="w-8" /></a>
    </div>
  </section>

  {#if showMenu}
    <div
      transition:blur
      class="absolute top-0 xl:static w-full xl:w-4/5 font-serif border border-purple-900 flex flex-col gap-y-4 bg-[#17171799] backdrop-blur-[3px] backdrop-saturate-[100%] p-8 rounded-xl"
    >
      <div class="w-full flex justify-between place-items-center">
        <button
          class=" border-2 border-purple-500 bg-purple-600 rounded-md my-2 text-white px-2"
          on:click={() => close()}>Close</button
        >
      </div>

      {#each Items as item}
        {#if item.value === activeItem}
          <svelte:component this={item.component} />
        {/if}
      {/each}
    </div>
  {/if}
</div>

<div class="fixed bottom-10 w-full flex justify-center">
  <div
    class="flex rounded-full bg-black opacity-80 space-x-4 px-4 py-2 border-2 border-gray-700"
  >
    {#each Items as item}
      <button on:click={handleClick(item.value)}>
        <img
          src={item.img}
          alt={item.label}
          class="w-6 cursor-pointer hover:-translate-y-1"
        />
      </button>
    {/each}
  </div>
</div>
