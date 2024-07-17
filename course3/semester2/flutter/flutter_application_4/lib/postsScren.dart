import 'package:flutter/material.dart';
import 'package:flutter_application_4/user.dart';

class postsScreen extends StatelessWidget {
  const postsScreen({super.key, required this.user});
  final User user;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        backgroundColor: Theme.of(context).colorScheme.inversePrimary,
        title: const Text('go back'),
      ),
      body: SizedBox(
          width: double.infinity,
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.center,
            children: [
              Text(user.name),
              if (user.post != null) Text(user.post!.title),
              if (user.post != null) Text(user.post!.text)
            ],
          )),
    );
  }
}
