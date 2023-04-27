<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500&display=swap");

:global(body),
:global(html) {
  width: 100%;
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-weight: 400;
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
  grid-template-columns: repeat(auto-fill, 11rem);
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
