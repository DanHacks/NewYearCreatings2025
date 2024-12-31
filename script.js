document.addEventListener('DOMContentLoaded', () => {
    const nameForm = document.getElementById('nameForm');
    const userNameInput = document.getElementById('userName');
    const greetingMessage = document.getElementById('greetingMessage');
    const personalGreeting = document.getElementById('personalGreeting');
    const generateLinkButton = document.getElementById('generateLink');
    const invitationLink = document.getElementById('invitationLink');
    const heartsContainer = document.getElementById('heartsContainer');

    // Handle form submission
    document.getElementById('submitName').addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        if (userName) {
            nameForm.style.display = 'none';
            greetingMessage.style.display = 'block';
            personalGreeting.textContent = `Happy New Year 2025, ${userName}!`;

            // Start dropping hearts
            startHeartsAnimation();
        } else {
            alert('Please enter your name.');
        }
    });

    // Generate invitation link
    generateLinkButton.addEventListener('click', () => {
        const userName = userNameInput.value.trim();
        const currentUrl = window.location.href;
        const inviteUrl = `${currentUrl}?ref=${encodeURIComponent(userName)}`;
        invitationLink.style.display = 'block';
        invitationLink.textContent = `Share this link: ${inviteUrl}`;
        invitationLink.style.color = 'blue';
        invitationLink.style.cursor = 'pointer';

        // Make the link clickable
        invitationLink.onclick = () => {
            navigator.clipboard.writeText(inviteUrl);
            alert('Invitation link copied to clipboard!');
        };
    });

    // Function to start hearts animation
    function startHeartsAnimation() {
        setInterval(() => {
            const heart = document.createElement('div');
            heart.classList.add('heart');
            heart.textContent = '❤️';
            heart.style.left = `${Math.random() * 100}vw`;
            heart.style.fontSize = `${Math.random() * 20 + 20}px`;
            heartsContainer.appendChild(heart);

            // Remove the heart after animation
            setTimeout(() => {
                heart.remove();
            }, 3000);
        }, 300);
    }
});
