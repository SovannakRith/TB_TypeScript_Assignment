
/*
Why we use class?
Class is a blueprint to create object. 
1. Encapsulate related and relevant data such as properties and method inside the class. It makes dev easier to organize and manage code
2. It support Inheritance. (I'll explain in the Inheritance part)
3. It support Interface. (I'll explain in Interface part)

*/

//Class with constructor
class TestPromotion {
    promoTitle: string;
    promoContent: string;
    depositAmount: number;
    bonusPercentage: number;
    bonusAmount: number;

    constructor(title: string, content: string, depositAmount: number, bonusPercentage: number) {
        this.promoTitle = title;
        this.promoContent = content;
        this.depositAmount = depositAmount;
        this.bonusPercentage = bonusPercentage;
        this.bonusAmount = (depositAmount * bonusPercentage) / 100
    }

    updatePromotion(title: string, content: string, depositAmount: number, bonusPercentage: number) {
        this.promoTitle = title;
        this.promoContent = content;
        this.depositAmount = depositAmount;
        this.bonusPercentage = bonusPercentage;
    }

    getPromotionDetails() {
        return `Promo title: ${this.promoTitle}
                Promo Content: ${this.promoContent} 
                Deposit Amount: ${this.depositAmount}
                Bonus Percentage: ${this.bonusPercentage}
                Bonus Amount: ${this.bonusAmount}`
    }
}

var promo2 = new TestPromotion("title", "content", 100, 10);
console.log(promo2.getPromotionDetails());
promo2.updatePromotion("title1", "content1", 200, 10);
console.log(promo2.getPromotionDetails());
