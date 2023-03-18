$(function () {
    $("#loading").hide();
    $(".form").on("submit", function (e) {
      $(".loader").css("display", "grid");
      setTimeout(function () {
        $(".loader").css("display", "none");
      }, 200);
      e.preventDefault();
      var name = $("#name").val();
      var email = $("#email").val();
      var uid = $("#uid").val();
      var dob = $("#dob").val();
      var designation = $("#designation").val();
      var exp = $("#exp").val();
      var list = $(".block_list").length + 1;
      $(".block_content").append(
        `<div class="block_list" id="list_${list}"> <div class="numbering">${list}</div><span class="close" onclick="remove('list_${list}')">+</span><h3>${name}</h3><ul class="list"><li><label>Email ID</label><span>${email}</span></li><li><label>University ID</label><span>${uid}</span></li><li><label>DOB</label><span>${dob}</span></li><li><label>Designation</label><span>${designation}</span></li><li><label>Total Experience</label><span>${exp}years</span></li></ul></div>`
      );
    });
  });

  // Remove Function
  
  function remove(id) {
    $("#" + id).remove();
  }

  