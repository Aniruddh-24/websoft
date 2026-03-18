const steps = [
  {
    number: '01',
    emoji: '🔍',
    title: 'Discovery & Research',
    text: 'We deep-dive into your business goals, target audience, and competitive landscape to craft a tailored strategy.',
  },
  {
    number: '02',
    emoji: '📐',
    title: 'Planning & Architecture',
    text: 'We design the roadmap, choose the right tech stack, and blueprint every aspect of your solution before a line of code is written.',
  },
  {
    number: '03',
    emoji: '⚙️',
    title: 'Agile Development',
    text: 'Our iterative sprints deliver working increments fast, with continuous feedback loops keeping you in the driver seat.',
  },
  {
    number: '04',
    emoji: '🚀',
    title: 'Launch & Scale',
    text: 'After rigorous QA, we go live and provide ongoing support to help your product grow and evolve with your users.',
  },
]

export default function Strategy() {
  return (
    <section className="strategy" id="strategy">
      <div className="strategy-inner">
        <h2 className="strategy-heading">
          <span className="orange">Our Strategy</span> for Success
        </h2>
        <p className="strategy-sub">
          A proven four-phase process that takes your idea from concept to a scalable,
          market-ready digital product — on time and on budget.
        </p>
        <div className="strategy-steps">
          {steps.map((step) => (
            <div className="strategy-step" key={step.number}>
              <div className="step-number">{step.number}</div>
              <div className="step-icon">{step.emoji}</div>
              <div className="step-title">{step.title}</div>
              <div className="step-text">{step.text}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
