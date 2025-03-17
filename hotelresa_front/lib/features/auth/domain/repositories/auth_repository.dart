import 'package:dartz/dartz.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';

import '../../data/model/auth_response.dart';
import '../entity/change_password_with_token_request.dart';
import '../entity/forget_password_request.dart';
import '../entity/login_request.dart';
import '../entity/register_request.dart';
import '../entity/resend_verification_email_request.dart';
import '../entity/verify_otp_request.dart';

abstract class AuthRepository {
  Future<Either<AppException, AuthResponse>> login(LoginRequest loginRequest);

  Future<Either<AppException, AuthResponse>> register(
      RegisterRequest registerRequest);

  Future<Either<AppException, AuthResponse>> forgetPassword(
      ForgetPasswordRequest forgetPasswordRequest);

  Future<Either<AppException, AuthResponse>> changePasswordWithToken(
      String token,
      ChangePasswordWithTokenRequest changePasswordWithTokenRequest);

  Future<Either<AppException, AuthResponse>> forgetPasswordOtpStep(
      VerifyOtpRequest verifyOtpRequest);

  Future<Either<AppException, AuthResponse>> resendVerificationEmail(
      ResendVerificationEmailRequest resendVerificationEmailRequest);
}
