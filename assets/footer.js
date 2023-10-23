function toggle_mobile_view(heading) {
    var content = heading.nextElementSibling; // Get the next element (content)
  
    if (content.style.display === "none" || content.style.display === "") {
      content.style.display = "block"; // Show the content
    } else {
      content.style.display = "none"; // Hide the content
    }
  }
  