import 'package:auto_route/auto_route.dart';
import 'package:flutter/material.dart';
import 'package:hoelresa_front/core/theme/app_pallete.dart';
import 'package:hoelresa_front/core/widgets/buttons/auth_gradient_button.dart';
import 'package:hoelresa_front/core/widgets/input_field.dart';
import '../../../../core/routes/app_router.gr.dart';

@RoutePage()
class SignUpPage extends StatefulWidget {
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
          child: SingleChildScrollView(
            child: Column(
              mainAxisAlignment: MainAxisAlignment.center,
              children: [
                const Text(
                  'sign Up',
                  style: TextStyle(fontSize: 50, fontWeight: FontWeight.bold),
                ),
                const SizedBox(height: 30),
                InputField(hintText: 'Email', controller: emailController),
                const SizedBox(height: 10),
                InputField(hintText: 'Name', controller: nameController),
                const SizedBox(height: 10),
                InputField(
                  hintText: 'Password',
                  controller: passwordController,
                  isPassWord: true,
                ),
                const SizedBox(height: 10),
                InputField(hintText: '+216/Phone', controller: phoneController),
                const SizedBox(height: 20),
                AuthGradientButton(
                  buttonText: 'Sign Up',
                  onPressedFunction: () {
                    context.router.push(LoginRoute());
                  },
                ),
                const SizedBox(height: 20),
                GestureDetector(
                  onTap: () {
                    context.router.push(LoginRoute());
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
      ),
    );
  }
}
