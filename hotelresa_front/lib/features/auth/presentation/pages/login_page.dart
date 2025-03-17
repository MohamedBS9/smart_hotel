import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';

import 'package:hoelresa_front/features/auth/presentation/widgets/login_page_widget.dart';

@RoutePage()
class LoginPage extends StatefulWidget {
  const LoginPage({super.key});

  @override
  State<LoginPage> createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final emailController = TextEditingController();
  final passwordController = TextEditingController();
  final formKey = GlobalKey<FormState>();

  @override
  void dispose() {
    emailController.dispose();
    passwordController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return LoginPageWidget(
      emailController: emailController,
      formKey: formKey,
      passwordController: passwordController,
    );
  }
}
