{
    function fetchDocument(src, onSuccessCallback) {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", src)
        xhr.responseType = "document"
        xhr.onload = () => onSuccessCallback(xhr.responseXML.body.children)
        xhr.send()
    }
    
    function fetchJson(src, onSuccessCallback) {
        let xhr = new XMLHttpRequest()
        xhr.open("GET", src)
        xhr.responseType = "json"
        xhr.onload = () => onSuccessCallback(xhr.response)
        xhr.send()
    }

    function loadScript(src, scope = "global") {
        switch(scope) {
            case "global":
                let script_tag = document.createElement("script")
                script_tag.setAttribute("src", src)
                document.body.appendChild(script_tag)
                return null
            case "inline":
                //TODO: Finish Implementation
                return new Promise((resolve, _) => {
                    let xhr = new XMLHttpRequest()
                    xhr.open("GET", scriptUrl)
                    xhr.onload = () => resolve(new Function(xhr.responseText))
                    xhr.send()
                })
        }
    }
    
    window.addEventListener("load", () => {
        let include_tags = document.querySelectorAll("include")
        for(let includeTag of include_tags) {
            let src = includeTag.getAttribute("src") ?? ""
            let name = includeTag.getAttribute("name") ?? ""
            let script_src = includeTag.getAttribute("script-src") ?? ""
            let load_include_event = null

            if(name) {
                load_include_event = new CustomEvent(`include.load:${name}`, {
                    detail: {
                        source: src
                    }
                });
            }
    
            fetchDocument(src, node_list => {
                includeTag.after(...node_list)
                includeTag.remove()
                if(name) document.dispatchEvent(load_include_event);

                loadScript(script_src)
            })
        }
    })
}