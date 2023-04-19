<style>
.tile {
  min-height: 10rem;
  width: 10rem;
  background-color: var(--bg-color);
  border-radius: calc(0.2237 * 10rem);
  display: grid;
  place-items: center;
  box-shadow: inset 0px 0px 0px 3px rgba(0, 0, 0, 0.1);
  text-decoration: none;
  color: black;
}
.tile_content {
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 70%;
}
.tile_content * {
  margin: 0;
}
</style>

<script>
export let bg = "#e2e2e2";
export let title = "Blank Tile.";
</script>

<a class="tile" style="--bg-color: {bg};" href="https://google.com">
  <div class="tile_content">
    <h4>{title}</h4>
  </div>
</a>
