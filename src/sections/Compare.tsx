import { Check, Minus } from 'lucide-react'
import { Section, SectionHeading } from '@/components/Section'
import { Reveal } from '@/components/Reveal'
import { comparison } from '@/content/site'

function Cell({ value }: { value: boolean | string }) {
  if (value === true) return <><Check className="mx-auto size-5 text-brand" aria-hidden /><span className="sr-only">Included</span></>
  if (value === false) return <><Minus className="mx-auto size-5 text-muted/60" aria-hidden /><span className="sr-only">Not available</span></>
  return <span>{value}</span>
}

export function Compare() {
  return (
    <Section id="compare">
      <SectionHeading eyebrow="Mac vs iPhone" title="Same privacy. Different strengths." body="The iPhone app is built for capturing speech wherever you are. The Mac app adds the full toolkit for turning it into finished work." />
      <Reveal className="mt-14">
        <div className="overflow-x-auto rounded-3xl border border-line bg-surface">
          <table className="w-full min-w-[640px] border-collapse text-left text-[0.95rem]">
            <caption className="sr-only">Feature comparison between Henrik Transcribe for Mac and for iPhone</caption>
            <thead>
              <tr className="border-b border-line text-sm">
                <th scope="col" className="px-6 py-4 font-medium text-muted">Feature</th>
                <th scope="col" className="w-[26%] px-6 py-4 text-center font-semibold">Mac</th>
                <th scope="col" className="w-[26%] px-6 py-4 text-center font-semibold">iPhone</th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.feature} className="border-b border-line last:border-0">
                  <th scope="row" className="px-6 py-4 font-medium">{row.feature}</th>
                  <td className="px-6 py-4 text-center tabular-nums"><Cell value={row.mac} /></td>
                  <td className="px-6 py-4 text-center tabular-nums"><Cell value={row.iphone} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  )
}
