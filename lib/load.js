{
    function fetchFragement(src, onSuccessCallback) {
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

    function loadStyle(src) {
        let link_tag = document.createElement("link")
        link_tag.setAttribute("rel", "stylesheet")
        link_tag.setAttribute("href", src)
        document.head.appendChild(link_tag)
        return null
    }

    function cacheHTMLFragement(id, cache) {

    }

    function HTMLFragementInCache(id) {}

    function fetchCachedHTMLFragment(id, callback) {}

    function listenToMultipleEvents(node, events, execution, callback) {
        switch(execution) {
            case "any":
                for(let event in events) {
                    node.addEventListener(event, callback)
                }
            case "all":
                let executed = []
                for(let event in events) {
                    node.addEventListener(event, lis_event => {
                        if(!executed.includes(event)) executed.push(event);
                        if(executed.length === events.length) callback(lis_event);
                    })
                }
        }
    }

    window.addEventListener("load", () => {
        let include_tags = document.querySelectorAll("include")

        for(let includeTag of include_tags) {
            let fragement_src = includeTag.getAttribute("fragment-src") ?? ""

            if(!fragement_src) continue;

            let name = includeTag.getAttribute("name") ?? ""
            let script_src = includeTag.getAttribute("script-src") ?? ""
            let style_src = includeTag.getAttribute("style-src") ?? ""
            
            let cached = Boolean(includeTag.getAttribute("cached"))
            
            let load_include_event = null

            const loadIncludeCallback = node_list => {
                includeTag.after(...node_list)
                includeTag.remove()
                if(name) document.dispatchEvent(load_include_event);

                if(script_src) loadScript(script_src);
                if(style_src) loadStyle(style_src);
            }

            if(name)
                load_include_event = new CustomEvent(`include.load:${name}`, {
                    detail: {
                        sources: {
                            fragment: fragement_src,
                            script: script_src,
                            style: style_src,
                        },
                        name,
                        is_cached: cached
                    }
                });
    
            if(!HTMLFragementInCache(name))
                fetchFragement(fragement_src, loadIncludeCallback);
            else
                fetchCachedHTMLFragment(name, loadIncludeCallback);
        }
    })
}