localStorage.setItem('name', "John Smith");
localStorage.getItem('name');


const poultry = new Article("Poultry Rearing", "images/poultry.jpg", [
	`Both Broiler and Village chickens are raised to provide
	a sustainable source of poultry products.`
])

class Article {
    constructor(title, imgSrc, content) {
        this.title = title;
		this.img = img;
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
