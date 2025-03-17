import 'package:dartz/dartz.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';

import '../../data/model/auth_response.dart';
import '../entity/forget_password_request.dart';
import '../repositories/auth_repository.dart';

class ForgetPasswordUseCase {
  final AuthRepository repository;

  ForgetPasswordUseCase({required this.repository});

  Future<Either<AppException, AuthResponse>> call(
      ForgetPasswordRequest forgetPasswordRequest) async {
    return await repository.forgetPassword(forgetPasswordRequest);
  }
}
