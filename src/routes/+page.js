export const load = async ({ fetch }) => {
  const url = "https://api.github.com/users/shreydan/repos?page=1&per_page=100";

  function sortByDate(arr, property = "created_at") {
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

  const fetchGitHub = async () => {
    const colors = shuffleArray([
      "#742394",
      "#F05270",
      "#33CC52",
      "#1DA1F2",
      "#6364FF",
      "#e60073",
    ]);

    try {
      const res = await fetch(url);
      let data = await res.json();
      data = data.filter((repo) => repo.fork == false);
      let latestRepos = sortByDate(data);

      let pyrepos = latestRepos.filter(
        (repo) =>
          repo.language == "Jupyter Notebook" || repo.language == "Python"
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
      pyrepos = pyrepos.slice(0, 6);

      return pyrepos;
    } catch (err) {
      return [];
    }
  };

  return {
    projects: fetchGitHub(),
  };
};
