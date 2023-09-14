//main variable

let thrInput = document.querySelector(".get-repos input"),
  getButton = document.querySelector(".get-Button"),
  reposData = document.querySelector(".show-data");

getButton.onclick = function () {
  getRepos();
};

//create function get repos

function getRepos() {
  if (thrInput.value == "") {
    // swal("the input value can be not empty", "", "error");

    reposData.innerHTML = "<span>the input value can be not empty</span>";
  } else {
    fetch(`https://api.github.com/users/${thrInput.value}/repos`)
      .then((res) => res.json())

      .then((data) => {
        //empty the container
        reposData.innerHTML = "";

        //loop on data
        data.forEach((da) => {
          //create name dive element

          let mainDiv = document.createElement("div");

          //create repo text
          let repoNamText = document.createTextNode(da.name);

          //append text to main dive
          mainDiv.appendChild(repoNamText);

          //create repo url link
           let theUrl=document.createElement("a")

           //create url text
           let theUrlText=document.createTextNode("visit")

           //append text to tag link
           theUrl.appendChild(theUrlText)

           //add hyperlink to visit
           theUrl.href=`https://github.com/${thrInput.value}/${da.name}`
        
           //set target link
           theUrl.setAttribute('target', '_blank');

             //add link to main dive
             mainDiv.appendChild(theUrl)

           //create start count span
            let starSpan=document.createElement("span")

            //create text to start span
            let TextStar=document.createTextNode(`start ${da.stargazers_count}`)

            //add text to span
            starSpan.appendChild(TextStar)

            //add span to main div
            mainDiv.appendChild(starSpan)

            //ADD class to min div
            mainDiv.className="repo-box"

          //append main dive to container
          reposData.appendChild(mainDiv);
        });
      });
  }
}
