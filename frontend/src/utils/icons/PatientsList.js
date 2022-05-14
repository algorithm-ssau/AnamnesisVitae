export const patientList = (list) => {
  return list.map((element) => ({
    name: element.name ?? element.email,
    answers: element.answers.split(','),
    checked: false,
  })) ?? null
}
