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

  const fetchGitHub = async () => {
    try {
      const res = await fetch(url);
      let data = await res.json();
      data = data.filter((repo) => repo.fork == false);
      let latestRepos = sortByDate(data);
      let pyrepos = latestRepos.filter(
        (repo) =>
          repo.language == "Jupyter Notebook" || repo.language == "Python"
      );
      return pyrepos;
    } catch (err) {
      return [];
    }
  };

  return {
    projects: fetchGitHub(),
  };
};
