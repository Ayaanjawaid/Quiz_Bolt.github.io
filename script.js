document.addEventListener("DOMContentLoaded", function () {
    const headers = document.querySelectorAll(".slide-left");
    let currentIndex = 0;

    function showHeader(index) {
        headers[index].style.right = "0";
    }

    function hideHeader(index) {
        headers[index].style.right = "100%";
    }

    function cycleHeaders() {
        hideHeader(currentIndex);
        currentIndex = (currentIndex + 1) % headers.length;
        showHeader(currentIndex);
        setTimeout(cycleHeaders, 5000); // Adjust the delay (in milliseconds) between headers
    }

    // Start the header cycling
    cycleHeaders();
});
