exports.render = function(data) {
    return `<ul>
      ${data.posts.map(post => `<li>${post.data.title}</li>`).join("\n")}
    </ul>`;
  };