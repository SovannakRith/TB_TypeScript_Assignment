/*

*/

type Promotion = {
    title: string;
    content: string;
    createPromotion(title: string, content: string): void;
    getPromotionDetails(): string;

};

class RegisterPromotion implements Promotion {

    constructor(public title: string, public content: string) {
    }

    createPromotion(title: string, content: string): void {
        this.title = title;
        this.content = content;
    }

    getPromotionDetails(): string {
        return `Promotion title: ${this.title}
                Promotion content: ${this.content}
        `;

    }

};

var promo3 = new RegisterPromotion("title", "content");
promo3.createPromotion("title1", "content1");
console.log(promo3.getPromotionDetails());


