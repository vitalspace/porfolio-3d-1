<script lang="ts">
  import {
    showMenu,
    showPost,
    showProjects,
    showProfile,
  } from "../stores/stores";

  const setProjects = () => {
    showMenu.set(true);
    showPost.set(false);
    showProjects.set(true);
    showProfile.set(false);
  };

  const setPost = () => {
    showMenu.set(true);
    showPost.set(true);
    showProjects.set(false);
    showProfile.set(false);
  };

  const setProfile = () => {
    showMenu.set(true);
    showPost.set(false);
    showProjects.set(false);
    showProfile.set(true);
  };
</script>

<section
  class="flex rounded-full bg-black opacity-80 space-x-4 px-4 py-2 border-2 border-gray-700"
>
  <button class="w-8" on:click={() => setProfile()}
    ><img
      src="profile.svg"
      alt="Projects"
      class="w-6 cursor-pointer hover:-translate-y-1"
    /></button
  >

  <button class="w-8" on:click={() => setProjects()}
    ><img
      src="briefcase.svg"
      alt="Projects"
      class="w-full h-full cursor-pointer hover:-translate-y-1"
    /></button
  >
  <button class="w-8" on:click={() => setPost()}
    ><img
      src="post.svg"
      alt="Post"
      class="w-full h-full cursor-pointer hover:-translate-y-1"
    /></button
  >
</section>
