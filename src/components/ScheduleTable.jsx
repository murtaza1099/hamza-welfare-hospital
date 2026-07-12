import { useLang } from "../context/LanguageContext";

// Responsive schedule: a real table on md+, stacked cards on mobile.
export default function ScheduleTable() {
  const { t } = useLang();
  const d = t.doctorsPage;

  return (
    <div>
      {/* Desktop / tablet table */}
      <div className="hidden overflow-hidden rounded-xl border border-hair md:block">
        <table className="w-full border-collapse text-start">
          <thead>
            <tr className="bg-forest text-cream">
              <th className="px-5 py-3 text-start font-body text-[14px] font-semibold">{d.tableDoctor}</th>
              <th className="px-5 py-3 text-start font-body text-[14px] font-semibold">{d.tableSpecialty}</th>
              <th className="px-5 py-3 text-start font-body text-[14px] font-semibold">{d.tableDays}</th>
              <th className="px-5 py-3 text-start font-body text-[14px] font-semibold">{d.tableTiming}</th>
            </tr>
          </thead>
          <tbody>
            {d.rows.map((r, i) => (
              <tr key={i} className={i % 2 ? "bg-cream2" : "bg-cream"}>
                <td className="px-5 py-4 font-body text-[15px] font-semibold text-ink">{r.doctor}</td>
                <td className="px-5 py-4 font-body text-[15px] text-muted">{r.specialty}</td>
                <td className="px-5 py-4 font-body text-[15px] text-ink/80">{r.days}</td>
                <td className="px-5 py-4 font-body text-[15px] text-ink/80" dir="ltr">{r.timing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Mobile stacked cards */}
      <div className="space-y-4 md:hidden">
        {d.rows.map((r, i) => (
          <div key={i} className="rounded-xl border border-hair bg-cream p-4">
            <p className="font-display text-[18px] font-medium text-forest">{r.doctor}</p>
            <p className="mt-0.5 font-body text-[14px] text-muted">{r.specialty}</p>
            <div className="mt-3 grid grid-cols-2 gap-2 border-t border-hair pt-3 font-body text-[14px]">
              <span className="text-muted">{d.tableDays}</span>
              <span className="text-ink ltr:text-right rtl:text-left">{r.days}</span>
              <span className="text-muted">{d.tableTiming}</span>
              <span className="text-ink ltr:text-right rtl:text-left" dir="ltr">{r.timing}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
