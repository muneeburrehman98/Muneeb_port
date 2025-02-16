document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const target = document.querySelector(this.getAttribute('href'));
        target.classList.add('active');
    });
});

function sendOTP() {
    const email = document.getElementById('email').value;
    fetch('/send-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            document.getElementById('otp-section').style.display = 'block';
            alert('OTP sent to your email!');
        }
    });
}

function verifyOTP() {
    const email = document.getElementById('email').value;
    const otp = document.getElementById('otp').value;
    fetch('/verify-otp', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, otp })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('OTP verified successfully! You are logged in.');
        } else {
            alert('Invalid OTP, please try again.');
        }
    });
}
