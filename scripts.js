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
