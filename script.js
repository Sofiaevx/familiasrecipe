

/* ======= YOUR FULL RECIPE DATABASE (unchanged) ======= */
const recipes = {
    'chiffon-cake': {
        name: 'Basic Chiffon Cake',
        emoji: '🎂',
        time: '1 hour',
        servings: '12',
        difficulty: 'Medium',
        ingredients: [
            '125 g. Cake Flour',
            '50 g. Sugar',
            '3/4 tbsp. Baking Powder',
            '1/4 c. Oil',
            '1/2 tsp. Salt',
            '4 pcs. Egg yolks',
            '1/3 c. Water',
            '1/2 tsp. Flavoring',
            '4 pcs. Egg whites',
            '100 g. Sugar',
            '1 tsp. Cream of Tartar'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
            'In a large bowl, combine flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
            'Add eggs, coffee, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Pour batter evenly into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.',
            'Cool in pans for 10 minutes, then remove to wire racks to cool completely.',
            'Frost with your favorite chocolate frosting and enjoy!'
        ]
    },
    'supermoist9-cake': {
        name: 'Supermoist Cake 9" rd',
        emoji: '🍫',
        time: '1 hour',
        servings: '12',
        difficulty: 'Medium',
        ingredients: [
            '2 cups all-purpose flour',
            '2 cups granulated sugar',
            '¾ cup unsweetened cocoa powder',
            '2 teaspoons baking soda',
            '1 teaspoon baking powder',
            '1 teaspoon salt',
            '2 large eggs',
            '1 cup strong black coffee',
            '1 cup buttermilk',
            '½ cup vegetable oil',
            '1 teaspoon vanilla extract'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
            'In a large bowl, combine flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
            'Add eggs, coffee, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Pour batter evenly into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.',
            'Cool in pans for 10 minutes, then remove to wire racks to cool completely.',
            'Frost with your favorite chocolate frosting and enjoy!'
        ]
    },
    'supermoist8x12-cake': {
        name: 'Supermoist Cake 8 x 12',
        emoji: '🍫',
        time: '1 hour',
        servings: '12',
        difficulty: 'Medium',
        ingredients: [
            '2 cups all-purpose flour',
            '2 cups granulated sugar',
            '¾ cup unsweetened cocoa powder',
            '2 teaspoons baking soda',
            '1 teaspoon baking powder',
            '1 teaspoon salt',
            '2 large eggs',
            '1 cup strong black coffee',
            '1 cup buttermilk',
            '½ cup vegetable oil',
            '1 teaspoon vanilla extract'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
            'In a large bowl, combine flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
            'Add eggs, coffee, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Pour batter evenly into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.',
            'Cool in pans for 10 minutes, then remove to wire racks to cool completely.',
            'Frost with your favorite chocolate frosting and enjoy!'
        ]
    },
    'chocomoist-cake': {
        name: 'Chocomoist Cake',
        emoji: '🍫',
        time: '1 hour',
        servings: '12',
        difficulty: 'Medium',
        ingredients: [
            '2 cups all-purpose flour',
            '2 cups granulated sugar',
            '¾ cup unsweetened cocoa powder',
            '2 teaspoons baking soda',
            '1 teaspoon baking powder',
            '1 teaspoon salt',
            '2 large eggs',
            '1 cup strong black coffee',
            '1 cup buttermilk',
            '½ cup vegetable oil',
            '1 teaspoon vanilla extract'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
            'In a large bowl, combine flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
            'Add eggs, coffee, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Pour batter evenly into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.',
            'Cool in pans for 10 minutes, then remove to wire racks to cool completely.',
            'Frost with your favorite chocolate frosting and enjoy!'
        ]
    },
    'choco-mousse-cake': {
        name: 'Choco mousse Cake',
        emoji: '🍫',
        time: '1 hour',
        servings: '12',
        difficulty: 'Medium',
        ingredients: [
            '2 cups all-purpose flour',
            '2 cups granulated sugar',
            '¾ cup unsweetened cocoa powder',
            '2 teaspoons baking soda',
            '1 teaspoon baking powder',
            '1 teaspoon salt',
            '2 large eggs',
            '1 cup strong black coffee',
            '1 cup buttermilk',
            '½ cup vegetable oil',
            '1 teaspoon vanilla extract'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
            'In a large bowl, combine flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
            'Add eggs, coffee, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Pour batter evenly into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.',
            'Cool in pans for 10 minutes, then remove to wire racks to cool completely.',
            'Frost with your favorite chocolate frosting and enjoy!'
        ]
    },
    'mocha10x14-cake': {
        name: 'Mocha Cake 10 x 14',
        emoji: '🍫',
        time: '1 hour',
        servings: '12',
        difficulty: 'Medium',
        ingredients: [
            '2 cups all-purpose flour',
            '2 cups granulated sugar',
            '¾ cup unsweetened cocoa powder',
            '2 teaspoons baking soda',
            '1 teaspoon baking powder',
            '1 teaspoon salt',
            '2 large eggs',
            '1 cup strong black coffee',
            '1 cup buttermilk',
            '½ cup vegetable oil',
            '1 teaspoon vanilla extract'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
            'In a large bowl, combine flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
            'Add eggs, coffee, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Pour batter evenly into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.',
            'Cool in pans for 10 minutes, then remove to wire racks to cool completely.',
            'Frost with your favorite chocolate frosting and enjoy!'
        ]
    },
    'blackforest-cake': {
        name: 'Black Forest',
        emoji: '🍫',
        time: '1 hour',
        servings: '12',
        difficulty: 'Medium',
        ingredients: [
            '2 cups all-purpose flour',
            '2 cups granulated sugar',
            '¾ cup unsweetened cocoa powder',
            '2 teaspoons baking soda',
            '1 teaspoon baking powder',
            '1 teaspoon salt',
            '2 large eggs',
            '1 cup strong black coffee',
            '1 cup buttermilk',
            '½ cup vegetable oil',
            '1 teaspoon vanilla extract'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
            'In a large bowl, combine flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
            'Add eggs, coffee, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Pour batter evenly into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.',
            'Cool in pans for 10 minutes, then remove to wire racks to cool completely.',
            'Frost with your favorite chocolate frosting and enjoy!'
        ]
    },
    'crema-cake': {
        name: 'Crema de Fruta',
        emoji: '🍫',
        time: '1 hour',
        servings: '12',
        difficulty: 'Medium',
        ingredients: [
            '2 cups all-purpose flour',
            '2 cups granulated sugar',
            '¾ cup unsweetened cocoa powder',
            '2 teaspoons baking soda',
            '1 teaspoon baking powder',
            '1 teaspoon salt',
            '2 large eggs',
            '1 cup strong black coffee',
            '1 cup buttermilk',
            '½ cup vegetable oil',
            '1 teaspoon vanilla extract'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
            'In a large bowl, combine flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
            'Add eggs, coffee, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Pour batter evenly into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.',
            'Cool in pans for 10 minutes, then remove to wire racks to cool completely.',
            'Frost with your favorite chocolate frosting and enjoy!'
        ]
    },
    'ube-cake': {
        name: 'Ube Cake',
        emoji: '🍫',
        time: '1 hour',
        servings: '12',
        difficulty: 'Medium',
        ingredients: [
            '2 cups all-purpose flour',
            '2 cups granulated sugar',
            '¾ cup unsweetened cocoa powder',
            '2 teaspoons baking soda',
            '1 teaspoon baking powder',
            '1 teaspoon salt',
            '2 large eggs',
            '1 cup strong black coffee',
            '1 cup buttermilk',
            '½ cup vegetable oil',
            '1 teaspoon vanilla extract'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
            'In a large bowl, combine flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
            'Add eggs, coffee, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Pour batter evenly into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.',
            'Cool in pans for 10 minutes, then remove to wire racks to cool completely.',
            'Frost with your favorite chocolate frosting and enjoy!'
        ]
    },
    'yema-cake': {
        name: 'Yema Cake',
        emoji: '🍫',
        time: '1 hour',
        servings: '12',
        difficulty: 'Medium',
        ingredients: [
            '2 cups all-purpose flour',
            '2 cups granulated sugar',
            '¾ cup unsweetened cocoa powder',
            '2 teaspoons baking soda',
            '1 teaspoon baking powder',
            '1 teaspoon salt',
            '2 large eggs',
            '1 cup strong black coffee',
            '1 cup buttermilk',
            '½ cup vegetable oil',
            '1 teaspoon vanilla extract'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
            'In a large bowl, combine flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
            'Add eggs, coffee, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Pour batter evenly into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.',
            'Cool in pans for 10 minutes, then remove to wire racks to cool completely.',
            'Frost with your favorite chocolate frosting and enjoy!'
        ]
    },

    // Bread===================================================================================================================================
    'croissant': {
        name: 'Croissant',
        emoji: '🍫',
        time: '1 hour',
        servings: '12',
        difficulty: 'Medium',
        ingredients: [
            '2 cups all-purpose flour',
            '2 cups granulated sugar',
            '¾ cup unsweetened cocoa powder',
            '2 teaspoons baking soda',
            '1 teaspoon baking powder',
            '1 teaspoon salt',
            '2 large eggs',
            '1 cup strong black coffee',
            '1 cup buttermilk',
            '½ cup vegetable oil',
            '1 teaspoon vanilla extract'
        ],
        instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch round cake pans.',
            'In a large bowl, combine flour, sugar, cocoa powder, baking soda, baking powder, and salt.',
            'Add eggs, coffee, buttermilk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Pour batter evenly into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick inserted in center comes out clean.',
            'Cool in pans for 10 minutes, then remove to wire racks to cool completely.',
            'Frost with your favorite chocolate frosting and enjoy!'
        ]
    },

    //Cookies===================================================================================================================================
    
};

/* Track category user is in */
let currentCategory = '';

/* ======================================================
   SHOW HOME
====================================================== */
function showHome() {
    document.getElementById('homeView').classList.remove('hidden');
    document.getElementById('cakesList').classList.remove('active');
    document.getElementById('breadsList').classList.remove('active');
    document.getElementById('cookiesList').classList.remove('active');
    document.getElementById('recipeDetail').classList.remove('active');
    window.scrollTo(0, 0);
}

/* ======================================================
   SHOW CATEGORY (cakes, breads, cookies)
====================================================== */
function showCategory(category) {
    currentCategory = category;

    document.getElementById('homeView').classList.add('hidden');

    // Hide all category lists
    document.getElementById('cakesList').classList.remove('active');
    document.getElementById('breadsList').classList.remove('active');
    document.getElementById('cookiesList').classList.remove('active');

    // Show selected
    document.getElementById(category + 'List').classList.add('active');

    // Hide recipe detail
    document.getElementById('recipeDetail').classList.remove('active');

    window.scrollTo(0, 0);
}

/* ======================================================
   SHOW RECIPE DETAILS
====================================================== */
function showRecipe(recipeId) {
    const recipe = recipes[recipeId];
    if (!recipe) return;

    // Hide lists
    document.getElementById('cakesList').classList.remove('active');
    document.getElementById('breadsList').classList.remove('active');
    document.getElementById('cookiesList').classList.remove('active');

    const detail = document.getElementById('recipeDetail');

    // Build recipe page
    detail.innerHTML = `
            <button class="back-button" onclick="showCategory('${currentCategory}')">← Back</button>

            <div class="recipe-content">
                <div class="recipe-header">
                    <h2>${recipe.emoji} ${recipe.name}</h2>
                    <div class="recipe-meta">
                        <span>⏱️ ${recipe.time}</span>
                        <span>🍽️ ${recipe.servings}</span>
                        <span>⭐ ${recipe.difficulty}</span>
                    </div>
                </div>

                <div class="recipe-section">
                    <h3>Ingredients</h3>
                    <ul>
                        ${recipe.ingredients.map(i => `<li>${i}</li>`).join('')}
                    </ul>
                </div>

                <div class="recipe-section">
                    <h3>Instructions</h3>
                    <ol>
                        ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
                    </ol>
                </div>
            </div>
        `;

    // Show the detail view
    detail.classList.add('active');
    window.scrollTo(0, 0);
}