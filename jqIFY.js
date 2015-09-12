(function() {
    var el = document.createElement("div"),
        b = document.getElementsByTagName("body")[0];
    el.style.position = "fixed",
    el.style.height = "32px",
    el.style.width = "220px",
    el.style.marginLeft = "-110px",
    el.style.top = "0",
    el.style.left = "50%",
    el.style.padding = "5px 10px",
    el.style.zIndex = 1001,
    el.style.fontSize = "12px",
    el.style.color = "#222",
    el.style.backgroundColor = "#f99";

    function showMsg(slct) {
        var txt = document.createTextNode(slct);
        el.appendChild(txt);
        b.appendChild(el);
    }


    $.get("http://api.cdnjs.com/libraries").done(function(d){
      var arr = d.results.map(function(b){
        return '<option label="'+b.name+'" value="'+b.latest+'">' + b.name + '</option>';
      });
      arr.sort();

      showMsg('<select>'+arr.join("")+'</select>');
    });
})();