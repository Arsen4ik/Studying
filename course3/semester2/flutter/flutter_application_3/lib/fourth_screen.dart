import 'package:flutter/material.dart';
import 'package:flutter_application_3/main.dart';

class FourthScreen extends StatelessWidget {
  const FourthScreen({super.key});

  void navigateToMainScreen(BuildContext context) {
    print('4321');
    Navigator.of(context).push(MaterialPageRoute(builder: (context) {
      return const MyHomePage(title: 'home');
    }));
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('Fourth screen'),
      ),
      body: SizedBox(
        width: double.infinity,
        child: Column(
          crossAxisAlignment: CrossAxisAlignment.center,
          children: [
            const SizedBox(
              height: 200,
            ),
            ElevatedButton(
              onPressed: () {
                // navigateToMainScreen(context);
                Navigator.of(context).pop('hi from 4');
              },
              child: const Text('with message'),
            ),
            ElevatedButton(
              onPressed: () {
                // navigateToMainScreen(context);
                Navigator.of(context).pop();
              },
              child: const Text('without message'),
            )
          ],
        ),
      ),
    );
  }
}
