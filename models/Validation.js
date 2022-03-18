var Validation = function () {
    this.checkValidation = function (value, selectoError, name) {
        if (value.trim() === '') {
            document.getElementById(selectoError).innerHTML = name + ' không được bỏ trống';
            document.getElementById(selectoError).style.display = 'block';
            return false;
        } else {
            document.getElementById(selectoError).innerHTML = '';
            document.getElementById(selectoError).style.display = 'none';
            return true;
        }
    }
    this.kiemTraSo = function (value, selectoError) {
        var patternSo = /^[0-9]+$/;
        if (patternSo.test(value)) {
            document.getElementById(selectoError).style.display = 'none';
            document.getElementById(selectoError).innerHTML = '';
            return true;
        } else {
            document.getElementById(selectoError).style.display = 'block';
            document.getElementById(selectoError).innerHTML = 'Phải nhập kiểu số';
        }
    }

    this.kiemTraDoDai = function (value, selectoError, min_length, max_length) {
        if (value.trim().length < min_length || value.trim().length > max_length) {
            document.getElementById(selectoError).innerHTML = 'Phải nhập đủ ký tự từ ' + min_length + ' đến ' + max_length;
            document.getElementById(selectoError).style.display = 'block';
            return false;
        } else {
            document.getElementById(selectoError).innerHTML = '';
            document.getElementById(selectoError).style.display = 'none';
            return true;
        }
    }
    this.kiemTraLaChu = function (value, selectoError) {
        var patternChu = /^[a-zA-Z ]+$/;
        if (patternChu.test(value)) {
            document.getElementById(selectoError).innerHTML = '';
            document.getElementById(selectoError).style.display = 'none';

            return true;

        } else {
            document.getElementById(selectoError).innerHTML = 'Phải nhập kiểu ký tự';
            document.getElementById(selectoError).style.display = 'block';
            return false;
        }
    }
    this.kiemTraGiaTri = function (value,selectoError,min,max) { 
        if (Number(value) < min || Number(value) > max) {
            document.getElementById(selectoError).innerHTML = 'Giá trị từ ' + min + ' đến ' + max;
            document.getElementById(selectoError).style.display = 'block';
            return false;
        }else{
            document.getElementById(selectoError).innerHTML = '';
            document.getElementById(selectoError).style.display = 'none';
            return true;
        }
    }
}
