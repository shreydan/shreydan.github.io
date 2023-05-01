<style>
.tile {
  grid-column: span 2;
  min-height: 8rem;
  min-width: 8rem;
  background-color: rgb(242, 242, 242);
  border-radius: calc(0.2237 * 8rem);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;

  text-decoration: none;
  color: black;
  padding: 1.5rem;
  transition-duration: 0.5s;
  cursor: pointer;
}

.tile_content {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  width: 100%;
  height: 100%;
}

.tile_content * {
  margin: 0;
}

.title {
  font-weight: 500;
}
.desc {
  font-size: 0.8rem;
  width: 80%;
}
</style>

<script>
export let name = "repo name";
export let desc = "repo description";
export let url = "repo url";
</script>

<a class="tile" href="{url}" rel="norefferer" target="_blank">
  <div class="tile_content">
    <div class="title">{name}</div>
    <div class="desc">
      {desc}
    </div>
  </div>
</a>
