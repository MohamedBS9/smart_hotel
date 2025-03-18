import 'package:dartz/dartz.dart';

import '../response.dart';

class AppException implements Exception {
  final String Description;
  final int Code;
  final String identifier;

  AppException({
    required this.Description,
    required this.Code,
    required this.identifier,
  });

  @override
  String toString() {
    return 'Code=$Code\nDescription=$Description\nidentifier=$identifier';
  }
}

extension HttpExceptionExtension on AppException {
  Left<AppException, Response> get toLeft => Left<AppException, Response>(this);
}
