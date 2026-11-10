
import { useState } from 'react'
import ProductDetail from './ProductDetail'
import {
  Search, ShoppingBag, Plus, Heart, MapPin,
  SlidersHorizontal, ArrowRight, BookOpen,
  Laptop, Bike, Shirt, Package, Sparkles,
  UserRound, Bell, ChevronDown
} from 'lucide-react'

const categories = [
  { name: '全部好物', icon: Sparkles },
  { name: '数码电子', icon: Laptop },
  { name: '书籍资料', icon: BookOpen },
  { name: '生活用品', icon: Package },
  { name: '服饰穿搭', icon: Shirt },
  { name: '运动出行', icon: Bike },
]

const products = [
  {
    id: 1,
    title: 'iPad Air 5 64G｜学习笔记神器',
    price: 2199,
    original: 4399,
    category: '数码电子',
    location: '仙林校区',
    condition: '九成新',
    image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=800&q=85',
    tag: '热门',
  },
  {
    id: 2,
    title: '机器学习经典教材合集',
    price: 68,
    original: 236,
    category: '书籍资料',
    location: '鼓楼校区',
    condition: '几乎全新',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=85',
    tag: '好价',
  },
  {
    id: 3,
    title: '富士拍立得相机｜奶油白',
    price: 329,
    original: 699,
    category: '数码电子',
    location: '仙林校区',
    condition: '九成新',
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=800&q=85',
    tag: '',
  },
  {
    id: 4,
    title: '复古城市通勤自行车',
    price: 280,
    original: 899,
    category: '运动出行',
    location: '仙林校区',
    condition: '八成新',
    image: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=800&q=85',
    tag: '好价',
  },
  {
    id: 5,
    title: '机械键盘 87 键｜办公游戏两用',
    price: 159,
    original: 399,
    category: '数码电子',
    location: '鼓楼校区',
    condition: '九成新',
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=85',
    tag: '',
  },
  {
    id: 6,
    title: '简约桌面台灯｜宿舍学习必备',
    price: 39,
    original: 129,
    category: '生活用品',
    location: '仙林校区',
    condition: '几乎全新',
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800&q=85',
    tag: '热门',
  },
]

function App() {
  const [category, setCategory] = useState('全部好物')
  const [search, setSearch] = useState('')
  const [favorites, setFavorites] = useState([])
  const [selectedProduct, setSelectedProduct] = useState(null)

  const filtered = products.filter((product) => {
    const matchCategory =
      category === '全部好物' || product.category === category
    const matchSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase())
    return matchCategory && matchSearch
  })

  function toggleFavorite(id) {
    setFavorites((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    )
  }

  return selectedProduct ? (
    <ProductDetail
      product={selectedProduct}
      onBack={() => setSelectedProduct(null)}
    />
  ) : (
    <div className="min-h-screen bg-page">
      {/* 顶部导航 */}
      <header className="sticky top-0 z-30 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-6">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand text-white">
              <ShoppingBag size={22} strokeWidth={2.2} />
            </div>
            <div>
              <div className="text-xl font-extrabold tracking-tight text-slate-900">
                青集<span className="ml-1 text-brand">.</span>
              </div>
              <div className="text-[10px] tracking-widest text-slate-400">
                CAMPUS MARKET
              </div>
            </div>
          </div>

          <nav className="hidden items-center gap-9 md:flex">
            <a className="border-b-2 border-brand py-6 text-sm font-semibold text-brand" href="#">
              发现好物
            </a>
            <a className="text-sm text-slate-500 hover:text-brand" href="#products">
              闲置广场
            </a>
            <a className="text-sm text-slate-500 hover:text-brand" href="#about">
              关于青集
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button className="hidden rounded-xl bg-brand px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-teal-700 sm:flex sm:items-center sm:gap-2">
              <Plus size={17} />
              发布闲置
            </button>
            <button className="relative text-slate-500 hover:text-brand">
              <Bell size={21} />
              <span className="absolute -right-0.5 -top-0.5 h-2 w-2 rounded-full bg-orange-400" />
            </button>
            <button className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-600">
              <UserRound size={19} />
            </button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-6">
        {/* 首页横幅 */}
        <section className="relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-r from-teal-900 via-teal-800 to-emerald-700 px-8 py-14 text-white md:px-16">
          <div className="relative z-10 max-w-xl">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium">
              <Sparkles size={14} />
              让闲置流转，让美好延续
            </div>

            <h1 className="text-4xl font-bold leading-tight tracking-tight md:text-5xl">
              好东西，
              <br />
              值得遇见下一位主人。
            </h1>

            <p className="mt-5 text-sm leading-7 text-teal-50/80 md:text-base">
              从一本书到一辆单车，在校园里发现更多可能。
              <br />
              让每一次闲置交换，都成为新的故事。
            </p>

            <a
              href="#products"
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-bold text-teal-900 transition hover:bg-teal-50"
            >
              开始探索 <ArrowRight size={17} />
            </a>
          </div>

          <div className="pointer-events-none absolute -right-20 -top-32 h-96 w-96 rounded-full border-[65px] border-white/5" />
          <div className="pointer-events-none absolute bottom-[-130px] right-32 h-80 w-80 rounded-full bg-white/5" />
          <div className="pointer-events-none absolute right-16 top-16 hidden rotate-12 rounded-3xl border border-white/15 bg-white/10 p-9 backdrop-blur-sm lg:block">
            <ShoppingBag size={100} strokeWidth={1} className="text-white/70" />
          </div>
        </section>

        {/* 搜索区域 */}
        <section className="relative z-10 mx-auto -mt-7 max-w-4xl rounded-2xl border border-slate-100 bg-white p-3 shadow-xl shadow-slate-200/50">
          <div className="flex items-center gap-3">
            <Search className="ml-3 shrink-0 text-slate-400" size={22} />
            <input
              type="text"
              placeholder="搜索教材、数码、生活好物..."
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className="min-w-0 flex-1 bg-transparent py-3 text-sm text-slate-700 outline-none placeholder:text-slate-400"
            />
            <button className="hidden items-center gap-2 border-l border-slate-100 px-4 text-sm text-slate-500 md:flex">
              全部校区 <ChevronDown size={15} />
            </button>
            <button className="rounded-xl bg-brand px-7 py-3 text-sm font-semibold text-white hover:bg-teal-700">
              搜索
            </button>
          </div>
        </section>

        {/* 分类入口 */}
        <section className="mt-14">
          <div className="mb-6 flex items-end justify-between">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Explore Categories
              </p>
              <h2 className="text-2xl font-bold text-slate-900">发现你的心头好</h2>
            </div>
            <span className="text-sm text-slate-400">从这里开始探索校园好物</span>
          </div>

          <div className="grid grid-cols-3 gap-3 md:grid-cols-6">
            {categories.map(({ name, icon: Icon }) => (
              <button
                key={name}
                onClick={() => setCategory(name)}
                className={`flex flex-col items-center gap-3 rounded-2xl border px-3 py-6 transition-all ${
                  category === name
                    ? 'border-teal-200 bg-teal-50 text-brand shadow-sm'
                    : 'border-slate-100 bg-white text-slate-600 hover:-translate-y-1 hover:border-teal-100 hover:shadow-md'
                }`}
              >
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl ${
                  category === name ? 'bg-teal-100' : 'bg-slate-50'
                }`}>
                  <Icon size={23} strokeWidth={1.8} />
                </div>
                <span className="text-sm font-medium">{name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* 商品广场 */}
        <section id="products" className="mt-16 pb-20">
          <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="mb-1 text-xs font-bold uppercase tracking-[0.2em] text-brand">
                Curated For You
              </p>
              <h2 className="text-2xl font-bold text-slate-900">正在被发现的好物</h2>
              <p className="mt-2 text-sm text-slate-400">
                精选校园闲置，给好东西第二次闪光的机会
              </p>
            </div>
            <button className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-600">
              <SlidersHorizontal size={16} />
              综合排序
              <ChevronDown size={14} />
            </button>
          </div>

          {filtered.length === 0 ? (
            <div className="rounded-2xl bg-white py-20 text-center text-slate-400">
              暂时没有找到符合条件的商品
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filtered.map((product) => (
                <article
                  key={product.id}
                  onClick={() => setSelectedProduct(product)}
                  className="group cursor-pointer overflow-hidden rounded-2xl border border-slate-100 bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-200/60"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
                    <img
                      src={product.image}
                      alt={product.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />

                    {product.tag && (
                      <span className="absolute left-4 top-4 rounded-lg bg-white/95 px-3 py-1.5 text-xs font-bold text-brand shadow-sm">
                        {product.tag}
                      </span>
                    )}

                    <button
                      onClick={(event) => {
                        event.stopPropagation()
                        toggleFavorite(product.id)
                      }}
                      className="absolute right-4 top-4 flex h-9 w-9 items-center justify-center rounded-full bg-white/95 shadow-sm"
                    >
                      <Heart
                        size={18}
                        className={favorites.includes(product.id)
                          ? 'fill-rose-500 text-rose-500'
                          : 'text-slate-500'}
                      />
                    </button>
                  </div>

                  <div className="p-5">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="rounded-md bg-teal-50 px-2 py-1 text-xs font-medium text-teal-700">
                        {product.condition}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-slate-400">
                        <MapPin size={13} />
                        {product.location}
                      </span>
                    </div>

                    <h3 className="truncate text-base font-semibold text-slate-800">
                      {product.title}
                    </h3>

                    <div className="mt-4 flex items-end justify-between">
                      <div className="flex items-baseline gap-2">
                        <span className="text-sm font-bold text-orange-500">¥</span>
                        <span className="text-2xl font-extrabold text-orange-500">
                          {product.price}
                        </span>
                        <span className="text-xs text-slate-400 line-through">
                          ¥{product.original}
                        </span>
                      </div>
                      <span className="flex items-center gap-1 text-xs font-medium text-brand">
                        查看详情 <ArrowRight size={14} />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      </main>

      {/* 页脚 */}
      <footer id="about" className="border-t border-slate-100 bg-white">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-8 text-xs text-slate-400 md:flex-row">
          <span>© 2026 青集 Campus Market · 校园二手交易平台</span>
          <span>让每一件闲置，都值得被重新发现。</span>
        </div>
      </footer>
    </div>
  )
}

export default App
