// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'register_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

RegisterRequest _$RegisterRequestFromJson(Map<String, dynamic> json) =>
    RegisterRequest(
      fullName: json['fullName'] as String,
      userType: json['userType'] as String? ?? "particular",
      currentLanguage: json['currentLanguage'] as String? ?? "FR",
      userEmail: json['userEmail'] as String,
      gender: json['gender'] as String,
      password: json['password'] as String,
      confirmPassword: json['confirmPassword'] as String,
      condition: json['condition'] as bool,
    );

Map<String, dynamic> _$RegisterRequestToJson(RegisterRequest instance) =>
    <String, dynamic>{
      'gender': instance.gender,
      'userType': instance.userType,
      'currentLanguage': instance.currentLanguage,
      'userEmail': instance.userEmail,
      'fullName': instance.fullName,
      'condition': instance.condition,
      'password': instance.password,
      'confirmPassword': instance.confirmPassword,
    };
