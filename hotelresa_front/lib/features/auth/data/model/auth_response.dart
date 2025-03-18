import 'package:hoelresa_front/features/auth/data/model/user.dart';
import 'package:json_annotation/json_annotation.dart';

part 'auth_response.g.dart';

@JsonSerializable(genericArgumentFactories: true)
class AuthResponse {
  int? code;
  User? user;
  String? token;
  String? refreshtoken;
  String? description;
  String? date;
  bool? success;

  AuthResponse({
    this.code,
    this.user,
    this.token,
    this.refreshtoken,
    this.description,
    this.date,
    this.success,
  });

  factory AuthResponse.fromJson(Map<String, dynamic> json) =>
      _$AuthResponseFromJson(json);

  Map<String, dynamic> toJson() => _$AuthResponseToJson(this);
}
