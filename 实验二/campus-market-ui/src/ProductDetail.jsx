
import { ArrowLeft, Heart, MapPin, ShieldCheck, ShoppingBag, UserRound } from 'lucide-react'

export default function ProductDetail({ product, onBack }) {
  if (!product) return null

  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      <button
        onClick={onBack}
        className="mb-7 flex items-center gap-2 text-sm text-slate-500 hover:text-teal-600"
      >
        <ArrowLeft size={18} />
        返回商品广场
      </button>

      <div className="grid gap-10 rounded-3xl border border-slate-100 bg-white p-7 shadow-sm md:grid-cols-2">
        <div className="overflow-hidden rounded-2xl bg-slate-100">
          <img
            src={product.image}
            alt={product.title}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div className="flex flex-col">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-lg bg-teal-50 px-3 py-1.5 text-xs font-medium text-teal-700">
              {product.category}
            </span>
            <span className="rounded-lg bg-slate-100 px-3 py-1.5 text-xs text-slate-600">
              {product.condition}
            </span>
          </div>

          <h1 className="text-3xl font-bold leading-snug text-slate-900">
            {product.title}
          </h1>

          <div className="mt-7 rounded-2xl bg-orange-50 px-6 py-5">
            <div className="flex items-baseline gap-3">
              <span className="text-3xl font-extrabold text-orange-500">
                ¥{product.price}
              </span>
              <span className="text-sm text-slate-400 line-through">
                原价 ¥{product.original}
              </span>
            </div>
            <p className="mt-2 text-xs text-orange-700">
              校园闲置 · 线下当面交易
            </p>
          </div>

          <div className="mt-7 space-y-5 border-b border-slate-100 pb-7">
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <MapPin size={19} className="text-teal-600" />
              交易地点：{product.location}
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600">
              <ShieldCheck size={19} className="text-teal-600" />
              商品经过平台审核后展示
            </div>
          </div>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-teal-50 text-teal-700">
              <UserRound size={22} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-800">校园卖家</p>
              <p className="text-xs text-slate-400">线下见面交易 · 暂不支持在线支付</p>
            </div>
          </div>

          <div className="mt-auto flex gap-3 pt-10">
            <button
              onClick={() => window.alert('预约功能将在后续页面中实现')}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-4 font-semibold text-white hover:bg-teal-700"
            >
              <ShoppingBag size={19} />
              预约购买
            </button>
            <button
              aria-label="收藏商品"
              className="flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 text-slate-500 hover:text-rose-500"
            >
              <Heart size={21} />
            </button>
          </div>
        </div>
      </div>

      <section className="mt-8 rounded-3xl border border-slate-100 bg-white p-8">
        <h2 className="text-xl font-bold text-slate-900">商品详情</h2>
        <div className="mt-5 border-t border-slate-100 pt-5">
          <p className="leading-8 text-slate-600">
            {product.description || '卖家尚未填写详细描述，可根据商品图片、成色及交易地点了解商品信息。'}
          </p>
        </div>
      </section>
    </main>
  )
}
