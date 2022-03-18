var SinhVien1 = new SinhVien();
var valuedation = new Validation();
var xuLyXacNhan = function () {
    SinhVien1.maSV = document.getElementById('maSinhVien').value;
    SinhVien1.tenSV = document.getElementById('tenSinhVien').value;
    SinhVien1.diemToan = document.getElementById('diemToan').value;
    SinhVien1.diemLy = document.getElementById('diemLy').value;
    SinhVien1.diemHoa = document.getElementById('diemHoa').value;
    SinhVien1.diemRenLuyen = document.getElementById('diemRenLuyen').value;
    var diemTB = SinhVien1.tinhDiemTB();
    var xeploai = SinhVien1.xylyLoaiSV();

    var valid = true;
    // Kiểm tra rỗng
    valid &= valuedation.checkValidation(SinhVien1.maSV,'error_maSinhVien','Mã sinh viên') & valuedation.checkValidation(SinhVien1.tenSV,'error_tenSinhVien','Tên sinh viên') & valuedation.checkValidation(SinhVien1.diemToan,'error_diemToan','Điểm toán') & valuedation.checkValidation(SinhVien1.diemLy,'error_diemLy','Điểm lý') & valuedation.checkValidation(SinhVien1.diemHoa,'error_diemHoa','Điểm hóa') & valuedation.checkValidation(SinhVien1.diemRenLuyen,'error_diemRenLuyen','Điểm Rèn Luyện');
    
    //Kiểm tra tất cả là chữ số
    valid &= valuedation.kiemTraSo(SinhVien1.maSV,'error_maSinhVien_kiemTraSo') & valuedation.kiemTraSo(SinhVien1.diemHoa,'error_diemHoa_kiemTraSo') & valuedation.kiemTraSo(SinhVien1.diemLy,'error_diemLy_kiemTraSo') & valuedation.kiemTraSo(SinhVien1.diemToan,'error_diemToan_kiemTraSo');
    //Kiểm tra độ dài
    valid &= valuedation.kiemTraDoDai(SinhVien1.maSV,'error_maSinhVien_kiemDoDai', 4, 4)
    //Kiem tra ky tu
    valid &= valuedation.kiemTraLaChu(SinhVien1.tenSV,'error_tenSinhVien_KiemTraChu');
    //Kiểm tra giá trị
    valid &= valuedation.kiemTraGiaTri(SinhVien1.diemToan,'error_diemToan_kiemTraGiaTri',0,10) & valuedation.kiemTraGiaTri(SinhVien1.diemLy,'error_diemLy_kiemTraGiaTri',0,10) & valuedation.kiemTraGiaTri(SinhVien1.diemHoa,'error_diemHoa_kiemTraGiaTri',0,10) & valuedation.kiemTraGiaTri(SinhVien1.diemRenLuyen,'error_diemRenLuyen_kiemTraGiaTri',0,10);

    if (!valid) {
        alert('Dữ liệu không hợp lệ');
        valid = false;
    }else{
        valid = true;
    }


    document.getElementById('textTenSinhVien').innerHTML = SinhVien1.tenSV;
    document.getElementById('textMaSinhVien').innerHTML = SinhVien1.maSV;
    document.getElementById('textLoaiSinhVien').innerHTML = xeploai;
    document.getElementById('textDiemTrungBinh').innerHTML = diemTB.toFixed(2);
    return valid;
}
document.querySelector('#btnXacNhan').onclick = xuLyXacNhan;
