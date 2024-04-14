// Set the video source here
document.addEventListener("DOMContentLoaded", function () {
  var video = document.getElementById("video-element");
  // Set the video source
  video.src = "path-to-your-video.mp4"; // Replace with your video path
  video.type = "video/mp4"; // Replace with the correct MIME type if necessary

  document.getElementById("send-button").addEventListener("click", sendMessage);
});

function sendMessage() {
  var input = document.getElementById("chat-input");
  var message = input.value.trim();
  if (message !== "") {
    // Here, you would normally append the message to the chat window
    // and send it to the server.
    console.log("Message sent: " + message);
    input.value = ""; // Clear the input after sending
  }
}
