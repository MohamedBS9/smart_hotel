import 'package:dartz/dartz.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';
import 'package:hoelresa_front/core/util/typedef.dart';
import 'package:hoelresa_front/features/auth/domain/entity/forget_password_request.dart';

import '../../domain/entity/change_password_with_token_request.dart';
import '../../domain/entity/login_request.dart';
import '../../domain/entity/register_request.dart';
import '../../domain/entity/resend_verification_email_request.dart';
import '../../domain/entity/verify_otp_request.dart';
import '../../domain/repositories/auth_repository.dart';
import '../datasources/auth_remote_data_source.dart';
import '../model/auth_response.dart';

class AuthRepositoryImpl implements AuthRepository {
  final AuthenticationDataSource authRemoteDataSource;

  AuthRepositoryImpl({required this.authRemoteDataSource});

  @override
  FutureResult<AuthResponse> login(LoginRequest loginRequest) async {
    return authRemoteDataSource.login(loginRequest);
  }

  @override
  FutureResult<AuthResponse> register(RegisterRequest registerRequest) async {
    return authRemoteDataSource.register(registerRequest);
  }

  @override
  FutureResult<AuthResponse> changePasswordWithToken(String token,
      ChangePasswordWithTokenRequest changePasswordWithTokenRequest) async {
    return authRemoteDataSource.changePasswordWithToken(
        token, changePasswordWithTokenRequest);
  }


  @override
  FutureResult<AuthResponse> forgetPasswordOtpStep(
      VerifyOtpRequest verifyOtpRequest) async {
    return authRemoteDataSource.forgetPasswordOtpStep(verifyOtpRequest);
  }

  @override
  FutureResult<AuthResponse> resendVerificationEmail(
      ResendVerificationEmailRequest resendVerificationEmailRequest) async {
    return authRemoteDataSource.resendVerificationEmail(
        resendVerificationEmailRequest);
  }

  @override
  Future<Either<AppException, AuthResponse>> forgetPassword(ForgetPasswordRequest forgetPasswordRequest) {
    return authRemoteDataSource.forgetPassword(
        forgetPasswordRequest);
  }


}