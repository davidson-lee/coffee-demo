import products from '../../assets/products'
import bg from '../../assets/productbg'

const nespresso = [
    {
        name: "VIBE NESPRESSO",
        roast: "Espresso Roast",
        description: `Custom designed using imported technology, enjoy our premium quality roast in a Nespresso compatible capsule.
        
        10 capsules per box`,
        bg: bg.nespresso,
        col: 'rgba(185,152,125,0.15)',
        options: [
            {
                image: products.nespresso,
                price: 6,
                size: "1 box"
            },
        ]
    }
]

export default nespresso