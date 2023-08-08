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

const getGitHubRepos = async () => {
  const colors = shuffleArray([
    "text-teal-600",
    "text-sky-600",
    "text-purple-600",
    "text-lime-600",
    "text-pink-800",
    "text-red-400",
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
  const githubRepos = pyrepos.slice(0, 6);
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
            <Link
              href={repo.url}
              className={`underline ${repo.color}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              {repo.name}
            </Link>
            <p className={`text-sm w-full md:w-3/4`}>{repo.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Github;
