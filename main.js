name_of_arr = [];

function mmm(){ 
    dis_stu_arr = [];
    for (var q = 1; q <= 4; q++)
    {

    
    var nme_1 = document.getElementById("name_of_student_"+q).value;
    console.log(nme_1);
    name_of_arr.push(nme_1);

}


    console.log(name_of_arr);
    var length_stud_arr = name_of_arr.length;
    console.log(length_stud_arr);

    for (var k = 0; k < length_stud_arr; k++)
    {
        dis_stu_arr.push("<h4> NAME - " + name_of_arr[k] + "</h4>");
        
        console.log("inside the for "+ name_of_arr[k] + "is" + dis_stu_arr );
    }
    console.log("outside the for "+ name_of_arr[k] + "is" + dis_stu_arr );

    document.getElementById("dis_name_with_commas").innerHTML = dis_stu_arr;
    var remove_commas = dis_stu_arr.join(" ");
    console.log(remove_commas);

    document.getElementById("dis_name_without_commas").innerHTML = remove_commas;

    document.getElementById("Submit_b").style.display = "none";

    document.getElementById("sort_butt").style.display = "inline-block";
}

function sorting(){
    name_of_arr.sort();
    console.log(name_of_arr);
    var dis_stu_arr_sort = [];
    document.getElementById("dis_name_without_commas").innerHTML = name_of_arr;

    var length_stud_arr = name_of_arr.length;
    console.log(length_stud_arr);

    for (var k = 0; k < length_stud_arr; k++)
    {
        dis_stu_arr_sort.push("<h4> NAME - " + name_of_arr[k] + "</h4>");
        
        console.log("inside the for "+ dis_stu_arr_sort[k] + "is" +  dis_stu_arr_sort);
    }
    console.log("outside the for "+ dis_stu_arr_sort[k] + "is" + dis_stu_arr_sort );

    document.getElementById("dis_name_with_commas").innerHTML = dis_stu_arr_sort;
    var remove_commas = dis_stu_arr_sort.join(" ");
    console.log(remove_commas);

    document.getElementById("dis_name_without_commas").innerHTML = remove_commas;

}















































































































