// You can get "categories", "sub_categories", "duas"  using this API
export const API_URL = 'https://task-dua-app.vercel.app'


// For url with header name change
export const nameWithUrl: any = {
    '/': "Home Page",
    '/alldua': "All Duas",
    '/memorize': "Memorize",
    '/bookmark': "Bookmark",
    '/ruqyah': "Ruqyah",
    '/dua-info': "Dua Info",
    '/books': "Books",
    '/all-categories': "All Categories",
    '/comingsoon': "Coming Soon",
}


// For main sidebar navigation lists
export const sidebarCatsData: { name: string; icon: string; link: string }[] = [
    { name: "Home", icon: 'home.svg', link: '/' },
    { name: "All Duas", icon: 'alldua.svg', link: 'alldua' },
    { name: "Memorize", icon: 'memorize.svg', link: 'memorize' },
    { name: "Bookmark", icon: 'bookmark.svg', link: 'bookmark' },
    { name: "Ruqyah", icon: 'ruqyah.svg', link: 'ruqyah' },
    { name: "Dua Info", icon: 'dua-info.svg', link: 'dua-info' },
    { name: "Books", icon: 'books.svg', link: 'books' }
]
