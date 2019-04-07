$(document).ready(function () {

    $("html").on("submit", "#contact_form", function (e) {

        e.preventDefault();

        $("#send_form_status").html('').hide();

        var data = $("#contact_form").serialize();

        $.post("../send_form.php", data, function (res) {
            $("#send_form_status").html(res.msg).show();
            if (res.status == 1) {
                $("#contact_form")[0].reset();
            }
        });
    });



    $(".menu-button").click(function () {
        document.getElementsByTagName("nav")[0].classList.toggle("open-menu");

    });

    if (document.getElementsByClassName("portfolio-box").length <= 6) {
        document.getElementsByClassName("portfolio-more")[0].style.display = "none";
        
    }






});