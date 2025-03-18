import 'package:json_annotation/json_annotation.dart';

part 'user.g.dart';

@JsonSerializable()
class User {
  String? id;
  String? fullName;
  String? companyName;
  String? userEmail;
  String? userPhone;
  String? password;
  String? country;
  String? state;
  String? birthDate;
  String? zipCode;
  List<dynamic>? loginHistory;
  String? paymentHistory;
  List<dynamic>? notifications;
  String? otp;
  bool? isNewsLetter;
  bool? isNewsLetterProvince;
  bool? isVerified;
  bool? isActive;
  String? gender;
  String? authMethod;
  String? userType;
  String? avatar;
  String? resetPasswordToken;
  String? createdAt;
  String? updatedAt;

  User(
      {this.id,
      this.fullName,
      this.companyName,
      this.userEmail,
      this.userPhone,
      this.password,
      this.country,
      this.state,
      this.birthDate,
      this.zipCode,
      this.loginHistory,
      this.paymentHistory,
      this.notifications,
      this.otp,
      this.isNewsLetter,
      this.isNewsLetterProvince,
      this.isVerified,
      this.isActive,
      this.gender,
      this.authMethod,
      this.userType,
      this.avatar,
      this.resetPasswordToken,
      this.createdAt,
      this.updatedAt});

  factory User.fromJson(Map<String, dynamic> json) => _$UserFromJson(json);

  Map<String, dynamic> toJson() => _$UserToJson(this);
}
