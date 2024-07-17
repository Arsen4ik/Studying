class Product {
  Product({
    required this.id,
    required this.title,
    required this.price,
    this.img,
    this.description,
  });
  int id;
  String title;
  int price;
  String? img;
  String? description;
}
