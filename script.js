//Hide and unhide

var a;
function showHide(){
    var checkbox = document.getElementById("chk");
    //var hiddeninputs = document.getElementsByClassName("hidden");
    if(checkbox.checked){
        document.getElementById("divBlog").style.display="inline"
        document.getElementById("lblBlog").style.display="inline"

        document.getElementById("lblTit").style.display="inline";
        document.getElementById("txtTit").style.display="inline";

        document.getElementById("lblArt").style.display="inline";
        document.getElementById("txtArt").style.display="inline";

        document.getElementById("img1").style.display="inline";

        document.getElementById("btnSub").style.display="inline";
        document.getElementById("btnRes").style.display="inline";
    }else{
        document.getElementById("divBlog").style.display="none"
        document.getElementById("lblBlog").style.display="none"

        document.getElementById("lblTit").style.display="none";
        document.getElementById("txtTit").style.display="none";

        document.getElementById("lblArt").style.display="none";
        document.getElementById("txtArt").style.display="none";

        document.getElementById("img1").style.display="none";

        document.getElementById("btnSub").style.display="none";
        document.getElementById("btnRes").style.display="none";
    }
}        

//select image on click
// let img = document.querySelector('#img1');
// img.addEventListener('click', () =>{
//     img.src = 'images/1.jpg';
// })
function showImage(){
    var img = document.getElementById("img1")
    var random = Math.floor(Math.random() * 8) +1;

    if(random>5){
        img.src = 'images/select-picture-512.png';
    }else {
    //document.getElementById("imgsrc").innerHTML='images/'+random+'.jpg'
        img.src = 'images/'+random+'.jpg';
    }

}

function addPost(){
     var blogPost = document.getElementById("blogOut")
     var title = document.getElementById("txtTit").value;
     var article = document.getElementById("txtArt").value;
     var image = document.getElementById("img1").src;

     var lB1 = "";
     var lB2 = "";
     var lB3 = "";
     var lB4 = "";

    //  var pNode = document.createElement("p");
    //  pNode.setAttribute("class","abc")

    //  var pText = document.createTextNode(title);
    //  var pText1 = document.createTextNode(article);
    //  var pImage = document.createTextNode(image);

    //  pNode.appendChild(pText);
    //  pNode.appendChild(lineBreak);
    //  pNode.appendChild(lineBreak);
    //  pNode.appendChild(pText1);

    //  document.getElementById("blogOut").appendChild(pNode);

    var lblTitle = document.createElement("label");
    var lblArt = document.createElement("label")
    var img1 = document.createElement("img")

    lblTitle = document.createTextNode(title);
    blogPost.appendChild(lblTitle);
    lB1 = document.createElement("br");
    blogPost.appendChild(lB1);

    lblArt = document.createTextNode(article);
    blogPost.appendChild(lblArt)
    lB2 = document.createElement("br");
    blogPost.appendChild(lB2);

    // img1.setAttribute('src','images/1.jpg');
    img1.setAttribute('src',image)
    img1.setAttribute('width', '300px')
    blogPost.appendChild(img1)
    lB3 = document.createElement("br");
    blogPost.appendChild(lB3);
    lB3 = document.createElement("br");
    blogPost.appendChild(lB3);
    lB3 = document.createElement("br");
    blogPost.appendChild(lB3);

    //clear text value and set image to default
    document.getElementById("txtTit").value="";
    document.getElementById("txtArt").value="";
    document.getElementById("img1").src = 'images/select-picture-512.png';

}