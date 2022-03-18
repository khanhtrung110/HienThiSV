var xuLyXacNhan = function () {
    var maSinhVien = document.getElementById('maSinhVien').value;
    var tenSinhVien = document.getElementById('tenSinhVien').value;
    var loaiSinhVien = document.getElementById('loaiSinhVien').value;
    var diemToan = document.getElementById('diemToan').value;
    var diemLy = document.getElementById('diemLy').value;
    var diemHoa = document.getElementById('diemHoa').value;
    var diemRenLuyen = document.getElementById('diemRenLuyen').value;
    var diemTrungBinh = tinhDiemTB(diemToan,diemLy,diemHoa);
    var loaiSinhVien = xylyLoaiSV(diemRenLuyen, diemTrungBinh);
    document.getElementById('textTenSinhVien').innerHTML = tenSinhVien;
    document.getElementById('textMaSinhVien').innerHTML = maSinhVien;
    document.getElementById('textLoaiSinhVien').innerHTML = loaiSinhVien;
    document.getElementById('textDiemTrungBinh').innerHTML = diemTrungBinh.toFixed(2);
    console.log(tenSinhVien);
}
var xylyLoaiSV = function (diemRenLuyen, diemTrungBinh) {
    var xeploai='';
    if (diemRenLuyen<5) {
        xeploai = 'Học lực yếu';
    }else{
        if (diemTrungBinh<6.5) {
            xeploai = 'Học lực yếu';
        }else if(diemTrungBinh>=6.5 && diemTrungBinh<8){
            xeploai = 'Học lực khá';
        }else if(diemTrungBinh>=8){
            xeploai = 'Học lực giỏi';
        }
    }
    return xeploai;
}

var tinhDiemTB = function (diemToan, diemLy,diemHoa) {
     var diemtb = ((Number(diemToan)+Number(diemLy)+Number(diemHoa))/3);
     return diemtb;
}

document.querySelector('#btnXacNhan').onclick = xuLyXacNhan;