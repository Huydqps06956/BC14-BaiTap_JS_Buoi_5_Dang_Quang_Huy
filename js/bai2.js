function hienThi() {
    var cName = document.getElementById("cName").value;
    var tongTien = tinhTien();
    var result = document.getElementById("result");
    result.innerHTML = "Tổng số tiền khách hàng " + cName + " phải trả là : " + tongTien + " USD";
}
function tinhTien() {
    var soKw = document.getElementById("soKw").value;
    const MUC_1 = 500;
    const MUC_2 = 650;
    const MUC_3 = 850;
    const MUC_4 = 1100;
    const MUC_5 = 1300;
    var tienMuc1 = tinhTienMuc_1(50, MUC_1)
    var tienMuc2 = tinhTienMuc_2(100, MUC_2)
    var tienMuc3 = tinhTienMuc_3(200, MUC_3)
    var tienMuc4 = tinhTienMuc_4(350, MUC_4)
    if (soKw ==""){
        return alert('Không được bỏ trống số KW');
    }
    if (0 < soKw && soKw <= 50) {
        var tienMuc1 = tinhTienMuc_1(soKw, MUC_1)
        console.log(tienMuc1);
        return tienMuc1
    }
    if (soKw <= 100) {
        var tienMuc2 = tinhTienMuc_2(soKw, MUC_2)
        return tienMuc1 + tienMuc2;
    }
    if (soKw <= 200) {
        var tienMuc3 = tinhTienMuc_3(soKw, MUC_3)
        return tienMuc1 + tienMuc2 + tienMuc3;
    }
    if (soKw <= 350) {
        var tienMuc4 = tinhTienMuc_4(soKw, MUC_4)
        return tienMuc1 + tienMuc2 + tienMuc3 + tienMuc4
    }
    var tienMuc5 = tinhTienMuc_5(soKw, MUC_5)
    return tienMuc1 + tienMuc2 + tienMuc3 + tienMuc4 + tienMuc5
}


function tinhTienMuc_1(soKw, giaTien) {
    return soKw * giaTien;
}
function tinhTienMuc_2(soKw, giaTien) {
    return (soKw - 50) * giaTien;
}
function tinhTienMuc_3(soKw, giaTien) {
    return (soKw - 100) * giaTien;
}
function tinhTienMuc_4(soKw, giaTien) {
    return (soKw - 200) * giaTien;
}
function tinhTienMuc_5(soKw, giaTien) {
    return (soKw - 350) * giaTien;
}