import * as React from 'react';
export const PhoneNumberInput = () => {
  const [phone, setPhone] = React.useState('');

  const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    const value = e.target.value.trim();
    const onlyDigits = value.replace(/\D/g, '');
    let format = onlyDigits;

    if (format.length > 6) {
      format = `${format.slice(0, 6)}-${format.slice(6)}`;
    }
    if (format.length > 3) {
      format = `(${format.slice(0, 3)})${format.slice(3)}`;
    }
    setPhone(format);
  };

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="(123)456-7890"
        value={phone}
        onChange={handleChange}
        type="tel"
        name="phone"
        maxLength={13}
        required
      ></input>
    </form>
  );
};
