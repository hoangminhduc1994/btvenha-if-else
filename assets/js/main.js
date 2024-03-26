// bai 1

let kiem_tra_diem = () => {
    if (mark >= 85) {
        console.log("A");
    } else if (mark >= 70 && mark < 85) {
        console.log("B");
    } else if (mark >= 40 && mark < 70) {
        console.log("C");
    } else {
        console.log("D");
    }
}
let mark = (70);
kiem_tra_diem(mark);

// bai 2

let so_lon_hon = () => {
    if (a > b) {
        console.log(a);
    } else if (b > a) {
        console.log(b);
    } else {
        console.log("Hai số bằng nhau.");
    }
}
let a = (8);
let b = (7);
so_lon_hon(a, b);

// bai 3

let kiem_tra_so = (num) => {
    if (num > 0) {
        console.log(num + " là số dương.");
    } else if (num < 0) {
        console.log(num + " là số âm.");
    } else {
        console.log("Số nhập vào là 0.");
    }
}
let soNhap = (-6);
kiem_tra_so(soNhap);

// bai 4

let kiem_tra_chan_le = (num) => {
    if (num % 2 === 0) {
        console.log(num + " là số chẵn.");
    } else {
        console.log(num + " là số lẻ.");
    }
}
let soNhapVao = (5);
kiem_tra_chan_le(soNhapVao);

// bai 5

let kiem_tra_chia_het_3_va_5 = (num) => {
    if (num % 3 === 0 && num % 5 === 0) {
        console.log(num + " chia hết cho cả 3 và 5.");
    } else {
        console.log(num + " không chia hết cho cả 3 và 5.");
    }
}
let inputNum = (15);
kiem_tra_chia_het_3_va_5(inputNum);

// bai 6

let kiem_tra_tong = (a, b, c) => {
    if (c === a + b) {
        console.log("Số " + c + " bằng tổng của " + a + " và " + b + ".");
    } else {
        console.log("Số " + c + " không bằng tổng của " + a + " và " + b + ".");
    }
}
let soA = (2);
let soB = (3);
let soC = (4);
kiem_tra_tong (soA, soB, soC);