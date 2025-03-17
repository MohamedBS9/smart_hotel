import 'package:json_annotation/json_annotation.dart';

part 'register_request.g.dart';

@JsonSerializable()
class RegisterRequest{
  final String gender;
  final String userType;
  final String currentLanguage;
  final String userEmail;
  final String fullName;
  final bool condition;
  final String password;
  final String confirmPassword;

  RegisterRequest({
    required this.fullName,
    this.userType = "particular",
    this.currentLanguage = "FR",
    required this.userEmail,
    required this.gender,
    required this.password,
    required this.confirmPassword,
    required this.condition,
  });

  factory RegisterRequest.fromJson(Map<String, dynamic> json) => _$RegisterRequestFromJson(json);

  Map<String, dynamic> toJson() => _$RegisterRequestToJson(this);
}