class Environment {
  final String baseUrl;
  final String imageUrl;

  Environment({required this.baseUrl, required this.imageUrl});

  factory Environment.fromFlavor() {
    String flavor = const String.fromEnvironment('FLAVOR');
    late String baseUrl;
    late String imageUrl;

    switch (flavor) {
      case 'dev':
        //baseUrl = 'https://ppms-backend-dev.azurewebsites.net/';
        imageUrl = 'https://ppmsstoragedev.blob.core.windows.net';
        baseUrl = 'https://99e4-41-62-143-62.ngrok-free.app/';
        break;
      case 'staging':
        baseUrl = 'https://ppms-backend-test.azurewebsites.net/';
        imageUrl = 'https://ppmsstoragedev.blob.core.windows.net';
        break;

      case 'prod':
        // baseUrl = 'https://d717-196-203-239-14.ngrok-free.app/';
        baseUrl = 'https://p-efb-ppms-euw-backend.azurewebsites.net/';
        imageUrl = "https://ppmsstorageprod.blob.core.windows.net";

        break;
      default:
        baseUrl = 'https://default-api.example.com';
    }

    return Environment(baseUrl: baseUrl, imageUrl: imageUrl);
  }
}
//baseUrl = 'https://p-efb-ppms-euw-backend.azurewebsites.net/';
