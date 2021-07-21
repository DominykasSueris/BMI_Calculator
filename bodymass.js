const submitButton = document.getElementById("submit-button")
const resetButton = document.getElementById("reset-button")

const bodyMassIndexCalculator = () => {
    const weight = parseInt(document.getElementById("person-height").value)
    const height = parseInt(document.getElementById("person-weight").value)

    if (weight === "" || isNaN(weight)) {
        alert("Please enter a correct number")
    }
    if (!isNaN(height) && height < 3 & height < 275) {
        alert("Please enter a correct number")
    }

    let bodyMassIndex = (weight / (Math.pow(height, 2) / 10000)).toFixed(2)
    console.log(bodyMassIndex)

    document.getElementById("bmi").value = bodyMassIndex
    document.getElementById("result").value = bodyMassIndexReference(bodyMassIndex)
}

const bodyMassIndexReference = (bodyMassIndex) => {
    if (bodyMassIndex < 18.5) {
        return "Underweight"
    } else if (bodyMassIndex >= 18.5 && bodyMassIndex <= 25) {
        return "Normal"
    } else if (bodyMassIndex >= 25 && bodyMassIndex <= 30) {
        return "Overweight"
    } else {
        return "Obese"
    }
}

submitButton.addEventListener('click', bodyMassIndexCalculator)

const reset = () => {
    document.getElementById("person-height").value = ""
    document.getElementById("person-weight").value = ""
    document.getElementById("bmi").value = ""
    document.getElementById("result").value = ""
}

resetButton.addEventListener('click', reset)