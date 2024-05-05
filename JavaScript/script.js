console.log("Hello World!");
var Images = [
  "Images/Advanced/Screenshot(63).png",
  "Images/Advanced/Screenshot(64).png",
  "Images/Advanced/Screenshot(65).png",
  "Images/Advanced/Screenshot(66).png",
  "Images/Advanced/Screenshot(67).png",
  "Images/Advanced/Screenshot(68).png",
  "Images/Advanced/Screenshot(69).png",
  "Images/Advanced/Screenshot(70).png",
  '../Images/Advanced/Screenshot(66).png'
];
var Leetcode = [
  'Images/Leetcode/leetcode_profile.png',
  'Images/Leetcode/Screenshot (95).png',
  'Images/Leetcode/Screenshot (97).png',
  'Images/Leetcode/Screenshot (103).png',
  'Images/Leetcode/Screenshot (104).png'
]
var Car_shiping = [
  'Images/Car shoping project/Screenshot (107).png',
  'Images/Car shoping project/Screenshot (108).png',
  'Images/Car shoping project/Screenshot (109).png',
  'Images/Car shoping project/Screenshot (109).png',
  'Images/Car shoping project/Screenshot (110).png',
  'Images/Car shoping project/Screenshot (111).png',
  'Images/Car shoping project/Screenshot (106).png',

]

function getRandomInt(n) {
  return Math.floor(Math.random() * n);
}
function changeImage(Images, photoId) {
  var imageElement = document.getElementById(photoId);
  var currentImageSrc = imageElement.src;
  currentImageSrc = currentImageSrc.substring(3, currentImageSrc.length);
  var currentIndex = getRandomInt(Images.length); 
  console.log('current index',currentIndex)
  console.log('length',Images.length)
  imageElement.src ='../' + Images[currentIndex];
}
// spiner
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };

  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible'); 
          }
      });
  }, observerOptions);

  document.querySelectorAll('.A').forEach(section => {
      observer.observe(section);
  });
});
/*to the second */
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible1');
          } else {
              entry.target.classList.remove('visible1');
          }
      });
  }, observerOptions);

  document.querySelectorAll('.B').forEach(section => {
      observer.observe(section);
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5
  };
  const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible2');
          } else {
              entry.target.classList.remove('visible2');
          }
      });
  }, observerOptions);

  document.querySelectorAll('.C').forEach(section => {
      observer.observe(section);
  });
});
/**to the see more option */
function toggleProjectInfo(para,button) {
  const projectInfo = document.getElementById(para);
  const showMoreButton = document.getElementById(button);

  if (projectInfo.classList.contains('expanded')) {
      projectInfo.classList.remove('expanded');
      showMoreButton.textContent = 'Show More';
  } else {
      projectInfo.classList.add('expanded');
      showMoreButton.textContent = 'Show Less';
  }
}

/*to change the themes from black to white */
function changeToWhite() {
    let body = document.body;
    let texts = document.querySelectorAll(".texts");
    texts.forEach(function(text) {
        text.style.color = 'black';
    });
    body.style.backgroundColor = 'white';
}

function changeToBlack() {
    let body = document.body;
    let texts = document.querySelectorAll(".texts");
    let black_btn = document.getElementById("black");
    black_btn.style.boxShadow = "white 0px 5px 15px";
    texts.forEach(function(text) {
        text.style.color = 'white';
    });
    body.style.backgroundColor = 'black';
}

document.getElementById("white").onclick = function() {
    changeToWhite()
};
document.getElementById("black").onclick = function() {
    changeToBlack()
};






  
 
 
  
 
  
 