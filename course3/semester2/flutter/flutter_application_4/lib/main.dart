import 'dart:math';

import 'package:flutter/material.dart';
import 'package:flutter_application_4/post.dart';
import 'package:flutter_application_4/postsScren.dart';
import 'package:flutter_application_4/user.dart';

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
        // This is the theme of your application.
        //
        // TRY THIS: Try running your application with "flutter run". You'll see
        // the application has a purple toolbar. Then, without quitting the app,
        // try changing the seedColor in the colorScheme below to Colors.green
        // and then invoke "hot reload" (save your changes or press the "hot
        // reload" button in a Flutter-supported IDE, or press "r" if you used
        // the command line to start the app).
        //
        // Notice that the counter didn't reset back to zero; the application
        // state is not lost during the reload. To reset the state, use hot
        // restart instead.
        //
        // This works for code too, not just values: Most code changes can be
        // tested with just a hot reload.
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepPurple),
        useMaterial3: true,
      ),
      home: const MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  const MyHomePage({super.key, required this.title});

  // This widget is the home page of your application. It is stateful, meaning
  // that it has a State object (defined below) that contains fields that affect
  // how it looks.

  // This class is the configuration for the state. It holds the values (in this
  // case the title) provided by the parent (in this case the App widget) and
  // used by the build method of the State. Fields in a Widget subclass are
  // always marked "final".

  final String title;

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  Future<String?> getHelloMessage() async {
    await Future.delayed(const Duration(seconds: 3));
    // return 'hello';
    final res = Random().nextInt(3);

    if (res > 1) {
      return 'hello';
    }
    throw Exception('1234');
  }

  List<User> userList = [
    User(
        id: 1,
        name: 'Ars 1',
        secondName: 'F 1',
        post: Post(title: "title 1", text: "text 1")),
    User(id: 2, name: 'Ars 2', secondName: 'F 2'),
    User(
        id: 3,
        name: 'Ars 3',
        secondName: 'F 3',
        post: Post(title: "title 3", text: "text 3")),
  ];
  Future<void> navigate(BuildContext context, User user) async {
    final String? res = await Navigator.of(context).push(
      MaterialPageRoute(
        builder: (context) {
          return postsScreen(user: user);
        },
      ),
    );
  }

  @override
  Widget build(BuildContext context) {
    // This method is rerun every time setState is called, for instance as done
    // by the _incrementCounter method above.
    //
    // The Flutter framework has been optimized to make rerunning build methods
    // fast, so that you can just rebuild anything that needs updating rather
    // than having to individually change instances of widgets.
    return Scaffold(
      appBar: AppBar(centerTitle: true, title: const Text('User List')),
      // body: ListView.builder(
      //     itemCount: userList.length,
      //     itemBuilder: (constext, index) {
      //       return Padding(
      //         padding: EdgeInsets.symmetric(horizontal: 16, vertical: 4),
      //         child: Column(
      //           children: [
      //             Container(
      //               child: Text(
      //                 userList[index].name,
      //                 style: const TextStyle(fontSize: 25),
      //               ),
      //             ),
      //             ElevatedButton(
      //               onPressed: () {
      //                 navigate(context, userList[index]);
      //               },
      //               child: const Text('go to user posts'),
      //             ),
      //           ],
      //         ),
      //       );
      //     })
      body: FutureBuilder(
        future: getHelloMessage(),
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
              return Center(
                child: Text(snapshot.data!),
              );
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
