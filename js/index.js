$(document).ready(function() {
  let currentMembers = 0;
  let checkCount = function() {
    $.get("http://hobit.unhfree.net:4911/guild/306061550693777409", function(data) {
      data = JSON.parse(data);
      if(currentMembers == 0) $("#membercount").text(data.memberCount);
      else $("#membercount").animationCounter({
        step: 1,
        delay: 0.1,
        start: currentMembers,
        end: data.memberCount
      });
      currentMembers = data.memberCount;
      setTimeout(checkCount, 45000);
    });
  }
  checkCount();
});
