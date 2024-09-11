<script lang="ts">
  const items = [
    {
      id: 1,
      title: "Create Desktop Apps with bun.js",
      description:
        "Build Desktop Apps with bun.js and chromium-based browsers.",
      img: "https://user-images.githubusercontent.com/29004070/193175313-cca3836d-ed39-4fad-975e-2ef750b5c7c4.png",
      tags: ["Desktop", "App's", "Bun.js", "Golang"],
      url: "https://github.com/Bunland/webapp",
      technologies: [
        "https://raw.githubusercontent.com/get-icon/geticon/master/icons/javascript.svg",
        "https://camo.githubusercontent.com/31b40da8322ac8762d2982905de54d0e45b4105e0ad8c96c0f2eb9e2999e6026/68747470733a2f2f62756e2e73682f6c6f676f2d7371756172652e706e67",
        "https://raw.githubusercontent.com/get-icon/geticon/master/icons/go.svg",
        "https://raw.githubusercontent.com/get-icon/geticon/master/icons/svelte-icon.svg",
        "https://raw.githubusercontent.com/get-icon/geticon/master/icons/vite.svg",
      ],
    },

    {
      id: 2,
      title: "JobFly",
      description: "A social network to search and publish jobs",
      img: "jobfly.png",
      tags: ["Svelte", "Bun.js", "Elysia.js", "Mongodb", "Tailwindcss"],
      url: "https://github.com/vitalspace/jobfly",
      technologies: [
        "https://raw.githubusercontent.com/get-icon/geticon/master/icons/svelte-icon.svg",
        "https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/typescript-icon.svg",
        "https://camo.githubusercontent.com/31b40da8322ac8762d2982905de54d0e45b4105e0ad8c96c0f2eb9e2999e6026/68747470733a2f2f62756e2e73682f6c6f676f2d7371756172652e706e67",
        "https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/tailwindcss-icon.svg",
        "https://raw.githubusercontent.com/get-icon/geticon/master/icons/mongodb-icon.svg",
        "https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/capacitorjs-icon.svg",
      ],
    },

    {
      id: 3,
      title: "MoebanDB",
      description:
        "A JSON Database system designed to store and manipulate data in JSON format.",
      img: "https://private-user-images.githubusercontent.com/29004070/274068061-372ced48-4be8-48c3-885e-e690916a7129.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3MjYwOTE0NzMsIm5iZiI6MTcyNjA5MTE3MywicGF0aCI6Ii8yOTAwNDA3MC8yNzQwNjgwNjEtMzcyY2VkNDgtNGJlOC00OGMzLTg4NWUtZTY5MDkxNmE3MTI5LnBuZz9YLUFtei1BbGdvcml0aG09QVdTNC1ITUFDLVNIQTI1NiZYLUFtei1DcmVkZW50aWFsPUFLSUFWQ09EWUxTQTUzUFFLNFpBJTJGMjAyNDA5MTElMkZ1cy1lYXN0LTElMkZzMyUyRmF3czRfcmVxdWVzdCZYLUFtei1EYXRlPTIwMjQwOTExVDIxNDYxM1omWC1BbXotRXhwaXJlcz0zMDAmWC1BbXotU2lnbmF0dXJlPTc1MGU4N2ZlNTg1MzQyNmFkNTVjMzJkYjZhMmIwYmIxYmI1NjdkZWQyMGVhNzVkNTBiOGMyNjc0MTdlZWU0ZmMmWC1BbXotU2lnbmVkSGVhZGVycz1ob3N0JmFjdG9yX2lkPTAma2V5X2lkPTAmcmVwb19pZD0wIn0.mcQyFrrG_Dtvz1qH-GBhv2i6k_qH8Zlvvx6D0nS9Y-o",
      tags: ["Zig", "JSON", "ODM"],
      url: "https://github.com/larengine/moeban",
      technologies: [
        "https://raw.githubusercontent.com/ziglang/logo/4f97e7a9ebce12fa48511c0b6502b6190005bc0e/zig-mark.svg",
        "https://raw.githubusercontent.com/get-icon/geticon/fc0f660daee147afb4a56c64e12bde6486b73e39/icons/json.svg",
      ],
    },
  ];
</script>

<div class="flex flex-wrap xl:grid xl:grid-cols-3 gap-4">
  {#each items as item}
    <a
      href={item.url}
      target="_blank"
      class="w-full flex justify-center flex-col place-items-center gap-y-2 bg-black rounded-xl hover:-translate-y-2 transition-all cursor-pointer"
    >
      <header class="bg-purple-100 w-full flex place-content-center rounded-xl">
        <img class="w-full h-40 rounded-lg bg-red-400" src={item.img} alt="" />
      </header>
      <section class="p-4 grid gap-2 h-60">
        <h2 class="font-bold text-lg">{item.title}</h2>
        <p class="text-sm">{item.description}</p>

        <div>
          {#each item.tags as tag}
            <span class="text-xs text-green-500">
              #{tag}
            </span>
          {/each}
        </div>

        <div class="flex space-x-2">
          {#each item.technologies as technology}
            <img src={technology} class="text-xs w-6 h-6" alt="" />
          {/each}
        </div>
      </section>
    </a>
  {/each}
</div>
