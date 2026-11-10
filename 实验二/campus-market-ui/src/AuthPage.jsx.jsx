
import { useState } from 'react'
import {
  ArrowLeft, ArrowRight, ShoppingBag, Mail,
  LockKeyhole, UserRound, Phone, KeyRound,
  Eye, EyeOff, ShieldCheck, Sparkles
} from 'lucide-react'

export default function AuthPage({ onBack, onLogin }) {
  const [mode, setMode] = useState('login')
  const [role, setRole] = useState('BUYER')
  const [showPassword, setShowPassword] = useState(false)
  const [form, setForm] = useState({
    username: '',
    password: '',
    phone: '',
    inviteCode: ''
  })
  const [message, setMessage] = useState('')

  const update = (field, value) => {
    setForm(prev => ({ ...prev, [field]: value }))
    setMessage('')
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!form.username.trim() || !form.password.trim()) {
      setMessage('请填写用户名和密码')
      return
    }

    if (mode === 'register') {
      if (!form.phone.trim()) {
        setMessage('请填写联系电话')
        return
      }
      if (role === 'ADMIN' && !form.inviteCode.trim()) {
        setMessage('管理员注册需要填写邀请码')
        return
      }
      setMessage('演示原型：注册信息已填写，尚未连接后端')
      return
    }

    onLogin?.({
      username: form.username.trim(),
      role: 'BUYER'
    })
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* 左侧品牌展示 */}
      <div className="relative hidden w-[48%] overflow-hidden bg-gradient-to-br from-teal-950 via-teal-800 to-emerald-600 p-12 text-white lg:flex lg:flex-col">
        <div className="absolute -right-36 -top-36 h-96 w-96 rounded-full border-[70px] border-white/5" />
        <div className="absolute -bottom-32 -left-28 h-96 w-96 rounded-full bg-white/5" />

        <div className="relative z-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/15">
            <ShoppingBag size={24} />
          </div>
          <div>
            <div className="text-2xl font-extrabold">青集.</div>
            <div className="text-[10px] tracking-[0.25em] text-teal-100/70">
              CAMPUS MARKET
            </div>
          </div>
        </div>

        <div className="relative z-10 my-auto max-w-lg">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs">
            <Sparkles size={15} />
            让每一件闲置都有新故事
          </div>

          <h1 className="text-5xl font-bold leading-[1.3]">
            好物循环，
            <br />
            美好不止一次。
          </h1>

          <p className="mt-7 max-w-sm text-base leading-8 text-teal-50/75">
            在熟悉的校园里，让闲置找到新的主人。
            从学习资料到生活好物，开启更轻松的校园交易体验。
          </p>

          <div className="mt-12 flex items-center gap-3 text-sm text-teal-100/80">
            <ShieldCheck size={20} />
            商品审核 · 校园线下交易 · 预约管理
          </div>
        </div>

        <p className="relative z-10 text-xs text-teal-100/50">
          © 2026 青集 Campus Market
        </p>
      </div>

      {/* 右侧表单 */}
      <div className="flex min-h-screen flex-1 flex-col px-6 py-8 sm:px-12 lg:px-20">
        <button
          onClick={onBack}
          className="flex w-fit items-center gap-2 text-sm text-slate-500 hover:text-teal-700"
        >
          <ArrowLeft size={17} />
          返回首页
        </button>

        <div className="mx-auto my-auto w-full max-w-md py-12">
          <div className="mb-9">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-50 text-teal-700 lg:hidden">
              <ShoppingBag size={25} />
            </div>
            <p className="mb-2 text-sm font-semibold text-teal-700">
              WELCOME TO CAMPUS MARKET
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              {mode === 'login' ? '欢迎回到青集' : '加入青集'}
            </h2>
            <p className="mt-3 text-sm text-slate-400">
              {mode === 'login'
                ? '登录账号，继续发现校园里的美好闲置。'
                : '创建账号，开启你的校园闲置交易之旅。'}
            </p>
          </div>

          <div className="mb-8 grid grid-cols-2 rounded-xl bg-slate-100 p-1">
            {[
              ['login', '账号登录'],
              ['register', '注册账号']
            ].map(([value, label]) => (
              <button
                key={value}
                onClick={() => {
                  setMode(value)
                  setMessage('')
                }}
                className={`rounded-lg py-3 text-sm font-semibold transition ${
                  mode === value
                    ? 'bg-white text-teal-700 shadow-sm'
                    : 'text-slate-500'
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'register' && (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  注册身份
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    ['BUYER', '买家'],
                    ['SELLER', '卖家'],
                    ['ADMIN', '管理员']
                  ].map(([value, label]) => (
                    <button
                      key={value}
                      type="button"
                      onClick={() => setRole(value)}
                      className={`rounded-xl border py-3 text-sm font-medium transition ${
                        role === value
                          ? 'border-teal-500 bg-teal-50 text-teal-700'
                          : 'border-slate-200 text-slate-500 hover:border-teal-200'
                      }`}
                    >
                      {label}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                用户名
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-teal-500">
                <UserRound size={19} className="text-slate-400" />
                <input
                  value={form.username}
                  onChange={e => update('username', e.target.value)}
                  placeholder="请输入用户名"
                  className="w-full py-3.5 text-sm outline-none"
                />
              </div>
            </div>

            {mode === 'register' && (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  联系电话
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-teal-500">
                  <Phone size={19} className="text-slate-400" />
                  <input
                    value={form.phone}
                    onChange={e => update('phone', e.target.value)}
                    placeholder="请输入联系电话"
                    className="w-full py-3.5 text-sm outline-none"
                  />
                </div>
              </div>
            )}

            <div>
              <label className="mb-2 block text-sm font-medium text-slate-700">
                密码
              </label>
              <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-teal-500">
                <LockKeyhole size={19} className="text-slate-400" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={form.password}
                  onChange={e => update('password', e.target.value)}
                  placeholder="请输入密码"
                  className="w-full py-3.5 text-sm outline-none"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-slate-400 hover:text-teal-600"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {mode === 'register' && role === 'ADMIN' && (
              <div>
                <label className="mb-2 block text-sm font-medium text-slate-700">
                  管理员邀请码
                </label>
                <div className="flex items-center gap-3 rounded-xl border border-slate-200 px-4 focus-within:border-teal-500">
                  <KeyRound size={19} className="text-slate-400" />
                  <input
                    value={form.inviteCode}
                    onChange={e => update('inviteCode', e.target.value)}
                    placeholder="请输入一次性邀请码"
                    className="w-full py-3.5 text-sm outline-none"
                  />
                </div>
              </div>
            )}

            {message && (
              <p className="rounded-xl bg-amber-50 px-4 py-3 text-sm text-amber-700">
                {message}
              </p>
            )}

            <button
              type="submit"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-teal-600 py-4 text-sm font-bold text-white shadow-lg shadow-teal-100 hover:bg-teal-700"
            >
              {mode === 'login' ? '登录青集' : '创建账号'}
              <ArrowRight size={18} />
            </button>
          </form>

          <p className="mt-8 text-center text-xs leading-6 text-slate-400">
            青集仅提供校园闲置商品展示与预约服务
            <br />
            交易由买卖双方线下自行完成
          </p>
        </div>
      </div>
    </div>
  )
}
