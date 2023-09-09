export default async function userAPI() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    return await response.json();
  }
  