let history_data = JSON.parse(document.querySelector("#history-data").text)["data"]
let left_button = document.querySelector("#history-text-buttons > #navigate-left")
let right_button = document.querySelector("#history-text-buttons > #navigate-right")
let history_title = document.querySelector("#history-group > h1")
let history_text = document.querySelector("#history-group > p")

function setHistory(history_obj) {
    history_title.innerHTML = history_obj["title"]
    history_text.innerHTML = history_obj["text"]
}

let history_index = 0
function Change_History(direction="right") {
    if(direction === "left" && history_index === 0)
        return;
    if(direction === "right" && history_index === (history_data.length - 1))
        return;

    if(direction === "left") {
        history_index -= 1
    } else {
        history_index += 1
    }

    setHistory(history_data[history_index])
}

left_button.addEventListener('click', (event) => {
    Change_History("left")
    event.preventDefault()
})

right_button.addEventListener('click', (event) => {
    Change_History("right")
    event.preventDefault()
})

setHistory(history_data[0])