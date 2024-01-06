const ho_ten = "Nguyễn Hải Tuyên";
const mssv = "21127474";
const lop_sinh_hoat = "21CLC01";
const lop_hoc_phan = "21CLC01";
const ten_mon_hoc = "BAA00004";
const gv_ly_thuyet = "Dương Kim Thế Nguyên";
const gv_thuc_hanh = ["Dương Kim Thế Nguyên"];


if (document.querySelector(".group-name").innerHTML.includes("THÔNG TIN CHUNG")) {
    document.querySelector(".numeric.mandatory").querySelector("input[type=text]").value = mssv;
    document.querySelectorAll(".text-short").forEach((element) => {
        if (element.querySelector(".questiontext").innerText.includes("Tên người đánh giá")) {
            element.querySelector("input[type=text]").value = ho_ten;
        }
        else if (element.querySelector(".questiontext").innerText.includes("Lớp học phần/Lớp chuyên ngành:")) {
            element.querySelector("input[type=text]").value = lop_hoc_phan;
        }
    });

    document.querySelectorAll(".list-radio.mandatory").forEach((element) => {
        if (element.querySelector(".questiontext").innerText.includes("Lớp sinh hoạt")) {
            element.querySelectorAll("li").forEach((li) => {
                if (li.querySelector("label").innerText.includes(lop_sinh_hoat)) {
                    li.querySelector("input[type=radio]").click();
                }
            })
        }
        else if (element.querySelector(".questiontext").innerText.includes("Môn học đánh giá")) {
            element.querySelectorAll("li").forEach((li) => {
                if (li.querySelector(".answertext").innerText.includes(ten_mon_hoc)) {
                    li.querySelector("input[type=radio]").click();
                }
            })
        }
    });
}


if (document.querySelector(".group-name").innerHTML.includes("THÔNG TIN ĐÁNH GIÁ CHUNG VỀ MÔN HỌC")
    || document.querySelector(".group-name").innerHTML.includes("THÔNG TIN ĐÁNH GIÁ VỀ CÔNG CỤ GIẢNG DẠY")
    || document.querySelector(".group-name").innerHTML.includes("ĐÁNH GIÁ VỀ CÔNG TÁC QUẢN LÝ VÀ HỖ TRỢ")
    || document.querySelector(".group-name").innerHTML.includes("ĐÁNH GIÁ, Ý KIẾN")) {
    document.querySelectorAll(".radio").forEach((element) => {
        if (element.nextElementSibling.innerText.includes("5")) {
            element.click();
        }
    });
}


if (document.querySelector(".group-name").innerHTML.includes("THÔNG TIN ĐÁNH GIÁ PHẦN GIẢNG DẠY LÝ THUYẾT")) {
    let isTeacherExist = false;
    document.querySelectorAll(".radio").forEach((element) => {
        if (element.parentElement.querySelector(`label[for="${element.id}"]`).innerText.includes(gv_ly_thuyet)) {
            isTeacherExist = true;
            element.click();
        }
        if (element.nextElementSibling.innerText.includes("5")) {
            element.click();
        }
    });

    if (!isTeacherExist) {
        document.querySelector("input[title='Khác']").value = gv_ly_thuyet;
        document.querySelectorAll(".radio").forEach((element) => {
            if (element.parentElement.querySelector("label").innerText.includes("Khác")) {
                element.click();
            }
        });
    }
}

if (document.querySelector(".group-name").innerHTML.includes("THÔNG TIN ĐÁNH GIÁ PHẦN GIẢNG DẠY THỰC HÀNH")) {
    let isTeacherExist = false;

    document.querySelectorAll(".checkbox").forEach((element) => {
        if (element.parentElement.querySelector(`label[for="${element.id}"]`)) {
            if (gv_thuc_hanh.some((gv) => element.parentElement.querySelector(`label[for="${element.id}"]`).innerText.includes(gv))) {
                isTeacherExist = true;
                element.checked = true;
            }
        }
    });

    document.querySelectorAll(".radio").forEach((element) => {

        if (element.nextElementSibling.innerText.includes("5")) {
            element.click();
        }
    });

    if (!isTeacherExist) {
        document.querySelectorAll("input[type='text']").forEach((element) => {
            if (element.parentElement.querySelector(`label[for="${element.id}"]`)) {
                if (element.parentElement.querySelector(`label[for="${element.id}"]`).innerText.includes("Khác")) {
                    element.value = gv_thuc_hanh.join(", ");
                    element.parentElement.querySelector("input[type='checkbox']").checked = true;
                }
            }
        });
    }
}
