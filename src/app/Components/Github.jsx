import React from "react";
import Link from "next/link";

async function sortByDate(arr, property = "created_at") {
  arr.sort(function (a, b) {
    var dateA = new Date(a[property]);
    var dateB = new Date(b[property]);
    return dateB - dateA;
  });
  return arr;
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

const Highlight = ({ children, color }) => (
  <span className="relative inline-block">
    <span className={`absolute inset-x-0 bottom-0 h-2 ${color}`}></span>
    <span className="relative">{children}</span>
  </span>
);

const getGitHubRepos = async () => {
  const colors = shuffleArray([
    "bg-pink-200", // Soft pastel pink
    "bg-blue-200", // Light pastel blue
    "bg-green-200", // Gentle pastel green
    "bg-yellow-200", // Warm pastel yellow
    "bg-purple-200", // Muted pastel purple
    "bg-rose-200", // Blush pastel rose
    "bg-teal-200", // Cool pastel teal
    "bg-orange-200", // Soft pastel orange
    "bg-indigo-200", // Dusty pastel indigo
    "bg-lime-200", // Refreshing pastel lime"
  ]);

  const url = "https://api.github.com/users/shreydan/repos?page=1&per_page=100";
  const res = await fetch(url);
  let repos = await res.json();
  repos = repos.filter((repo) => repo.fork == false);
  let latest = await sortByDate(repos);
  let pyrepos = latest.filter(
    (repo) => repo.language == "Jupyter Notebook" || repo.language == "Python"
  );
  pyrepos = pyrepos.map((repo, idx) => ({
    id: repo.id,
    name: repo.name,
    description: repo.description,
    url: repo.html_url,
    stars: repo.stargazers_count,
    forks: repo.forks,
    color: colors[idx],
  }));
  const githubRepos = pyrepos.slice(0, 10);
  return githubRepos;
};

async function Github() {
  const data = await getGitHubRepos();

  return (
    <div>
      <p className={`text-lg underline mb-6 font-medium`}>
        My recent GitHub projects
      </p>
      <div>
        {data.map((repo) => (
          <div key={repo.id} className={`my-4`}>
            <Highlight color={repo.color}>
              <Link
                href={repo.url}
                className={`hover:underline`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {repo.name}
              </Link>
            </Highlight>{" "}
            {repo.stars > 5 ? (
              <p className="float-right text-center font-bold">
                {repo.stars} ⭐️
              </p>
            ) : (
              ""
            )}
            <p className={`text-sm w-full text-justify`}>{repo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Github;
