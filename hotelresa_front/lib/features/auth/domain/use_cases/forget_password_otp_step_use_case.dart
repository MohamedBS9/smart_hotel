import 'package:dartz/dartz.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';

import '../../data/model/auth_response.dart';
import '../entity/verify_otp_request.dart';
import '../repositories/auth_repository.dart';

class ForgetPasswordOtpStepUseCase {
  final AuthRepository repository;

  ForgetPasswordOtpStepUseCase({required this.repository});

  Future<Either<AppException, AuthResponse>> call(
      VerifyOtpRequest verifyOtpRequest) async {
    return await repository.forgetPasswordOtpStep(verifyOtpRequest);
  }
}
