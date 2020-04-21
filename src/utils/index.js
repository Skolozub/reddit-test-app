export function getArticlesData(json) {
  return json.data.children.map(child => child.data);
}

export function getRandomArticle(articles) {
  const random = Math.random() * articles.length;
  const rounderRandom = Math.floor(random);

  return articles[ rounderRandom ];
}

export function hasExpiredCache(cachedAt = 0) {
  const now = Date.now();
  const cacheExpiredAt = cachedAt + (2 * 60 * 1000);

  return now >= cacheExpiredAt;
}