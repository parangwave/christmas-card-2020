function open_letter() {
  document.getElementsByClassName("letter-close")[0].style.display = "none";
  document.getElementsByClassName("letter-open")[0].style.display = "block";
}

function go_site() {
  alert("앗, 어떻게 찾았지!");
  window.location.href =
    "https://spartacodingclub.kr?f_name=%EC%9D%B4%EB%B2%94%EA%B7%9C&f_uid=5f7334e6c8cc246ea1e3c529";
}
