window.onload = function(){
    //get HTML elements
    let coursesList = document.querySelector('#coursesList')
    let studentGradeInp = document.querySelector('#studentGradeInp')
    let addGradeBtn = document.querySelector('#addGradeBtn')
    let gradeListElement = document.querySelector('#gradeListElement')
    let SaveStudentBtn = document.querySelector('#saveStudentBtn')
    let studentNameInp = document.querySelector('#studentNameInp')
    let body = document.querySelector('body')
    
    // declare empty array to save grade objects
    let gradeArr = []
    let studentsArr = []

    addGradeBtn.addEventListener('click',function (e){
        //console.log(coursesList.selectedIndex)
        //console.log(coursesList.options[coursesList.selectedIndex].value)
        let selectedCourse= coursesList.options[coursesList.selectedIndex].value
        console.log(selectedCourse);
        
        let grade = studentGradeInp.value
        if(selectedCourse !== '' && grade.trim() !== ''){
            let listItem = document.createElement('li')
            listItem.innerText = selectedCourse + ': ' + grade + '%'
            gradeListElement.append(listItem)
            studentGradeInp.value = ''

            // create  grade object to push it in gradeArr
            let gradeObj = {}
            if(selectedCourse == 'Math'){
                gradeObj.math = grade
            }
            if(selectedCourse == 'English'){
                gradeObj.english= grade
            }
            if(selectedCourse == 'Computer science1'){
                gradeObj.Computer_science1 = grade
            }
            if(selectedCourse == 'java'){
                gradeObj.java = grade
             }

             //gradeObj[selectedCourse.replace(/ /g, "_")] = grade
             gradeArr.push(gradeObj)
             console.log(gradeArr)


        }
    })

    SaveStudentBtn.addEventListener('click', function (e){

        if(studentNameInp.value.trim()){
            let studentObj = {}
            studentObj.name = studentNameInp.value
            studentObj.grades = gradeArr
            studentsArr.push(studentObj)
            localStorage.setItem('student', JSON.stringify(studentsArr))
            gradeListElement.innerHTML = ''
            studentGradeInp.value = ''
            studentNameInp.value = ''
        }
    })
    //my is here to bring data from local storage and render
    let storageData = localStorage.getItem('student')
    console.log(storageData)
    if(storageData){
        let dataObj = JSON.parse(storageData)
        console.log(dataObj)

        //create container div and add it to the body
        let containerDiv = document.createElement('div')
        body.append(containerDiv)
        dataObj.forEach(element => {
            console.log(element)
            let nameH3 = document.createElement('h3')
            nameH3.innerText = element.name
            containerDiv.append(nameH3)
            element.grades.forEach(grade => {
                console.log(Object.keys(grade))


            //create ul for line grades and append it to container
            let gradeUl = document.createElement('ul')
            containerDiv.append(gradeUl)
            Object.keys(grade).forEach(key => {
                console.log(key)
                console.log(grade[key])
                let gradeLi = document.createElement('li')
                gradeLi.innerText = key + ": " + grade[key] + "%"
                gradeUl.append(gradeLi)
            })
            })
        });
    }
    
}

//Homework
//first
// show the student and its grade at the end of the save button after clickin save

//second
//load the students 



