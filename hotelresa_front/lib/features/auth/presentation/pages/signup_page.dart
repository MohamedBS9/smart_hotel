import 'package:flutter/material.dart';
import 'package:hoelresa_front/core/theme/app_pallete.dart';
import 'package:hoelresa_front/features/auth/presentation/pages/login_page.dart';
import 'package:hoelresa_front/features/auth/presentation/widgets/auth.dart';
import 'package:hoelresa_front/features/auth/presentation/widgets/auth_gradient_button.dart';

class SignUpPage extends StatefulWidget {
  static Route() => MaterialPageRoute(builder: (context) => const SignUpPage());
  const SignUpPage({super.key});

  @override
  State<SignUpPage> createState() => _SignUpPageState();
}

class _SignUpPageState extends State<SignUpPage> {
  final emailController = TextEditingController();
  final nameController = TextEditingController();
  final passwordController = TextEditingController();
  final phoneController = TextEditingController();
  final roleController = TextEditingController();
  final formKey = GlobalKey<FormState>();

  @override
  void dispose() {
    emailController.dispose();
    nameController.dispose();
    passwordController.dispose();
    phoneController.dispose();
    roleController.dispose();
    super.dispose();
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(),
      body: Padding(
        padding: const EdgeInsets.all(15.0),
        child: Form(
          key: formKey,
          child: Column(
            mainAxisAlignment: MainAxisAlignment.center,
            children: [
              const Text(
                'sign Up',
                style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
              ),
              const SizedBox(height: 30),
              AuthFiled(hintText: 'Email', controller: emailController),
              const SizedBox(height: 10),
              AuthFiled(hintText: 'Name', controller: nameController),
              const SizedBox(height: 10),
              AuthFiled(
                hintText: 'Password',
                controller: passwordController,
                isPassWord: true,
              ),
              const SizedBox(height: 10),
              AuthFiled(hintText: '+216/Phone', controller: phoneController),
              const SizedBox(height: 10),
              AuthFiled(hintText: 'Role', controller: roleController),
              const SizedBox(height: 20),
              const AuthGradientButton(buttonText: 'Sign Up'),
              const SizedBox(height: 20),
              GestureDetector(
                onTap: () {
                  Navigator.push(context, LoginPage.Route());
                },
                child: RichText(
                  text: TextSpan(
                    text: 'Already have an account ? ',
                    style: Theme.of(context).textTheme.titleMedium,
                    children: [
                      TextSpan(
                        text: 'Sign In',
                        style: Theme.of(
                          context,
                        ).textTheme.titleMedium?.copyWith(
                          color: AppPallete.gradient2,
                          fontWeight: FontWeight.bold,
                        ),
                      ),
                    ],
                  ),
                ),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
