export interface Post {
  id: number
  author: string
  nickname: string
  date: string
  title: string
}

// 仮の投稿データ
const mockPosts: Post[] = [
  {
    id: 1,
    author: 'nanashi39',
    nickname: 'さば かん',
    date: '2025年05月14日',
    title: 'ハンズオンでELFファイルの構造学んでみた(備忘録)',
  },
  {
    id: 2,
    author: 'nanashi39',
    nickname: 'さば かん',
    date: '2025年05月07日',
    title: 'OWASP ASVS読み込んでみる(V3: セッション管理の検証要件)',
  },
  {
    id: 3,
    author: 'nanashi39',
    nickname: 'さば かん',
    date: '2025年05月14日',
    title: 'ハンズオンでELFファイルの構造学んでみた(備忘録)',
  },
  {
    id: 4,
    author: 'nanashi39',
    nickname: 'さば かん',
    date: '2025年05月14日',
    title: 'ハンズオンでELFファイルの構造学んでみた(備忘録)',
  },
  {
    id: 5,
    author: 'nanashi39',
    nickname: 'さば かん',
    date: '2025年05月14日',
    title: 'ハンズオンでELFファイルの構造学んでみた(備忘録)',
  },
]

// フェッチ関数（本来はAPI接続に置き換える）
export function fetchMockPosts(): Post[] {
  return mockPosts
}
