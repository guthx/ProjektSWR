﻿document.getElementById("user_select").onchange = show;
function show() {
    $.ajax({
        url: "/Panel/Users",
        async: false,
        dataType: 'json',
        success: function dane(json) {
            //   json = JSON.parse(json);
            var e = document.getElementById("user_select");
            var nr = e.options[e.selectedIndex].value;
            document.getElementById("imie").value = json[nr - 1].FirstName;
            document.getElementById("email").value = json[nr - 1].Email;
            document.getElementById("nazwisko").value = json[nr - 1].LastName;
            document.getElementById("id").value = json[nr - 1].Id;
            document.getElementById("cathedrals_select").value = json[nr - 1].Department;
            var data = json[nr - 1].LockoutEndDateUtc;
            var date = new Date(parseInt(data.substr(6)));
            var output = date.getFullYear() + '/' + (date.getMonth() + 1) + '/' + date.getDate();
            data = data.substring(0, 10);
            document.getElementById("lockdate").value = output;
        }
    });
    /* $.ajax({
         url: "/Cathedrals/Cathedrals",
         async: false,
         dataType: 'json2',
         success: function katedra (json2) {
             json2 = JSON.parse(json2);
             document.getElementById("cathedrals_select").selectedIndex = [json[nr - 1].CathedralID_ID];
         }
     });*/
}
