// var allLinks = document.links;
var onClickLink = function(e) {
    // handle event here
    //alert(window.location.href)
    let url1 = window.location.href
    console.log(url1);
    //axios.get(`http://localhost:3000/api/find_url?link:${url1}`);
};

document.onclick(onClickLink())

// // Bind the event handler to each link individually
// for (var i = 0, n = allLinks.length; i < n; i++) {
//     //allLinks[i].addEventListener('click', function (event) {});
//     allLinks[i].onclick = function () {
//         alert(allLinks[i].href)            
//     };
// }

// var body = document.getElementsByTagName('body')[0];

// body.addEventListener('click', function(e){ 
//     if(e.target.nodeName === "a"){
//         var href = e.target.getAttribute('href'),
//             selfhost = window.location.hostname;
//         if(href.indexOf(selfhost) !== -1){
//             alert("TEST")
//         } else {
//             alert("TEST")
//         }
//     }
// }, false);


// window.onbeforeunload = function () {
//     console.log(window.location.href) 
//     return "";
//  };