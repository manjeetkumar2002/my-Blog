const blogCards = [
  {
    id: 1,
    image: "./html.jpg",
    title: "Mastering the Basics of HTML",
    publishedDate: "2025-01-01",
    description:"HTML is the foundation of web development, used to structure content on web pages. This article covers the basics of HTML, such as tags, attributes, and elements. Learn how to create headings, paragraphs, images, links, and other essential components, helping you build well-structured and visually appealing websites.",
    author: "John Doe",
    authorImg: "./avatar1.avif",
    category: "Technology",
  },
  {
    id: 2,
    image: "./css.jpg",
    title: "Mastering the Basics of CSS",
    publishedDate: "2025-01-02",
    description:"CSS adds style and visual appeal to web pages, controlling layout, design, and behavior. This guide introduces CSS fundamentals like selectors, properties, and values. Discover how to use CSS to create eye-catching layouts, apply colors and textures, and enhance user experiences across devices.",
    author: "Jane Smith",
    authorImg: "./girlavatar1.avif",
    category: "Technology",
  },
  {
    id: 3,
    image: "./js.jpg",
    title: "Getting Started with JavaScript",
    publishedDate: "2025-01-03",
    description:
      "JavaScript brings interactivity and functionality to websites, transforming static pages into dynamic experiences. This article covers how to get started with JavaScript, its fundamental concepts, and how it can be used to build responsive user interfaces, handle events, and add animations.",
    author: "Alex Brown",
    authorImg: "./avatar2.avif",
    category: "Technology",
  },
  {
    id: 4,
    image: "./c++.jpg",
    title: "C++ for Problem Solving",
    publishedDate: "2025-01-04",
    description:
      "C++ is a powerful programming language often used in competitive programming and software development. This article explores how C++ can solve complex problems efficiently, discussing its syntax, features, and applications in developing performance-critical software and advanced algorithms.",
    author: "Michael Johnson",
    authorImg: "./avatar3.avif",
    category: "Technology",
  },
  {
    id: 5,
    image: "./python.jpg",
    title: "Python Programming for Beginners",
    publishedDate: "2025-01-05",
    description:
      "Python is a beginner-friendly programming language known for its versatility and simplicity. Learn the basics of Python, including syntax, data types, and control structures. This article also highlights Python’s broad applications, from web development to data analysis and artificial intelligence.",
    author: "Emily Carter",
    authorImg: "./girlavatar2.avif",
    category: "Technology",
  },
  {
    id: 6,
    image: "./java.jpg",
    title: "Java Essentials for Software Developers",
    publishedDate: "2025-01-06",
    description:
      "Java is a versatile language widely used in enterprise applications and software development. This guide introduces Java’s core concepts, including object-oriented programming and its role in creating scalable, secure applications. Learn why Java remains a staple in modern software engineering.",
    author: "Sophia Kim",
    authorImg: "./girlavatar3.avif",
    category: "Technology",
  },
  {
    id: 7,
    image: "./culture1.jpg",
    title: "Exploring the Rich Culture of India",
    publishedDate: "2025-01-05",
    description:
      "India is renowned for its rich cultural heritage, from vibrant festivals to diverse cuisine. This article delves into the country's traditions, art, and history, offering a glimpse into its multifaceted identity and the significance of cultural preservation.",
    author: "Anita Roy",
    authorImg: "./girlavatar4.avif",
    category: "Culture",
  },
  {
    id: 8,
    image: "./culture2.jpg",
    title: "The Beauty of African Tribal Art",
    publishedDate: "2024-12-25",
    description:
      "African tribal art represents centuries of cultural traditions and storytelling. This article explores the symbolic meanings and craftsmanship behind these art forms, highlighting their historical significance and their influence on modern artistic expressions.",
    author: "David Okafor",
    authorImg: "./avatar4.avif",
    category: "Culture",
  },
  {
    id: 9,
    image: "./culture3.jpg",
    title: "A Guide to Japanese Tea Ceremonies",
    publishedDate: "2025-01-03",
    description:
      " Japanese tea ceremonies are a blend of art and mindfulness, showcasing Japan’s cultural essence. Learn about the intricate rituals, tools, and philosophies behind this practice, which emphasizes simplicity, harmony, and appreciation for the present moment.",
    author: "Haruto Tanaka",
    authorImg: "./avatar5.avif",
    category: "Culture",
  },
  {
    id: 10,
    image: "./culture4.jpg",
    title: "Understanding Indigenous Australian Art",
    publishedDate: "2025-01-06",
    description:
      "Indigenous Australian art reflects profound connections to the land and history. This article discusses its unique symbols, techniques, and meanings, providing insights into the cultural heritage and storytelling traditions of Indigenous communities.",
    author: "Emily Carter",
    authorImg: "./girlavatar4.avif",
    category: "Culture",
  },
  {
    id: 11,
    image: "./culture5.jpg",
    title: "Mexican Day of the Dead Traditions",
    publishedDate: "2024-12-30",
    description:
      "Mexico’s Dia de los Muertos celebrates life and honors the deceased with vibrant traditions. This article explores the rituals, from colorful altars to sugar skulls, highlighting the cultural and spiritual significance of this beloved festival.",
    author: "Carlos Garcia",
    authorImg: "./avatar6.avif",
    category: "Culture",
  },
  {
    id: 12,
    image: "./culture6.jpg",
    title: "The Influence of Greek Mythology on Modern Culture",
    publishedDate: "2024-12-28",
    description:
      "Greek mythology continues to inspire modern art, literature, and entertainment. This article discusses how ancient myths shape contemporary stories, symbols, and archetypes, showcasing their enduring cultural relevance.",
    author: "Sophia",
    authorImg: "./girlavatar1.avif",
    category: "Culture",
  },
  {
    id: 14,
    image: "./culture7.jpg",
    title: "The Colorful World of Brazilian Carnival",
    publishedDate: "2024-12-26",
    description:
      "Brazilian Carnival is a world-famous celebration of music, dance, and culture. This article explores the colorful costumes, samba rhythms, and lively parades that define this energetic festival and its impact on Brazil’s cultural identity.",
    author: "Miguel Santos",
    authorImg: "./avatar7.avif",
    category: "Culture",
  },
  {
    id: 15,
    image: "./culture8.jpg",
    title: "Exploring Middle Eastern Calligraphy",
    publishedDate: "2025-01-02",
    description:
      "Middle Eastern calligraphy is a fusion of art and spirituality, expressing profound meanings through elegant designs. This article delves into the history, techniques, and cultural significance of this timeless art form.",
    author: "Layla Hassan",
    authorImg: "./girlavatar5.avif",
    category: "Culture",
  },
  {
    id: 16,
    image: "./culture9.jpg",
    title: "The Evolution of French Cuisine",
    publishedDate: "2024-12-27",
    description:
      "French cuisine is a cornerstone of global gastronomy, blending tradition with innovation. This article traces its evolution, from classic dishes to modern influences, highlighting its role in shaping culinary arts worldwide.",
    author: "Marie Dupont",
    authorImg: "./girlavatar2.avif",
    category: "Culture",
  },
  {
    id: 17,
    image: "./music1.jpg",
    title: "The Evolution of Jazz Music",
    publishedDate: "2024-12-30",
    description:
      " Jazz music has a rich history rooted in African-American culture, evolving into a global phenomenon. This article explores its origins, influential artists, and how jazz continues to inspire creativity and connect cultures.",
    author: "Sophia Kim",
    authorImg: "./girlavatar4.avif",
    category: "Music",
  },
  {
    id: 18,
    image: "./music2.jpg",
    title: "The Healing Power of Classical Music",
    publishedDate: "2025-01-04",
    description:
      " Classical music has therapeutic benefits, from enhancing focus to reducing stress. This article discusses the science behind its calming effects, its role in relaxation, and its timeless appeal across generations.",
    author: "Michael Johnson",
    authorImg: "./avatar8.avif",
    category: "Music",
  },
  {
    id: 19,
    image: "./music3.jpg",
    title: "The Rise of K-Pop: A Global Phenomenon",
    publishedDate: "2025-01-06",
    description:
      "K-Pop has taken the world by storm with its captivating performances and global influence. Learn how this genre blends music, fashion, and culture, creating a phenomenon that resonates with fans worldwide.",
    author: "Hana Lee",
    authorImg: "./girlavatar1.avif",
    category: "Music",
  },
  {
    id: 20,
    image: "./music4.jpg",
    title: "Exploring the World of Electronic Music",
    publishedDate: "2025-01-02",
    description:
      " Electronic music revolutionized modern music with its innovative sounds and production techniques. This article explores its history, key genres, and how it continues to shape contemporary music culture.",
    author: "Alex Brown",
    authorImg: "./avatar1.avif",
    category: "Music",
  },
  {
    id: 21,
    image: "./music5.jpg",
    title: "The Golden Era of Rock and Roll",
    publishedDate: "2024-12-28",
    description:
      "The golden age of rock and roll gave rise to iconic artists and unforgettable hits. This article revisits the era’s impact on music, culture, and its lasting legacy in shaping popular genres today.",
    author: "Chris Evans",
    authorImg: "./avatar2.avif",
    category: "Music",
  },
  {
    id: 22,
    image: "./humor1.jpg",
    title: "The Science of Laughter",
    publishedDate: "2025-01-06",
    description:
      "Laughter is a universal expression with numerous health benefits. This article examines the science behind humor, its role in reducing stress, strengthening bonds, and improving overall well-being.",
    author: "Mark Lee",
    authorImg: "./avatar3.avif",
    category: "Humor",
  },
  {
    id: 23,
    image: "./humor2.jpg",
    title: "Top 10 Funniest Internet Memes",
    publishedDate: "2025-01-03",
    description:
      "Memes are a modern form of humor and cultural commentary. This article highlights the funniest and most viral internet memes, showcasing their ability to entertain and connect people across digital platforms.",
    author: "Nina Patel",
    authorImg: "./girlavatar5.avif",
    category: "Humor",
  },
  {
    id: 24,
    image: "./humor3.jpg",
    title: "Stand-Up Comedy: How to Make People Laugh",
    publishedDate: "2024-12-31",
    description:
      "Stand-up comedy is an art form that combines humor, timing, and storytelling. Learn about the techniques and skills comedians use to captivate audiences and spread laughter through this entertaining craft.",
    author: "Chris Evans",
    authorImg: "./avatar4.avif",
    category: "Humor",
  },
  {
    id: 25,
    image: "./humor4.jpg",
    title: "Funny Workplace Stories You Can Relate To",
    publishedDate: "2024-12-28",
    description:
      "Workplace humor provides a lighthearted look at office life. This article shares relatable and funny stories, offering a humorous perspective on daily work experiences and challenges.",
    author: "Emily Carter",
    authorImg: "./girlavatar2.avif",
    category: "Humor",
  },
  {
    id: 27,
    image: "./creativity1.jpg",
    title: "Unlocking Your Creative Potential",
    publishedDate: "2025-01-02",
    description:
      "Unlocking creativity requires techniques to overcome mental blocks and enhance innovation. This article provides tips for developing a creative mindset, fostering originality, and solving problems creatively.",
    author: "Sophia Kim",
    authorImg: "./girlavatar1.avif",
    category: "Creativity",
  },
  {
    id: 28,
    image: "./creativity2.jpg",
    title: "The Art of Creative Writing",
    publishedDate: "2024-12-30",
    description:
      "Creative writing is a powerful tool for self-expression and storytelling. This guide shares techniques to craft compelling narratives, develop characters, and communicate ideas through engaging prose.",
    author: "Emily Carter",
    authorImg: "./girlavatar2.avif",
    category: "Creativity",
  },
  {
    id: 30,
    image: "./creativity3.jpg",
    title: "Creative Thinking for Problem Solving",
    publishedDate: "2025-01-04",
    description:"Creative thinking is key to solving complex problems. This article explains strategies to approach challenges innovatively and offers practical methods to nurture a solution-oriented mindset.", 
    author: "Mark Lee",
    authorImg: "./avatar5.avif",
    category: "Creativity",
  },
  {
    id: 31,
    image: "./creativity4.jpg",
    title: "Exploring Digital Art and Design",
    publishedDate: "2024-12-28",
    description:"Digital art blends technology with creativity, offering endless possibilities for expression. This article explores tools and techniques for creating digital masterpieces, from graphic design to animation.",
    author: "Hana Lee",
    authorImg: "./girlavatar4.avif",
    category: "Creativity",
  },
  {
    id: 33,
    image: "./creativity5.jpg",
    title: "The Power of Brainstorming",
    publishedDate: "2024-12-31",
    description:
      "Brainstorming helps generate innovative ideas through collaboration. Learn about effective brainstorming methods that encourage creativity and maximize team productivity in problem-solving.",
    author: "Chris Evans",
    authorImg: "./avatar7.avif",
    category: "Creativity",
  },
  {
    id: 34,
    image: "./creativity6.jpg",
    title: "DIY Projects to Boost Creativity",
    publishedDate: "2025-01-06",
    description:
      "DIY projects are a fun way to boost creativity and productivity. This article suggests hands-on activities that inspire innovation and provide a fulfilling sense of accomplishment.",
    author: "Michael Johnson",
    authorImg: "./avatar8.avif",
    category: "Creativity",
  },
];

const topPosts = [
  {
    title: "How to Learn JavaScript Effectively",
    description: {
      category: "JavaScript",
      publishedDate: "2025-01-03",
    },
  },
  {
    title: "Understanding CSS Grid and Flexbox",
    description: {
      category: "CSS",
      publishedDate: "2025-01-01",
    },
  },
  {
    title: "Top 10 Web Development Trends in 2025",
    description: {
      category: "Web Development",
      publishedDate: "2025-01-02",
    },
  },
  {
    title: "Beginner’s Guide to React",
    description: {
      category: "React",
      publishedDate: "2024-12-30",
    },
  },
  {
    title: "Mastering Node.js for Backend Development",
    description: {
      category: "Backend",
      publishedDate: "2025-01-04",
    },
  },
  {
    title: "Introduction to TypeScript",
    description: {
      category: "TypeScript",
      publishedDate: "2024-12-28",
    },
  },
];

// adding the top Tending posts
topPosts.forEach((post, index) => {
  // create all the elements
  const div_element = document.createElement("div");
  const left_box = document.createElement("div");
  const right_box = document.createElement("div");
  const post_title_div = document.createElement("h3");
  const post_desc_box = document.createElement("p");
  const category_box = document.createElement("span");
  const publishedDate_box = document.createElement("span");
  // give the class name to the element
  div_element.className = "top-post";
  left_box.className = "left";
  right_box.className = "right";
  post_title_div.className = "top-post-title";
  post_desc_box.className = "top-post-desc";
  category_box.className = "category";
  publishedDate_box.className = "published-date";
  // add the information
  left_box.textContent = `${index + 1}`;
  post_title_div.textContent = post.title;
  category_box.textContent = post.description.category;
  publishedDate_box.textContent = post.description.publishedDate;
  // append all the elements
  div_element.appendChild(left_box);
  div_element.appendChild(right_box);
  right_box.appendChild(post_title_div);
  right_box.appendChild(post_desc_box);
  post_desc_box.appendChild(category_box);
  post_desc_box.appendChild(publishedDate_box);

  const content = document.getElementById("top-post-content");
  content.appendChild(div_element);
});

//now to add cards according to their catergoring whenever the user click on a particular category we will display corresponding category card

const categories = document.querySelector(".categories");

categories.addEventListener("click", (event) => {
  // Apply the event only for the category box
  if (event.target.closest(".category-box")) {
    const categoryName = event.target
      .closest(".category-box")
      .querySelector(".category-name").textContent;
    console.log(categoryName);
    generateCard(categoryName);
  }
});
function generateCard(categoryName) {
  const blogContent = document.querySelector(".blog-content");
  // Clear existing cards
  blogContent.innerHTML = "";
  blogCards.forEach((blogCard) => {
    if (blogCard.category == categoryName) {
      // make a card
      const Card = createCard(blogCard);
      document.querySelector(".blog-content").appendChild(Card);
    }
  });
  if (blogContent.innerHTML == "") {
    const noBlog = document.createElement("div");
    noBlog.className = "no-blogs";
    noBlog.textContent = "No blogs found";
    document.querySelector(".blog-content").appendChild(noBlog);
  }
}
// generate cards for culture by on run time
generateCard("Culture");

// code for sign in btn
const SignBtn = document.getElementById("SignIn");
const SignCloseBtn = document.createElement("div");
// creating the close btn

SignCloseBtn.style.position = "absolute";
SignCloseBtn.style.top = "5px";
SignCloseBtn.style.right = "10px";
SignCloseBtn.style.fontSize = "1.4rem";
SignCloseBtn.style.cursor = "pointer";

// adding event in signbtn it open the dialog box
SignBtn.addEventListener("click", () => {
  // console.log("Sign-btn-click")
  const dialogOverlay = document.querySelector(".dialog-overlay");
  dialogOverlay.classList.remove("hidden");
  document.body.style.overflow = "hidden";
  const dialogBox = document.querySelector(".dialog-content");
  dialogBox.style.width = "100%";
  dialogBox.style.maxWidth = "700px";
  dialogBox.innerHTML = "";
  // now create the elements of the signIn form
  const container = document.createElement("div");
  container.className = "signIn-container";
  const leftBox = document.createElement("div");
  leftBox.className = "left";
  leftBox.innerHTML += `<img src="./Images/signup.png" />`;
  const rightBox = document.createElement("form");
  rightBox.className = "right";
  // appending the container children
  container.appendChild(leftBox);
  container.appendChild(rightBox);
  // create the element of the rightBox  of the container
  const heading = document.createElement("h2");
  heading.textContent = "SignUp";
  heading.className = "heading";
  // input_box1 content
  const input_box1 = document.createElement("div");
  input_box1.className = "input-box";
  const label1 = document.createElement("label");
  label1.textContent = "Full name";
  const input1 = document.createElement("input");
  input1.placeholder = "Eg. spiderman";
  input_box1.appendChild(label1);
  input_box1.appendChild(input1);

  // input_box2 content
  const input_box2 = document.createElement("div");
  input_box2.className = "input-box";
  const label2 = document.createElement("label");
  label2.textContent = "Email address";
  const input2 = document.createElement("input");
  input2.placeholder = "Eg. spidy@gmail.com";
  input_box2.appendChild(label2);
  input_box2.appendChild(input2);
  input2.type = "email";
  // input_box3 content
  const input_box3 = document.createElement("div");
  input_box3.className = "input-box";
  const label3 = document.createElement("label");
  label3.textContent = "Set password";
  const input3 = document.createElement("input");
  input3.placeholder = "Set your password";
  input_box3.appendChild(label3);
  input_box3.appendChild(input3);
  input3.type = "password";

  const termsPara = document.createElement("p");
  const checkBox = document.createElement("input");
  termsPara.className = "term-and-condition";
  checkBox.type = "checkbox";
  termsPara.appendChild(checkBox);
  termsPara.innerHTML += `By creating the account , you agree to the <span>Terms of Service</span> and <span>conditions</span> and <span>Privacy Policy</span>`;
  // creating the button
  const createAccountBtn = document.createElement("button");
  createAccountBtn.className = "create-account-btn";
  createAccountBtn.textContent = "Create Account";

  SignCloseBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
  // appending rightbox child
  rightBox.appendChild(SignCloseBtn);
  rightBox.appendChild(heading);
  rightBox.appendChild(input_box1);
  rightBox.appendChild(input_box2);
  rightBox.appendChild(input_box3);
  rightBox.appendChild(termsPara);
  rightBox.appendChild(createAccountBtn);
  dialogBox.appendChild(container);
});

SignCloseBtn.addEventListener("click", () => {
  const dialogOverlay = document.querySelector(".dialog-overlay");
  dialogOverlay.classList.add("hidden");
  document.body.style.overflow = "";
});

// code for notes taking feature
// Select DOM elements
const overlay = document.querySelector(".notes-dialog-overlay");
const closeButton = document.getElementById("close");
const addButton = document.getElementById("addBtn");
const boldButton = document.getElementById("boldBtn");
const italicButton = document.getElementById("italicBtn");
const underlineButton = document.getElementById("underlineBtn");
const textArea = document.getElementById("text-area");
const notesList = document.querySelector(".notes ul");
const openButton = document.querySelector("#noteBtn");

// Function to toggle the dialog visibility
function toggleDialog() {
  overlay.classList.toggle("hidden");
}

// Function to add a note
function addNote() {
  const noteText = textArea.innerHTML.trim();

  if (noteText === "") {
    alert("Please enter a note.");
    return;
  }

  const newNote = document.createElement("li");
  newNote.innerHTML = noteText; // Preserve styles (if any) added to text
  let xmark = document.createElement('p');
  xmark.innerHTML = `&times;`
  xmark.id = `Notes-xmark`
  // function for removing the note
  xmark.onclick = function(){
    xmark.parentNode.remove();
  };
  xmark.style.display = `flex`
  xmark.style.justifyContent = `center`
  xmark.style.alignItems = `center`
  xmark.style.fontSize = `1rem`
  xmark.style.height = `1rem`
  xmark.style.width = `1rem`
  xmark.style.backgroundColor = `#dc67ee`
  xmark.style.color = `#fff`
  xmark.style.borderRadius = `50%`
  xmark.style.cursor="pointer"
  newNote.style.display="flex"
  newNote.style.justifyContent="space-between"
  newNote.style.alignItems="center"
  notesList.appendChild(newNote);
  newNote.appendChild(xmark);

  textArea.value = ""; // Clear textarea
  
}

// Function to apply text styles
function applyStyle(command) {
  document.execCommand(command, false, null);
}

// Event listeners
closeButton.addEventListener("click", toggleDialog);
openButton.addEventListener("click", toggleDialog);
addButton.addEventListener("click", addNote);
boldButton.addEventListener("click", () => applyStyle("bold"));
italicButton.addEventListener("click", () => applyStyle("italic"));
underlineButton.addEventListener("click", () => applyStyle("underline"));

// Select the color picker element
const colorPicker = document.getElementById("colorPicker");

// Function to apply color to selected text
function applyColor() {
  const color = colorPicker.value; // Get the selected color
  document.execCommand("foreColor", false, color); // Apply the color to selected text
}

// Event listener for the color picker
colorPicker.addEventListener("input", applyColor);

// code for humburger button
const humburgerBtn = document.querySelector("#humbergerBtn");
const navigation = document.querySelector(".navigation");
const navlinks = document.querySelector(".navs-list");
// close btn
const xmark = document.createElement("div");
navigation.style.position = "relative";
xmark.style.position = "absolute";
xmark.style.top = "10px";
xmark.style.right = "15px";
xmark.innerHTML += `<i class="fa-solid fa-xmark"></i>`;
xmark.style.fontSize = "var(--fs-4)";
xmark.style.cursor = "pointer";
xmark.style.color = "#23527c";
// adding the close btn at the beginning of the navigation
// adding event for humbergerBtn
humburgerBtn.addEventListener("click", () => {
  navigation.style.transform = "translateX(0%)";
  navigation.style.transition =
    "transform 0.3s ease-in-out, opacity 0.3s ease-in-out";
  navigation.style.opacity = "1";
  navigation.style.display = "block";
  navigation.style.boxShadow = "var(--box-shadow)";
  navigation.style.width = "100%";
  navigation.style.maxWidth = "360px";
  navigation.style.borderRadius = "5px";
  navigation.style.backgroundColor = "var(--background-color)";
  navigation.style.backgroundColor = "var(--background-color)";
  navigation.style.zIndex = "1000";
  navigation.style.padding = "1rem";
  navigation.style.position = "fixed";
  navigation.style.right = "0px";
  navigation.style.top = "0px";
  navlinks.style.marginTop = "20px";
  navlinks.style.display = "flex";
  navlinks.style.flexDirection = "column";
  navlinks.style.alignItems = "start";
  navlinks.style.gap = "0.3rem";
  navigation.insertAdjacentElement("afterbegin", xmark);
});

xmark.addEventListener("click", () => {
  navigation.style.transform = "translateX(100%)";
  navigation.style.opacity = "0";
});
window.addEventListener("resize", () => {
  if (window.innerWidth > 700) {
    navigation.style.display = "block";
    navlinks.style.flexDirection = "row";
    navlinks.style.justifyContent = "space-between";
    navlinks.style.alignItems = "center";
    navlinks.style.gap = "20px";
    navlinks.style.gap = "20px";
    navigation.removeChild(xmark);
    navigation.style.zIndex = "0";
    navigation.style.backgroundColor = "var(--grey-color)";
    navigation.style.boxShadow = "none";
    navigation.style.padding = "0px";
    navlinks.style.marginTop = "0px";
    navigation.style.position = "absolute";
  }
  if (window.innerWidth < 700) {
    navigation.style.display = "none";
  }
});

let blogContent = document.querySelector(".blog-content");
const modalContent = document.querySelector(".modal-content");
const modalContainer = document.querySelector(".modal-container");
const closeBtn = document.querySelector(".close");
blogContent.addEventListener("click", (e) => {
  if (e.target.className === "read-more") {
    document.body.style.overflow="hidden";
    // fetch the card title
    const parentNode = e.target.parentNode.parentNode;

    for (let child of parentNode.children) {
      if (child.className === "blog-title") {
        const blogTitle = child.innerHTML;
        // now we get the title we selected the corresponding blog card data and show it in the modal-container
        const selectedCardsData = getSelectedCard(blogTitle);
        // console.log(selectedCardsData);
        // show to card data into the modal-container
        updateModalContent(selectedCardsData);
        modalContainer.style.display = "flex";
      }
    }
  }
});

function getSelectedCard(selectedtitle) {
  for (let card of blogCards) {
    if (card.title === selectedtitle) {
      return card;
    }
  }
}

function updateModalContent(Data) {
  // console.log("update function called");
  modalContent.querySelector('.left-content .author-img').innerHTML=`<img src=${Data.authorImg} />`
  modalContent.querySelector('.left-content .author-name').textContent =Data.author
  modalContent.querySelector(".right-content img").src = `${Data.image}`;
  modalContent.querySelector(".right-content h2").textContent =`Title :-${Data.title}` ;
  const description = modalContent.querySelector(".right-content p");
  description.textContent =Data.description;
}
closeBtn.addEventListener("click", () => {
  modalContainer.style.display = "none";
});


// code for new post btn

const newpostBtn= document.querySelector('.newpost-btn');
const newpostDialogbox=document.querySelector('.new-post-dialog-overlay')
const post_author = document.querySelector('.new-post-dialog-overlay #author-name')
const postTitle= document.querySelector('.new-post-dialog-overlay #title')
const postDesc= document.querySelector('.new-post-dialog-overlay #Description')
const file_upload = document.querySelectorAll('.new-post-dialog-overlay .file-upload')
const postCatergory = document.querySelector('.catergory-select')
const cancelBtn = document.getElementById('cancelBtn')
newpostBtn.addEventListener('click',()=>{
  newpostDialogbox.classList.remove('hidden')
})

const postBtn=document.querySelector('.new-post-dialog-overlay #postBtn')
postBtn.addEventListener('click',()=>{
  const now = new Date(); // store the post date
  const post =  {
    id: blogCards.length,
    image: URL.createObjectURL(file_upload[1].files[0]),
    title: postTitle.value,
    publishedDate: `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()}`,
    description: postDesc.value, 
    author: post_author.value,
    authorImg:URL.createObjectURL(file_upload[0].files[0]) ,
    category: postCatergory.value,
  }
  blogCards.push(post)
  const Card=createCard(post);
  if(post.category==="Culture"){
   document.querySelector(".blog-content").appendChild(Card);
  }
  newpostDialogbox.classList.add('hidden')
})
cancelBtn.addEventListener('click',()=>{
  newpostDialogbox.classList.add('hidden')
})

function  createCard(post){

  const Card = document.createElement("div");
  Card.className = "blog-card";
  const cardContent = document.createElement("div");
  cardContent.className = "content";
  const blogImg = document.createElement("div");
  blogImg.className = "blog-img";
  const blogTitle = document.createElement("div");
  blogTitle.className = "blog-title";
  const blogDetails = document.createElement("div");
  blogDetails.className = "blog-details";
  const blogCategory = document.createElement("div");
  blogCategory.className = "blog-category";
  const publishDate = document.createElement("div");
  publishDate.className = "published-date";
  const authorInfo = document.createElement("div");
  authorInfo.className = "author-info";
  // insert the information in elements
  const img = document.createElement("img");
  img.src = `${post.image}`;
  blogImg.appendChild(img);
  blogDetails.appendChild(blogCategory);
  blogDetails.appendChild(publishDate);
  blogTitle.textContent = post.title;
  blogCategory.innerHTML = `<p>${post.category}</p>`;
  publishDate.innerHTML = `<p>${post.publishedDate}</p>`;
  const authorImg = document.createElement("div");
  authorImg.className = "author-img";
  authorImg.innerHTML += `<img src="${post.authorImg}">`;
  const authorName = document.createElement("div");
  authorName.className = "author-name";
  authorName.textContent = post.author;
  authorInfo.appendChild(authorImg);
  authorInfo.appendChild(authorName);
  Card.appendChild(cardContent);
  // cardContent.innerHTMl+=blogImg+blogTitle+blogDetails+authorInfo;
  cardContent.appendChild(blogImg);
  cardContent.appendChild(blogTitle);
  cardContent.appendChild(blogDetails);
  // cardContent.appendChild(authorInfo);
  // bottom div container author infor and readme
  const bottom_div = document.createElement("div");
  bottom_div.className = "bottom-div";
  bottom_div.appendChild(authorInfo);
  const readmore = document.createElement("span");
  readmore.innerHTML = "Read More";
  readmore.className = "read-more";

  bottom_div.appendChild(readmore);
  cardContent.appendChild(bottom_div);
  return Card;
  

}
