//Class with constructor and implement interface
/*
Why do we need to use Interface in project structure?
1. It maintains code structure. Class that implement interface, it follow properties and methods in Interface. It makes code consistent, and maintainable.
2. It can be used at documentation. We can see what are properties and methods expected to have when just looking at Interface
 */


//Inheritance

/*
Why we use Interitance?
What is Interitance? 
A class can reuse the properties and methods of another class. This is called inheritance in TypeScript.
- It makes code reusable by contructor and method overriding
- Derived class inherit properties and methods from base class
*/

import { PromotionInterface } from '../interface/PromotionInterface';
class Promotion implements PromotionInterface {
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
        this.bonusAmount = (depositAmount * bonusPercentage) / 100
    }

    getPromotionDetails() {
        return `Promo title: ${this.promoTitle}
                Promo Content: ${this.promoContent} 
                Deposit Amount: ${this.depositAmount}
                Bonus Percentage: ${this.bonusPercentage}
                Bonus Amount: ${this.bonusAmount}`
    }
}

class RegisterBonusPromotion extends Promotion {
    turnoverRollover: number;
    minTurnOverToWithdraw: number;

    constructor(title: string, content: string, depositAmount: number, bonusPercentage: number, turnoverRollover: number) {
        super(title, content, depositAmount, bonusPercentage);
        this.turnoverRollover = turnoverRollover;
        this.minTurnOverToWithdraw = this.bonusAmount * turnoverRollover;
    }

    updateRegisterBonusPromotion(title: string, content: string, depositAmount: number, bonusPercentage: number, turnoverRollover: number) {
        super.updatePromotion(title, content, depositAmount, bonusPercentage)
        this.turnoverRollover = turnoverRollover;
        this.minTurnOverToWithdraw = this.bonusAmount * turnoverRollover;
    }

    getPromotionDetails() {
        return ` ${super.getPromotionDetails()}
                Turnover Rollover: ${this.turnoverRollover}
                Minimum Turnover to Withdraw: ${this.minTurnOverToWithdraw}
                `
    }
}

var promo = new RegisterBonusPromotion("Regi title", "Regi content", 100, 10, 2);
promo.updateRegisterBonusPromotion("Regi title 1", "Regi content 1", 400, 10, 2);
console.log(promo.getPromotionDetails());



