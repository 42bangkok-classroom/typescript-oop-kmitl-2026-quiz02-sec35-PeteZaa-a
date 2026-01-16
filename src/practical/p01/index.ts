// export function getEdgePosts() {}

import axios from "axios";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface EdgePost {
  id: number;
  title: string;
}

async function getEdgePosts(): Promise<EdgePost[]> {
  const url = "https://jsonplaceholder.typicode.com/posts";

  try {
    const response = await axios.get<Post[]>(url);
    const posts = response.data;

    if (posts.length === 0) {
      return [];
    }

    const firstItem = posts[0];
    const lastItem = posts[posts.length - 1];

    const edgePosts: EdgePost[] = [firstItem, lastItem].map(post => ({
      id: post.id,
      title: post.title
    }));

    return edgePosts;

  } catch (error) {
    throw new Error("Failed to fetch posts");
  }
}