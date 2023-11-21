function skillMember() {
    var member = document.getElementById("member");
    var memberValue = member.options[member.selectedIndex].value;
    if (memberValue == "member") {
        document.getElementById("memberSkill").style.display = "block";
    } else {
        document.getElementById("memberSkill").style.display = "none";
    }
}