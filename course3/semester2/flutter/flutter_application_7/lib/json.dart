class Person {
  Person({
    required this.birthDay,
    required this.interests,
    required this.isMale,
    required this.name,
    required this.surname,
  });
  String name;
  String surname;
  bool isMale;
  String birthDay;
  List<String> interests;

  factory Person.fromJson(Map<String, dynamic> json) => Person(
        birthDay: json['birthDay'],
        interests: json['interests'],
        isMale: json['isMale'],
        name: json['name'],
        surname: json['surname'],
      );

  Map<String, dynamic> toJson() {
    return {
      'name': name,
      'surname': surname,
      'isMale': isMale,
      'birthDay': birthDay,
      'interests': interests,
    };
  }
}
