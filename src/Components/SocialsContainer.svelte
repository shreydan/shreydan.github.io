<style>
.content {
  align-self: center;
  margin: 0;
  width: 60vw;

  display: grid;
  grid-template-columns: repeat(auto-fill, 11rem);
  justify-content: center;
  gap: 2rem;

  margin-bottom: 10rem;
}
</style>

<script>
import Title from "./Title.svelte";
import SocialsTile from "./SocialsTile.svelte";
import { links } from "../links.json";
</script>

<Title title="Find me here" />

<div class="content">
  {#each links as tile}
    <SocialsTile
      title="{tile.name}"
      url="{tile.url}"
      btntext="{tile.button}"
      iconame="{tile.iconame}"
      icobg="{tile.color}" />
  {/each}
</div>
