import { Selector } from "testcafe";

export default class Categories { 

    //Categories
    public container = Selector('.item-category-block-view-pc');
    public allCategories = Selector('.item-category-block-view-pc');
    public electronicsCategory = this.container.find('#Category-0')
    public homeAppliancesCategory = this.container.find('#Category-1')
    public computersCategory = this.container.find('#Category-2')
    public officeAppliancesCategory = this.container.find('#Category-3')
    public autoCategory = this.container.find('#Category-4')
    public momAndKidsCategory = this.container.find('#Category-5')
    public sportCategory = this.container.find('#Category-6')
    public gardenCategory = this.container.find('#Category-7')
    public repairCategory = this.container.find('#Category-8')
    public dicscountCategory = this.container.find('#Category-9')
    
    //Subcategories - mobile
    public mobileSubcategory = this.container.find('#But-Section-84-Category-59')
}