// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'forget_password_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ForgetPasswordRequest _$ForgetPasswordRequestFromJson(
        Map<String, dynamic> json) =>
    ForgetPasswordRequest(
      userEmail: json['userEmail'] as String,
      currentLanguage: json['currentLanguage'] as String,
    );

Map<String, dynamic> _$ForgetPasswordRequestToJson(
        ForgetPasswordRequest instance) =>
    <String, dynamic>{
      'userEmail': instance.userEmail,
      'currentLanguage': instance.currentLanguage,
    };
