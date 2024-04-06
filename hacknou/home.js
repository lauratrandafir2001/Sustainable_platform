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
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    console.log("a intrat aici");
    modal.style.display = "none";
}

document.getElementById('loginForm').addEventListener('submit', function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();
    
    // Get the values of username and password inputs
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    // You can now use these variables to perform further actions, such as sending them to a backend server for authentication
    console.log('Username:', username);
    console.log('Password:', password);
    
    // Clear the form fields after submission (optional)
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
});