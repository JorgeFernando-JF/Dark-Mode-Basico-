const darkModeToggle = document.getElementById("dark-mode-toggle");
        const body = document.body;
        const texto = document.getElementById('texto-alterado');

        darkModeToggle.addEventListener ("click", () => {
            body.classList.toggle ("dark-mode");
            const sunIcon = darkModeToggle.querySelector('.fas.fa-sun');
            const moonIcon = darkModeToggle.querySelector('.fas.fa-moon');

            if (body.classList.contains ("dark-mode")) {
                sunIcon.style.display = 'none';
                moonIcon.style.display = 'inline';
                moonIcon.style.color = '#fff';
                texto.textContent = 'Clique na Lua para desativar o Dark-Mode';
            } else {
                sunIcon.style.display = 'inline';
                moonIcon.style.display = 'none';
                texto.textContent = 'Clique no Sol para ativar o Dark-Mode';
            }
        });
