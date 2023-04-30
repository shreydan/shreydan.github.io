<style>
.tile {
  min-height: 8rem;
  min-width: 8rem;
  aspect-ratio: 1;
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
  font-size: 1rem;
}

.tile_content #ico {
  display: grid;
  place-items: center;
  padding: 0.75rem;
  aspect-ratio: 1;
  border-radius: calc(0.2237 * 4rem);
  background-color: var(--icon-bg);
}

.tile_content a {
  width: 100%;
  text-decoration: none;
  outline: none;
  border: none;
  padding: 0.5rem 1.25rem;
  border-radius: 5rem;
  cursor: pointer;
  transition-duration: 0.2s;
  background-color: var(--icon-bg);
  color: white;
  font-size: 0.75rem;
  font-weight: 600;
  text-align: center;
  transition-duration: 0.2s;
}
.tile_content a:hover {
  filter: saturate(1.5);
  transition-duration: 0.2s;
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
