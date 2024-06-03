interface Environment {
  baseUrl: string
  limit: number
}

export const environment: Environment = {
  baseUrl: 'https://api.realworld.io/api/',
  limit: 10,
}
