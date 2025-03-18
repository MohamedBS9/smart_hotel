import 'package:json_annotation/json_annotation.dart';

part 'user.g.dart';

@JsonSerializable()
class User {
  @JsonKey(name: '_id')
  String? id;
  String? nom;
  String? email;
  String? motdepasse;
  int? phone;
  String? code;
  String? role;
  String? image;
  List<String>? reservation;
  bool? verify;
  String? resetCode;
  String? resetCodeExpires;

  User({
    this.id,
    this.nom,
    this.email,
    this.motdepasse,
    this.phone,
    this.code,
    this.role,
    this.image,
    this.reservation,
    this.verify,
    this.resetCode,
    this.resetCodeExpires,
  });

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);

  Map<String, dynamic> toJson() => _$UserToJson(this);
}