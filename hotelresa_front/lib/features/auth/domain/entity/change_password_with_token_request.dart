import 'package:json_annotation/json_annotation.dart';

part 'change_password_with_token_request.g.dart';

@JsonSerializable()
class ChangePasswordWithTokenRequest {
  final String newPassword;
  final String confirmNewPassword;

  ChangePasswordWithTokenRequest({
    required this.newPassword,
    required this.confirmNewPassword,
  });

  factory ChangePasswordWithTokenRequest.fromJson(Map<String, dynamic> json) => _$ChangePasswordWithTokenRequestFromJson(json);

  Map<String, dynamic> toJson() => _$ChangePasswordWithTokenRequestToJson(this);
}