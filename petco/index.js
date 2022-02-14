//* SECTION: Nodes
let nodes = {
    search: {
        open: $("button[open-search-btn]"),
        close: $("button[close-search-btn]"),
        banner: $("div[search-banner]"),
        run: $("button[run-search-btn]"),
        input: $("input[search-box-input]"),
        down: $(".nav-down-btn"),
        magnify: $("button[magnify-btn]")
    },
    sections: {
        triggers: {
            products: $("button[trigger-products-section]"),
            services: $("button[trigger-services-section]"),
            memberships: $("button[trigger-memberships-section]"),
        },
        blocks: {
            products: $('div[action-section="Products"]'),
            services: $('div[action-section="Services"]'),
            memberships: $('div[action-section="Memberships"]'),
        },
        products: {
            list: $("ul[product-list]"),
            link: $("a[product-shop-link]")
        }
    },
    sales: {
        banner: $("div[sale-banner]"),
        close: $("button[close-sale-banner]")
    }
}

//* SECTION: Search
nodes.search.open.on("click", () => {
    nodes.search.down.show()
    nodes.search.magnify.hide()
    nodes.search.banner.slideToggle()
})

nodes.search.close.on("click", () => {
    nodes.search.magnify.show()
    nodes.search.down.hide()
    nodes.search.banner.slideToggle()
})

nodes.search.run.on("click", () => {
    let search_value = nodes.search.input.val()
    let search_url = `https://www.petco.com/shop/SearchDisplay?searchTerm=${search_value}`
    window.location.href = search_url
})

//* SECTIONS: Actions
nodes.sections.triggers.products.on("click", () => {
    nodes.sections.blocks.products.show()
    nodes.sections.blocks.services.hide()
    nodes.sections.blocks.memberships.hide()

    nodes.sections.triggers.products.addClass("action-button-focused")
    nodes.sections.triggers.services.removeClass("action-button-focused")
    nodes.sections.triggers.memberships.removeClass("action-button-focused")
})

nodes.sections.triggers.services.on("click", () => {
    nodes.sections.blocks.products.hide()
    nodes.sections.blocks.services.show()
    nodes.sections.blocks.memberships.hide()

    nodes.sections.triggers.products.removeClass("action-button-focused")
    nodes.sections.triggers.services.addClass("action-button-focused")
    nodes.sections.triggers.memberships.removeClass("action-button-focused")
})

nodes.sections.triggers.memberships.on("click", () => {
    nodes.sections.blocks.products.hide()
    nodes.sections.blocks.services.hide()
    nodes.sections.blocks.memberships.show()

    nodes.sections.triggers.products.removeClass("action-button-focused")
    nodes.sections.triggers.services.removeClass("action-button-focused")
    nodes.sections.triggers.memberships.addClass("action-button-focused")
})

//* SECTION: Sale Banner
nodes.sales.close.on("click", () => {
    nodes.sales.banner.hide()
})

//* SECTION: Products
const loadProductList = list_name => {
    let ref = list_name.toLowerCase()
    nodes.sections.products.list.html("")
    data.products[ref].list.forEach(product => {
        nodes.sections.products.list.append(
            `<li>
                <a href="${product.link}">
                    <img src="${product.img}" alt="${product.name}" width="200px" hiegth="200px">
                    <p>${product.name}</p>
                    <p>$${product.price}</p>
                </a>
            </li>`
        )
    });
    nodes.sections.products.link.html(`Shop ${list_name.replace("-", " ")}`)
    nodes.sections.products.link.attr("href", data.products[ref].link )
}
const productListTrigger = list_name => {
    $(`button[trigger-product-list="${list_name}"]`).on("click", () => {
        loadProductList(list_name)
    })
}

productListTrigger("Dog")
productListTrigger("Cat")
productListTrigger("Fish")
productListTrigger("Small-Pet")
productListTrigger("Reptile")
productListTrigger("Bird")
productListTrigger("All")

loadProductList("Dog")

//TODO: Horizontal Product Scroll
