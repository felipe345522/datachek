// Manejo del inicio de sesión
document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
    
        const storedUsers = JSON.parse(localStorage.getItem('users')) || []; // Cambiado a 'users'
    
        // Verificar si el usuario existe
        const storedUser  = storedUsers.find(user => user.username === username);
    
        if (storedUser  && storedUser .password === password) {
            // Redirigir a la página principal
            window.location.href = '../pagina_principal/principal.html';
        } else {
            alert('Usuario o contraseña incorrectos');
        }
    });
    
    // Manejo del registro
    document.getElementById('register-form').addEventListener('submit', function(event) {
        event.preventDefault();
        const newUsername = document.getElementById('new-username').value;
        const newPassword = document.getElementById('new-password').value;
    
        // Obtener usuarios existentes
        const storedUsers = JSON.parse(localStorage.getItem('users')) || []; // Cambiado a 'users'
    
        // Verificar si el usuario ya existe
        const existingUser  = storedUsers.find(user => user.username === newUsername);
        if (existingUser ) {
            alert('El nombre de usuario ya está en uso. Por favor, elige otro.');
            return; // Salir de la función si el usuario ya existe
        }
    
        const user = {
            username: newUsername,
            password: newPassword
        };
    
        // Agregar el nuevo usuario al array y guardar en localStorage
        storedUsers.push(user);
        localStorage.setItem('users', JSON.stringify(storedUsers));
        alert('Usuario registrado exitosamente');
        document.getElementById('register-container').style.display = 'none';
        document.getElementById('form-container').style.display = 'block';
    
        // Limpiar campos
        document.getElementById('register-form').reset();
    });
    
    // Mostrar/Ocultar formularios
    document.getElementById('show-register').addEventListener('click', function() {
        document.getElementById('form-container').style.display = 'none';
        document.getElementById('register-container').style.display = 'block';
    });
    
    document.getElementById('show-login').addEventListener('click', function() {
        document.getElementById('register-container').style.display = 'none';
        document.getElementById('form-container').style.display = 'block';
    });