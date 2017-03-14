$(document).ready(function () {
    $("#load").click(function (e) {
        e.preventDefault();
        $("#result").html("");

        var cc = SP.ClientContext.get_current();
        var peopleManager = new SP.UserProfiles.PeopleManager(cc);
        var userProperties = peopleManager.getMyProperties();

        cc.load(userProperties);
        cc.executeQueryAsync(
            function (s, e) {
                $("#result").html("Successfully loaded properties. Check F12 > Console");
                console.log(userProperties);
            },
            function (s, e) {
                $("#result").html(e.get_message());
                console.error(e);
            }
        );
    });
});