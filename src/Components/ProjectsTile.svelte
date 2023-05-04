<style>
.tile {
  grid-column: span 2;
  min-height: 8rem;
  min-width: 8rem;
  background-color: var(--bg-color);
  border-radius: calc(0.2237 * 8rem);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  text-decoration: none;
  color: black;
  padding: 1.5rem;
  transition-duration: 0.5s;
  cursor: pointer;

  position: relative;

  transition-duration: 0.5s;
}

.tile_content {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

.tile_content * {
  margin: 0;
}

.tile_content #arrow {
  display: grid;
  place-items: center;
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: white;
  position: absolute;
  top: -0.75rem;
  right: -1rem;
  border: 2px solid var(--color);
  transform: scale(0);
  transition-duration: 0.2s;
}

.title {
  font-weight: 500;
  color: var(--color);
}
.desc {
  font-size: 0.9rem;
}

.tile:hover {
  transform: scale(1.01);
  transition-duration: 0.5s;
}
.tile:hover .tile_content #arrow {
  transform: scale(0.9);
  transition-duration: 0.2s;
}

@media screen and (orientation: portrait) {
  .tile .tile_content #arrow {
    background-color: transparent;
    border: none;
    top: 0.5rem;
    right: 0.5rem;
    transform: scale(1);
  }
}
</style>

<script>
import Fa from "svelte-fa/src/fa.svelte";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export let name = "repo name";
export let desc = "repo description";
export let url = "repo url";
export let color = "#000000";
let bg = color + "10";
</script>

<a
  class="tile"
  href="{url}"
  rel="norefferer"
  target="_blank"
  style="--bg-color: {bg}; --color: {color}">
  <div class="tile_content">
    <div class="title">{name}</div>
    <div id="arrow">
      <Fa icon="{faLink}" size="1.0x" color="{color}" />
    </div>
    <div class="desc">
      {desc}
    </div>
  </div>
</a>
