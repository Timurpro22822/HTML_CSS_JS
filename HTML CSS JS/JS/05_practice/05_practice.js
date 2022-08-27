class Button {
    constructor(width, height, text) {
        this.width = width;
        this.height = height;
        this.text = text;
    }
    showBtn() {
        document.write("<button>this.text</button>")
    }
}
const myButton = new Button(46,15,"Button");
myButton.showBtn();

class BootstrapButton extends Button {
    constructor(width,height,text, color) {
        super(width,height,text);
        this.color = color;
    }
    showBtn() {
        console.log(`Width: ${this.width}, height: ${this.height}, text: ${this.text}, color: ${this.color}`);
    }
}
