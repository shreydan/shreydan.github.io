<style>
.tile {
  min-height: 10rem;
  min-width: 10rem;
  background-color: var(--bg-color);
  border-radius: calc(0.2237 * 12rem);
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  box-shadow: inset 0px 0px 0px 1px rgba(0, 0, 0, 0.1),
    0px 7px 7px -7px rgba(60, 60, 60, 0.1);

  text-decoration: none;
  color: black;
  padding: 2rem;
  transition-duration: 0.5s;
  cursor: pointer;
}

.tile:hover {
  filter: brightness(0.95);
  transition-duration: 0.7s;
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
.tile_content #title {
  font-size: 1.25rem;
}

.tile_content #ico {
  display: grid;
  place-items: center;
  padding: 1rem;
  aspect-ratio: 1;
  border-radius: calc(0.2237 * 5rem);
  background-color: var(--icon-bg);
}

.tile_content a {
  text-decoration: none;
  outline: none;
  border: none;
  padding: 0.75rem 2rem;
  border-radius: 5rem;
  cursor: pointer;
  transition-duration: 0.2s;
  background-color: var(--icon-bg);
  color: white;
}
</style>

<script>
import Fa from "svelte-fa/src/fa.svelte";
import {
  faGithub,
  faTwitter,
  faMastodon,
  faYoutube,
  faKaggle,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faFile } from "@fortawesome/free-solid-svg-icons";

let icons = {
  github: faGithub,
  twitter: faTwitter,
  mastodon: faMastodon,
  youtube: faYoutube,
  kaggle: faKaggle,
  linkedin: faLinkedinIn,
  mail: faEnvelope,
  resume: faFile,
};

export let title = "Kaggle";
export let btntext = "follow";
export let url = "https://shreydan.github.io";
// icon props
export let iconame = "resume";
export let icocolor = "white";
export let icobg = "#000000";
export let bg = icobg == "#000000" ? "#fafafa" : icobg + "10";
</script>

<div class="tile" style="--bg-color: {bg}; --icon-bg: {icobg};">
  <div class="tile_content">
    <div id="ico">
      <Fa icon="{icons[iconame]}" size="1.5x" color="{icocolor}" />
    </div>
    <div id="title">{title}</div>
    <a href="{url}" target="_blank" rel="noreferrer">{btntext}</a>
  </div>
</div>
