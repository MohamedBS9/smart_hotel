part of 'auth_bloc.dart';

abstract class AuthEvent extends Equatable {
  const AuthEvent();

  @override
  List<Object?> get props => [];
}

class OnGetFistTime extends AuthEvent{}


class LoginEvent extends AuthEvent {
  final LoginRequest loginRequest;
  const LoginEvent({required this.loginRequest});
}

class RefreshLoginEvent extends AuthEvent {
}

class RegisterEvent extends AuthEvent {
  final RegisterRequest registerRequest;
  const RegisterEvent({required this.registerRequest});
}

class ResendVerificationEmailEvent extends AuthEvent {
  final ResendVerificationEmailRequest resendVerificationEmailRequest;
  const ResendVerificationEmailEvent({required this.resendVerificationEmailRequest});
}


class ForgetPasswordEmailStepEvent extends AuthEvent {
  final ForgetPasswordRequest forgetPasswordRequest;
  const ForgetPasswordEmailStepEvent({required this.forgetPasswordRequest});
}

class ForgetPasswordOtpStepEvent extends AuthEvent {
  final VerifyOtpRequest verifyOtpRequest;
  const ForgetPasswordOtpStepEvent({required this.verifyOtpRequest});
}

class ForgetPasswordChangePasswordStepEvent extends AuthEvent {
  final String token;
  final ChangePasswordWithTokenRequest changePasswordWithTokenRequest;
  const ForgetPasswordChangePasswordStepEvent({required this.token, required this.changePasswordWithTokenRequest});
}
