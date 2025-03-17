import 'package:flutter/material.dart';
import 'package:hoelresa_front/features/auth/presentation/widgets/verify_code_widget.dart';
import 'package:auto_route/auto_route.dart';




@RoutePage()
class VerifyPage extends StatefulWidget {
  const VerifyPage({super.key});

  @override
  State<VerifyPage> createState() => _VerifyPageState();
}




class _VerifyPageState extends State<VerifyPage> {
  final pinController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return VerificationScreen (
      pinController : pinController
      );
  }
}