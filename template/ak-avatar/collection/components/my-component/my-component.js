export class MyComponent {
    render() {
        return (h("div", null,
            h("div", null,
                h("img", { class: "avatar", src: this.image, width: "250", height: "200" })),
            h("div", { class: "legend" },
                h("h1", null, this.message))));
    }
    static get is() { return "ak-avatar"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "image": {
            "type": String,
            "attr": "image"
        },
        "message": {
            "type": String,
            "attr": "message"
        }
    }; }
    static get style() { return "/**style-placeholder:ak-avatar:**/"; }
}
