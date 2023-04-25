<style>
.tile {
  min-height: 10rem;
  min-width: 10rem;
  background-color: var(--bg-color);
  border-radius: calc(0.2237 * 12rem);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: inset 0px 0px 0px 2px rgba(0, 0, 0, 0.1),
    0px 7px 7px -7px rgba(60, 60, 60, 0.1);

  text-decoration: none;
  color: black;
  padding: 2rem;
  transition-duration: 0.5s;
  cursor: pointer;
}

.tile:hover {
  filter: saturate(1.5);
  transition-duration: 0.2s;
}

.tile_content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
}
.tile_content * {
  margin: 0;
}
</style>

<script>
export let bg = "#f2fafc";
export let title = "Blank Tile.";
</script>

<div class="tile" style="--bg-color: {bg};">
  <div class="tile_content">
    <h4>{title}</h4>
  </div>
</div>
