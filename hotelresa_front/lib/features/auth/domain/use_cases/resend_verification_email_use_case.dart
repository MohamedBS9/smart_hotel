import 'package:dartz/dartz.dart';
import 'package:hoelresa_front/core/infrastructure/exceptions/http_exception.dart';

import '../../data/model/auth_response.dart';
import '../entity/resend_verification_email_request.dart';
import '../repositories/auth_repository.dart';

class ResendVerificationEmailUseCase {
  final AuthRepository repository;

  ResendVerificationEmailUseCase({required this.repository});

  Future<Either<AppException, AuthResponse>> call(
      ResendVerificationEmailRequest resendVerificationEmailRequest) async {
    return await repository
        .resendVerificationEmail(resendVerificationEmailRequest);
  }
}
