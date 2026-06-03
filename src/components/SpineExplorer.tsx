import { useState, useRef, type ReactNode } from 'react'
import {
  Search, Network, Globe, Gauge, ShieldCheck,
  Clock, Database, Boxes, Server,
  ChevronRight, ArrowRight, Layers,
} from 'lucide-react'

type Group = 'cap' | 'fnd'

interface Layer {
  a: string
  name: string
  one: string
  what: string
  owns: string
  pub: boolean
  group: Group
  icon: ReactNode
}

// Full Tailwind class strings per group (no interpolation, so nothing is purged).
const STYLE: Record<Group, {
  border: string; bg: string; chip: string; text: string; dot: string; ring: string
}> = {
  cap: {
    border: 'border-teal-200 dark:border-teal-900',
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    chip: 'bg-teal-500',
    text: 'text-teal-700 dark:text-teal-400',
    dot: 'bg-teal-500',
    ring: 'ring-2 ring-teal-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-950',
  },
  fnd: {
    border: 'border-violet-200 dark:border-violet-900',
    bg: 'bg-violet-50 dark:bg-violet-900/20',
    chip: 'bg-violet-500',
    text: 'text-violet-700 dark:text-violet-400',
    dot: 'bg-violet-500',
    ring: 'ring-2 ring-violet-500 ring-offset-2 ring-offset-white dark:ring-offset-gray-950',
  },
}

const LAYERS: Layer[] = [
  { a: 'PDS', name: 'Progressive Discovery Spine', group: 'cap', pub: true, icon: <Search size={16} />,
    one: 'The right few tools per task, not the whole catalog.',
    what: 'Surfaces the 5 to 8 tools an agent needs on demand, instead of dumping a thousand into the context window. Semantic entities, a gateway, SLA-aware routing.',
    owns: 'bad tool data' },
  { a: 'ACS', name: 'Adversarial Coordination Spine', group: 'cap', pub: true, icon: <Network size={16} />,
    one: 'Multi-agent work that stays coherent: a separate checker, not a rubber stamp.',
    what: 'Planner, generator, and evaluator are structurally separated, so the checker cannot simply agree with the maker. Coordination that catches its own mistakes.',
    owns: 'bad reasoning, bad evaluation' },
  { a: 'ESF', name: 'External Signal Fabric', group: 'cap', pub: true, icon: <Globe size={16} />,
    one: 'Outside-world signals with source, time, and confidence.',
    what: 'Every external signal (markets, logistics, geopolitics, supplier health) arrives typed and provenance-stamped, so the reasoning that used it is auditable.',
    owns: 'bad world data' },
  { a: 'CRI', name: 'Composite Risk Index', group: 'cap', pub: false, icon: <Gauge size={16} />,
    one: 'Risk scores that show their work, with confidence bands.',
    what: 'Composite scoring with confidence bands, tenant-conditioned weights, and signal-version provenance. Not one mystery number.',
    owns: 'bad scoring' },
  { a: 'AGS', name: 'Agent Governance Spine', group: 'cap', pub: true, icon: <ShieldCheck size={16} />,
    one: 'Deterministic policy, per-agent identity, tamper-evident audit.',
    what: 'Every action passes deterministic policy before it reaches the wire. Actions the policy denies are structurally impossible, not merely unlikely. Identity per agent, audit by construction.',
    owns: 'bad governance' },
  { a: 'DCS', name: 'Durable Context Spine', group: 'fnd', pub: true, icon: <Clock size={16} />,
    one: 'State and memory that survive across sessions and time.',
    what: 'The temporal substrate. Project state, memory, and a verification-gated record of done that survive the context-window boundary, so the next session picks up the thread without loss.',
    owns: 'bad continuity' },
  { a: 'GDS', name: 'Grounded Data Spine', group: 'fnd', pub: false, icon: <Database size={16} />,
    one: 'One trusted set of definitions, and who is allowed to see what.',
    what: 'The grounding substrate. A canonical semantic model (text to metric, not text to SQL) plus data-level entitlements, so answers are consistent and an agent sees only what its user may see.',
    owns: 'bad grounding' },
  { a: 'ARS', name: 'Agent Registry Spine', group: 'fnd', pub: false, icon: <Boxes size={16} />,
    one: 'One system of record for every agent, tool, and model.',
    what: 'The system of record layer. One continuously-reconciled catalog of every agentic asset, that discovery reads from and governance enforces against. Shadow assets become detectable, not invisible.',
    owns: 'bad or missing registry' },
  { a: 'SRS', name: 'Sovereign Runtime Spine', group: 'fnd', pub: false, icon: <Server size={16} />,
    one: 'The runtime your own agents run on, that you control.',
    what: 'The execution substrate. A sovereign, first-party runtime where agents are identity-bound, isolated, ephemeral, and bounded by construction, composing the whole catalog. A specification you own, portable across any substrate.',
    owns: 'bad or unbounded execution' },
]

const ATTR: { f: string; owner: string }[] = [
  { f: 'bad tool data', owner: 'PDS' },
  { f: 'bad world data', owner: 'ESF' },
  { f: 'bad reasoning', owner: 'ACS' },
  { f: 'bad evaluation', owner: 'ACS' },
  { f: 'bad scoring', owner: 'CRI' },
  { f: 'bad governance', owner: 'AGS' },
  { f: 'bad continuity', owner: 'DCS' },
  { f: 'bad grounding', owner: 'GDS' },
  { f: 'bad or missing registry', owner: 'ARS' },
  { f: 'bad or unbounded execution', owner: 'SRS' },
]

function LayerCard({ L, open, onToggle, flashed, cardRef }: {
  L: Layer; open: boolean; onToggle: () => void; flashed: boolean
  cardRef: (el: HTMLDivElement | null) => void
}) {
  const s = STYLE[L.group]
  return (
    <div
      ref={cardRef}
      className={`rounded-2xl border ${s.border} ${s.bg} transition-all duration-300 ${flashed ? s.ring : ''}`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-center gap-4 p-4 sm:p-5 text-left"
      >
        <span className={`flex-none w-11 h-11 rounded-xl ${s.chip} text-white flex items-center justify-center`}>
          {L.icon}
        </span>
        <span className={`flex-none font-mono font-semibold text-sm w-12 ${s.text}`}>{L.a}</span>
        <span className="flex-1 min-w-0">
          <span className="block font-bold text-gray-900 dark:text-white text-[15px]">{L.name}</span>
          <span className="block text-sm text-gray-600 dark:text-gray-400 mt-0.5">{L.one}</span>
        </span>
        <span className="flex-none flex items-center gap-3">
          <span className={`hidden sm:inline-block text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-md border ${
            L.pub
              ? 'text-teal-700 dark:text-teal-400 border-teal-200 dark:border-teal-800 bg-teal-50 dark:bg-teal-900/20'
              : 'text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20'
          }`}>
            {L.pub ? 'Public' : 'Private'}
          </span>
          <ChevronRight size={18} className={`text-gray-400 transition-transform duration-300 ${open ? 'rotate-90 ' + s.text : ''}`} />
        </span>
      </button>
      <div className={`grid transition-all duration-300 ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
        <div className="overflow-hidden">
          <div className="px-4 sm:px-5 pb-5 pl-4 sm:pl-20">
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{L.what}</p>
            <div className="flex flex-wrap gap-2 mt-3">
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                owns the failure: <b className={s.text}>{L.owns}</b>
              </span>
              <span className="text-[11px] font-mono px-2.5 py-1 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                {L.group === 'fnd' ? 'foundation layer' : 'capability layer'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default function SpineExplorer() {
  const [open, setOpen] = useState<string | null>(null)
  const [flash, setFlash] = useState<string | null>(null)
  const refs = useRef<Record<string, HTMLDivElement | null>>({})
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const cap = LAYERS.filter(L => L.group === 'cap')
  const fnd = LAYERS.filter(L => L.group === 'fnd')

  function highlight(owner: string) {
    setOpen(owner)
    refs.current[owner]?.scrollIntoView({ behavior: 'smooth', block: 'center' })
    setFlash(owner)
    if (timer.current) clearTimeout(timer.current)
    timer.current = setTimeout(() => setFlash(null), 1600)
  }

  const renderCard = (L: Layer) => (
    <LayerCard
      key={L.a}
      L={L}
      open={open === L.a}
      flashed={flash === L.a}
      onToggle={() => setOpen(open === L.a ? null : L.a)}
      cardRef={el => { refs.current[L.a] = el }}
    />
  )

  return (
    <section id="explorer" className="py-20 sm:py-24">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 dark:bg-teal-900/30 border border-teal-200 dark:border-teal-800 text-teal-700 dark:text-teal-400 text-xs font-semibold uppercase tracking-wider mb-4">
            <Layers size={12} />
            The Spine
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
            The architecture for running AI agents{' '}
            <span className="gradient-text">in production</span>
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg">
            A vendor-neutral catalog of nine named layers. Plug in any outside application through governed boundaries, and run the agents you build yourself on a runtime you own. Open at the edges, sovereign at the core.
          </p>
        </div>

        {/* Layers */}
        <div className="mb-4 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-600">
          Capability layers
          <span className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
        </div>
        <div className="space-y-2.5">{cap.map(renderCard)}</div>

        <div className="mt-8 mb-4 flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-gray-400 dark:text-gray-600">
          Foundation layers
          <span className="flex-1 h-px bg-gray-200 dark:bg-gray-800" />
        </div>
        <div className="space-y-2.5">{fnd.map(renderCard)}</div>

        {/* Attribution dictionary */}
        <div className="mt-20 text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">
            When something breaks, you know{' '}
            <span className="gradient-text">who dropped the ball</span>
          </h3>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            The catalog turns "the AI broke" into a specific, ownable layer. Click a failure to light up the layer that owns it.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {ATTR.map(({ f, owner }, i) => {
            const isFnd = LAYERS.find(L => L.a === owner)?.group === 'fnd'
            return (
              <button
                key={i}
                onClick={() => highlight(owner)}
                className="flex items-center gap-3 px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 hover:border-teal-400 dark:hover:border-teal-600 hover:-translate-y-0.5 transition-all text-left"
              >
                <span className="text-sm text-gray-700 dark:text-gray-300">{f}</span>
                <ArrowRight size={14} className="ml-auto text-gray-400" />
                <span className={`font-mono font-semibold text-sm ${isFnd ? 'text-violet-600 dark:text-violet-400' : 'text-teal-600 dark:text-teal-400'}`}>{owner}</span>
              </button>
            )
          })}
        </div>

        {/* Two doors */}
        <div className="mt-20 text-center mb-8">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white mb-3">Two doors</h3>
          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-400">
            There are exactly two ways anything reaches your agent estate, and the Spine governs both.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="rounded-2xl border border-teal-200 dark:border-teal-900 bg-teal-50 dark:bg-teal-900/20 p-6">
            <div className="text-xs font-mono uppercase tracking-widest text-teal-700 dark:text-teal-400 mb-2">Door 1</div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Outside applications plug <span className="text-teal-600 dark:text-teal-400">into</span> the Spine
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              Any third-party or closed-source agent, tool, or AI application connects through governed boundaries: discovered through one curated surface, every action policy-gated and audited, the data grounded and entitlement-scoped, tracked in one system of record. Best of breed, no lock-in.
            </p>
            <div className="mt-4 pt-4 border-t border-teal-200/60 dark:border-teal-800/60 font-mono text-xs text-gray-600 dark:text-gray-400">
              third-party app &nbsp;&rarr;&nbsp; <span className="text-teal-700 dark:text-teal-400 font-semibold">governed boundary</span> &nbsp;&rarr;&nbsp; the Spine
            </div>
          </div>
          <div className="rounded-2xl border border-violet-200 dark:border-violet-900 bg-violet-50 dark:bg-violet-900/20 p-6">
            <div className="text-xs font-mono uppercase tracking-widest text-violet-700 dark:text-violet-400 mb-2">Door 2</div>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
              Your own agents run <span className="text-violet-600 dark:text-violet-400">on</span> the Spine
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              For the agents you build yourself, the Sovereign Runtime Spine is the execution model: identity-bound, isolated, bounded by construction, composing the whole catalog. A runtime you own and run on infrastructure you control, portable across any substrate.
            </p>
            <div className="mt-4 pt-4 border-t border-violet-200/60 dark:border-violet-800/60 font-mono text-xs text-gray-600 dark:text-gray-400">
              your agent &nbsp;&rarr;&nbsp; <span className="text-violet-700 dark:text-violet-400 font-semibold">SRS runtime you own</span> &nbsp;&rarr;&nbsp; the full catalog
            </div>
          </div>
        </div>

        <p className="mt-14 text-center text-sm text-gray-500 dark:text-gray-500 font-mono">
          Five of the nine layers are public open source (CC BY 4.0 + MIT). Four are private.
        </p>
      </div>
    </section>
  )
}
