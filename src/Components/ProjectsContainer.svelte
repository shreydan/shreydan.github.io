<style>
.content {
  align-self: center;
  margin: 0;
  width: 60vw;

  display: grid;
  grid-template-columns: repeat(auto-fit, 11rem);

  justify-content: center;
  align-content: center;
  gap: 2rem;

  margin-bottom: 5rem;
}

@media screen and (orientation: portrait) {
  .content {
    width: 100vw;
    grid-template-columns: repeat(2, 10rem);
  }
}
</style>

<script>
import Title from "./Title.svelte";
import ProjectsTile from "./ProjectsTile.svelte";

export let projects;
</script>

<Title title="Recent projects" />

<div class="content">
  {#each projects as tile}
    <ProjectsTile
      name="{tile.name}"
      desc="{tile.description}"
      url="{tile.url}" />
  {/each}
</div>
