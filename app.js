let list=[];

const pages = [
    {
        page:"Grade View",
        navigate: gradePage
    },
    {
        page:"Grade Submit",
        navigate: submitPage
    },
]

function navButton(pg, pr, nv) {    //navButton is taking in 2 arguments
    let button = document.createElement("button");
    button.innerHTML=pg;
    button.addEventListener("click", function(){
        document.body.querySelector(".wrapper").innerHTML="";
        nv();
    })
    pr.appendChild(button);
}

function navigation(){
    let nav = document.createElement("nav");
    let wrapper=document.createElement("div");
    wrapper.classList.add("wrapper");
    nav.style.height="80px";
    nav.style.backgroundColor="blue";
    for (obj of pages) {                            //for every item within the array
        navButton(obj.page, nav, obj.navigate);
    }
    document.body.appendChild(nav);
    document.body.appendChild(wrapper);
}

function gradePage(){
    let gradePage = document.createElement("h1");
    gradePage.innerHTML="Grade View Page";
    document.body.querySelector(".wrapper").appendChild(gradePage); //when calling classes, must lead with a .name


    //list element
    let listEle = document.createElement("div");

    //render list
    listEle.innerHTML="";

    for(let i=0; i<list.length;i++){
        let ele = document.createElement("div");
        ele.innerHTML=list[i];
        listEle.appendChild(ele);
        document.body.appendChild(listEle);
        document.body.querySelector(".wrapper").appendChild(ele); //when calling classes, must lead with a .name
    }
}

function submitPage(){
    let submit = document.createElement("div");
    let submitHead = document.createElement("h1");
    let submitStudentEle = document.createElement("input");
    let submitGradeEle = document.createElement("input");
    let submitMessage = document.createElement("h3");
    let submitButton = document.createElement("button");
    submitStudentEle.placeholder="Student Name...";
    submitGradeEle.placeholder="Grade...";
    submitHead.innerHTML="Submit Grade Page";
    submitButton.innerHTML="Submit Grade."
    submit.appendChild(submitHead);
    submit.appendChild(submitStudentEle);
    submit.appendChild(submitGradeEle);
    submit.appendChild(submitMessage);
    submit.appendChild(submitButton);
    document.body.querySelector(".wrapper").appendChild(submit); //when calling classes, must lead with a .name
    document.body.querySelector(".wrapper").appendChild(submitHead); //when calling classes, must lead with a .name
    document.body.querySelector(".wrapper").appendChild(submitStudentEle); //when calling classes, must lead with a .name
    document.body.querySelector(".wrapper").appendChild(submitGradeEle); //when calling classes, must lead with a .name
    document.body.querySelector(".wrapper").appendChild(submitMessage); //when calling classes, must lead with a .name
    document.body.querySelector(".wrapper").appendChild(submitButton); //when calling classes, must lead with a .name
    submitButton.addEventListener("click",function() {

        let stringStudent = submitStudentEle.toString();
        let stringLength = stringStudent.length;

        submitMessage.innerHTML = ""

        if (submitStudentEle.value === "") {
            submitMessage.innerHTML = "You have not entered a student name."
        }
        else if (submitGradeEle.value === "") {
            submitMessage.innerHTML = "You have not entered a grade."
        }
        else {
            if (isNaN(submitGradeEle.value)) {
                submitMessage.innerHTML = "The grade must be a number value."
            }
            else if (submitGradeEle.value > 100 || submitGradeEle.value < 0) {
                submitMessage.innerHTML = "The grade value must be between 0-100."
            }
            else {
                submitMessage.innerHTML = "Grade has been saved successfully.";
                list.push("Student Name: "+submitStudentEle.value+" | Grade: "+submitGradeEle.value+"%");
                document.body.querySelector(".wrapper").innerHTML="";
                gradePage();
            }
        }
    })
    document.body.appendChild(submit);
}

//user
let inputEle = document.createElement("input");
inputEle.placeholder="Username...";

//password
let inputElePass = document.createElement("input");
inputElePass.placeholder="Password...";
inputElePass.setAttribute("type","password"); //doesn't allow people to see password or copy password

//message element
let messageEle = document.createElement("h3");

//button element
let button = document.createElement("button");
button.innerHTML="Login";

//checks for correct values
button.addEventListener("click",function(){
    if(inputEle.value==="cool"&&inputElePass.value==="password"){

        messageEle.innerHTML="Logged in successfully.";

        inputEle.style.display='none';
        button.style.display='none';
        inputElePass.style.display='none';

        setTimeout(function(){
            messageEle.style.display='none';
            navigation();
            gradePage();
        }, 2000);
    }
    else {
        if (inputEle.value!=="cool") {
            messageEle.innerHTML="Incorrect username.";
        }
        else {
            messageEle.innerHTML="Incorrect password.";
        }
    }

})

document.body.appendChild(inputEle);
document.body.appendChild(inputElePass);
document.body.appendChild(messageEle);
document.body.appendChild(button);