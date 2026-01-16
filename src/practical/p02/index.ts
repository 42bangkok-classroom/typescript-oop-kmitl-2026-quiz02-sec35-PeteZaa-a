import axios from "axios"

export function getPostsByUser() {}

const url = "https://jsonplaceholder.typicode.com/posts"


interface allData {
  Userid: number
  id: number
  title: string
  body: string
}

interface wantData {
  id:number
  title: string
} 

// input userid



const fetchData = async () => {
  try {
    const response = await axios.get(url);
    console.log(response.data);
  } catch (error) {
    console.error("Erorr message");
  }
};