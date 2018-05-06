import { Calculator } from "./Calculator";

class DecCalculator extends Calculator{
    constructor(settings) {
        super(settings);
        console.log( this.getName() );
    }

    /* Method add numbers in two array
    *  @param {array} numberX First number
    *  @param {array} numberY Second number
    *  @return {array}
    */
    add(numberX, numberY) {

        let result = [0,0,0,0,0,0,0,0,0];
        for(let i = numberX.length - 1; i >= 0  ; i--) {
            let carryBit =  numberX[i] + numberY[i] + result[i];
            if( carryBit  > 9) {
                result[i] = (numberX[i] + numberY[i] + result[i]) % 10;
                result[i-1] = 1;
            }
            else {
                result[i] = carryBit;
            }
        }
        console.log(result);
        return result;
    }

    /* Method changing number
    *  @param {jQuery element} root Parent element
    */
    changeNumber(root) {
        let activeElement = root.find('.active');
        activeElement.attr("contenteditable", true);
        activeElement.trigger("focus");

        // activeElement.removeClass("active");
        // activeElement.siblings().addClass("active");
        // root.children(":first-child").slideToggle(() => {
        //      this.checkNumber();
        //      this.updateResult();
        // });
    }

    checkNumber(){
        super.checkNumber();
    }


    initEvents(){
        super.initEvents();

        let plus = $('.dec-calculator .operator-bar span');
        console.log(plus);

        plus.on('click', ()=> {

            this.checkNumber();
            this.updateResult();
        })

    }

    /* Method changing Result
    */
    updateResult() {
         let root =  this.$calculatorDOMElement;

         let $resultNumber = root.children(".group-number").children(".result-bit");
         console.log($resultNumber);

         for(let i =  this.resultNumberArray.length - 1, j = 0; i >= 0 ; i--, j++) {

        $resultNumber.eq(j).find(".active").text(this.resultNumberArray[i]);
         }
    }


}


export { DecCalculator  };
