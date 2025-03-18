import 'package:flutter/material.dart';

class InputField extends StatelessWidget {
  final String hintText;
  final TextEditingController controller;
  final bool isPassWord;
  final String? Function(dynamic value)? validator;

  const InputField({
    super.key,
    required this.hintText,
    required this.controller,
    this.isPassWord = false,
    this.validator,
  });

  @override
  Widget build(BuildContext context) {
    return TextFormField(
        controller: controller,
        decoration: InputDecoration(hintText: hintText),
        validator: validator,
        obscureText: isPassWord);
  }
}
