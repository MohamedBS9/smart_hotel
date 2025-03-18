class AppConfig {
  String baseUrl;
  String imageUrl;
  String googleApiKey;
  String regulationsUrl;

  static AppConfig shared = AppConfig.create();

  factory AppConfig.create({
    String baseUrl = "https://4f49-197-2-120-118.ngrok-free.app",
    String imageUrl = "https://images.example.com",
    String googleApiKey = "your_google_api_key",
    String regulationsUrl = "https://example.com/regulations",
  }) {
    return shared = AppConfig(
      baseUrl: baseUrl,
      imageUrl: imageUrl,
      googleApiKey: googleApiKey,
      regulationsUrl: regulationsUrl,
    );
  }

  AppConfig({
    required this.baseUrl,
    required this.imageUrl,
    required this.googleApiKey,
    required this.regulationsUrl,
  });
}
