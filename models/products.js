class Product {
    constructor(id, ownerId, title, imageUrl, description, price, thc, cbd, flavnAroma){
        this.id = id;
        this.ownerId = ownerId;
        this.title = title;
        this.imageUrl = imageUrl;
        this.description = description;
        this.price = price;
        this.thc = thc;
        this.cbd = cbd;
        this.flavnAroma = flavnAroma;
    }
}

export default Product;