<style>
* {
  box-sizing: border-box;
}

:global(body),
:global(html) {
  width: 100%;
  margin: 0;
  font-family: monospace;
  display: flex;
  flex-direction: column;
}

.title {
  margin-left: 5%;
  margin-top: 5%;
}

.title span {
  color: #969696;
}

.title .tagline {
  margin-top: -1%;
}

.content {
  align-self: center;
  margin: 0;
  width: 60vw;
  margin-top: 5%;

  display: grid;
  grid-template-columns: repeat(auto-fill, 14rem);
  justify-content: center;
  gap: 2rem;

  margin-bottom: 10rem;
}
</style>

<script>
import Tile from "../Components/Tile.svelte";
import { links } from "../links.json";
console.log(links);
</script>

<div class="title">
  <h1>Shreyas Daniel <span>Gaddam</span></h1>
  <div class="tagline">Machine Learning Engineer and Researcher</div>
</div>

<div class="content">
  {#each links as tile}
    <Tile
      title="{tile.name}"
      url="{tile.url}"
      btntext="{tile.button}"
      iconame="{tile.iconame}"
      icobg="{tile.color}" />
  {/each}
</div>
