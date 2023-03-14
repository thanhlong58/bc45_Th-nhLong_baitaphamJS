//b1

document.getElementById('btnTinhDiem').onclick = function () {
    //input 
    var diemMon1 = +document.getElementById('diem-1').value;
    var diemMon2 = +document.getElementById('diem-2').value;
    var diemMon3 = +document.getElementById('diem-3').value;

    var khuVuc = +document.getElementById('khu-vuc').value;


    var doiTuong = +document.getElementById('doi-tuong').value

    //output


    var tongDiem = diemMon1 + diemMon2 + diemMon3 + khuVuc + doiTuong;

    var htmlOut = '';


    //process 

    if (diemMon1 == 0) {
        htmlOut = "Thí sinh rớt";
    } else if (diemMon2 == 0) {
        htmlOut = "Thí sinh rớt";
    }
    else if (diemMon3 == 0) {
        htmlOut = "Thí sinh rớt";
    }
    else if (tongDiem >= 25) {
        htmlOut = `Thí sinh đậu. Tổng điểm : ${tongDiem}`;

    } else if (tongDiem < 25) {
        htmlOut =  `Thí sinh rớt. Tong diem: ${tongDiem}`;
    }


    document.getElementById('ket-qua-b1').innerHTML = htmlOut;
}



//bai tap 2


document.getElementById('btnTinh').onclick = function () {
    //input ten  sokw

    var ten = document.getElementById('ten').value;

    var soKw = +document.getElementById('so-kw').value;

    //output

    var tienDien = 0;

    var htmlString = '';

    //process

    if (soKw <= 50) {
        tienDien = soKw * 500;
    } else if (soKw > 50 && soKw <= 100) {
        tienDien = 25000 + ((soKw - 50) * 650);
    } else if (soKw > 100 && soKw <= 200) {
        tienDien = 57500 + ((soKw - 100) * 850);
    }else if (soKw > 200 && soKw <= 350) {
        tienDien = 142500 + ((soKw - 200)* 1100);
    }else {
        tienDien = 307500 + ((soKw-350) *1300 );
    }





    document.getElementById('ket-qua-b2').innerHTML = htmlString = `Tên: ${ten}<br />
    tien dien : ${new Intl.NumberFormat('vn-VN').format(tienDien)} VND`;





    


}



//bai 3

document.getElementById ('btnTinhThue').onclick = function () {
//input ten , tong thu nhap nam ,  so nguoi phu thuoc

var ten = document.getElementById('ho-ten').value;
var tongThuNhap = +document.getElementById ('thu-nhap-nam').value;
var soNguoi = +document.getElementById('depend').value;

//output

var thuNhapThue = 0;
var outPutHtml =  '' ;
var tienThue = 0 ;


//process 

thuNhapThue = tongThuNhap - 4e+6 - (soNguoi * 16e+5) ;

if ( thuNhapThue <= 6e+7) {
  tienThue = thuNhapThue * 5/100;

}else if (thuNhapThue > 6e+7 && thuNhapThue  <= 12e+7 ) {
    tienThue = thuNhapThue * 10/100;
}else if ( thuNhapThue > 12e+7 && thuNhapThue <= 21e+7) {
    tienThue = thuNhapThue * 15/100;

}else if (thuNhapThue > 21e+7 && thuNhapThue <= 384e+6) {
    tienThue = thuNhapThue * 20/100 ;


}else if (thuNhapThue > 384e+6 & thuNhapThue <= 624e+6) {
    tienThue = thuNhapThue * 25/100;
}else if (thuNhapThue > 624e+6 && thuNhapThue <= 96e+7) {
     tienThue = thuNhapThue * 30/100;
}else {
    tienThue = thuNhapThue * 35/100;
}




document.getElementById ('ket-qua-b3').innerHTML = outPutHtml = `Tên: ${ten}, Tiền thuế : ${new Intl.NumberFormat('vn-VN').format(tienThue)} VND` ;

}










//bài 4 

document.getElementById('loai-khach').onchange = function () {
    var seLect = document.getElementById('loai-khach').value;
    if (seLect == 'doanh-nghiep') {
        document.getElementById('so-ket-noi').style.display = 'block';

    } else {
        document.getElementById('so-ket-noi').style.display = 'none';

    }

}

document.getElementById('btnTinhTienCap').onclick = function () {
    //input
    var loaiKhach = document.getElementById('loai-khach').value;
    var maKhach = +document.getElementById('ma-khach-hang').value;
    var soKenh = +document.getElementById('so-kenh-cao-cap').value;
    var soKetNoi = +document.getElementById('so-ket-noi').value;
    //output tiencap

    var tienCap = 0;


    htmlOutput = '' ;


    //process


    var phiHoaDon = 4.5;
    var phiCoBan = 20.5;
    var phiDoanhNghiep = 75;



    if (loaiKhach === 'nha-dan') {
        tienCap = phiCoBan + phiHoaDon + (7.5 * soKenh);




    }


    if (loaiKhach == 'doanh-nghiep' && soKetNoi <= 10) {
        tienCap = 15 + (50 * soKenh) + phiDoanhNghiep;
    } else if (loaiKhach == 'doanh-nghiep' && soKetNoi > 10) {
        phiDoanhNghiep += 5 * (soKetNoi - 10);
        tienCap = 15 + (50 * soKenh) + phiDoanhNghiep;
    }







    document.getElementById('ket-qua-b4').innerHTML = htmlOutput =`Mã khách hàng: ${maKhach}</br>
    Tiền cáp:  $${new Intl.NumberFormat('en-IN').format(tienCap)} `;
}

// Tiền cáp: $${new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(tienCap)}`;