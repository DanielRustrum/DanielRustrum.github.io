

function loadIncludeTag(includeTag) {
    let src = includeTag.getAttribute("src") ?? ""

    let xhr = new XMLHttpRequest()

    console.log(src)

    xhr.onload = function() {
        console.log(xhr.responseXML.body.innerHTML)
        includeTag.after(...xhr.responseXML.body.children)
        includeTag.remove()
    }

    xhr.open("GET", src)
    xhr.responseType = "document"
    xhr.send()
}

window.addEventListener("load", ()=> {
    let include_tags = document.querySelectorAll("include")
    for(let include_tag of include_tags) {
        loadIncludeTag(include_tag)
    }
})