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


  
 
 
  
 
  
 