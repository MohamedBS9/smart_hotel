// dart format width=80
// GENERATED CODE - DO NOT MODIFY BY HAND

// **************************************************************************
// AutoRouterGenerator
// **************************************************************************

// ignore_for_file: type=lint
// coverage:ignore-file

// ignore_for_file: no_leading_underscores_for_library_prefixes
import 'package:auto_route/auto_route.dart' as _i6;
import 'package:hoelresa_front/features/auth/presentation/pages/email_check.dart'
    as _i1;
import 'package:hoelresa_front/features/auth/presentation/pages/login_page.dart'
    as _i2;
import 'package:hoelresa_front/features/auth/presentation/pages/signup_page.dart'
    as _i4;
import 'package:hoelresa_front/features/auth/presentation/pages/verify_code_page.dart'
    as _i5;
import 'package:hoelresa_front/main_home.dart' as _i3;

/// generated route for
/// [_i1.EmailPage]
class EmailRoute extends _i6.PageRouteInfo<void> {
  const EmailRoute({List<_i6.PageRouteInfo>? children})
    : super(EmailRoute.name, initialChildren: children);

  static const String name = 'EmailRoute';

  static _i6.PageInfo page = _i6.PageInfo(
    name,
    builder: (data) {
      return const _i1.EmailPage();
    },
  );
}

/// generated route for
/// [_i2.LoginPage]
class LoginRoute extends _i6.PageRouteInfo<void> {
  const LoginRoute({List<_i6.PageRouteInfo>? children})
    : super(LoginRoute.name, initialChildren: children);

  static const String name = 'LoginRoute';

  static _i6.PageInfo page = _i6.PageInfo(
    name,
    builder: (data) {
      return const _i2.LoginPage();
    },
  );
}

/// generated route for
/// [_i3.MainHome]
class MainHome extends _i6.PageRouteInfo<void> {
  const MainHome({List<_i6.PageRouteInfo>? children})
    : super(MainHome.name, initialChildren: children);

  static const String name = 'MainHome';

  static _i6.PageInfo page = _i6.PageInfo(
    name,
    builder: (data) {
      return const _i3.MainHome();
    },
  );
}

/// generated route for
/// [_i4.SignUpPage]
class SignUpRoute extends _i6.PageRouteInfo<void> {
  const SignUpRoute({List<_i6.PageRouteInfo>? children})
    : super(SignUpRoute.name, initialChildren: children);

  static const String name = 'SignUpRoute';

  static _i6.PageInfo page = _i6.PageInfo(
    name,
    builder: (data) {
      return const _i4.SignUpPage();
    },
  );
}

/// generated route for
/// [_i5.VerifyPage]
class VerifyRoute extends _i6.PageRouteInfo<void> {
  const VerifyRoute({List<_i6.PageRouteInfo>? children})
    : super(VerifyRoute.name, initialChildren: children);

  static const String name = 'VerifyRoute';

  static _i6.PageInfo page = _i6.PageInfo(
    name,
    builder: (data) {
      return const _i5.VerifyPage();
    },
  );
}
