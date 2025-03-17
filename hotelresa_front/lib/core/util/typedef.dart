import 'package:dartz/dartz.dart';

import '../infrastructure/exceptions/http_exception.dart';

typedef FutureResult<T> = Future<Either<AppException, T>>;

typedef VoidResult = FutureResult<void>;
