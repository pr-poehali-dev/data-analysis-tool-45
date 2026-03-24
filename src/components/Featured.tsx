const types = [
  {
    title: "Открытая информация",
    description: "Свободно доступные сведения, распространение которых не ограничено законом: официальные документы, научные данные, публичные реестры.",
  },
  {
    title: "Ограниченного доступа",
    description: "Государственная тайна, коммерческая тайна, персональные данные — информация, оборот которой регулируется специальными нормами.",
  },
  {
    title: "По форме представления",
    description: "Документированная (на материальном носителе) и недокументированная. Правовой режим определяется способом фиксации.",
  },
  {
    title: "По источнику",
    description: "Официальная (государственные органы), корпоративная (организации) и частная (физические лица). Каждая имеет свой субъект ответственности.",
  },
];

export default function Featured() {
  return (
    <div id="types" className="min-h-screen px-6 py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-500">Классификация</h3>
          <p className="text-3xl lg:text-5xl text-neutral-900 leading-tight max-w-3xl">
            Виды информации как объекта правового регулирования
          </p>
        </div>

        <div id="properties" className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-200">
          {types.map((item, i) => (
            <div key={i} className="bg-white p-10 flex flex-col gap-4">
              <span className="text-xs text-neutral-400 uppercase tracking-widest">0{i + 1}</span>
              <h4 className="text-xl font-semibold text-neutral-900">{item.title}</h4>
              <p className="text-neutral-600 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 border-t border-neutral-200 pt-16">
          <h3 className="uppercase mb-8 text-sm tracking-wide text-neutral-500">Ключевые свойства информации</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { prop: "Нематериальность", desc: "Не имеет физической формы, существует независимо от носителя" },
              { prop: "Тиражируемость", desc: "Может воспроизводиться без утраты оригинала" },
              { prop: "Системность", desc: "Воспринимается в контексте, обретает смысл в системе знаний" },
              { prop: "Динамичность", desc: "Изменяется во времени, устаревает и обновляется" },
            ].map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h5 className="font-bold text-neutral-900 text-lg">{item.prop}</h5>
                <p className="text-neutral-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
