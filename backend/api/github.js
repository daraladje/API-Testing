const fetch = require('node-fetch');

/**
 * Profile, Repos, Languages, Topics, Search Code by Language & Keyword
 */

const getGithubProfileByUsername = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}`, {
    method: 'GET',
  });
  const data = await response.json();

  console.log(data);
};
const getReposFromUsername = async (username) => {
  const response = await fetch(`https://api.github.com/users/${username}/repos`, {
    method: 'GET',
  });
  const data = await response.json();

  console.log(data);
};

const getLanguagesOfRepo = async (username, repo) => {
  const response = await fetch(`https://api.github.com/repos/${username}/${repo}/languages`, {
    method: 'GET',
  });
  const data = await response.json();

  console.log(data);
};

const getTagsOfRepo = async (username, repo) => {
  const response = await fetch(`https://api.github.com/repos/${username}/${repo}/tags`, {
    method: 'GET',
  });
  const data = await response.json();

  console.log(data);
};

const getTopicsOfRepo = async (username, repo) => {
  const response = await fetch(`https://api.github.com/repos/${username}/${repo}/topics`, {
    method: 'GET',
  });
  const data = await response.json();

  console.log(data);
};

const searchCodeOfUser = async (username, repo, language, code) => {
  var query = `user:${username}`;
  if (code) {
    query = `${code} in:file ` + query;
  }
  if (repo) {
    query = query + ` repo:${username}/${repo}`;
  }
  if (language) {
    query = query + ` language:${language}`;
  }
  //query = query + ' -node_modules in:path ';
  console.log(query);
  const response = await fetch(`https://api.github.com/search/code?q=${query}`, {
    method: 'GET',
  });
  const data = await response.json();

  console.log(data);
};

// searchCodeOfUser('daraladje', 'Cerebro-Text', 'Javascript', 'GOOGLE_API_KEY');
