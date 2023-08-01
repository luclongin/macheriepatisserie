export const emptyCupcakeItem = {
    name: "",
    price: "",
    description: "",
    additionalDesc: "",
    imgUrl: "",
};

export const getDataFromImage = (img) => {
    let res = emptyCupcakeItem;
    cupcakeMenu.map((cupcake) => {
        if (img.includes(cupcake.imgUrl)) {
            res = cupcake;
        }
    });
    return res;
};

export const cupcakeMenu = [
    {
        name: 'Malted Honey & Blackberry Artisan Cupcake',
        price: '35k',
        description: "Fresh, organic blackberry cupcakes filled with blackberry jam, iced with a malted honey buttercream and garnished with a sprig of our bakery-grown mint, a drizzle of local honey and a fresh organic berry.",
        additionalDesc: '( Available June through September )',
        imgUrl: 'malted+honey+blackberry'
    },
    {
        name: 'Raspberry Lady Pot Artisan Cupcake',
        price: '30k',
        description: "Cream cheese cupcakes filled with raspberry jam and iced in a light raspberry jam/cream cheese blend!",
        additionalDesc: '',
        imgUrl: 'raspberry_lady_cc_2023'
    },
    {
        name: 'Dreamsicle Cupcake',
        price: '30k',
        description: "Pure, organic orange extract flavors our cream cheese cupcake which is then topped with cream cheese icing and grated white chocolate.",
        additionalDesc: '( Available March through September )',
        imgUrl: 'dreamsicle_cupcakes_2023'
    },
    {
        name: 'Pumpkin Chocolate Chip Cupcake',
        price: '35k',
        description: "A real shop favorite! Inspired by Spring Garden's pumpkin chocolate chip muffins. Iced with cream cheese.",
        additionalDesc: '',
        imgUrl: 'pcc_cc'
    },
    {
        name: '7 Up Cupcake',
        price: '30k',
        description: "Uplifting organic lemon and lime juice flavor this cake and the cream cheese frosting. Our 7 Up cupcake has a loyal following!",
        additionalDesc: '( Available March through September )',
        imgUrl: '7_up_cupcake_2021'
    },
    {
        name: 'Classic Chocolate Cupcake',
        price: '35k',
        description: "The perennial kids' favorite cake! Butter cupcake with chocolate icing. Pure and simple.",
        additionalDesc: '',
        imgUrl: 'image-asset'
    },
    {
        name: 'Key Lime Curd Pot',
        price: '40k',
        description: "Our cream cheese cupcakes filled with freshly cooked homemade key lime curd! Cream cheese frosting and organic lime zest atop!",
        additionalDesc: '( Available March through September )',
        imgUrl: 'keylime_cupcake_2021c'
    },
    {
        name: 'Chocolate Cupcake with Vanilla Buttercream ',
        price: '35k',
        description: "All Chocolate cupcakes with vanilla buttercream frosting.",
        additionalDesc: '',
        imgUrl: 'choc_bc_cc_2023b'
    },
    {
        name: 'Classic Vanilla Cupcake',
        price: '30k',
        description: "Pure and simple. Vanilla buttercream on our tender cream cheese cupcakes.",
        additionalDesc: '',
        imgUrl: 'vanilla_cupcake'
    },
    {
        name: 'Oreo Buttercream Cupcake',
        price: '35k',
        description: "Something for the kid in all of us! Chocolate cake made with Guittard Chocolate, enrobed in a chocolate cream cookie buttercream icing!",
        additionalDesc: '',
        imgUrl: 'oreo_cupcake_2021'
    },
    {
        name: 'Mocha Buttercream Cupcake',
        price: '35k',
        description: "The perfect combination of coffee and chocolate in a cake! Features organic unbleached flour, buttermilk, melted chocolate chips, organic espresso and pure vanilla.",
        additionalDesc: '',
        imgUrl: 'mocha_cc_2023a'
    },
    {
        name: 'White Chocolate Peppermint Cupcake',
        price: '40k',
        description: "We nestle crushed candies and white chocolate into our batter, then frost with white chocolate buttercream! So fun!",
        additionalDesc: '( Available October through December )',
        imgUrl: 'WCP_cc_2022_03'
    },
    {
        name: 'Seasonal Decorated Cupcakes',
        price: '40k',
        description: "Price may vary with seasonal decoration.",
        additionalDesc: '',
        imgUrl: 'fall_deco_cc_2022_04'
    },
    {
        name: '"18 Carat" Cupcake',
        price: '35k',
        description: "Made with grated organic carrots, pineapple, walnuts & spice. Our favorite carrot cake ... ever!",
        additionalDesc: '',
        imgUrl: '18_karat_cupcake'
    },
    {
        name: 'Brown Sugar Caramel Cupcake',
        price: '35k',
        description: "A fall favorite! Caramel cream cheese frosting atop tender little cupcakes with just a pinch of brown sugar on top!",
        additionalDesc: '( Available October through January )',
        imgUrl: 'brown_sugar_caramel_cupcakes_01'
    },
    {
        name: 'Lemon Curd Pot',
        price: '40k',
        description: "Cream cheese cupcakes filled with our freshly cooked organic lemon curd. Iced with cream cheese frosting and a bit of zest on top!",
        additionalDesc: '',
        imgUrl: 'lemon_curd_pot_2021c'
    },
    {
        name: 'Chocolate Mousse filled Artisan Cupcake with Strawberry Cream Cheese Icing',
        price: '50k',
        description: "All Chocolate cupcake filled with chocolate mousse and topped with strawberry cream cheese icing. Garnished with chocolate curls.",
        additionalDesc: '( Available only in February )',
        imgUrl: 'choc_mousse_cupcake_2021'
    },
    {
        name: 'Red Velvet Cupcake',
        price: '35k',
        description: "Classic red velvet with an extra dose of cocoa! Iced with cream cheese frosting and a few chocolate shavings.",
        additionalDesc: '',
        imgUrl: 'red_velvet_cc_2023b'
    },
    {
        name: 'Caramel Apple Cupcake',
        price: '30k',
        description: "Apple cupcakes with caramel cream cheese frosting!",
        additionalDesc: '( Available October through January )',
        imgUrl: 'apple_caramel_cupcakes_02'
    },
    {
        name: "S'mores Artisan Cupcake",
        price: '50k',
        description: "We make a graham cracker crust, tuck marshmallow filling into our chocolate cupcake, then ice it with a marshmallow buttercream and dip it in our chocolate ganache with mini vegan marshmallows on top! Just too Good!",
        additionalDesc: '( Available October through March )',
        imgUrl: 'smores_2022'
    },
    {
        name: 'All Chocolate Cupcake',
        price: '30k',
        description: "Really makes me think of a cake mix cake ... for all the right reasons! (But its not - we make it from scratch just like all of our other cakes and use melted Guittard chocolate chips! ) It is fluffy, yet rich, has a tender crumb and just begs for a glass of cold milk to drink along with it!",
        additionalDesc: '',
        imgUrl: 'aa_cupcake_2023'
    },
    {
        name: 'Fresh Strawberry & Cream Pot',
        price: '40k',
        description: "Freshly sliced berries fill the inside of this cream cheese cupcake which is topped with vanilla buttercream.",
        additionalDesc: '',
        imgUrl: 'strawberrypots_cc2017'
    },
    {
        name: 'Pink Lemonade Cupcake',
        price: '35k',
        description: "Oh what a cheery cupcake! Pretty pink cake with a light, lemon buttercream & sparkling sugar crystals!",
        additionalDesc: '',
        imgUrl: 'pink+lemonade+cc'
    },
];