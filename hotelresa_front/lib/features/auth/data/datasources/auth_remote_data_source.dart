import 'package:dartz/dartz.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';

import '../../../../core/infrastructure/remote/network_service.dart';
import '../../../../core/shared/const_urls.dart';
import '../../../../core/util/typedef.dart';
import '../../../../injection_container.dart' as di;

import '../../../../../core/util/pref_utils.dart';
import '../../domain/entity/change_password_with_token_request.dart';
import '../../domain/entity/forget_password_request.dart';
import '../../domain/entity/login_request.dart';
import '../../domain/entity/register_request.dart';
import '../../domain/entity/resend_verification_email_request.dart';
import '../../domain/entity/verify_otp_request.dart';
import '../model/auth_response.dart';

abstract class AuthenticationDataSource {
  FutureResult<AuthResponse> login(LoginRequest loginRequest);

  FutureResult<AuthResponse> resendVerificationEmail(
      ResendVerificationEmailRequest resendVerificationEmailRequest);

  FutureResult<AuthResponse> register(RegisterRequest registerRequest);

  FutureResult<AuthResponse> forgetPasswordEmailStep(
      ForgetPasswordRequest forgetPasswordRequest);

  FutureResult<AuthResponse> forgetPasswordOtpStep(
      VerifyOtpRequest verifyOtpRequest);

  FutureResult<AuthResponse> changePasswordWithToken(String token,
      ChangePasswordWithTokenRequest changePasswordWithTokenRequest);

  Future<Either<AppException, AuthResponse>> forgetPassword(
      ForgetPasswordRequest forgetPasswordRequest);
}

class AuthenticationRemoteDataSource implements AuthenticationDataSource {
  final NetworkService networkService;

  AuthenticationRemoteDataSource(this.networkService);

  @override
  FutureResult<AuthResponse> login(LoginRequest loginRequest) async {
    final eitherType = await networkService.post(
      loginEndPoint,
      data: loginRequest.toJson(),
    );

    return eitherType.fold(
      (exception) {
        return Left(exception);
      },
      (response) {
        PrefUtils prefUtils = di.sl<PrefUtils>();

        final user = AuthResponse.fromJson(response.data);
        prefUtils.setToken(user.token ?? "");
        prefUtils.setUser(user.user);
        return Right(user);
      },
    );
  }

  @override
  FutureResult<AuthResponse> changePasswordWithToken(String token,
      ChangePasswordWithTokenRequest changePasswordWithTokenRequest) {
    // TODO: implement changePasswordWithToken
    throw UnimplementedError();
  }

  @override
  Future<Either<AppException, AuthResponse>> forgetPassword(
      ForgetPasswordRequest forgetPasswordRequest) {
    // TODO: implement forgetPassword
    throw UnimplementedError();
  }

  @override
  FutureResult<AuthResponse> forgetPasswordEmailStep(
      ForgetPasswordRequest forgetPasswordRequest) {
    // TODO: implement forgetPasswordEmailStep
    throw UnimplementedError();
  }

  @override
  FutureResult<AuthResponse> forgetPasswordOtpStep(
      VerifyOtpRequest verifyOtpRequest) {
    // TODO: implement forgetPasswordOtpStep
    throw UnimplementedError();
  }

  @override
  FutureResult<AuthResponse> register(RegisterRequest registerRequest) {
    // TODO: implement register
    throw UnimplementedError();
  }

  @override
  FutureResult<AuthResponse> resendVerificationEmail(
      ResendVerificationEmailRequest resendVerificationEmailRequest) {
    // TODO: implement resendVerificationEmail
    throw UnimplementedError();
  }
}
