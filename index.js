// bai 1
function timSoNguyenDuongNhoNhat() 
{
    var tong = 0;
    var n = 0;
    // var minNumber = document.getElementById("minNumber").value;
    while (tong < 10000){
        n++;
        tong += n;
    }
    var minNumber = n;
    alert("Số nhỏ nhất để tổng từ 1 đến nó lớn hơn 10000 là: " + minNumber);
}

//bai 2
function tinhTong(){
    var numberx = document.getElementById("numberx").value;
    var numbern = document.getElementById("numbern").value;
    var T = 1;
    var sN = 0;
    for(var i = 1; i <= numbern; i++){
        T *= numberx;
        sN += T;
    }
    var ketQua2 = sN;
    alert("Tổng là:" + ketQua2);
}

//bai 3
function tinhGiaiThua(){
    var number = document.getElementById("number").value;
    var result = 1;
    for(let i = 1; i <= number; i++){
        result *= i;
    }
    var ketQua3 = result;
    alert("Giai thừa của số vừa nhập là: " + ketQua3);
}


//bai 4
function change_background()
{
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++){
        // Vị trí chẵn => màu đỏ
        if ((i+1) % 2 == 0){
            divs[i].style.background = "red";
        }
        else { // Vị trí lẽ => màu xanh
            divs[i].style.background = "blue";
        }
    }
}