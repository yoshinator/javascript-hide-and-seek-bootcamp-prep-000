
function getFirstSelector(selector){
  return document.querySelector(selector);
}

//appends the .target class to the end of #app effectively pulling it out of #nested
function nestedTarget(){
  getFirstSelector('#app').appendChild(getFirstSelector('.target'));
}

// function increaseRankBy(n){
// var ul = document.getElementsByClassName('ranked-list');
// var list1 = ul[0].getElementsByTagName('li');
// var list2 = ul[1].getElementsByTagName('li');
// for (var i = 0; i < list1.length; i++){
//   list1[i].innerText = parseInt(list1[i].innerText)+n;
// }
// for (i = 0; i < list2.length; i++){
//   list2[i].innerText = parseInt(list2[i].innerText)+n;
// }
// } 


function increaseRankBy(n){
  // Select all the li in ul.ranked-list 
    const rankedLis = document.querySelectorAll('ul.ranked-list li');
  // Increase the ranks by n in rankedLis
  for (let i = 0; i < rankedLis.length; i++){
   rankedLis[i].innerHTML += n
  }
}

//removes the deepest child in #grand-node and appends it to #app
function deepestChild(){
var grandNode = document.getElementById('grand-node')
var allDivs = grandNode.querySelectorAll('div')
var theDeepestDiv = allDivs[allDivs.length-1]
document.getElementById('app').appendChild(theDeepestDiv)
}