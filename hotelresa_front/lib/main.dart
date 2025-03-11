import 'package:flutter/material.dart';
import 'package:hoelresa_front/core/theme/theme.dart';
import 'package:hoelresa_front/features/auth/presentation/pages/login_page.dart';

import 'core/routes/app_router.dart';
//import 'package:hoelresa_front/features/auth/presentation/pages/signup_page.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  MyApp({super.key});

  final _appRouter = AppRouter();

  @override
  Widget build(BuildContext context) {
    return MaterialApp.router(
      debugShowCheckedModeBanner: false,
      title: 'Smart Hotel',
      theme: AppTheme.darkThemeMode,
      routerConfig: _appRouter.config(),
    );
  }
}
