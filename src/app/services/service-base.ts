export abstract class ServiceBase {
  private static readonly API_URL = "https://fakestoreapi.com";

  static getUrl(path: string): string {
    return `${ServiceBase.API_URL}${path}`;
  }

  static async get<T>(path: string): Promise<T> {
    const response = await fetch(ServiceBase.getUrl(path), {
      cache: "no-store",
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }

    return response.json();
  }
}