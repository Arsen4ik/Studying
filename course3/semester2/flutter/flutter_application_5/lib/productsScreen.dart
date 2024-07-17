// ignore_for_file: file_names

import 'package:flutter/material.dart';
import 'package:flutter_application_5/product.dart';

// ignore: camel_case_types
class productsScreen extends StatelessWidget {
  const productsScreen({super.key, required this.product});
  final Product product;
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
          title: const Text('back to store'),
        ),
        body: Container(
          margin: const EdgeInsets.only(top: 20),
          child: Column(children: [
            Text(
              product.title,
              style: const TextStyle(fontSize: 25, fontWeight: FontWeight.w600),
            ),
            Container(
                margin: const EdgeInsets.only(top: 15, bottom: 15),
                child: SizedBox(
                    // width: 400,
                    height: 300,
                    child: Image.network(product.img!, fit: BoxFit.scaleDown))),
            Padding(
                padding:
                    const EdgeInsets.symmetric(horizontal: 30, vertical: 10),
                child: Text(product.description ?? '_no description')),
            Padding(
              padding: const EdgeInsets.symmetric(horizontal: 30, vertical: 10),
              child: Row(
                mainAxisAlignment: MainAxisAlignment.spaceEvenly,
                children: [
                  Text('ID товара: ${product.id}'),
                  Text('цена товара: ${product.price}\$')
                ],
              ),
            )
          ]),
        ));
  }
}
