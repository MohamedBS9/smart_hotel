import 'package:flutter/material.dart';
import 'package:hoelresa_front/core/theme/theme.dart';
import 'package:hoelresa_front/features/auth/presentation/pages/login_page.dart';
//import 'package:hoelresa_front/features/auth/presentation/pages/signup_page.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      debugShowCheckedModeBanner: false,
      title: 'Smart Hotel',
      theme: AppTheme.darkThemeMode,
      home: const LoginPage(),
    );
  }
}
