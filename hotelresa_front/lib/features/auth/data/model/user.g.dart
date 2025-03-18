// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

User _$UserFromJson(Map<String, dynamic> json) => User(
      id: json['_id'] as String?,
      nom: json['nom'] as String?,
      email: json['email'] as String?,
      motdepasse: json['motdepasse'] as String?,
      phone: (json['phone'] as num?)?.toInt(),
      code: json['code'] as String?,
      role: json['role'] as String?,
      image: json['image'] as String?,
      reservation: (json['reservation'] as List<dynamic>?)
          ?.map((e) => e as String)
          .toList(),
      verify: json['verify'] as bool?,
      resetCode: json['resetCode'] as String?,
      resetCodeExpires: json['resetCodeExpires'] as String?,
    );

Map<String, dynamic> _$UserToJson(User instance) => <String, dynamic>{
      '_id': instance.id,
      'nom': instance.nom,
      'email': instance.email,
      'motdepasse': instance.motdepasse,
      'phone': instance.phone,
      'code': instance.code,
      'role': instance.role,
      'image': instance.image,
      'reservation': instance.reservation,
      'verify': instance.verify,
      'resetCode': instance.resetCode,
      'resetCodeExpires': instance.resetCodeExpires,
    };
