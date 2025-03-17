import 'package:json_annotation/json_annotation.dart';

part 'resend_verification_email_request.g.dart';

@JsonSerializable()
class ResendVerificationEmailRequest{
  final String userEmail;

  ResendVerificationEmailRequest({
    required this.userEmail,
  });

  factory ResendVerificationEmailRequest.fromJson(Map<String, dynamic> json) => _$ResendVerificationEmailRequestFromJson(json);

  Map<String, dynamic> toJson() => _$ResendVerificationEmailRequestToJson(this);
}