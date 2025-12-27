 // Scroll Reveal Animation
        const reveal = () => {
            const reveals = document.querySelectorAll('.reveal');
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                const elementVisible = 150;
                if (elementTop < windowHeight - elementVisible) {
                    el.classList.add('active');
                }
            });
        }
        window.addEventListener('scroll', reveal);
        window.onload = reveal;

        // Smooth Scrolling
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Form Submission Simulation
        document.getElementById('waitlistForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const btn = e.target.querySelector('button');
            const originalText = btn.innerText;
            btn.innerText = 'Welcome Aboard!';
            btn.style.backgroundColor = '#10b981';
            e.target.reset();
            
            setTimeout(() => {
                btn.innerText = originalText;
                btn.style.backgroundColor = '';
            }, 3000);
        });