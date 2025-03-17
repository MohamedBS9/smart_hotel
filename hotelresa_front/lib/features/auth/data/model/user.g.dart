// GENERATED CODE - DO NOT MODIFY BY HAND

part of 'user.dart';

// **************************************************************************
// JsonSerializableGenerator
// **************************************************************************

User _$UserFromJson(Map<String, dynamic> json) => User(
      id: json['id'] as String?,
      fullName: json['fullName'] as String?,
      companyName: json['companyName'] as String?,
      userEmail: json['userEmail'] as String?,
      userPhone: json['userPhone'] as String?,
      password: json['password'] as String?,
      country: json['country'] as String?,
      state: json['state'] as String?,
      birthDate: json['birthDate'] as String?,
      zipCode: json['zipCode'] as String?,
      loginHistory: json['loginHistory'] as List<dynamic>?,
      paymentHistory: json['paymentHistory'] as String?,
      notifications: json['notifications'] as List<dynamic>?,
      otp: json['otp'] as String?,
      isNewsLetter: json['isNewsLetter'] as bool?,
      isNewsLetterProvince: json['isNewsLetterProvince'] as bool?,
      isVerified: json['isVerified'] as bool?,
      isActive: json['isActive'] as bool?,
      gender: json['gender'] as String?,
      authMethod: json['authMethod'] as String?,
      userType: json['userType'] as String?,
      avatar: json['avatar'] as String?,
      resetPasswordToken: json['resetPasswordToken'] as String?,
      createdAt: json['createdAt'] as String?,
      updatedAt: json['updatedAt'] as String?,
    );

Map<String, dynamic> _$UserToJson(User instance) => <String, dynamic>{
      'id': instance.id,
      'fullName': instance.fullName,
      'companyName': instance.companyName,
      'userEmail': instance.userEmail,
      'userPhone': instance.userPhone,
      'password': instance.password,
      'country': instance.country,
      'state': instance.state,
      'birthDate': instance.birthDate,
      'zipCode': instance.zipCode,
      'loginHistory': instance.loginHistory,
      'paymentHistory': instance.paymentHistory,
      'notifications': instance.notifications,
      'otp': instance.otp,
      'isNewsLetter': instance.isNewsLetter,
      'isNewsLetterProvince': instance.isNewsLetterProvince,
      'isVerified': instance.isVerified,
      'isActive': instance.isActive,
      'gender': instance.gender,
      'authMethod': instance.authMethod,
      'userType': instance.userType,
      'avatar': instance.avatar,
      'resetPasswordToken': instance.resetPasswordToken,
      'createdAt': instance.createdAt,
      'updatedAt': instance.updatedAt,
    };
