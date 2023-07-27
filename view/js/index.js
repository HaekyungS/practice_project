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
let exDiv = null;

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (count === 0) {
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
      textOne.style.display = "none";
      Box.style.height = "80%";
      textTitle.style.height = "10%";
      textTitle.innerText = [count - 1] + "번째 문제";

      let exNum = [];
      if (!exDiv) {
        exDiv = tagMaker("div", Box, {
          style:
            "width:80%;height:70%; display:flex; flex-direction:column; justify-content:center; align-itmes:center",
        });
      } else {
        while (exDiv.firstChild) {
          exDiv.removeChild(exDiv.firstChild);
        }
      }
      const problemProps = {
        style: "width:100%; height:20%; text-align:center",
        innerText: problems[count - 1].problem,
      };

      tagMaker("div", exDiv, problemProps);

      for (let i = 0; i < problems[count - 1].ex.length; i++) {
        let exNumber = Math.floor(Math.random() * (problems[count - 1].ex.length - 1));

        if (exNum.find((element) => element === exNumber)) {
          i--;
        } else {
          const inputProps = {
            type: "radio",
            id: "exam" + [i],
            name: "exam" + [count],
          };
          tagMaker("input", exDiv, inputProps);

          const labelProps = {
            style: "height:10%; size:15px; text-align:center",
            for: "exam" + [i],
            innerText: problems[count - 1].ex[exNumber],
          };
          tagMaker("label", exDiv, labelProps);

          exNum.push(exNumber);
        }
      }
      input.value = "NEXT";
      count++;
    }
  }
});
