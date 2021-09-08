const Cache = require("@11ty/eleventy-cache-assets");

//todo: change this to actual repo when it's no longer private
const repo = "FreesideHull/FreesideWeb"

module.exports = async function() {
  console.log( "Fetching github contribuitors" );

  // GitHub API: https://developer.github.com/v3/repos/#get
  return await Cache(`https://api.github.com/repos/${repo}/contributors`, {
    duration: "1d", // 1 day
    type: "json"
  });
};