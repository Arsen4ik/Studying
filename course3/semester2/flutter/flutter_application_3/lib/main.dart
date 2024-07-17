import 'package:flutter/material.dart';
import 'package:flutter_application_3/fourth_screen.dart';
import 'package:flutter_application_3/second_screen.dart';
import 'package:flutter_application_3/third_screen.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

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
  Future<void> navigateToSecondScreen(BuildContext context) async {
    final String? res = await Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) {
          return const SecondScreen();
        },
      ),
    );
    if (res != null) {
      // print(res);
      updateButtonText(res);
    }
  }

  Future<void> navigateToThirdScreen(BuildContext context) async {
    final String? res = await Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) {
          return const ThirdScreen();
        },
      ),
    );
    if (res != null) {
      // print(res);
      updateButtonText(res);
    }
  }

  Future<void> navigateToFourthScreen(BuildContext context) async {
    final String? res = await Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) {
          return const FourthScreen();
        },
      ),
    );
    if (res != null) {
      // print(res);
      updateButtonText(res);
    }
  }

  String text = 'some text';

  void updateButtonText(String newtext) {
    setState(() {
      text = newtext;
    });
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: Text(widget.title),
      ),
      body: SizedBox(
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(
              height: 200,
            ),
            Text(text),
            ElevatedButton(
                onPressed: () {
                  updateButtonText('new Text');
                },
                child: const Text('update text')),
            ElevatedButton(
              onPressed: () {
                navigateToSecondScreen(context);
              },
              child: const Text('go to 2'),
            ),
            ElevatedButton(
              onPressed: () {
                navigateToThirdScreen(context);
              },
              child: const Text('go to 3'),
            ),
            ElevatedButton(
              onPressed: () {
                navigateToFourthScreen(context);
              },
              child: const Text('go to 4'),
            ),
          ],
        ),
      ),
    );
  }
}
