

    var students = [
        
             { rollNumber: 1001, name: "Ali Ahmed", passingYear: 2017, part: "HSC Part 2", remarks: "Pass", percentage: 92.5, grade: "A+" },
             { rollNumber: 1008, name: "Mariam Shah", passingYear: 2017, part: "HSC Part 2", remarks: "Pass", percentage: 75.5, grade: "B" },
             { rollNumber: 1016, name: "Farhan Malik", passingYear: 2017, part: "HSC Part 2", remarks: "Pass", percentage: 72.3, grade: "B" },
             { rollNumber: 1024, name: "Saad Awan", passingYear: 2017, part: "HSC Part 2", remarks: "Fail", percentage: 45.3, grade: "F" }
           ,
          
             { rollNumber: 1002, name: "Sara Khan", passingYear: 2018, part: "HSC Part 2", remarks: "Pass", percentage: 85.4, grade: "A" },
             { rollNumber: 1009, name: "Rashid Farooq", passingYear: 2018, part: "HSC Part 2", remarks: "Fail", percentage: 40.0, grade: "F" },
             { rollNumber: 1017, name: "Irfan Ahmed", passingYear: 2018, part: "HSC Part 2", remarks: "Pass", percentage: 68.0, grade: "C" },
             { rollNumber: 1025, name: "Muzammil Khan", passingYear: 2018, part: "HSC Part 1", remarks: "Pass", percentage: 81.2, grade: "A" }
           ,
           
             { rollNumber: 1003, name: "Umar Siddiqui", passingYear: 2019, part: "HSC Part 2", remarks: "Pass", percentage: 78.6, grade: "B" },
             { rollNumber: 1010, name: "Fatima Khalid", passingYear: 2019, part: "HSC Part 2", remarks: "Pass", percentage: 95.2, grade: "A+" },
             { rollNumber: 1018, name: "Sameer Iqbal", passingYear: 2019, part: "HSC Part 1", remarks: "Fail", percentage: 32.5, grade: "F" },
             { rollNumber: 1026, name: "Rabia Shah", passingYear: 2019, part: "HSC Part 2", remarks: "Pass", percentage: 87.6, grade: "A+" }
           ,
          
             { rollNumber: 1004, name: "Ayesha Farooq", passingYear: 2020, part: "HSC Part 2", remarks: "Pass", percentage: 60.3, grade: "C" },
             { rollNumber: 1011, name: "Omar Qureshi", passingYear: 2020, part: "HSC Part 1", remarks: "Pass", percentage: 65.7, grade: "C" },
             { rollNumber: 1019, name: "Tania Ali", passingYear: 2020, part: "HSC Part 2", remarks: "Pass", percentage: 89.3, grade: "A+" },
             { rollNumber: 1027, name: "Usman Tariq", passingYear: 2020, part: "HSC Part 1", remarks: "Pass", percentage: 64.5, grade: "C" }
        ,
          
             { rollNumber: 1005, name: "Hassan Ali", passingYear: 2021, part: "HSC Part 2", remarks: "Fail", percentage: 34.0, grade: "F" },
             { rollNumber: 1012, name: "Adeel Haider", passingYear: 2021, part: "HSC Part 1", remarks: "Pass", percentage: 82.1, grade: "A" },
             { rollNumber: 1020, name: "Adnan Baig", passingYear: 2021, part: "HSC Part 2", remarks: "Pass", percentage: 80.4, grade: "A" },
             { rollNumber: 1028, name: "Laiba Hussain", passingYear: 2021, part: "HSC Part 2", remarks: "Fail", percentage: 50.2, grade: "F" }
           ,
           
             { rollNumber: 1006, name: "Zainab Iqbal", passingYear: 2022, part: "HSC Part 2", remarks: "Pass", percentage: 88.9, grade: "A+" },
             { rollNumber: 1013, name: "Saba Noor", passingYear: 2022, part: "HSC Part 1", remarks: "Fail", percentage: 48.9, grade: "F" },
             { rollNumber: 1021, name: "Hina Yousuf", passingYear: 2022, part: "HSC Part 2", remarks: "Pass", percentage: 90.5, grade: "A+" },
             { rollNumber: 1029, name: "Sami Ullah", passingYear: 2022, part: "HSC Part 1", remarks: "Pass", percentage: 73.6, grade: "B" }
           ,
          
             { rollNumber: 1007, name: "Bilal Khan", passingYear: 2023, part: "HSC Part 2", remarks: "Pass", percentage: 70.1, grade: "B" },
             { rollNumber: 1014, name: "Hamza Raza", passingYear: 2023, part: "HSC Part 2", remarks: "Pass", percentage: 67.5, grade: "C" },
             { rollNumber: 1022, name: "Kashan Rizvi", passingYear: 2023, part: "HSC Part 1", remarks: "Pass", percentage: 77.2, grade: "B" },
             { rollNumber: 1030, name: "Fiza Hasan", passingYear: 2023, part: "HSC Part 2", remarks: "Pass", percentage: 92.1, grade: "A+" }
           ,
          
             { rollNumber: 1015, name: "Nida Sheikh", passingYear: 2024, part: "HSC Part 2", remarks: "Pass", percentage: 91.8, grade: "A+" },
             { rollNumber: 1023, name: "Zoya Akram", passingYear: 2024, part: "HSC Part 2", remarks: "Pass", percentage: 69.8, grade: "C" }
           
       ];
       
students.forEach(e => {
    localStorage.setItem(e.rollNumber,JSON.stringify(e))
});


function result(){
    var rollno = document.getElementById("rollno").value
    var year = document.getElementById("year").value
    var hsc=document.getElementById("hsc").value
var info=localStorage.getItem(rollno)

if(info){
    var parseInfo=JSON.parse(info)
if(rollno==parseInfo.rollNumber && year == parseInfo.passingYear && hsc==parseInfo.part){
    document.querySelector(".result").style.opacity=1
document.querySelector(".student-name").innerHTML=parseInfo.name
document.querySelector(".rollno").innerHTML=parseInfo.rollNumber
document.querySelector(".passingyear").innerHTML=parseInfo.passingYear
document.querySelector(".remarks").innerHTML=parseInfo.remarks
document.querySelector(".percentage").innerHTML=`${parseInfo.percentage}%`
document.querySelector(".grade").innerHTML=parseInfo.grade
document.getElementById("alert").style.display="none"

}
else{
    document.getElementById("alert").style.display="block"
}
}
}
