function kiemTra() {
  var diem = isDau();
  var result = document.getElementById("result");
  result.style.display = "block";
  result.innerHTML = diem;
}

function isDau() {
  var diemToan = +document.getElementById("diemToan").value;
  var diemVatLy = +document.getElementById("diemVatLy").value;
  var diemNgoaiNgu = +document.getElementById("diemNgoaiNgu").value;
  var diemChuan = +document.getElementById("diemChuan").value;
  var tongDiem = tinhTongDiem(diemToan, diemVatLy, diemNgoaiNgu);
  if (diemToan <= 0 || diemVatLy <= 0 || diemNgoaiNgu <= 0) {
    return ("Rớt với tổng điểm :" + tongDiem);
  }
  if (tongDiem >= diemChuan) {
    return ("Đậu với tổng điểm : " + tongDiem);
  }
  return ("Rớt với tổng điểm : " + tongDiem);
}

function tinhTongDiem(diemToan, diemVatLy, diemNgoaiNgu) {
  var diemKhuVuc = layKhuVuc();
  var diemDoiTuong = layDoiTuong();
  return diemKhuVuc + diemDoiTuong + diemToan + diemNgoaiNgu + diemVatLy;
}
function layKhuVuc() {
  var khuVuc = document.getElementById("khuVuc").value;
  khuVuc = khuVuc.toUpperCase()
  switch (khuVuc) {
    case "A": {
      return 2;
    }
    case "B": {
      return 1;
    }
    case "C": {
      return 0.5;
    }
    case "D": {
      return 0;
    }
    default:
      alert("Khu vực không hợp lệ");
  }

}
function layDoiTuong() {
  var doiTuong = document.getElementById("doiTuong").value;
  switch (doiTuong) {
    case "1": {
      return 2.5;
    }
    case "2": {
      return 1.5;
    }
    case "3": {
      return 1;
    }
    case "0": {
      return 0;
    }
    default:
      alert("Đối tượng không hợp lệ");
  }
}
