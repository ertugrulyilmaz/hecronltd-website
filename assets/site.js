(function () {
  var toc = document.querySelector("[data-toc]");
  if (toc) {
    var list = document.createElement("ol");
    document.querySelectorAll(".doc h2").forEach(function (h, i) {
      if (!h.id) h.id = "s" + (i + 1);
      var li = document.createElement("li");
      var a = document.createElement("a");
      a.href = "#" + h.id;
      a.textContent = h.textContent;
      li.appendChild(a);
      list.appendChild(li);
    });
    toc.appendChild(list);
  }

  var items = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    items.forEach(function (el) { el.classList.add("in"); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { rootMargin: "0px 0px -10% 0px" });
  items.forEach(function (el) { io.observe(el); });
})();
