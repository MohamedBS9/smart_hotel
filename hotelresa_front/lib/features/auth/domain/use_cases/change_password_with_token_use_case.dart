import 'package:dartz/dartz.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';

import '../../data/model/auth_response.dart';
import '../entity/change_password_with_token_request.dart';
import '../repositories/auth_repository.dart';

class ChangePasswordWithTokenUseCase {
  final AuthRepository repository;

  ChangePasswordWithTokenUseCase({required this.repository});

  Future<Either<AppException, AuthResponse>> call(String token,
      ChangePasswordWithTokenRequest changePasswordWithTokenRequest) async {
    return await repository.changePasswordWithToken(
        token, changePasswordWithTokenRequest);
  }
}
