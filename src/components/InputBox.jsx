import React, { useId } from 'react';

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable = false,
    className = "",
}) {
    const amountInputId = useId();

    return (
        <div className={`d-flex p-3 rounded bg-white ${className}`} style={{ fontSize: '0.875rem' }}>
            <div className="w-50 pe-3">
                <label htmlFor={amountInputId} className="form-label text-muted mb-2">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="form-control"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-50 text-end">
                <label className="form-label text-muted mb-2">
                    Currency Type
                </label>
                <select
                    className="form-select"
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                    disabled={currencyDisable}
                >
                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default InputBox;
