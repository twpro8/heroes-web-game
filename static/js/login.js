

document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault(); // Предотвращаем стандартное поведение формы

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const formBody = new URLSearchParams({
        username: username,
        password: password,
    });

    try {
        const response = await fetch('/auth/jwt/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formBody.toString(),
        });

        if (response.status === 204 || response.status === 200) {
            // Логин успешен, сервер установил куки, теперь перенаправляем на защищенную страницу
            window.location.href = '/home'; // Замени на нужный URL
        } else {
            alert('Login failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('An error occurred');
    }
});

// document.addEventListener('DOMContentLoaded', async function() {
//     try {
//         const response = await fetch('http://localhost:8000/protected-endpoint', {
//             method: 'GET',
//             credentials: 'include' // Включаем куки в запрос
//         });

//         if (response.ok) {
//             // Если токен действителен, перенаправляем на домашнюю страницу
//             window.location.href = 'http://localhost:8000/home';
//         }
//     } catch (error) {
//         console.error('Error:', error);
//         // Здесь можно оставить пользователя на странице логина, если токен недействителен
//     }
// });

