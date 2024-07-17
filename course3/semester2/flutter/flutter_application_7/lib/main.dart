import 'dart:async';

import 'package:flutter/material.dart';
import 'package:flutter_application_7/json.dart';
import 'package:flutter_application_7/weather-repository.dart';
import 'package:percent_indicator/circular_percent_indicator.dart';

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
  Future<void> initTicker() async {
    tickerStarted = true;
    Timer.periodic(const Duration(seconds: 1), (timer) {
      if (percents < 1) {
        setState(() {
          // (percents += 0.1).roundToDouble();
          percents = double.parse((percents + 0.1).toStringAsFixed(2));
          personIndicatorText = '${percents * 100}%';
        });
      } else {
        timer.cancel();
      }
    });
  }

  bool tickerStarted = false;

  String personIndicatorText = '0%';

  double percents = 0;

  late final Person person = Person(
    birthDay: '22-04-22',
    interests: ['interest1', 'interest2'],
    isMale: true,
    name: 'name',
    surname: 'surname',
  );

  final WeatherRepository weatherRepository = WeatherRepository();

  @override
  void initState() {
    final json = person.toJson();
    final personA = Person.fromJson(json);
    super.initState();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        centerTitle: true,
        backgroundColor: Colors.deepPurple,
        title: const Text('lybraryes'),
      ),
      body: FutureBuilder(
          future: weatherRepository.getWeather(),
          builder: (context, snapshot) {
            if (snapshot.connectionState == ConnectionState.waiting) {
              return const Center(
                child: CircularProgressIndicator(),
              );
            }
            // return const Center(
            //   child: Text('complete'),
            // );
            if (snapshot.hasData) {
              return Center(
                child: Text(snapshot.data!.current.temp.toString()),
              );
            }
            return const SizedBox();
          }),
      // body: Center(
      //     child: Column(
      //   children: [
      //     CircularPercentIndicator(
      //       radius: 100.0,
      //       lineWidth: 10,
      //       percent: percents,
      //       center: Text(personIndicatorText),
      //       progressColor: Colors.green,
      //     ),
      //     ElevatedButton(
      //         onPressed: tickerStarted ? null : initTicker,
      //         child: const Text('click'))
      //   ],
      // )),
    );
  }
}
