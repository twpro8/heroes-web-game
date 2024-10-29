async function logoutUser() {
    try {
        const response = await fetch('/auth/jwt/logout', { // Замени на нужный URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Если требуется токен, добавь его здесь
                // 'Authorization': `Bearer ${yourAccessToken}`
            },
        });

        if (response.ok) {
            console.log('Logout successful'); // Debug: успешный logout
            // После выхода перенаправляем на страницу входа
            window.location.href = '/login'; // Замени на нужный URL
        } else {
            console.error('Logout failed with status:', response.status); // Debug: неудачный logout
            alert('Logout failed: ' + response.statusText);
        }
    } catch (error) {
        console.error('Error during logout:', error);
        alert('An error occurred during logout. Please check the console for more details.');
    }
}

document.getElementById('logoutButton').addEventListener('click', function() {
    logoutUser();
});

