import 'dart:io';

import 'package:dio/dio.dart';
import 'package:dio/io.dart';
import 'package:talker_dio_logger/talker_dio_logger_interceptor.dart';
import 'package:talker_dio_logger/talker_dio_logger_settings.dart';
import '../util/pref_utils.dart';
import '../util/environment.dart';
import '../../injection_container.dart' as di;

class ApiClient {
  final Dio dio = createDio();

  static Dio createDio() {
    PrefUtils prefUtils = di.sl<PrefUtils>();
    Environment environment = di.sl<Environment>();
    final token = prefUtils.getToken();

    BaseOptions options = BaseOptions(
      baseUrl: environment.baseUrl,
      validateStatus: (status) {
        return status != null;
      },
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Cookie': 'x-jasmin-token=$token',
      },
    );

    var dio = Dio(options);

    (dio.httpClientAdapter as IOHttpClientAdapter).onHttpClientCreate =
        (client) {
      client.badCertificateCallback =
          (X509Certificate cert, String host, int port) => true;
      return client;
    };

    dio.interceptors.add(TalkerDioLogger(
      settings: const TalkerDioLoggerSettings(
        printRequestHeaders: true,
        printResponseHeaders: true,
        printResponseMessage: true,
      ),
    ));

    return dio;
  }
}
