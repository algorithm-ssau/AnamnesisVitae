import React, { useState } from "react"
import { questions } from "../components/Questionnaire"
import { patientList } from "../utils/icons/PatientsList"

export const ResultsView = (props) => {
  const { patients } = props
  const [selectedPatient, setSelectedPatient] = useState(-1)
  const [list, setList] = useState(patientList(patients.patients))


  const ListField = (props) => {
    const { patient, index } = props
    return (
      <tr className="patient-row" style={{ background: (!patient.checked ? "#ffffff8c" : "#ffffff3f") }}
        onClick={() => { 
          setSelectedPatient(index)
        }
  }>
        <td className="patient-num ">{index+1}</td>
        <td className="patient-name row-elements">{patient.name}</td>
        <td className="patient-status ">
          {patient.checked ? "Просмотренный результат" : "Новый результат"}
        </td>
      </tr>
    )
  }

  const OpenedAnswer = (props) => {
    const { question, answer, color } = props
    const colors = ["high-priority", "medium-priority", "low-priority"]
    return (
      <div className="patient-answer">
        <div className="question">{question}</div>
        <div className={"answer " + colors[color]}>{answer}</div>
      </div>
    )
  }

  const OpenedInfo = (props) => {
    const { patient, index } = props

    return (<>
      <div className="patient-info">
        <div className="patient-answer-name">Результаты опроса пациента: {patient.name} </div>
        <div className="answer-component">
          {patient.answers.map((el, ind) => (
            <OpenedAnswer
              question={questions[ind].question}
              answer={questions[ind].answer[el]}
              color={el}
              key={`unCh0-${index}`}
            />
          ))}
        </div>
        
      </div>
      <div className="patient-out">
      <button
      className="close results-view-button"
      onClick={() => {
        
        setList(
          list.map((p, ind) => {
            if (ind === index)
              return {
                name: p.name,
                answers: p.answers,
                checked: true,
              }
            else return p
          })
        )

        setSelectedPatient(-1)

      }}
    >
      Вернуться к списку
    </button></div>
      </>
    )
  }

  return (
    <>
      {selectedPatient === -1 && (
        <>
        <div className="choosen-patient ">
        Выберите пациента для просмотра данных:
        </div>
          <div className="results-list">
          
          <table className="list">
            <tbody>
                {list.map((p, index) => <ListField patient={p} index={index} key={`un-${index}`} />)}
            </tbody>
          </table>
          </div>
        </>
      )}
      {selectedPatient !== -1 && (
        <div className="results-opened-info">
          <div className="opened-info">
            <OpenedInfo
              patient={list[selectedPatient]}
              index={selectedPatient}
            />
          </div>
        </div>
      )}
    </>
  )
}
