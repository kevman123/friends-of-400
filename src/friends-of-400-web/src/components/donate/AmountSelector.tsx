interface AmountSelectorProps {
  amount: number | null;
  onAmountChange: (amount: number | null) => void;
}

const presetAmounts = [25, 50, 100, 250];

export default function AmountSelector({ amount, onAmountChange }: AmountSelectorProps) {
  const isCustom = amount !== null && !presetAmounts.includes(amount);

  return (
    <div>
      <p className="text-sm font-medium text-gray-700 mb-3">Choose an amount to give</p>
      <div className="grid grid-cols-2 gap-3 mb-3">
        {presetAmounts.map((preset) => (
          <button
            key={preset}
            type="button"
            onClick={() => onAmountChange(preset)}
            className={`py-3 px-4 rounded-xl text-lg font-semibold border-2 transition-colors cursor-pointer ${
              amount === preset
                ? 'border-brand-blue bg-brand-blue/10 text-brand-blue'
                : 'border-gray-200 text-gray-700 hover:border-gray-300'
            }`}
          >
            ${preset}
          </button>
        ))}
      </div>
      <div className="relative">
        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">$</span>
        <input
          type="number"
          min="1"
          placeholder="Custom amount"
          value={isCustom ? amount : ''}
          onChange={(e) => {
            const val = e.target.value ? Number(e.target.value) : null;
            onAmountChange(val);
          }}
          className="w-full pl-8 pr-4 py-3 border-2 border-gray-200 rounded-xl text-lg focus:outline-none focus:border-brand-blue"
        />
      </div>
    </div>
  );
}
