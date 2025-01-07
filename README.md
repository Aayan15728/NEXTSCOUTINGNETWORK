# NEXT SCOUTING NETWORK
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Football Video Ratings</title>
    <link rel="stylesheet" href="styles.css">
    <script src="https://apis.google.com/js/platform.js" async defer></script>
</head>
<body>
    <header>
        <h1>Football Video Ratings</h1>
    </header>

    <!-- Section 1: User Authentication -->
    <section id="auth-section">
        <h2>Sign Up / Log In</h2>
        <div class="g-signin2" data-onsuccess="onSignIn"></div>
        <p id="user-info"></p>
        <button onclick="signOut()">Sign Out</button>
    </section>

    <!-- Section 2: Video Gallery -->
    <section id="video-gallery">
        <h2>Watch Videos</h2>
        <div id="videos">
            <!-- Add your videos here -->
            <video src="video1.mp4" controls></video>
            <video src="video2.mp4" controls></video>
        </div>
    </section>

    <!-- Section 3: Video Upload -->
    <section id="upload-section">
        <h2>Upload Your Video</h2>
        <form id="upload-form">
            <input type="file" id="video-file" accept="video/*" required>
            <button type="submit">Upload</button>
        </form>
        <p id="upload-status"></p>
    </section>

    <!-- Section 4: About You -->
    <section id="about-section">
        <h2>About Me</h2>
        <div id="about-images">
            <img src="https://source.unsplash.com/400x300/?football" alt="Football">
            <img src="https://source.unsplash.com/400x300/?player" alt="Player">
        </div>
    </section>

    <script src="scripts.js"></script>
</body>
</html>
body {
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f5f5f5;
}

header {
    background-color: #2c3e50;
    color: white;
    text-align: center;
    padding: 1rem;
}

section {
    padding: 1rem 2rem;
    margin: 1rem 0;
    background: white;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

h2 {
    color: #2c3e50;
}

#videos video {
    margin: 10px;
    max-width: 100%;
    height: auto;
    display: block;
}

#g-signin2 {
    margin-top: 10px;
}

button {
    background-color: #2980b9;
    color: white;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #3498db;
}

#about-images img {
    margin: 10px;
    width: 400px;
    height: 300px;
    border-radius: 8px;
    object-fit: cover;
}
// Google Authentication
function onSignIn(googleUser) {
    const profile = googleUser.getBasicProfile();
    document.getElementById("user-info").innerText = `Welcome, ${profile.getName()}!`;
}

function signOut() {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        document.getElementById("user-info").innerText = "You have signed out.";
    });
}

// Video Upload Handling
document.getElementById('upload-form').addEventListener('submit', (e) => {
    e.preventDefault();
    const fileInput = document.getElementById('video-file');
    const file = fileInput.files[0];

    if (file) {
        document.getElementById('upload-status').innerText = `Uploading "${file.name}"...`;
        // Simulate upload process
        setTimeout(() => {
            document.getElementById('upload-status').innerText = `"${file.name}" uploaded successfully!`;
        }, 2000);
    } else {
        document.getElementById('upload-status').innerText = "Please select a file.";
    }
});
