const title = document.querySelector("#title");

const CLICKED_CLASS = "clicked";

function handleClick() {
  // // 해당 클래스에 clicked라는 클래스가 포함되어 있는지 확인
  // const hasClass = title.classList.contains(CLICKED_CLASS);

  // if (hasClass) {
  //   // 포함되어있다면 clicked를 삭제!
  //   title.classList.remove(CLICKED_CLASS);
  // } else {
  //   // 포함되어있지 않다면 clicked를 추가!
  //   title.classList.add(CLICKED_CLASS);
  // }

  // 위 코드와 완전히 똑같은 기능을 한다.
  title.classList.toggle(CLICKED_CLASS);
}

function init() {
  title.addEventListener("click", handleClick);
}

init();
