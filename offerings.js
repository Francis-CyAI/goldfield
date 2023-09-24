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
			`Groundnuts, soya beans, and sunflower are processed 
			to extract cooking oil, with the by-products being 
			utilized to manufacture nutritious animal feed for farmers.`
		]
	);
} else if (article == "porkProducts") {
	const poultry = new Article(
		"Pig Breeding and Pork Products",
		"images/piggery.jpg", 
		[
			`The farm breeds pigs to ensure high quality genetics 
			and provides healthy pigs to support pork production.`
		]
	);
} else if (article == "fruits") {
	const poultry = new Article(
		"Fruit Plantations",
		"images/banana_plantation.jpg", 
		[
			`Banana and Avocado plantations are maintained 
			to supply fresh and delicious fruits to the market.`
		]
	);
} else if (article == "compostManure") {
	const poultry = new Article(
		"Liquid fertilizer and Compost Manure Products",
		"images/compost_manure.jpg", 
		[
			`Liquid fertilizer and compost manure are produced 
			using organic materials to enhance soil fertility
			 and agricultural productivity.`
		]
	);
}  else if (article == "fishFarming") {
	const poultry = new Article(
		"Fish Farming",
		"images/fish_farming.jpg", 
		[
			`Producing fresh fish direct from the ponds.`
		]
	);
} else if (article == "nurseryPM") {
	const poultry = new Article(
		"Nursery Plant Management",
		"images/nursery_plant_management.jpg", 
		[
			`The nursery manages a diverse selection of plants, 
			including ornamental plants, flowers and garden 
			essentials, catering to gardening and landscaping needs.`
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
			`We provide programs and expert consultations 
			for aspiring and startup farmers, helping them 
			achieve success in their farming ventures.`
		]
	);
} else if (article == "vegeCult") {
	const poultry = new Article(
		"Vegetable Cultivation",
		"images/vegetable_cultivation.jpg", 
		[
			`A wide variety of vegetables, including Rape, Chinese, 
			Cabbage, Okra, Tomatoes, Onions, Green Pepper, Chili, 
			and Eggplants are cultivated using sustainable farming practices.`
		]
	);
} 
