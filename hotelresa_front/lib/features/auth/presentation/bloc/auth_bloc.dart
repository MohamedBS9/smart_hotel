import 'dart:async';
import 'package:equatable/equatable.dart';
import 'package:flutter/cupertino.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';

import '../../../../core/util/pref_utils.dart';
import '../../data/model/auth_response.dart';
import '../../data/model/user.dart';
import '../../domain/entity/change_password_with_token_request.dart';
import '../../domain/entity/forget_password_request.dart';
import '../../domain/entity/login_request.dart';
import '../../domain/entity/register_request.dart';
import '../../domain/entity/resend_verification_email_request.dart';
import '../../domain/entity/verify_otp_request.dart';
import '../../domain/use_cases/change_password_with_token_use_case.dart';
import '../../domain/use_cases/forget_password_otp_step_use_case.dart';
import '../../domain/use_cases/forget_password_use_case.dart';
import '../../domain/use_cases/login_use_case.dart';
import '../../domain/use_cases/registert_use_case.dart';

part 'auth_event.dart';

part 'auth_state.dart';

class AuthBloc extends Bloc<AuthEvent, AuthState> {
  final PrefUtils prefUtils;
  final LoginUseCase loginUseCase;
  final RegisterUseCase registerUseCase;
  final ForgetPasswordUseCase forgetPasswordUseCase;
  final ForgetPasswordOtpStepUseCase forgetPasswordOtpStepUseCase;
  final ChangePasswordWithTokenUseCase changePasswordWithTokenUseCase;

  AuthBloc({
    required this.prefUtils,
    required this.loginUseCase,
    required this.registerUseCase,
    required this.forgetPasswordUseCase,
    required this.forgetPasswordOtpStepUseCase,
    required this.changePasswordWithTokenUseCase,
  }) : super(AuthInitial()) {
    on<OnGetFistTime>(_getFistTime);
    on<LoginEvent>(_login);
    on<RegisterEvent>(_register);
    on<ForgetPasswordEmailStepEvent>(_forgetPasswordEmailStep);
    on<ForgetPasswordOtpStepEvent>(_forgetPasswordOtpStep);
    on<ForgetPasswordChangePasswordStepEvent>(
        _forgetPasswordChangePasswordStep);
  }

  FutureOr<void> _getFistTime(
      OnGetFistTime event, Emitter<AuthState> emit) async {
    prefUtils.getFirstTime();
    emit(IsFirstTime());
  }

  FutureOr<void> _login(LoginEvent event, Emitter<AuthState> emit) async {
    emit(LoadingLoginState());
    final response = await loginUseCase.call(event.loginRequest);

    response.fold((failure) {
      emit(FailureLoginState(error: failure));
    }, (response) async {
      emit(SuccessLoginState(user: response.user));
    });
  }

  FutureOr<void> _register(RegisterEvent event, Emitter<AuthState> emit) async {
    emit(LoadingRegisterState());
    final response = await registerUseCase.call(event.registerRequest);

    response.fold((failure) {
      emit(FailureRegisterState(error: failure));
    }, (response) async {
      emit(SuccessRegisterState(user: response.user));
    });
  }

  FutureOr<void> _forgetPasswordEmailStep(
      ForgetPasswordEmailStepEvent event, Emitter<AuthState> emit) async {
    emit(LoadingForgetPasswordState());
    final response =
        await forgetPasswordUseCase.call(event.forgetPasswordRequest);

    response.fold((failure) {
      emit(FailureForgetPasswordEmailStepState(error: failure));
    }, (response) async {
      emit(SuccessForgetPasswordEmailStepState(authResponse: response));
    });
  }

  FutureOr<void> _forgetPasswordOtpStep(
      ForgetPasswordOtpStepEvent event, Emitter<AuthState> emit) async {
    emit(LoadingForgetPasswordState());
    final response =
        await forgetPasswordOtpStepUseCase.call(event.verifyOtpRequest);

    response.fold((failure) {
      emit(FailureForgetPasswordOtpStepState(error: failure));
    }, (response) async {
      emit(SuccessForgetPasswordOtpStepState(authResponse: response));
    });
  }

  FutureOr<void> _forgetPasswordChangePasswordStep(
      ForgetPasswordChangePasswordStepEvent event,
      Emitter<AuthState> emit) async {
    emit(LoadingForgetPasswordState());
    final response = await changePasswordWithTokenUseCase.call(
        event.token, event.changePasswordWithTokenRequest);

    response.fold((failure) {
      emit(FailureForgetPasswordChangePasswordStepState(error: failure));
    }, (response) async {
      emit(
          SuccessForgetPasswordChangePasswordStepState(authResponse: response));
    });
  }
}
