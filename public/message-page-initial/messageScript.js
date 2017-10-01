$(document).ready(() => {

    $("#studentName, #studentMsg").focus(function() {
        $(this).css("background", "#f3d5bd");
        console.log($(this));

    });

    $("#studentName, #studentMsg").blur(function() {
       $(this).css("background", "#fff");
    });

    $("#sendMsg").click(() =>{
       var studentName = $("#studentName").val();
       var studentMsg = $("#studentMsg").val()


        var msg = "<p class='msg'>" + studentName + ": " + studentMsg + "</p>";

       $("#messageBox").append(msg)

    });

    const colors = ["yellow", "pink", "red", "green"];
    let index = 0;


    $("#changeBorderColor").click(() =>{
        /*colors.forEach(color => {
            $("#messageBox").css("border", color)
        });*/

        $(".msg").css("border", "5px " + changeColors() + " solid");

        index++;
    });


    function changeColors() {
        if(index >= colors.length)
            index = 0;

        return colors[index];

    }

});
