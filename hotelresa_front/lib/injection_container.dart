import 'package:get_it/get_it.dart';
import 'package:hoelresa_front/features/auth/data/repositories/auth_repository_impl.dart';
import 'package:shared_preferences/shared_preferences.dart';

import 'core/infrastructure/remote/dio_network_service.dart';
import 'core/infrastructure/remote/network_service.dart';
import 'core/services/api_client.dart';
import 'core/util/environment.dart';
import 'core/util/pref_utils.dart';
import 'features/auth/data/datasources/auth_remote_data_source.dart';
import 'features/auth/domain/repositories/auth_repository.dart';
import 'features/auth/domain/use_cases/change_password_with_token_use_case.dart';
import 'features/auth/domain/use_cases/forget_password_otp_step_use_case.dart';
import 'features/auth/domain/use_cases/forget_password_use_case.dart';
import 'features/auth/domain/use_cases/login_use_case.dart';
import 'features/auth/domain/use_cases/registert_use_case.dart';
import 'features/auth/domain/use_cases/resend_verification_email_use_case.dart';
import 'features/auth/presentation/bloc/auth_bloc.dart';

final sl = GetIt.instance;

Future<void> init() async {
  final sharedPreferences = await SharedPreferences.getInstance();

  sl
    ..registerFactory(() => Environment.fromFlavor())
    ..registerLazySingleton(() => sharedPreferences)
    ..registerLazySingleton<PrefUtils>(
        () => PrefUtilsImpl(sharedPreferences: sl()))
    ..registerFactory(() => ApiClient())

    //network service
    ..registerFactory<NetworkService>(
        () => DioNetworkService(sl<Environment>(), sl()))
    //bloc
    ..registerFactory(() => AuthBloc(
          prefUtils: sl(),
          loginUseCase: sl(),
          registerUseCase: sl(),
          forgetPasswordUseCase: sl(),
          forgetPasswordOtpStepUseCase: sl(),
          changePasswordWithTokenUseCase: sl(),
        ))

    //use case

    ..registerFactory(() => LoginUseCase(repository: sl()))
    ..registerFactory(() => RegisterUseCase(repository: sl()))
    ..registerFactory(() => ForgetPasswordUseCase(repository: sl()))
    ..registerFactory(() => ForgetPasswordOtpStepUseCase(repository: sl()))
    ..registerFactory(() => ChangePasswordWithTokenUseCase(repository: sl()))
    ..registerFactory(() => ResendVerificationEmailUseCase(repository: sl()))

    //repos

    ..registerFactory<AuthRepository>(
        () => AuthRepositoryImpl(authRemoteDataSource: sl()))
    //data source
    ..registerLazySingleton<AuthenticationDataSource>(
        () => AuthenticationRemoteDataSource(sl()));
}
