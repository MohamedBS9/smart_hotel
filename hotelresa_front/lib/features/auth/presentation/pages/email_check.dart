import 'package:flutter/material.dart';
import 'package:hoelresa_front/features/auth/presentation/widgets/email_check_widget.dart';
import 'package:auto_route/auto_route.dart';

@RoutePage()
class EmailPage extends StatefulWidget {
  const EmailPage({super.key});

  @override
  State<EmailPage> createState() => _EmailPageState();
}



class _EmailPageState extends State<EmailPage> {
    final emailController = TextEditingController();
    final formKey = GlobalKey<FormState>();

    @override
  void dispose() {
    emailController.dispose();
    super.dispose();
  }
 
  
  
   @override
   Widget build(BuildContext context) {
     return EmailPageWidget(
        emailController:emailController ,
        formKey: formKey, 
     );
   }
 }