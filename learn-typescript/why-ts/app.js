// api url
var url = "https://jsonplaceholder.typicode.com/users/1";

// dom
var username = document.querySelector("#username");
var email = document.querySelector("#email");
var address = document.querySelector("#address");

// user data
var user = {};

/**
 * @typedef {object} Address // Address라는 타입 정의를 한다.
 * @property {string} street
 * @property {string} city
 */

/**
 * @typedef {object} User // 여기에 타입을 정의하면, 프로퍼티도 바로 정의해줄 수 있다.
 * @property {string} name
 * @property {string} email
 * @property {Address} address
 */

// 아래는 JS Docs의 기본 문법이다.
/**
 * @returns {Promise<User>}
 */
function fetchUser()   {
  return axios.get(url)
}
fetchUser(); // <- 이 상태는 코드상으로 보면 그냥 알수가 없다. 보고 싶다면 콘솔로그를 찍으면 나오게 된다. 그렇다면 코드상으로 알 수 있게 하려면 어떻게 하면 될까?

fetchUser().then(response => {
  response.address.street 
  // response.까지만 쳐도 안의 어떤 속성이 있는지 모두 나오게 된다. 위에 정의를 해뒀기 때문에 가능한 일이다.
  // typescript라면 브라우저에 띄우지 않아도 미리 어떤 값이 나와야하는지 알려주기 때문에 중요하다.
})

function startApp() {
//   axios
//     .get(url)
  fetchUser() // 같은 효과를 냄
    .then(function (response) {
      // console.log(response);
      user = response.data;
      // TODO: 이름, 이메일, 주소 표시하기
      console.log(user);
      username.innerText = user.name; // 이름 불러와서 표시하기, span tag에다가 데이터를 넣는다.
      email.innerText = user.email;
      address.innerText = user.address.street; // 코드상으로만 보면 어떤 값이 오는지 모름. 아는방법은 직접 출력해보거나, 해당 정보(JSON)을 직접 보고 넣는방법밖에 없음
    })
    .catch(function (error) {
      console.log(error);
    });
}

startApp();
