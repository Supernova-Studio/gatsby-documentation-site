/*-----------------------------
    Sidebar menu for mobile
------------------------------- */

$("#sidebarCollapse").on("click", function(e) {
    // Toggle the dark / light mode when clicking the mode selector
    $(".docs-navigation").toggleClass("d-inline")
    e.preventDefault()
})