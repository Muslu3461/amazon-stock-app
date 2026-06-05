import { useState, useMemo } from 'react'
import {
  AreaChart, Area, BarChart, Bar, ComposedChart, Line,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, ReferenceLine, Legend
} from 'recharts'
import {
  MONTHLY_DATA, LAST_PRICE, LAST_DATE, ALL_TIME_HIGH,
  ALL_TIME_LOW, AVG_CLOSE, TOTAL_DAYS, FIRST_PRICE, PRICE_CHANGE_PCT
} from '../data/stockData'

const GREEN = '#10b981'
const RED = '#ef4444'
const AMBER = '#f59e0b'
const BLUE = '#3b82f6'
const PURPLE = '#8b5cf6'

const fmt = (n: number) => `$${n.toFixed(2)}`
const fmtVol = (n: number) => n >= 1_000_000 ? `${(n / 1_000_000).toFixed(1)}M` : `${(n / 1_000).toFixed(0)}K`
const fmtPct = (n: number) => `${n >= 0 ? '+' : ''}${n.toFixed(2)}%`

const card: React.CSSProperties = {
  background: 'var(--surface)', border: '1px solid var(--border)',
  borderRadius: 'var(--rl)', padding: '20px 22px',
}

function KpiCard({ label, value, sub, icon, color, trend }: {
  label: string; value: string; sub?: string; icon: string
  color: string; trend?: { val: number }
}) {
  return (
    <div style={{
      ...card, display: 'flex', flexDirection: 'column', gap: 10,
      position: 'relative', overflow: 'hidden',
    }}>
      <div style={{
        position: 'absolute', top: 0, right: 0, width: 100, height: 100,
        background: `${color}18`, borderRadius: '0 0 0 100%', pointerEvents: 'none',
      }} />
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 11, color: 'var(--muted)', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{label}</span>
        <div style={{ width: 34, height: 34, borderRadius: 8, background: `${color}18`, border: `1px solid ${color}40`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>{icon}</div>
      </div>
      <div>
        <div style={{ fontSize: 24, fontWeight: 700, letterSpacing: '-0.02em' }}>{value}</div>
        {sub && <div style={{ fontSize: 11, color: 'var(--muted)', marginTop: 2 }}>{sub}</div>}
      </div>
      {trend !== undefined && (
        <div style={{ fontSize: 12, color: trend.val >= 0 ? GREEN : RED, fontWeight: 600 }}>
          {trend.val >= 0 ? '▲' : '▼'} {fmtPct(Math.abs(trend.val))} vs Jan 2021
        </div>
      )}
    </div>
  )
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div style={{ background: 'var(--surface2)', border: '1px solid var(--border)', borderRadius: 8, padding: '10px 14px', fontSize: 12 }}>
      <p style={{ color: 'var(--muted)', marginBottom: 6, fontWeight: 600 }}>{label}</p>
      {payload.map((p: any) => (
        <p key={p.name} style={{ color: p.color ?? p.fill, margin: '2px 0' }}>
          {p.name}: <strong>{typeof p.value === 'number' && p.name === 'Volume' ? fmtVol(p.value) : fmt(p.value)}</strong>
        </p>
      ))}
    </div>
  )
}

type Range = '1Y' | '2Y' | '3Y' | 'ALL'

export default function Dashboard() {
  const [range, setRange] = useState<Range>('ALL')
  const [metric, setMetric] = useState<'price' | 'volume' | 'range'>('price')

  const filtered = useMemo(() => {
    const cutoff: Record<Range, number> = { '1Y': 202502, '2Y': 202402, '3Y': 202302, 'ALL': 0 }
    return MONTHLY_DATA.filter(d => d.sort >= cutoff[range])
  }, [range])

  const isUp = LAST_PRICE >= FIRST_PRICE

  return (
    <div style={{ minHeight: '100vh', background: 'var(--bg)' }}>

      {/* Header */}
      <header style={{
        borderBottom: '1px solid var(--border)', padding: '0 32px', height: 58,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: 'var(--surface)', position: 'sticky', top: 0, zIndex: 10,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontSize: 22 }}>📦</span>
          <div>
            <span style={{ fontWeight: 700, fontSize: 16, color: 'var(--text)' }}>Amazon (AMZN)</span>
            <span style={{ fontSize: 11, color: 'var(--muted)', marginLeft: 10 }}>NASDAQ · Stock Analytics</span>
          </div>
          <span style={{
            fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 20,
            background: 'rgba(245,158,11,0.12)', color: AMBER,
            border: `1px solid ${AMBER}40`, letterSpacing: '0.05em',
          }}>FABRIC APP</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <span style={{ fontSize: 20, fontWeight: 700, color: isUp ? GREEN : RED }}>{fmt(LAST_PRICE)}</span>
            <span style={{ color: isUp ? GREEN : RED, fontWeight: 600 }}>{fmtPct(PRICE_CHANGE_PCT)}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--muted)' }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: GREEN, display: 'inline-block' }} />
            Last updated: {LAST_DATE}
          </div>
        </div>
      </header>

      <main style={{ padding: '24px 32px', maxWidth: 1400, margin: '0 auto' }}>

        {/* KPI Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 24 }}>
          <KpiCard label="Last Close" value={fmt(LAST_PRICE)} sub={LAST_DATE} icon="💹" color={AMBER} trend={{ val: PRICE_CHANGE_PCT }} />
          <KpiCard label="All-Time High" value={fmt(ALL_TIME_HIGH)} sub="Peak since Jan 2021" icon="🚀" color={GREEN} />
          <KpiCard label="All-Time Low" value={fmt(ALL_TIME_LOW)} sub="Bottom since Jan 2021" icon="📉" color={RED} />
          <KpiCard label="5Y Avg Close" value={fmt(AVG_CLOSE)} sub="Jan 2021 – Feb 2026" icon="📊" color={BLUE} />
          <KpiCard label="Trading Days" value={TOTAL_DAYS.toLocaleString()} sub="5 years of data" icon="📅" color={PURPLE} />
        </div>

        {/* Main Chart */}
        <div style={{ ...card, marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, flexWrap: 'wrap', gap: 10 }}>
            <div>
              <p style={{ fontSize: 15, fontWeight: 600 }}>Price History</p>
              <p style={{ fontSize: 12, color: 'var(--muted)', marginTop: 2 }}>Monthly average closing price · AMZN</p>
            </div>
            <div style={{ display: 'flex', gap: 6 }}>
              {/* Metric toggle */}
              {(['price', 'volume', 'range'] as const).map(m => (
                <button key={m} onClick={() => setMetric(m)} style={{
                  fontSize: 11, fontWeight: 500, padding: '4px 12px', borderRadius: 20,
                  border: metric === m ? `1px solid ${AMBER}` : '1px solid var(--border)',
                  background: metric === m ? `${AMBER}18` : 'transparent',
                  color: metric === m ? AMBER : 'var(--muted)',
                }}>
                  {m === 'price' ? '📈 Close' : m === 'volume' ? '📊 Volume' : '📉 H/L Range'}
                </button>
              ))}
              <div style={{ width: 1, background: 'var(--border)', margin: '0 4px' }} />
              {(['1Y', '2Y', '3Y', 'ALL'] as const).map(r => (
                <button key={r} onClick={() => setRange(r)} style={{
                  fontSize: 11, fontWeight: 500, padding: '4px 12px', borderRadius: 20,
                  border: range === r ? `1px solid ${BLUE}` : '1px solid var(--border)',
                  background: range === r ? `${BLUE}18` : 'transparent',
                  color: range === r ? BLUE : 'var(--muted)',
                }}>
                  {r}
                </button>
              ))}
            </div>
          </div>

          <ResponsiveContainer width="100%" height={300}>
            {metric === 'price' ? (
              <AreaChart data={filtered} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
                <defs>
                  <linearGradient id="closeGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor={AMBER} stopOpacity={0.25} />
                    <stop offset="95%" stopColor={AMBER} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: '#7b8799', fontSize: 10 }} axisLine={false} tickLine={false}
                  interval={Math.floor(filtered.length / 8)} />
                <YAxis tickFormatter={v => `$${v}`} tick={{ fill: '#7b8799', fontSize: 11 }} axisLine={false} tickLine={false} width={48} domain={['auto', 'auto']} />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine y={AVG_CLOSE} stroke={BLUE} strokeDasharray="4 4" strokeOpacity={0.5} label={{ value: 'Avg', fill: BLUE, fontSize: 10 }} />
                <Area type="monotone" dataKey="avgClose" name="Close" stroke={AMBER} strokeWidth={2} fill="url(#closeGrad)" dot={false} />
              </AreaChart>
            ) : metric === 'volume' ? (
              <BarChart data={filtered} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: '#7b8799', fontSize: 10 }} axisLine={false} tickLine={false} interval={Math.floor(filtered.length / 8)} />
                <YAxis tickFormatter={v => fmtVol(v)} tick={{ fill: '#7b8799', fontSize: 11 }} axisLine={false} tickLine={false} width={52} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="avgVolume" name="Volume" fill={PURPLE} radius={[3, 3, 0, 0]} />
              </BarChart>
            ) : (
              <ComposedChart data={filtered} margin={{ top: 4, right: 8, bottom: 0, left: 0 }}>
                <CartesianGrid stroke="rgba(255,255,255,0.04)" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: '#7b8799', fontSize: 10 }} axisLine={false} tickLine={false} interval={Math.floor(filtered.length / 8)} />
                <YAxis tickFormatter={v => `$${v}`} tick={{ fill: '#7b8799', fontSize: 11 }} axisLine={false} tickLine={false} width={48} domain={['auto', 'auto']} />
                <Tooltip content={<CustomTooltip />} />
                <Legend wrapperStyle={{ fontSize: 11, color: 'var(--muted)', paddingTop: 10 }} />
                <Area type="monotone" dataKey="maxHigh" name="High" stroke={GREEN} strokeWidth={1.5} fill={`${GREEN}10`} dot={false} />
                <Area type="monotone" dataKey="minLow" name="Low" stroke={RED} strokeWidth={1.5} fill={`${RED}10`} dot={false} />
                <Line type="monotone" dataKey="avgClose" name="Close" stroke={AMBER} strokeWidth={2} dot={false} />
              </ComposedChart>
            )}
          </ResponsiveContainer>
        </div>

        {/* Bottom Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 16 }}>

          {/* Yearly Performance Table */}
          <div style={card}>
            <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 14 }}>Yearly Performance</p>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: 12 }}>
              <thead>
                <tr style={{ color: 'var(--muted)', borderBottom: '1px solid var(--border)' }}>
                  {['Year', 'Avg Close', 'High', 'Low', 'Change'].map(h => (
                    <th key={h} style={{ textAlign: h === 'Year' ? 'left' : 'right', padding: '6px 8px', fontWeight: 500 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[2021, 2022, 2023, 2024, 2025, 2026].map(year => {
                  const rows = MONTHLY_DATA.filter(d => Math.floor(d.sort / 100) === year)
                  if (!rows.length) return null
                  const avg = rows.reduce((s, r) => s + r.avgClose, 0) / rows.length
                  const high = Math.max(...rows.map(r => r.maxHigh))
                  const low = Math.min(...rows.map(r => r.minLow))
                  const first = rows[0].avgClose
                  const last = rows[rows.length - 1].avgClose
                  const chg = (last - first) / first * 100
                  return (
                    <tr key={year} style={{ borderBottom: '1px solid var(--border)' }}
                      onMouseEnter={e => (e.currentTarget.style.background = 'var(--surface2)')}
                      onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}>
                      <td style={{ padding: '8px 8px', fontWeight: 600 }}>{year}</td>
                      <td style={{ padding: '8px 8px', textAlign: 'right' }}>{fmt(avg)}</td>
                      <td style={{ padding: '8px 8px', textAlign: 'right', color: GREEN }}>{fmt(high)}</td>
                      <td style={{ padding: '8px 8px', textAlign: 'right', color: RED }}>{fmt(low)}</td>
                      <td style={{ padding: '8px 8px', textAlign: 'right', color: chg >= 0 ? GREEN : RED, fontWeight: 600 }}>
                        {fmtPct(chg)}
                      </td>
                    </tr>
                  )
                })}
              </tbody>
            </table>
          </div>

          {/* Price Distribution */}
          <div style={card}>
            <p style={{ fontSize: 14, fontWeight: 600, marginBottom: 4 }}>Price Range Analysis</p>
            <p style={{ fontSize: 12, color: 'var(--muted)', marginBottom: 14 }}>All-time price band breakdown</p>
            {[
              { label: 'Below $100', range: [0, 100], color: RED },
              { label: '$100 – $150', range: [100, 150], color: '#f97316' },
              { label: '$150 – $200', range: [150, 200], color: AMBER },
              { label: '$200 – $250', range: [200, 250], color: GREEN },
              { label: 'Above $250', range: [250, 999], color: BLUE },
            ].map(band => {
              const count = MONTHLY_DATA.filter(d => d.avgClose >= band.range[0] && d.avgClose < band.range[1]).length
              const pct = (count / MONTHLY_DATA.length) * 100
              return (
                <div key={band.label} style={{ marginBottom: 10 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 4, fontSize: 12 }}>
                    <span style={{ color: 'var(--muted)' }}>{band.label}</span>
                    <span style={{ color: 'var(--text)', fontWeight: 600 }}>{count} months · {pct.toFixed(0)}%</span>
                  </div>
                  <div style={{ background: 'var(--surface2)', borderRadius: 4, height: 6, overflow: 'hidden' }}>
                    <div style={{ width: `${pct}%`, height: '100%', background: band.color, borderRadius: 4, transition: 'width 0.6s ease' }} />
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Power BI Embedded */}
        <div style={{ ...card, marginBottom: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <p style={{ fontSize: 14, fontWeight: 600 }}>Interactive Power BI Report</p>
            <span style={{
              fontSize: 10, fontWeight: 600, padding: '2px 8px', borderRadius: 20,
              background: 'rgba(59,130,246,0.12)', color: BLUE, border: `1px solid ${BLUE}40`,
            }}>EMBEDDED · FabricApp Workspace</span>
          </div>
          <div style={{ borderRadius: 10, overflow: 'hidden', border: '1px solid var(--border)' }}>
            <iframe
              title="Amazon Daily Stock Price"
              width="100%"
              height="540"
              src="https://app.powerbi.com/reportEmbed?reportId=f745ca57-5b26-4360-8d8e-b77a59b509e9&autoAuth=true&ctid=096df38d-ec5c-44c6-b24a-fbeeab2a9fef"
              frameBorder={0}
              allowFullScreen
              style={{ display: 'block', background: '#fff' }}
            />
          </div>
        </div>

        {/* Footer */}
        <footer style={{ paddingTop: 20, borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <p style={{ fontSize: 12, color: 'var(--dim)' }}>
            Built with <strong style={{ color: 'var(--muted)' }}>Microsoft Fabric Apps (Rayfin)</strong> ·
            Data: Amazon Daily Stock Price Semantic Model · FabricApp Workspace
          </p>
          <p style={{ fontSize: 12, color: 'var(--dim)' }}>
            By <a href="https://www.linkedin.com/in/mmuslu/" style={{ color: AMBER }}>Muhammet Muslu</a>
          </p>
        </footer>

      </main>
    </div>
  )
}
