<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600&display=swap");

:global(*) {
  box-sizing: border-box;
}

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
</style>

<script>
import SocialsContainer from "../Components/SocialsContainer.svelte";
export let data;

const { projects } = data;
console.log(projects);
</script>

<div class="title">
  <h1>Shreyas Daniel <span>Gaddam</span></h1>
  <div class="tagline">Machine Learning Engineer and Researcher</div>
</div>

<SocialsContainer />
