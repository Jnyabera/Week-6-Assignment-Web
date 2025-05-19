
    // Form validation and event listeners
    const form = document.getElementById('registerForm');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const formMessage = document.getElementById('formMessage');

    const usernameError = document.getElementById('usernameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      let valid = true;

      usernameError.textContent = '';
      emailError.textContent = '';
      passwordError.textContent = '';
      formMessage.textContent = '';

      if (username.value.length < 3) {
        usernameError.textContent = 'Username must be at least 3 characters';
        valid = false;
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(email.value)) {
        emailError.textContent = 'Enter a valid email address';
        valid = false;
      }

      if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        valid = false;
      }

      if (valid) {
        formMessage.textContent = 'Registration successful!';
        form.reset();
      }
    });

    // Interactive element
    const interactiveBox = document.getElementById('interactiveBox');
    interactiveBox.addEventListener('click', () => {
      const colors = ['#e0f7fa', '#b2ebf2', '#4dd0e1', '#00acc1'];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      interactiveBox.style.backgroundColor = randomColor;
    });
