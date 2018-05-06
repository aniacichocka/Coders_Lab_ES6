<img alt="Logo" src="http://coderslab.pl/svg/logo-coderslab.svg" width="400">

# ES6 - Snippety
> Krótkie kawałki kodu, które pokazują zależności, rozwiązują popularne problemy oraz pokazują jak używać niektórych funkcji.

#### 1. Konfiguracja Webpack

```JavaScript
module.exports = {
    entry: "./js/app.js",
    output: {
        filename: "./js/out.js"
    },
    watch: true,
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ['style-loader', 'css-loader']
            },
            {
                test: /\.scss$/,
                loader: ['style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    devServer: {
        filename: './js/out.js',
    }
}
```

#### 2. Klasa abstrakcyjna i klasa dziedziczaca.

```JavaScript```
class Animal {
	constructor(type){
		this.type = type;
	}

	breath(){
		console.log("I breathe");
	}
}

class Dog extends Animal {
	constructor(type){
		super(type);
	}

	bark(){
		console.log("Now I am barking")
	}
}
 let dog = new Dog("Mammal");
 dog.breath();
 dog.bark();
```
