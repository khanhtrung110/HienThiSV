var SinhVien = function() {
    this.maSV = '';
    this.tenSV = '';
    this.diemToan = '';
    this.diemLy = '';
    this.diemHoa = '';
    this.diemRenLuyen = '';
    this.tinhDiemTB = function () {
        var diemtb = (((Number(this.diemHoa))+(Number(this.diemLy))+(Number(this.diemToan)))/3);
        return diemtb;
    }
    this.xylyLoaiSV = function () {
        var xeploai='';
        var diemtb = this.tinhDiemTB()
        if (this.diemRenLuyen<5) {
            xeploai = 'Học lực yếu';
        }else{
            if (diemtb<6.5) {
                xeploai = 'Học lực yếu';
            }else if(diemtb>=6.5 && diemtb<8){
                xeploai = 'Học lực khá';
            }else if(diemtb>=8){
                xeploai = 'Học lực giỏi';
            }
        }
        return xeploai;
    }
}