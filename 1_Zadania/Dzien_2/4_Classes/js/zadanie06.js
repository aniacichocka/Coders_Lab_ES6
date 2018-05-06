$(function(){


    let btn = $('#add');
    let ul = $('#products');


    let foods =[];

    class Food {
      constructor(name, protein, carbs, fat) {
        this.name = name;
        this.protein = protein;
        this.carbs = carbs;
        this.fat = fat;
      }
      print(){
          return this.name + this.protein + 'g proteins ' + this.carbs + 'g carbs ' + this.fat + 'g fat';
      }
    }

    class FastFood extends Food{}

    class FatFreeFood extends Food{}


    let sum = (name, protein, carbs, fat) => {
        let calories = (protein*4) + (carbs*9) + (fat*4);

        if (calories > 250){
            return new FastFood(name, protein, carbs, fat);
        } else {
            return new FatFreeFood(name, protein, carbs, fat);
        }
    }


    btn.on('click', function(e){
        e.preventDefault();
        let name = $('#name').val();
        let protein = parseInt($('#proteins').val());
        let carbs = parseInt($('#carbs').val());
        let fat = parseInt($('#fat').val());

        // var li = $('<li>');
        // var h3 = $('<h3>').text(name);
        // var span = $('<span>').text(protein + '    ' + carbs + '    ' + fat);

        // li.append(h3);
        // li.append(span);
        // ul.append(li);

        let food = sum(name, protein, carbs, fat);
        let li = $('<li>').text(food.print());
        ul.append(li);

        foods.push(food);
        console.log(foods);

    })

})
