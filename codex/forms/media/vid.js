// Open the video upload section when the "Add Video" button is clicked
document.getElementById('addVideo').addEventListener('click', function() {
    document.getElementById('videoUploadSection').style.display = 'flex';
});

// Close the video upload section when the close icon is clicked
document.getElementById('closevideoUploadSection').addEventListener('click', function() {
    document.getElementById('videoUploadSection').style.display = 'none';
});
