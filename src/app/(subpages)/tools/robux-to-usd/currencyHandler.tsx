import { ComponentType, useEffect, useState } from "react";

export type CurrencyTypes = {
  currencyName: string;
  icon: ComponentType;
  currencyRate: number;
  currencyTag: string;
};

interface CurrencyMenuProps {
  currencies: CurrencyTypes[];
  setSelectedCurrencyRate: (rate: number) => void; // Add this line
  setSelectedCurrencyName: (currencyName: string) => void;
  setSelectedCurrencyTag: (tag: string) => void;
}

const CurrencyHandler: React.FC<CurrencyMenuProps> = ({
  currencies,
  setSelectedCurrencyRate,
  setSelectedCurrencyName,
  setSelectedCurrencyTag,
}) => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>("");
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [selectedCurrencyIndex, setSelectedCurrencyIndex] = useState<number>(0);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleClick = (index: number) => {
    setSelectedCurrencyIndex(index);
    setSelectedCurrency(currencies[index].currencyName);
    setSelectedCurrencyRate(currencies[index].currencyRate); // Set the currency rate
    setSelectedCurrencyName(currencies[index].currencyName);
    setSelectedCurrencyTag(currencies[index].currencyTag);
  };

  // to display custom Currency default name
  const CurrencyDefault = () => {
    return (
      <div className="flex cursor-pointer gap-1 bg-slate-400/10 p-2 ml-[-8px] rounded-sm">
        Currency ?{" "}
      </div>
    );
  };

  return (
    <div className="relative">
      <div className="flex gap-2" onClick={toggleDropdown}>
        <div
          className={
            selectedCurrency
              ? "flex cursor-pointer gap-1 bg-slate-400/10 p-2 ml-[-8px] rounded-sm"
              : ""
          }
        >
          {selectedCurrency || CurrencyDefault()}
        </div>
      </div>

      {dropdownOpen && (
        <div className="absolute bg-white border rounded shadow-lg mt-2 w-full max-w-[80px] z-50">
          <div className="flex flex-col overflow-y-auto max-h-32">
            {currencies.map((currency, index) => (
              <div
                key={index}
                className={`flex item-center cursor-pointer border text-black bg-white/50 border-gray-100  px-2 py-[4px]`}
                onClick={() => {
                  handleClick(index);
                  setDropdownOpen(false);
                }}
              >
                {selectedCurrencyIndex === index}
                <div className="flex justify-center items-center">
                  {currency.currencyName}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencyHandler;
