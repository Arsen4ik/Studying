import 'package:flutter/material.dart';
import 'package:flutter_application_5/product.dart';
import 'package:flutter_application_5/productsScreen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  List<Product> productList = [
    Product(
        id: 1,
        title: 'конфеты',
        price: 2,
        img:
            'https://images.unsplash.com/photo-1575224300306-1b8da36134ec?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y2FuZHl8ZW58MHx8MHx8fDA%3D',
        description:
            'Твёрдые и круглые конфеты — основная причина смерти детей от удушья. Некоторые виды конфет, такие как ДА, были связаны с таким количеством смертей от удушья, что их импорт или производство запрещены в некоторых странах.'),
    Product(
      id: 2,
      title: 'рога',
      price: 10007,
      img:
          'https://images.unsplash.com/photo-1529220796654-1ab99c2f2937?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aG9ybnxlbnwwfDF8MHx8fDA%3D',
    ),
    Product(
      id: 3,
      title: 'солнцезащитные очки',
      price: 52,
      img:
          'https://images.unsplash.com/photo-1599705709640-9f9eb5964485?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHN1bmdsYXNzZXN8ZW58MHwxfDB8fHww',
    ),
    Product(
      id: 4,
      title: 'кожаные перчатки',
      price: 1400,
      img:
          'https://images.unsplash.com/photo-1600887996856-7a3f631e349a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGxlYXRoZXIlMjBnbG92ZXN8ZW58MHwxfDB8fHww',
    ),
    Product(
        id: 5,
        title: 'эчпочмак',
        price: 78,
        img:
            'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDw2OoHuCgkUezfDZsGCeJyDXn6ttbzYgEgA&s',
        description:
            'Памятник эчпочмаку установили в 2016 году в Казани. Он стоит на небольшом постаменте, имеет в высоту и ширину около двух метров. Скульптура расположена в национальном комплексе «Туган Авылым» на улице Туфана Миннуллина.'),
    Product(
        id: 6,
        title: 'tesla',
        price: 3200000,
        img:
            'https://images.unsplash.com/photo-1571987502227-9231b837d92a?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHRlc2xhfGVufDB8fDB8fHww',
        description: 'машина, электромобиль'),
  ];

  Future<List?> getProducts() async {
    await Future.delayed(const Duration(seconds: 1));
    return productList;
  }

  Future<void> navigate(BuildContext context, Product product) async {
    // ignore: unused_local_variable
    final String? res = await Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) {
          return productsScreen(product: product);
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Colors.black54,
        shadowColor: Colors.black54,
        titleTextStyle: const TextStyle(
            color: Colors.white,
            letterSpacing: 5,
            fontWeight: FontWeight.w700,
            fontSize: 30),
        title: const Text('product store'),
      ),
      body: FutureBuilder(
        future: getProducts(),
        builder: (context, snapshot) {
          if (snapshot.connectionState == ConnectionState.waiting) {
            return const Center(
              child: CircularProgressIndicator(),
            );
          }
          if (snapshot.connectionState == ConnectionState.done) {
            if (snapshot.hasError) {
              return Center(
                child: Text(snapshot.error.toString()),
              );
            }
            if (snapshot.hasData) {
              return Container(
                  margin: const EdgeInsets.only(top: 50),
                  child: GridView.builder(
                      gridDelegate:
                          const SliverGridDelegateWithFixedCrossAxisCount(
                        crossAxisCount: 2, // количество столбцов
                        crossAxisSpacing:
                            16, // горизонтальный отступ между элементами
                        mainAxisSpacing:
                            40, // вертикальный отступ между элементами
                      ),
                      itemCount: productList.length,
                      itemBuilder: (context, index) {
                        return Padding(
                            padding: const EdgeInsets.symmetric(
                                horizontal: 4, vertical: 4),
                            child: GestureDetector(
                              onTap: () {
                                navigate(context, productList[index]);
                              },
                              child: Column(children: [
                                SizedBox(
                                    width: 250,
                                    height: 120,
                                    child: Image.network(
                                      productList[index].img!,
                                      fit: BoxFit.scaleDown,
                                    )),
                                Text(
                                  productList[index].title,
                                  style: const TextStyle(
                                      fontSize: 20,
                                      fontWeight: FontWeight.w600),
                                  textAlign: TextAlign.center,
                                ),
                                Text(
                                    '${productList[index].price.toString()}\$'),
                              ]),
                            ));
                      }));
            }
          }
          return const Center(
            child: Text('Some error'),
          );
        },
      ),
    );
  }
}
