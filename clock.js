setInterval(function() {
    const clock_container = document.querySelector(".time");
    const date_container = document.querySelector(".date");
    let time = new Date();
    let sec = time.getSeconds();
    let min = time.getMinutes();
    let hr = time.getHours();
    let day = time.getDay();
    let date = time.getDate();
    let month = time.getMonth();
    let year = time.getUTCFullYear();
    var days = ["Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu", "Minggu"];
    var months = ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "July", "Agustus", "September", "Oktober", "November", "Desember"];

    if (min < 10) {
        min = '0' + min;
    }

    if (hr < 10) {
        hr = '0' + hr;
    }
    var i, j;
    let har = day;
    for (i = 0; i < days.length + 1; i++) {
        if (i == day) {
            day = days[i - 1];
        }
    }
    for (j = 0; j < months.length + 1; j++) {
        if (j == month) {
            month = months[j];
        }
    }

    clock_container.textContent = hr + ':' + min;
    date_container.textContent = day + ', ' + date + ' ' + month + ' ' + year;

})