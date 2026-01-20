import axios from "axios"

const url = "https://jsonplaceholder.typicode.com/posts"

export async function getEdgePosts() {

  try {
    const response = await axios.get(url)
    const allData = response.data

    if (allData.length === 0) {
      return []
    }

    const firstData = allData[0]
    const lastData = allData[allData.length-1]
    
    const result = [
      { id:firstData.id, title:firstData.title },
      { id:lastData.id, title:lastData.title }
    ]

    return result
    
  } catch (error) {
    throw error


}
}
getEdgePosts()