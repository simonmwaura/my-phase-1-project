
//fetch posts and display them
fetch("http://localhost:3000/posts")
  .then((response) => response.json())// Parse the response as JSON
  .then((posts) => {
    displayPosts(posts);// Call the displayPosts function to render the posts
  });


//const savedFormData = JSON.parse(localStorage.getItem("formData"));
//console.log({ savedFormData });


// Function to display posts
function displayPosts(posts) {
  let cardsContainer = document.getElementById("cardsContainer");
  console.log({ posts });

  // Loop through each post and generate HTML for display
  posts?.map((post) => {
    cardsContainer.innerHTML += `
    <div key="${post.id}" href="#" class="block max-w-sm p-6 bg-green-400 border border-green-400 rounded-lg shadow hover:bg-yellow-700              dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <img src="${post.img}"  class="w-full"  alt="">
            <div  class="flex justify-between text-white my-3 text-3xl">
                  <i  onClick="deletePost(${post.id})" class="fa fa-trash-o " aria-hidden="true"></i>
                  <i onclick="editPost(${post.id})"class="fa fa-wrench" aria-hidden="true"></i>
            </div>
               <h5 class="mb-2 text-2xl font-bold tracking-tight text-white dark:text-white">${post.title}</h5>
               <h5 class="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">${post.description1}</h5>
          <ol type="1" class="font-normal text-white dark:text-gray-400">
              ${post.description2} 
          </ol>
              <h5 class="mb-2 text-xl font-bold tracking-tight text-white dark:text-white">${post.description3}</h5>
          <ol  type="A" class="font-normal text-white dark:text-gray-400">
            ${post.description4}
          </ol>
     </div>
    `;
  });
}

// holds the form field values
let formData = {};

// Function to update formData object whenever changes occur in the form fields
function updateFormData(key, value) {
  formData[key] = value;
  
}

//function to edit a post 
function editPost(id) {
  // Fetch the post with the given id
  fetch(`http://localhost:3000/posts/${id}`)
  .then((response) => response.json())
    .then((post) => {
     // Populate form fields with post data for editing
      const update_container = document.getElementById("update container");

      // Update formData object with initial values
      formData = {
      title: post.title,image: post.img,description1: post.description1,description2: post.description2,description3: post.description3,description4: post.description4,
      };
      update_container.innerHTML = `
          <h4>Update Posts</h4>

          <div   class="max-w-md mx-auto">
                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="title"  value=${formData.title}  id="title" class="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label  class="peer-focus:font-medium absolute  text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">title</label>
                    </div>
                    

                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="image" value="${formData.image}"   id="image" class="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label  class="peer-focus:font-medium absolute  text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">image link</label>
                    </div>
                   

                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="description1" value="${formData.description1} " id="description1" class="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label  class="peer-focus:font-medium absolute  text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">description 1</label>
                    </div>


                    <div class="relative z-0 w-full mb-5 group">
                        <textarea type="text"   id="description2" rows="3"  class="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"  placeholder=" " required >${formData.description2}</textarea>
                        <label  class="peer-focus:font-medium absolute  text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">decription 2</label>
                    </div>


                    <div class="relative z-0 w-full mb-5 group">
                        <input type="text" name="description3" value= "${formData.description3}"  id="description3" class="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required />
                        <label  class="peer-focus:font-medium absolute  text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">description 3</label>
                    </div>


                    <div class="relative z-0 w-full mb-5 group">
                        <textarea type="text"    id="description4" rows="3"  class="block py-3 px-0 w-full text-base text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer" placeholder=" " required >${formData.description4} </textarea>
                        <label  class="peer-focus:font-medium absolute  text-base text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">description 4</label>
                    </div>

                    <button onclick="updatePost(event,${id})" type="submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
                </div>


`;
    });
}
// Function to update a post
function updatePost(event, id) {
  event.preventDefault();

  // Fetch the latest form field values from the formData object
  const {title,image,description1,description2,description3,description4,} = formData;

  // Perform the update using fetch or any other method
  // Example fetch request:
  fetch(`http://localhost:3000/posts/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({title: title,img: image,description1: description1,description2: description2,description3: description3,description4: description4,}),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      alert("saved succesfuly");
    })
    .catch((error) => {
      console.error("Error:", error);
      alert("Failed to update post");
    });
}
// Event listener to update formData object when form fields change
document.addEventListener("input", function (event) {
  const target = event.target;
  if (target.matches("#title")) {
    updateFormData("title", target.value);
  } else if (target.matches("#image")) {
    updateFormData("image", target.value);
  } else if (target.matches("#description1")) {
    updateFormData("description1", target.value);
  } else if (target.matches("#description2")) {
    updateFormData("description2", target.value);
  } else if (target.matches("#description3")) {
    updateFormData("description3", target.value);
  } else if (target.matches("#description4")) {
    updateFormData("description4", target.value);
  }
});

//Function to delete a post
function deletePost(id) {
  fetch(`http://localhost:3000/posts/${id}`, {
    method: "DELETE",
  })
    .then((anyvariable) => anyvariable.json())
    .then((posts) => {
      displayPosts(posts);
    });
}

//add post
document.getElementById("postForm").addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document.getElementById("title").value;
  const image = document.getElementById("image").value;
  const description1 = document.getElementById("description1").value;
  const description2 = document.getElementById("description2").value;
  const description3 = document.getElementById("description3").value;
  const description4 = document.getElementById("description4").value;

  console.log(title,image,description1,description2,description3,description4
  );
// Submit the form data to add a new post
  fetch("http://localhost:3000/posts", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      id:Math.random(1).toString().slice(2),
      title: title,
      img: image,
      description1: description1,
      description2: description2,
      description3: description3,
      description4: description4,
      views: 0,
    }),
  })
    .then((anyvariable) => anyvariable.json())
    .then((response) => {
      alert("post added successfully");
    });
});
