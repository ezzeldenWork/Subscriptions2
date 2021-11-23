$(document).ready(function () {
    // datepicke
    $(".date_picker").datepicker();

    // select2
    $(".select2").select2();

    // dropify
    $(".dropify").dropify();

    // blur form

    const loginClass = ".login_form .form-group input";

    $(loginClass).on("focus", function () {
        $(this).parent().addClass("up");
    });

    $(loginClass).on("blur", function () {
        if ($(this).val()) {
            $(this).parent().addClass("up");
        }
        if (!$(this).val()) {
            $(this).parent().removeClass("up");
        }
    });

    $(".header-section .icon-box").click(function () {
        $(".aside-box").addClass("opneMenu");
        $(".overlay").show();
    });

    $(".aside-box .ul-box .aside-ul li").click(function () {
        $(this).children("ul").slideToggle();
        $(this).children("a").toggleClass("active");

        $(this).siblings().children("ul").slideUp();
        $(this).siblings().children("a").removeClass("active");
    });

    $(".overlay").click(function () {
        $(".aside-box").removeClass("opneMenu");
        $(this).hide();
    });

    // toggle-password

    $(".toggle-password").click(function () {
        $(this).toggleClass("fa-eye fa-eye-slash");
        var input = $($(this).attr("toggle"));
        if (input.attr("type") == "password") {
            input.attr("type", "text");
        } else {
            input.attr("type", "password");
        }
    });

    $(".log-in-button").click(function () {
        if (input.attr("type") == "text") {
            input.attr("type", "password");
        } else {
            input.attr("type", "password");
        }
    });

    // dataTable

    if ($("html").attr("dir") == "rtl") {
        var lang = "https://cdn.datatables.net/plug-ins/1.10.24/i18n/Arabic.json";
    } else {
        var lang = "";
    }

    var table = $(".dataTable").DataTable({
        language: {
            url: lang,
        },

        // "ajax": "../ajax/data/objects.txt",
        // "columns": [
        //     {
        //         "className":      'details-control',
        //         "orderable":      false,
        //         "data":           null,
        //         "defaultContent": ''
        //     },
        //     { "data": "name" },
        //     { "data": "position" },
        //     { "data": "office" },
        //     { "data": "salary" }
        // ],
        // "order": [[1, 'asc']]
    });

    // Add event listener for opening and closing details
    $(".dataTable tbody").on("click", "td.details-control", function () {
        debugger;
        var tr = $(this).closest("tr"),
            row = table.row(tr);

        if (row.child.isShown()) {
            // This row is already open - close it
            debugger;
            row.child.hide();
            tr.removeClass("shown");
        } else {
            debugger;
            // Open this row
            row.child(format(row.data())).show();
            tr.addClass("shown");
        }
    });

    function format(d) {
        debugger;
        // `d` is the original data object for the row
        return (
            '<table class="sucond_table" cellpadding="5" cellspacing="0" border="0" style="width: 100%;">' +
            "<tr >" +
            '<th class="sorting sorting_asc" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Name: activate to sort column descending" style="width: 20%;" aria-sort="ascending">     الاسم </th>' +
            '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 20%;">الكود</th>' +
            '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Position: activate to sort column ascending" style="width: 20%;">     تاريخ البداية </th>' +
            '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Office: activate to sort column ascending" style="width: 20%;">تاريخ النهايه</th>' +
            '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 10%;">العدد</th>' +
            '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 30%;">النوع</th>' +
            '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 30%;">النوع</th>' +
            '<th class="sorting" tabindex="0" aria-controls="statustTable" rowspan="1" colspan="1" aria-label="Salary: activate to sort column ascending" style="width: 30%;">النوع</th>' +
            "</tr>" +
            "<tr>" +
            "<td>" +
            d.extn +
            "</td>" +
            "<td>" +
            d.name +
            "</td>" +
            "<td>فرد</td>" +
            "<td>" +
            d.extn +
            "</td>" +
            "<td>" +
            d.name +
            "</td>" +
            "<td>فرد</td>" +
            '<td class="has_link">' +
            '<a href="#" class="table_link">الفواتير</a>' +
            "</td>" +
            '<td class="has_link">' +
            '<a href="#" class="table_link">الفواتير</a>' +
            "</td>" +
            "</tr>" +
            "</table>" +
            "<hr>"
        );
    }

    setInterval(function () {
        var currentTime = new Date();
        var hours = currentTime.getHours();
        var minutes = currentTime.getMinutes();
        var seconds = currentTime.getSeconds();

        // Add leading zeros
        minutes = (minutes < 10 ? "0" : "") + minutes;
        seconds = (seconds < 10 ? "0" : "") + seconds;
        hours = (hours < 10 ? "0" : "") + hours;

        // Compose the string for display
        var currentTimeString = hours + ":" + minutes + ":" + seconds;
        $("#time").html(currentTimeString);
        $("#date").html(currentTime.toDateString());
    });
});
