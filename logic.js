const description = document.getElementById("myTextarea");
console.log(description);
localStorage.setItem("description", "descriptionsdfsfsdfsfsdfsfdsfdsfsfdfsdf");
localStorage.getItem("description");

function handleTextAreaChange(){
    console.log("SSS --->", description);
}
console.log(localStorage);

