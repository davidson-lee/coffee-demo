import products from '../../assets/products'
import bg from '../../assets/productbg'

const beans = [
    {
        name: "CITY BUZZ",
        roast: "Medium Roast Coffee",
        description: "A rich, vibrant aroma, leaving you with the perfect caffeine buzz",
        bg: bg.blue,
        col: 'rgba(31,56,84,0.15)',
        options: [
            {
                image: products.cityBuzzSm,
                price: 12.00,
                size: "400g"
            },
            {
                image: products.cityBuzzLg,
                price: 24.00,
                size: "2 lbs"
            },
        ]
    },
    {
        name: "RISE N' GRIND",
        roast: "Espresso Coffee",
        description: "Dried fruit sweetness and nutty chocolate to get you to work on-time ",
        bg: bg.orange,
        col: 'rgba(245,195,114,0.15)',
        options: [
            {
                image: products.riseNGrindSm,
                price: 12.00,
                size: "400g"
            },
            {
                image: products.riseNGrindLg,
                price: 24.00,
                size: "2 lbs"
            },
        ]
    },
    {
        name: "DARK & SMOKEY",
        roast: "Dark Roast Coffee",
        description: "Smooth, bold, and hits all the right spots",
        bg: bg.brown,
        col: 'rgba(143,114,100,0.15)',
        options: [
            {
                image: products.darkSmokeySm,
                price: 12.00,
                size: "400g"
            },
            {
                image: products.darkSmokeyLg,
                price: 24.00,
                size: "2 lbs"
            },
        ]
    },
    {
        name: "STILL VIBIN'",
        roast: "Decaf Roast Coffee",
        description: "Scrap the caffeine, keep all the bold flavor ",
        bg: bg.green,
        col: 'rgba(92,155,105,0.15)',
        options: [
            {
                image: products.stillVibenSm,
                price: 12.00,
                size: "400g"
            },
            {
                image: products.stillVibenLg,
                price: 24.00,
                size: "2 lbs"
            },
        ]
    },
]

export default beans