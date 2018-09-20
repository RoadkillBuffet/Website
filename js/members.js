var members = $(".members");

d3.csv("/res/members.csv").then(function(data) {
  for(var i = 0; i < data.length; i++) {
      memberData = data[i];
      members.append("<div class='member-container'></div>");
      var thisMember = $(".member-container:last");
      
      //pic
      thisMember.append("<div class='member-pic'></div>")
      var pic = $(".member-pic:last");
      pic.append("<img src=/pics/headshots/" + memberData.pic + "></img>")
      
      //text info
      thisMember.append("<div class='member-info'></div>")
      var textInfo = $(".member-info:last");
      textInfo.append("<h2>" + memberData.name + "</h2>");
      textInfo.append("<p><b>Year</b>: " + memberData.year + "</p>");
      textInfo.append("<p><b>Bio</b>: " + memberData.bio + "</p>");
  }
});