part of 'auth_bloc.dart';

@immutable
abstract class AuthState {}

class AuthInitial extends AuthState {}

class IsFirstTime extends AuthState {}

class SuccessLoginState extends AuthInitial {
  final User? user;

  SuccessLoginState({required this.user});
}

class SuccessResendVerificationEmailState extends AuthInitial {
  final User? user;

  SuccessResendVerificationEmailState({required this.user});
}

class SuccessRefreshLoginState extends AuthInitial {}

class FailureRefreshLoginState extends AuthInitial {
  final AppException error;

  FailureRefreshLoginState({required this.error});
}

class LoadingLoginState extends AuthInitial {}

class FailureLoginState extends AuthInitial {
  final AppException error;

  FailureLoginState({required this.error});
}

class SuccessRegisterState extends AuthInitial {
  final User? user;

  SuccessRegisterState({required this.user});
}

class LoadingRegisterState extends AuthInitial {}

class FailureRegisterState extends AuthInitial {
  final AppException error;

  FailureRegisterState({required this.error});
}

class LoadingForgetPasswordState extends AuthInitial {}

class SuccessForgetPasswordEmailStepState extends AuthInitial {
  final AuthResponse? authResponse;

  SuccessForgetPasswordEmailStepState({required this.authResponse});
}

class FailureForgetPasswordEmailStepState extends AuthInitial {
  final AppException error;

  FailureForgetPasswordEmailStepState({required this.error});
}

class SuccessForgetPasswordOtpStepState extends AuthInitial {
  final AuthResponse? authResponse;

  SuccessForgetPasswordOtpStepState({required this.authResponse});
}

class FailureForgetPasswordOtpStepState extends AuthInitial {
  final AppException error;

  FailureForgetPasswordOtpStepState({required this.error});
}

class SuccessForgetPasswordChangePasswordStepState extends AuthInitial {
  final AuthResponse? authResponse;

  SuccessForgetPasswordChangePasswordStepState({required this.authResponse});
}

class FailureForgetPasswordChangePasswordStepState extends AuthInitial {
  final AppException error;

  FailureForgetPasswordChangePasswordStepState({required this.error});
}
