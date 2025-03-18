import 'package:flutter/material.dart';

import '../theme/app_pallete.dart';

class ClickableText extends StatefulWidget {
  final void Function() onTapFunction;
  final String text;

  const ClickableText(
      {super.key, required this.text, required this.onTapFunction});

  @override
  State<ClickableText> createState() => _ClickableTextState();
}

class _ClickableTextState extends State<ClickableText> {
  @override
  Widget build(BuildContext context) {
    return GestureDetector(
      onTap: () {
        widget.onTapFunction();
      },
      child: Text(
        widget.text,
        style: Theme
            .of(context)
            .textTheme
            .titleMedium
            ?.copyWith(
          color: AppPallete.gradient2,
          fontWeight: FontWeight.bold,
        ),
      ),
    );

  }
}
