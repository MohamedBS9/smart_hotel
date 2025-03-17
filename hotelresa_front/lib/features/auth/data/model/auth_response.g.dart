// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'auth_response.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

AuthResponse _$AuthResponseFromJson(Map<String, dynamic> json) => AuthResponse(
      code: (json['code'] as num?)?.toInt(),
      user: json['user'] == null
          ? null
          : User.fromJson(json['user'] as Map<String, dynamic>),
      token: json['token'] as String?,
      refreshtoken: json['refreshtoken'] as String?,
      description: json['description'] as String?,
      date: json['date'] as String?,
      success: json['success'] as bool?,
    );

Map<String, dynamic> _$AuthResponseToJson(AuthResponse instance) =>
    <String, dynamic>{
      'code': instance.code,
      'user': instance.user,
      'token': instance.token,
      'refreshtoken': instance.refreshtoken,
      'description': instance.description,
      'date': instance.date,
      'success': instance.success,
    };
