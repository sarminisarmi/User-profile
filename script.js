document.getElementById('more-users-btn').addEventListener('click', fetchUsers);

async function fetchUsers() {
    try {
        const response = await fetch('https://randomuser.me/api/?results=5');
        const data = await response.json();
        const users = data.results;
        updateProfiles(users);
        updateTable(users);
    } catch (error) {
        console.error('Error fetching users:', error);
    }
}

function updateProfiles(users) {
    const profilesContainer = document.getElementById('profiles-container');
    profilesContainer.innerHTML = '';

    users.forEach(user => {
        const profileCard = document.createElement('div');
        profileCard.className = 'profile-card';
        profileCard.innerHTML = `
            <img src="${user.picture.large}" alt="${user.name.first}">
            <h3>${user.name.first} ${user.name.last}</h3>
            <p>${user.email}</p>
        `;
        profilesContainer.appendChild(profileCard);
    });
}

function updateTable(users) {
    const tableBody = document.querySelector('#user-table tbody');
    tableBody.innerHTML = '';

    users.forEach(user => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${user.name.first} ${user.name.last}</td>
            <td>${user.email}</td>
        `;
        tableBody.appendChild(row);
    });
}
fetchUsers();



