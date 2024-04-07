var username_string = "temp";

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


function openModal2(element) {
  var modal = document.getElementById("mysecondModal");
  localStorage.setItem('points', element.getAttribute('data-index-points') * element.getAttribute('data-index-multiplier'));
  console.log(element.getAttribute('data-index-points') + " " + element.getAttribute('data-index-multiplier'));
  console.log("open modal2");
  modal.style.display = "block";
}

function closeModal2() {
  var modal = document.getElementById("mysecondModal");
  console.log("a intrat aici");
  modal.style.display = "none";
}

function openModal3() {
  var modal = document.getElementById("mythirdModal");

  console.log("open modal3");
  modal.style.display = "block";
}

function closeModal3() {
  var modal = document.getElementById("mythirdModal");
  console.log("a intrat aici");
  modal.style.display = "none";
}


document.getElementById('loginForm').addEventListener('submit', function (event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Get the values of username and password inputs
  localStorage.setItem('username', document.getElementById('username').value);
  username_string = document.getElementById('username').value;
  var password = document.getElementById('password').value;

  // You can now use these variables to perform further actions, such as sending them to a backend server for authentication
  console.log('Username:', username);
  console.log('Password:', password);

  // Clear the form fields after submission (optional)
  document.getElementById('username').value = '';
  document.getElementById('password').value = '';

  window.location.href = "homr.html";

});

//fa functie pt cand se intra pe pagine ca sa pui user
function addUser() {
  var toggleSidebar_stuff = document.getElementById("username");
  var toggleSidebar_stuff2 = document.getElementById("username2");
  console.log(localStorage.getItem('username'));
  if (localStorage.getItem('username') === null) {
    window.location.href = "login.html";
  }
  toggleSidebar_stuff.innerHTML = localStorage.getItem('username');
  toggleSidebar_stuff2.innerHTML = localStorage.getItem('username');

}
// in addlistelements sa fie chemata cand dai click pe modala cu pozitia geografica in loc sa pui alert

function addListElements(latitude_value, longitude_value) {
  // localStorage.removeItem('username');

  const jsonData = {
    longitude: longitude_value,
    latitude: latitude_value
  };

  // Define the URL of your backend API endpoint
  const url = 'http://localhost:8080/challenges/all';

  // Define the options for the fetch request
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData) // Convert JSON object to a string
  };

  // Send the POST request using fetch
  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      // Handle the JSON response data
      console.log('Response received:', data);
      var list = document.getElementById("challenge-list");
      while (list.firstChild) {
        list.removeChild(list.firstChild);
      }
      for (var i = 0; i < data.length; i++) {
        //aici creez copii noi
        var item = document.createElement("button");
        // item.onclick = function() {
        //   openModal2();
        // };
        item.id = 'ceva';
        item.className = 'resource-1-link';
        item.setAttribute("data-index-points", data[i].points);
        item.setAttribute("data-index-multiplier", data[i].scoreMultipler);

        item.onclick = function() {
          openModal2(this);
        };

        var list_item = document.createElement("li");

        var article_inside = document.createElement("a");
        article_inside.href = '#';
        article_inside.innerHTML = data[i].title;
        article_inside.className = 'resource-1';

        var description_inside = document.createElement("p");
        description_inside.innerHTML = data[i].description;
        description_inside.className = 'challenge-description';

        var image_inside = document.createElement("img");
        image_inside.src = './medddddalie.jpg';
        image_inside.className = 'reward';
        image_inside.alt = 'Reward';

        var points_element = document.createElement("p");
        points_element.id = 'aici_puncte'
        points_element.innerHTML = data[i].points + " points X " + Math.floor(data[i].scoreMultipler * 100) / 100;

        list_item.appendChild(article_inside);
        list_item.appendChild(description_inside);
        list_item.appendChild(image_inside);
        list_item.appendChild(points_element);

        item.appendChild(list_item);
        list.appendChild(item);
      }
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with the fetch operation:', error);
    });


  // var list = document.getElementById("challenge-list");
  // for (var i = 0; i < 5; i++) {
  //     var item = document.createElement("li");
  //     item.innerHTML = "New list item";
  //     list.appendChild(item);            
  // }

}


function getUserPoints() {
  // Define the URL of your backend API endpoint
  const url = 'http://localhost:8080/user/getUser';


  const jsonData = {
    userId: localStorage.getItem('username'),
    password: "mocked"
  };


  // Send the GET request using fetch
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData) // Convert JSON object to a string
  };

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      // Handle the JSON response data
      console.log('Response received:', data);
      var points = document.getElementById("points_button");
      points.innerHTML = data.points;
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with the fetch operation:', error);
    });
}


function addPointsToUser() {
  // Define the URL of your backend API endpoint
  const url = 'http://localhost:8080/user/addPointsToUser';
  console.log("adaug puncte")

  const jsonData = {
    userId: localStorage.getItem('username'),
    points: Math.round(parseFloat(localStorage.getItem('points')))
  };


  // Send the GET request using fetch
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(jsonData) // Convert JSON object to a string
  };

  fetch(url, options)
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the JSON response
    })
    .then(data => {
      // Handle the JSON response data
      console.log('Response received:', data);
    })
    .catch(error => {
      // Handle errors
      console.error('There was a problem with the fetch operation:', error);
    });
}
