function toggleSidebar() {
    var sidebar = document.getElementById("sidebar");
    var toggle = document.querySelector(".sidebar-toggle");
    sidebar.classList.toggle("active");
    
    // Toggle the visibility of the sidebar-toggle button based on sidebar state
    if (sidebar.classList.contains("active")) {
      toggle.classList.add("hidden");
    } else {
      toggle.classList.remove("hidden");
    }
  }
  
  // Function to specifically close the sidebar
  function closeSidebar() {
    var sidebar = document.getElementById("sidebar");
    var toggle = document.querySelector(".sidebar-toggle");
    if (sidebar.classList.contains("active")) {
      sidebar.classList.remove("active");
      toggle.classList.remove("hidden");
    }
  }


function openModal() {
    var modal = document.getElementById("myModal");

    console.log("open modal");
    addListElement();
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    console.log("a intrat aici");
    modal.style.display = "none";
}