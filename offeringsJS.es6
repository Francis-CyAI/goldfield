class Article {
    constructor(title, imgSrc, content) {
        this.title = title;
		this.img = imgSrc;
        this.content = content;

		populate("title", "change", title) // page title
		setImageSrc("articleImg", imgSrc) // article image
		populate("articleTitle", "change", title) // article title

		for (let i = 0; i < this.content.length; i++) {
			populate("offeringArticle", "add",`
			<p class="contents">${content[i]}</p>
			`)
		}
    }
};


const article = localStorage.getItem('article');
if (article == "cookingOil") {
	const cookingOil = new Article(
		"Cooking Oil and Animal Feed",
		"images/cooking_oil.jpg", 
		[
			`Both Broiler and Village chickens are raised to provide
			a sustainable source of poultry products.`
		]
	);
} else if (article == "porkProducts") {
	const poultry = new Article(
		"Pig Breeding and Pork Products",
		"images/piggery.jpg", 
		[
			`Both Broiler and Village chickens are raised to provide
			a sustainable source of poultry products.`
		]
	);
} else if (article == "fruits") {
	const poultry = new Article(
		"Fruit Plantations",
		"images/banana_plantation.jpg", 
		[
			`Both Broiler and Village chickens are raised to provide
			a sustainable source of poultry products.`
		]
	);
} else if (article == "compostManure") {
	const poultry = new Article(
		"Liquid fertilizer and Compost Manure Products",
		"images/compost_manure.jpg", 
		[
			`Both Broiler and Village chickens are raised to provide
			a sustainable source of poultry products.`
		]
	);
}  else if (article == "fishFarming") {
	const poultry = new Article(
		"Fish Farming",
		"images/fish_farming.jpg", 
		[
			`Both Broiler and Village chickens are raised to provide
			a sustainable source of poultry products.`
		]
	);
} else if (article == "nurseryPM") {
	const poultry = new Article(
		"Nursery Plant Management",
		"images/nursery_plant_management.jpg", 
		[
			`Both Broiler and Village chickens are raised to provide
			a sustainable source of poultry products.`
		]
	);
} else if (article == "poultryR") {
	const poultry = new Article(
		"Poultry Rearing",
		"images/poultry.jpg", 
		[
			`Both Broiler and Village chickens are raised to provide
			a sustainable source of poultry products.`
		]
	);
} else if (article == "agricT") {
	const poultry = new Article(
		"Agricultural Training and consultations",
		"images/agricultural_training.jpg", 
		[
			`Both Broiler and Village chickens are raised to provide
			a sustainable source of poultry products.`
		]
	);
} else if (article == "vegeCult") {
	const poultry = new Article(
		"Vegetable Cultivation",
		"images/vegetable_cultivation.jpg", 
		[
			`Both Broiler and Village chickens are raised to provide
			a sustainable source of poultry products.`
		]
	);
} 
