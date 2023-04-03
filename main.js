const previousBtn = document.querySelector("#previous-btn");
const nextBtn = document.querySelector("#next-btn");
let imgWrapChild = document.querySelector(".wrap-fig").childElementCount;
let count = document.querySelector("#count");
let sum = 0;
let sumPlus2 = 0;
let countNum = 1;
const y = 34;

nextBtn.addEventListener("click", next);
previousBtn.addEventListener("click", perv);

// next btn을 눌렀을때 action
function next() {
  // 33값이 없어지지않도록 복합대입 연산자를 사용
  sum += y;

  document.querySelector(".wrap-fig").style.transform = `translateX(-${sum}%)`;
  document.querySelector(".wrap-fig").style.transition = "all 0.7s";
  const translate = (document.querySelector(
    ".wrap-fig"
  ).style.transform = `translateX(-${sum}%)`);
  const translateValue = Number(translate.substring(11, 14));

  // count 하는 변수
  if (countNum <= 5) {
    countNum += 1;
    count.textContent = `${countNum} / 6`;
  }

  // sum 값이 136보다 크면 disable 활성화
  if (sum >= 136) {
    nextBtn.disabled = true;
    sum = 135;
  }
  if (sum === 135) {
    nextBtn.disabled = false;
  }
}

// previousBtn을 눌렀을때 action
function perv() {
  // 복합대입 연산자 값이 쌓이게
  sum -= y;
  document.querySelector(".wrap-fig").style.transform = `translateX(-${sum}%)`;
  document.querySelector(".wrap-fig").style.transition = "all 0.7s";

  if (countNum <= 5) {
    countNum -= 1;
    count.textContent = `${countNum} / 6`;
  }

  if (sum <= 0) {
    previousBtn.disabled = true;
    sum = 1;
  }
  if (sum === 1) {
    previousBtn.disabled = false;
  }
}
