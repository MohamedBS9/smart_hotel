import 'package:shared_preferences/shared_preferences.dart';

class LanguageProvider {
  static String _languageCode = 'fr';

  static Future<void> initialize() async {
    final prefs = await SharedPreferences.getInstance();
    _languageCode = prefs.getString('languageCode') ?? 'fr';
  }

  static String get languageCode => _languageCode;

  static Future<void> setLanguage(String languageCode) async {
    _languageCode = languageCode;
    final prefs = await SharedPreferences.getInstance();
    await prefs.setString('languageCode', languageCode);
  }
}
