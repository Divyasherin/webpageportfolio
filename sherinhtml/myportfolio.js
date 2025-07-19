document.getElementById("view-resume-btn").addEventListener("click", function() {
    var resumeContainer = document.getElementById("resume-container");
    if (resumeContainer.style.display === "none") {
        resumeContainer.style.display = "block";
    } else {
        resumeContainer.style.display = "none";
    }
});