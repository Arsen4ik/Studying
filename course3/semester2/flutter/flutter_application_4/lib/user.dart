import 'package:flutter_application_4/post.dart';

class User {
  User(
      {required this.id,
      required this.name,
      required this.secondName,
      this.post});
  int id;
  String name;
  String secondName;
  Post? post;
}
