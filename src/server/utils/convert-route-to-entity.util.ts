const mapping: Record<string, string> = {
  articles: 'article',
  categories: 'category',
  clients: 'client',
  contributors: 'contributor',
  guests: 'guest',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
