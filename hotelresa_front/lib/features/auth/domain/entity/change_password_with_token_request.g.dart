// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'change_password_with_token_request.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

ChangePasswordWithTokenRequest _$ChangePasswordWithTokenRequestFromJson(
        Map<String, dynamic> json) =>
    ChangePasswordWithTokenRequest(
      newPassword: json['newPassword'] as String,
      confirmNewPassword: json['confirmNewPassword'] as String,
    );

Map<String, dynamic> _$ChangePasswordWithTokenRequestToJson(
        ChangePasswordWithTokenRequest instance) =>
    <String, dynamic>{
      'newPassword': instance.newPassword,
      'confirmNewPassword': instance.confirmNewPassword,
    };
