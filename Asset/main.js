 // JavaScript for Button Animations
        const bounceBtn = document.getElementById('bounceBtn');
        const shakeBtn = document.getElementById('shakeBtn');
        const pulseBtn = document.getElementById('pulseBtn');

        // Bounce Animation
        bounceBtn.addEventListener('click', () => {
            bounceBtn.classList.add('bounce');
            setTimeout(() => {
                bounceBtn.classList.remove('bounce');
            }, 1000);
        });

        // Shake Animation
        shakeBtn.addEventListener('click', () => {
            shakeBtn.classList.add('shake');
            setTimeout(() => {
                shakeBtn.classList.remove('shake');
            }, 500);
        });

        // Pulse Animation
        pulseBtn.addEventListener('click', () => {
            if (pulseBtn.classList.contains('pulse')) {
                pulseBtn.classList.remove('pulse');
            } else {
                pulseBtn.classList.add('pulse');
            }
        });
