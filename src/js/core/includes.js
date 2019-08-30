import $ from "jquery";

function loadIncludes(parent) {
  if (!parent) parent = "body";
  $(parent)
    .find("[wm-include]")
    .each(function(_i, e) {
      const url = $(e).attr("wm-include");
      $.ajax({
        url,
        success(data) {
          $(e).html(data);
          $(e).removeAttr("wm-include");

          loadIncludes(e);
        }
      });
    });
}

loadIncludes();
