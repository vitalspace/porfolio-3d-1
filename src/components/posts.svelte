<script lang="ts">
  const items = [
    {
      id: 1,
      title: "Cat App",
      description: "A social network for Cats #cats #app.",
      img: "cat.svg",
      tags: ["cats", "app"],
    },
  ];
</script>

<div class="grid grid-cols-3 gap-4">
  {#each items as item}
    <div
      class="flex justify-center flex-col place-items-center gap-y-2 bg-cyan-900 rounded-xl hover:-translate-y-2 transition-all cursor-pointer"
    >
      <header class="bg-purple-100 w-full flex place-content-center rounded-xl">
        <img class="w-40 rounded-b-full bg-red-400" src={item.img} alt="" />
      </header>
      <section class="py-4">
        <h2 class="font-bold text-lg">{item.title}</h2>
        <p>{item.description}</p>
      </section>
    </div>
  {/each}

  <!-- <div
    class="flex justify-center flex-col place-items-center gap-y-2 bg-cyan-900 rounded-xl hover:-translate-y-2 transition-all cursor-pointer"
  >
    <header class="bg-purple-100 w-full flex place-content-center rounded-xl">
      <img class="w-40 rounded-b-full bg-red-400" src="cat.svg" alt="" />
    </header>
    <section class="py-4">
      <h2 class="font-bold text-lg">Cat App</h2>
      <p>A social network for Cats #cats #app.</p>
    </section>
  </div>

  <div
    class="flex justify-center flex-col place-items-center gap-y-2 bg-cyan-900 rounded-xl hover:-translate-y-2 transition-all cursor-pointer"
  >
    <header class="bg-purple-100 w-full flex place-content-center rounded-xl">
      <img class="w-40 rounded-b-full bg-red-400" src="dog.svg" alt="" />
    </header>
    <section class="py-4">
      <h2 class="font-bold text-lg">Dog App</h2>
      <p>A social network for Dogs #dogs #app.</p>
    </section>
  </div>

  <div
    class="flex justify-center flex-col place-items-center gap-y-2 bg-cyan-900 rounded-xl hover:-translate-y-2 transition-all cursor-pointer"
  >
    <header class="bg-purple-100 w-full flex place-content-center rounded-xl">
      <img class="w-40 rounded-b-full bg-red-400" src="rino.svg" alt="" />
    </header>
    <section class="py-4">
      <h2 class="font-bold text-lg">Rino App</h2>
      <p>A social network for Rhinos #rhinos #app.</p>
    </section>
  </div>

  <div
    class="flex justify-center flex-col place-items-center gap-y-2 bg-cyan-900 rounded-xl hover:-translate-y-2 transition-all cursor-pointer"
  >
    <header class="bg-purple-100 w-full flex place-content-center rounded-xl">
      <img class="w-40 rounded-b-full bg-red-400" src="slave.svg" alt="" />
    </header>
    <section class="py-4">
      <h2 class="font-bold text-lg">Deer App</h2>
      <p>A social network for Deers #deer #app.</p>
    </section>
  </div> -->
</div>
