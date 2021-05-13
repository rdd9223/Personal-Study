const title = document.querySelector("#title"); // id를 기반으로 찾아서 첫번째 요소를 반환함
// title.innerHTML = "Hi! From JS";
// title.style.color = "red";
// document.title = "I own you now";

const BASE_COLOR = "rgb(52, 73, 94)"; // html에서는 rgb로 반환되기 때문에 rgb를 넣어야 동작한다.
const OTHER_COLOR = "#7f8c8d";

function handleClick() {
  const currentColor = title.style.color;
  if (currentColor === BASE_COLOR) {
    title.style.color = OTHER_COLOR;
  } else {
    title.style.color = BASE_COLOR;
  }
}

function init() {
  title.style.color = BASE_COLOR;
  title.addEventListener("click", handleClick); // mouseenter를 넣으면 마우스가 들어갈때마다 변경된다.
}

init();
// handleResize를 ()를 붙이면 즉시실행, 안붙이면 선택적 실행이다.
// 브라우저의 크기를 변경하면 호출된다.
// window.addEventListener("resize", handleResize);
