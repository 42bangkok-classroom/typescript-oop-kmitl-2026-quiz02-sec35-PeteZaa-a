import axios from "axios"

// export function getPostsByUser() {}

const url = "https://jsonplaceholder.typicode.com/posts"


interface allData {
  userId: number
  id: number
  title: string
  body: string
}

interface wantData {
  id:number
  title: string
} 

// input userid



export async function getPostsByUser()  {
  try {
    const response = await axios.get(url);
    console.log(response.data.userId);
  } catch (error) {
    throw new Error ("Error message")
  }
};

