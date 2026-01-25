const API = {
users: 'https://fakerapi.it/api/v1/persons?_quantity=50',
images: 'https://fakerapi.it/api/v1/images?_quantity=12',
texts: 'https://fakerapi.it/api/v1/texts?_quantity=5'
};

async function fetchData(url) {
const res = await fetch(url);
if (!res.ok) throw new Error('Network error');
const data = await res.json();
return data.data;
}

function getAllUsers() {
  const localUsers = JSON.parse(localStorage.getItem('users')) || [];
  return fetchData(API.users).then(apiUsers => apiUsers.concat(localUsers));
}