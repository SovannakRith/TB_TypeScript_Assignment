export interface PromotionInterface {
    promoTitle: string;
    promoContent: string;
    depositAmount: number;
    bonusPercentage: number;
    bonusAmount: number;
    updatePromotion(title: string, content: string, depositAmount: number, bonusPercentage: number): void;
    getPromotionDetails(): string;
}