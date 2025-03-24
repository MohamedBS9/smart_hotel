import 'package:auto_route/auto_route.dart';
import '../util/pref_utils.dart';
import 'app_router.gr.dart';
import 'package:hoelresa_front/injection_container.dart' as di;

import 'auto_route_guard.dart';

@AutoRouterConfig(replaceInRouteName: 'Screen|Page,Route')
class AppRouter extends RootStackRouter {
  PrefUtils prefUtils = di.sl<PrefUtils>();

  AppRouter();

  @override
  List<AutoRoute> get routes => [
        AutoRoute(
            page: LoginRoute.page,
            initial: true,
            guards: [GetInitialRoute(prefUtils)]),
        AutoRoute(page: SignUpRoute.page),
        AutoRoute(page: EmailRoute.page),
        AutoRoute(page: VerifyRoute.page),
        AutoRoute(page: ClientHomeRoute.page),
        AutoRoute(page: ManagerHomeRoute.page),
      ];
}
