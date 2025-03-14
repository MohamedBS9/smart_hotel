import 'package:auto_route/auto_route.dart';
import 'app_router.gr.dart';

@AutoRouterConfig(replaceInRouteName: 'Screen|Page,Route')
class AppRouter extends RootStackRouter {
  //PrefUtils prefUtils = di.sl<PrefUtils>();

  AppRouter();

  @override
  List<AutoRoute> get routes => [
        /*AutoRoute(
        page: LoginRoute.page,
        initial: true,
        guards: [GetInitialRoute(prefUtils)]),
    AutoRoute(page: HomeRoute.page),*/
        AutoRoute(page: LoginRoute.page, initial: true),
        AutoRoute(page: SignUpRoute.page),
        AutoRoute(page: EmailRoute.page),
        AutoRoute(page: VerifyRoute.page),
      ];
}