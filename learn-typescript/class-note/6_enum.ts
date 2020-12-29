enum Shoes {
  Nike,
  Adidas = 10, // 가능
  Vans = "반스", // 문자형으로 가능
}

var myShoes = Shoes.Nike;
console.log(myShoes); // 0, 별도의 처리를 하지 않으면 숫자로 취급이 된다.
console.log(Shoes.Vans); // 반스

// 예제
enum Answer {
  Yes = "Y",
  No = "N",
}

function askQuestion(answer: Answer) {
  if (answer === Answer.Yes) {
    console.log("정답입니다");
  }
  if (answer === Answer.No) {
    console.log("정답입니다");
  }
}
// 이넘으로 이런 다양한 답들을 제시해주는 것이다.
askQuestion(Answer.Yes); // 이넘에 있는 값만 넘길 수 있다.
// askQuestion('예스');
// askQuestion('y')
// askQuestion('Yes')
