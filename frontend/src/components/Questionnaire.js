import React, { useEffect, useState } from "react";

export const questions = [
  {
    question: "1. Как часто вы болеете простудными заболеваниями?",
    answer: ["2 раза в месяц", "1 раз в месяц", "1 раз в два месяца"],
  },
  {
    question: "2. Зависит ли частота вашего заболевания от сезона года?",
    answer: ["Да", "Нет", "Затрудняюсь ответить"],
  },
  {
    question:
      "3. Проходит ли течение вашего заболевания по одинаковой программе?",
    answer: ["Всегда", "Иногда", "Никогда"],
  },
  {
    question: "4. Как долго длится ваше заболевание?",
    answer: ["Больше 2 недель", "2 недели", "7 дней"],
  },
  {
    question:
      "5. Как часто ваше заболевание протекает с повышением температуры?",
    answer: ["Всегда", "Редко", "Иногда"],
  },
  {
    question: "6. Как часто ваше заболевание протекает с затруднением дыхания?",
    answer: ["Всегда", "Редко", "Иногда"],
  },
  {
    question:
      "7. Требуется ли вам обычно использование антибиотиков для лечения заболевания?",
    answer: ["Всегда", "Очень редко", "Никогда"],
  },
  {
    question:
      "8. Требуется ли вам обычно использование противоаллергических препаратов для лечения заболевания (в том числе ингаляционных препаратов)?",
    answer: ["Всегда", "Очень редко", "Никогда"],
  },
  {
    question: "9. Есть ли в вашей семье человек с врожденным иммунодефицитом?",
    answer: ["Да", "Затрудняюсь ответить", "Нет"],
  },
  {
    question:
      "10. Какие препараты вы чаще используете для поддержания хорошего самочувствия после выздоровления?",
    answer: ["Иммунные", "Только витамины", "Никакие"],
  },
];

export const Questionnaire = () => {
  let answers = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];

  const InputField = (val) => {
    const [localAnswer, setLocalAnswer] = useState(0);

    useEffect(() => {
      answers = answers.map((el, index) => {
        return val.index === index ? localAnswer : el;
      });
      //console.log(answers);

      // NOTE: оставлю лог для контроля значений в массиве перед записью в бд
      // надо юудет проверить, не циклит ли useState:если да - переделать переменную в Dictionary
    }, [localAnswer, val.index]);

    const { question, answer } = val.question;

    return (
      <>
        <div className="question">
          <div className="question-text">{question}</div>
          <div className="answers">
            <label>
              <input
                type={"checkbox"}
                className={"filled-in"}
                id={0}
                checked={localAnswer === 0}
                onChange={() => setLocalAnswer(0)}
              ></input>{" "}
              <span>{answer[0]}</span>
            </label>
            <label>
              <input
                type={"checkbox"}
                id={1}
                className={"filled-in"}
                value={1}
                checked={localAnswer === 1}
                onChange={() => setLocalAnswer(1)}
              ></input>{" "}
              <span>{answer[1]}</span>
            </label>
            <label>
              <input
                type={"checkbox"}
                id={2}
                className={"filled-in"}
                checked={localAnswer === 2}
                onChange={() => setLocalAnswer(2)}
              ></input>{" "}
              <span>{answer[2]}</span>
            </label>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="questionnaire-component">
      {questions.map((q, index) => (
        <InputField question={q} index={index} key={index} />
      ))}
    </div>
  );
};