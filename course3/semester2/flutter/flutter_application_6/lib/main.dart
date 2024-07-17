import 'package:flutter/material.dart';
import 'package:flutter_application_6/ThirdScreen.dart';

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
  Future<void> openBottomSheet(BuildContext context) async {
    showModalBottomSheet(
        context: context,
        builder: (context) {
          return SizedBox(
            width: double.infinity,
            child: Column(
              mainAxisSize: MainAxisSize.max,
              children: [
                const SizedBox(
                  height: 20,
                ),
                const Text('bottom sheet'),
                ElevatedButton(onPressed: () {}, child: const Text('tap me'))
              ],
            ),
          );
        });
  }

  Future<void> openDialog(BuildContext context) async {
    final res = await showDialog(
        context: context,
        builder: (context) {
          return AlertDialog(
            content: const Text('1234'),
            actions: [
              TextButton(
                  onPressed: () {
                    Navigator.of(context).pop(false);
                  },
                  child: const Text('no')),
              TextButton(
                  onPressed: () {
                    Navigator.of(context).pop(true);
                  },
                  child: const Text('yes')),
            ],
          );
        });
    print(res);
  }

  int currentIndex = 0;

  void onBottomNavBarTap(int newIndex) {
    setState(() {
      currentIndex = newIndex;
    });
  }

  List<Widget> widgets = [
    const Text('home'),
    // ThirdScreen(),
    const Text('work'),
    const Text('profile'),
  ];

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
      // body: Center(
      //     child: Column(
      //   mainAxisAlignment: MainAxisAlignment.center,
      //   children: [
      //     ElevatedButton(
      //         onPressed: () {
      //           openBottomSheet(context);
      //         },
      //         child: const Text('tab to open bottom screen')),
      //     Container(
      //       margin: const EdgeInsets.only(top: 20),
      //       child: ElevatedButton(
      //           onPressed: () {
      //             openDialog(context);
      //           },
      //           child: const Text('tab to open alert dialog')),
      //     ),
      //   ],
      // )),
      body: Column(children: [
        widgets[currentIndex],
        currentIndex == 1
            ? Container(
                margin: const EdgeInsets.only(top: 20),
                child: ElevatedButton(
                    onPressed: () {
                      openDialog(context);
                    },
                    child: const Text('tab to open alert dialog')),
              )
            : const Text('no dialog'),
        // currentIndex == 2
        //     ? Switch(
        //         // This bool value toggles the switch.
        //         value: light,
        //         activeColor: Colors.red,
        //         onChanged: (bool value) {
        //           // This is called when the user toggles the switch.
        //           setState(() {
        //             light = value;
        //           });
        //         },
        //       )
        //     : Text('')
      ]),
      bottomNavigationBar: BottomNavigationBar(
        currentIndex: currentIndex,
        items: const [
          BottomNavigationBarItem(
            label: 'home',
            icon: Icon(Icons.home),
          ),
          BottomNavigationBarItem(
            label: 'work',
            icon: Icon(Icons.work),
          ),
          BottomNavigationBarItem(
            label: 'profile',
            icon: Icon(Icons.person),
          ),
        ],
        onTap: (newIndex) => {
          if (newIndex == 0) {openBottomSheet(context)},
          onBottomNavBarTap(newIndex)
        },
      ),
    );
  }
}
