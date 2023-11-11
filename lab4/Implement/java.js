function emailValidate(email){
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
function phoneValidate(phone){
    return /(84|0[3|5|7|8|9])+([0-9]{8})\b/.test(phone);
}
function save() {
    let mssv = document.getElementById('mssv').value;
    let fullname = document.getElementById('fullname').value;
    let date = document.getElementById('date').value;
    let address = document.getElementById('address').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let cccd = document.getElementById('cccd').value;
    let gender ='';

    if(document.getElementById('male').checked){
        gender = document.getElementById('male').value;
    } else if(document.getElementById('female').checked){
        gender = document.getElementById('female').value;
    } else if(document.getElementById('other').checked){
        gender = document.getElementById('other').value;
    }

    if(_.isEmpty(mssv)){
        document.getElementById('mssv-error').innerHTML ='*Vui lòng nhập mssv';
    } else if(isNaN(mssv)){
        document.getElementById('mssv-error').innerHTML ='*Vui lòng nhập đúng mssv';
    } else{
        document.getElementById('mssv-error').innerHTML = '';
    }

    if(_.isEmpty(fullname)){
        document.getElementById('fullname-error').innerHTML ='*Vui lòng nhập họ và tên';
    } else if(fullname.trim().length <6){
        fullname ='';
        document.getElementById('fullname-error').innerHTML ='*Họ và tên ít nhất 6 ký tự';
    } else if(fullname.trim().length >30){
        fullname ='';
    document.getElementById('fullname-error').innerHTML ='*Họ và tên không được lớn hơn 30 ký tự';
    } else{
        document.getElementById('fullname-error').innerHTML = '';
    }


    if(_.isEmpty(date)){
        document.getElementById('date-error').innerHTML ='*Vui lòng nhập ngày tháng năm sinh';
    }else{
        document.getElementById('date-error').innerHTML ='';
    }


    if(_.isEmpty(address)){
        document.getElementById('address-error').innerHTML ='*Vui lòng nhập địa chỉ';
    }else{
        document.getElementById('address-error').innerHTML ='';
    }


    if(_.isEmpty(email)){
        document.getElementById('email-error').innerHTML ='*Vui lòng nhập email';
    }else if(!emailValidate(email)){
        email='';
        document.getElementById('email-error').innerHTML ='*Email không đúng định dạng';
    } else{
        document.getElementById('email-error').innerHTML ='';
    }


    if(_.isEmpty(phone)){
        document.getElementById('phone-error').innerHTML ='*Vui lòng nhập số điện thoại';
    } else if(!phoneValidate(phone)){
        phone='';
        document.getElementById('phone-error').innerHTML ='*Vui lòng nhập đúng số điện thoại';
    } else if(isNaN(phone)){
        phone='';
        document.getElementById('phone-error').innerHTML ='*Vui lòng nhập đúng số điện thoại';
    } else{
        document.getElementById('phone-error').innerHTML ='';
    }


    if(_.isEmpty(cccd)){
        document.getElementById('cccd-error').innerHTML ='*Vui lòng nhập mã CCCD';
    } else if(isNaN(cccd)){
        cccd='';
        document.getElementById('cccd-error').innerHTML ='*Vui lòng nhập đúng mã CCCD';
    } else{
        document.getElementById('cccd-error').innerHTML ='';
    }

    if(mssv && fullname && address && email && phone && cccd && gender){
        // lưu vào trong danh sách sinh viên

        let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [] ;

        students.push({
            mssv: mssv,
            fullname: fullname,
            address: address,
            email: email,
            phone: phone,
            cccd: cccd,
            gender: gender,
        });

        localStorage.setItem('students', JSON.stringify(students));

        this.renderStudentList();
    }
}
function renderStudentList(){
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [] ;
    
    // if(students.length ===0) {
    //     document.getElementById('list-student').style.display = 'none';
    //     return false;
    // } 
        document.getElementById('list-student').style.display = 'block';    
    


    let tableContent = 
        `<tr>
            <td>#</td>
            <td>MSSV</td>
            <td>Họ và Tên</td>
            <td>Địa chỉ</td>
            <td>Email</td>
            <td>Điện thoại</td>
            <td>CCCD</td>
            <td>Giới tính</td>
            <td></td>
        </tr>`;

    students.forEach((student,index)=>{
        let studentID = index;
        index++;
        //let maSoSinhVien = parseInt(student.mssv) + index;

        tableContent += 
        `<tr>
            <td>${index}</td>
            <td>${student.mssv}</td>
            <td>${student.fullname}</td>
            <td>${student.address}</td>
            <td>${student.email}</td>
            <td>${student.phone}</td>
            <td>${student.cccd}</td>
            <td>${student.gender}</td>
            <td>
                <a href='#' onclick ='editStudent(${studentID})'>Edit</a> | <a href='#' onclick ='deleteStudent(${studentID})'>Delete</a>
            </td>
        </tr>`;
    })
    document.getElementById('grid-students').innerHTML = tableContent; 
}
function deleteStudent(id){
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [] ;
    students.splice(id,1);
   
    localStorage.setItem('students', JSON.stringify(students));
    renderStudentList();
}
function editStudent(id){
    let students = localStorage.getItem('students') ? JSON.parse(localStorage.getItem('students')) : [] ;
    

    localStorage.setItem('students', JSON.stringify(students));
    renderStudentList();
}
