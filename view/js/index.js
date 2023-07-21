import tagMaker from "../../models/tagMaker.js";
import { problems } from "../../data/problem.js";

const bodyProps = {
  style: "width:100vw; height:100vh",
};

Object.assign(document.body, bodyProps);

const containerProps = {
  id: "container",
  style:
    "width:100%; height:100%; display:flex; flex-direction:column; justify-content:center; align-items:center; background-color:#9C2F3A",
};

const container = tagMaker("div", document.body, containerProps);

const boxProps = {
  style:
    "width:60%; height:30%; display:flex; flex-direction:column; justify-content:center; align-items:center; background-color:#D9D9D9",
};

const Box = tagMaker("div", container, boxProps);

const textOneProps = {
  style: "width:80%; height:20%; font-size:25px",
  innerText: "너가 류에 대해 몰 알아!",
};

const textOne = tagMaker("div", Box, textOneProps);

const textTitleProps = {
  style: "width:80%; height:20%; text-align:center; font-size:33px; overflow:auto",
  innerText: "2023 아카 모의고사",
};

const textTitle = tagMaker("div", Box, textTitleProps);

const formProps = {
  method: "POST",
  action: "/",
  style: "width:20%; height:5%; background-color:#D9D9D9; margin-Top:10px",
};

const form = tagMaker("form", container, formProps);

const submitProps = {
  type: "submit",
  style: "width:100%; height:100%; text-align:center;",
  value: "시작하기",
};

const input = tagMaker("input", form, submitProps);

let count = 0;
let answer = [];

form.addEventListener("submit", (event) => {
  if (count === 0) {
    event.preventDefault();
    textOne.style.display = "none";
    Box.style.height = "70%";
    textTitle.style.height = "70%";
    textTitle.innerText = `2023년 11월 01일 레볼루션 하트 막내 류님의 생일을 맞아,
      류님과 관련한 문제들로 모의고사를 준비하였습니다.
      총 11개의 객관식 문제들로 구성되어 있으며,
      문제들은 류님의 나무위키, 생방송, 유튜브 를 기반으로 출제하였습니다.
      너네가 나에 대해 몰 알아! 귀여운 건 알아!
      시험을 시작합니다:)`;
    input.value = "ㄱㅂㅈㄱ";
    return count++;
  } else {
    if (count < problems.length) {
      event.preventDefault();
      textOne.style.display = "none";
      Box.style.height = "80%";
      textTitle.innerText = problems[count - 1].problem;
      let exNum = [];
      for (i < 0; i < problems[count - 1].ex.length; i++) {
        const inputProps = {
          style: {},
        };
        tagMaker("input", Box);
      }

      input.value = "NEXT";
      count++;
    }
  }
});
