// export function getEdgePosts() {}

import https from "https"
async function getEdgePosts() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const posts = await response.json();

    if (posts.length === 0) return [];

    const first = posts[0];
    const last = posts[posts.length - 1];

    return [first, last].map(({ id, title }) => ({ id, title }));
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return [];
  }
}