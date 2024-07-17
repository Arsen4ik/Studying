import 'package:flutter/material.dart';
import 'package:flutter_application_6/main.dart';

class ThirdScreen extends State<MyHomePage> {
//  ThirdScreen({super.key});

  @override
  Widget build(BuildContext context) {
    bool light = true;

    return Scaffold(
        body: Switch(
      value: light,
      activeColor: Colors.red,
      onChanged: (bool value) {
        setState(() {
          light = value;
        });
      },
    ));
  }
}
